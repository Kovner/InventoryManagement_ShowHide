$(document).ready(function () {
  //Render tableau-ui React components
  ReactDOM.render(
    React.createElement(TableauUI.Button, {buttonType: 'filledGreen'}, "Update"), 
    document.getElementById('updateItem')
  );

  let worksheet;
  const wsName = 'Inventory';    // This is the sheet we'll use for updating task info

  function onSelectionChanged (marksEvent) {
    const sheetName = marksEvent.worksheet.name;
    marksEvent.getMarksAsync().then(function (selectedMarks) {
      handleSelectedMarks(selectedMarks, sheetName, true);
    });
  }

  function handleSelectedMarks (selectedMarks, sheetName, forceChangeSheet) {
    // If we've got selected marks then process them and show our update button
    if (selectedMarks.data[1].totalRowCount > 0) {
      populateTable(selectedMarks.data[1]);
      $('#updateItem').show();
    } else {
      resetTable();
      $('#updateItem').hide();
      let dashboard = tableau.extensions.dashboardContent.dashboard;
      const visibilityMap = {7: tableau.ZoneVisibilityType.Hide};
      dashboard.setZoneVisibilityAsync(visibilityMap);
    }
  }

  tableau.extensions.initializeAsync().then(function () {
    // Initialization succeeded! Get the dashboard's name & log to console
    let dashboard = tableau.extensions.dashboardContent.dashboard;

    // Hard coding for the inv mgmt dashboard that the Extension is the index 7 zone
    const visibilityMap = {7: tableau.ZoneVisibilityType.Hide};
    dashboard.setZoneVisibilityAsync(visibilityMap);

    for (const ws of dashboard.worksheets) {
      if (ws.name === wsName) {
        worksheet = ws;
      }
    }

    // Add mark selection event listener to our sheet
    worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onSelectionChanged);

    console.log('"Extension Initialized. Running in dashboard named ' + dashboard.name);
    console.log('Sheet info: ' + worksheet.name);
  }, function (err) {
    // something went wrong in initialization
    console.log('Error while Initializing: ' + err.toString());
  });

  function resetTable () {
    $('#data_table tr').remove();
    var headerRow = $('<tr/>');
    headerRow.append('<th>Select a product to update</th>');

    $('#data_table').append(headerRow);
  }

  function populateTable (dt) {
    $('#data_table tr').remove();

    let productIndex, stockIndex, orderedIndex, rowIDIndex;

    // get our column indexes
    //stock and ordered seem to be flipped for some reason in the datatable (bug?) so reversing them here.
    for (let c of dt.columns) {
      switch (c.fieldName) {
        case 'Product Name':
          productIndex = c.index;
          break;
        case 'SUM(Stock)':
          orderedIndex = c.index;
          break;
        case 'SUM(Ordered)':
          stockIndex = c.index;
          break;
        case 'RowID':
          rowIDIndex = c.index;
        default:
          break;
      }
    }

    // add our rows for the selected marks
    dt.data.forEach(function (item) {
      const rowID = item[rowIDIndex].formattedValue;
      let dataRow = $('<tr/>');
      dataRow.append('<td><div class="productName">' + item[productIndex].formattedValue + '</div></td>');
      dataRow.append('<td><div class="inputContainer" id="row_' + rowID + '_stock"/></td>');
      dataRow.append('<td><div class="inputContainer" id="row_' + rowID + '_ordered"/></td>');
      $('#data_table').append(dataRow);

      //Render the React Text Inputs
      const stockProps = {
        label: 'Stock',
        style: { width: 140 },
        styleType: 'outline',
        defaultValue: item[stockIndex].formattedValue,
      };
      ReactDOM.render(
        React.createElement(TableauUI.TextField, stockProps),
        document.getElementById('row_' + rowID + '_stock')
      )
      const orderedProps = {
        label: 'Ordered',
        style: { width: 140 },
        styleType: 'outline',
        defaultValue: item[orderedIndex].formattedValue,
      };
      ReactDOM.render(
        React.createElement(TableauUI.TextField, orderedProps),
        document.getElementById('row_' + rowID + '_ordered')
      )
    });
    let dashboard = tableau.extensions.dashboardContent.dashboard;
    const visibilityMap = {7: tableau.ZoneVisibilityType.Show};
    dashboard.setZoneVisibilityAsync(visibilityMap);
  }
});


function submitData() {
  let postData = [];

  let $inputArray = $('.inputContainer');
  for(let inputDiv of $inputArray) {
    let inputData = {};
    inputData['id'] = inputDiv.id;
    let inputText = $(inputDiv).find('input')[0];
    inputData['value'] = inputText.value;
    postData.push(inputData);
  };

  let dashboard = tableau.extensions.dashboardContent.dashboard;
  let worksheet = dashboard.worksheets.find( ws => ws.name === "Inventory");

  // Post it
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8765',
    data: JSON.stringify(postData),
    contentType: 'application/json'
  }).done(
    worksheet.getDataSourcesAsync().then(function (dataSources) {
      dataSources[0].refreshAsync();
    })
  );
  const visibilityMap = {7: tableau.ZoneVisibilityType.Hide};
  dashboard.setZoneVisibilityAsync(visibilityMap);

}
