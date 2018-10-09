window["tableau"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist-extensions/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the shared embedding api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(124));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(125);
__webpack_require__(150);
__export(__webpack_require__(153));
__export(__webpack_require__(154));
__export(__webpack_require__(155));
__export(__webpack_require__(156));
__export(__webpack_require__(157));
__export(__webpack_require__(158));
// These are the exports from the messaging stuff
__export(__webpack_require__(162));
__export(__webpack_require__(44));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 2,
    minor: 0,
    fix: 0
};
// Export the version number of messaging for consumers to use.
// Be very careful making any updates to this contract which break version compatibility.
exports.MESSAGING_VERSION = {
    major: 1,
    minor: 0,
    fix: 0
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(49)('wks');
var uid = __webpack_require__(29);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom error class that extends the default JavaScript Error object.
 * This allows us to provide a field with a specific error code
 * so that developers can more easily programmatically respond
 * to error scenarios.
 */
var TableauError = /** @class */ (function (_super) {
    __extends(TableauError, _super);
    function TableauError(_errorCode, message) {
        var _this = _super.call(this, _errorCode + ": " + message) || this;
        _this._errorCode = _errorCode;
        /*tslint:disable-next-line */
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Error inheritance does not work propertly when compiling to ES5, this is a workaround to force
        // the proto chain to be built correctly.  See the github link above for details.
        Object.setPrototypeOf(_this, TableauError.prototype);
        return _this;
    }
    Object.defineProperty(TableauError.prototype, "errorCode", {
        get: function () {
            return this._errorCode;
        },
        enumerable: true,
        configurable: true
    });
    return TableauError;
}(Error));
exports.TableauError = TableauError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(165);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(45);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(4);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(69);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(15);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(71);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(46);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(166);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(10);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(8);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(177));
__export(__webpack_require__(179));
__export(__webpack_require__(7));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
var ServiceRegistryImpl = /** @class */ (function () {
    function ServiceRegistryImpl() {
        this._services = {};
    }
    ServiceRegistryImpl.prototype.registerService = function (service) {
        this._services[service.serviceName] = service;
    };
    ServiceRegistryImpl.prototype.getService = function (serviceName) {
        if (!this._services.hasOwnProperty(serviceName)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Service not registered: " + serviceName);
        }
        return this._services[serviceName];
    };
    return ServiceRegistryImpl;
}());
/**
 * static class used for getting access to the single instance
 * of the ApiServiceRegistry
 */
var ApiServiceRegistry = /** @class */ (function () {
    // Private to avoid anyone constructing this
    function ApiServiceRegistry() {
    }
    Object.defineProperty(ApiServiceRegistry, "instance", {
        /**
         * Gets the singleton instance of the ServiceRegistry
         */
        get: function () {
            if (!window.__tableauApiServiceRegistry) {
                ApiServiceRegistry.setInstance(new ServiceRegistryImpl());
            }
            if (!window.__tableauApiServiceRegistry) {
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, 'Service registry failed');
            }
            return window.__tableauApiServiceRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method to override the registry instance. Can be used by unit tests
     *
     * @param {ServiceRegistry} serviceRegistry The new registry
     */
    ApiServiceRegistry.setInstance = function (serviceRegistry) {
        window.__tableauApiServiceRegistry = serviceRegistry;
    };
    return ApiServiceRegistry;
}());
exports.ApiServiceRegistry = ApiServiceRegistry;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var Param_1 = __webpack_require__(47);
var TableauError_1 = __webpack_require__(4);
/**
 * This class is used to construct common errors throughout the external
 * projects (api-shared, extensions-api, etc.).  It has some duplication with
 * the ErrorHelpers class in api-core, but is separate due to the need to throw
 * an external TableauError vs. an InternalTableauError.
 */
var ErrorHelpers = /** @class */ (function () {
    function ErrorHelpers() {
    }
    /**
     * Throws with code InternalError.
     *
     * @param apiName name of api that was called.
     */
    ErrorHelpers.apiNotImplemented = function (apiName) {
        return new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, apiName + " API not yet implemented.");
    };
    /**
     * Throws an internal error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyInternalValue = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, argumentValue + " is invalid value for: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is empty string, null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyStringParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined || argumentValue === '') {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Verifies passed value is a valid value for that enum.
     * Throws an InvalidParameter error if the enum value is not valid.
     *
     * String enums are {string : string} dictionaries which are not reverse mappable
     * This is an ugly workaround
     *
     * @param enumValue value to verify
     * @param enumType enum to verify against
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyEnumValue = function (enumValue, enumType) {
        var isValid = false;
        Object.keys(enumType).forEach(function (enumKey) {
            if (enumType[enumKey] === enumValue.toString()) {
                isValid = true;
            }
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, enumValue + " is invalid value for enum: " + enumType);
        }
    };
    /**
     * Verifies the params min and max for applying range filter.
     * Throws with error code InvalidParameter if range is invalid.
     *
     * @param min range min
     * @param max range max
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyRangeParamType = function (min, max) {
        if (!min && !max) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, at least one of min or max is required.');
        }
        if (min && !Param_1.Param.isTypeNumber(min) && !Param_1.Param.isTypeDate(min)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter min.');
        }
        if (max && !Param_1.Param.isTypeNumber(max) && !Param_1.Param.isTypeDate(max)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter max.');
        }
        if (min && max && typeof (min) !== typeof (max)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, parameters min and max should be of the same type.');
        }
    };
    /**
     * Verifies that the zoneId is present in the current dashboard and is Floating.
     * Throws with error code InvalidParameter if either condition is false.
     *
     * @param dashboard current dashboard
     * @param zoneID ZoneId to be validated
     */
    ErrorHelpers.verifyZoneIsValid = function (dashboard, zoneID) {
        var isValid = dashboard.objects.some(function (dashboardObject) {
            return dashboardObject.id === zoneID && dashboardObject.isFloating;
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, "Unexpected invalid param value, Zone Id: " + zoneID + " is either not present or is a fixed zone.");
        }
    };
    return ErrorHelpers;
}());
exports.ErrorHelpers = ErrorHelpers;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(15);
var TableauError_1 = __webpack_require__(4);
/**
 * Each ServceImpl should extend this base class for the sake of
 * proper error handling.  This base handles the conversion
 * from internal errors to external errors that we throw to developers
 */
var ServiceImplBase = /** @class */ (function () {
    function ServiceImplBase(_dispatcher) {
        this._dispatcher = _dispatcher;
    }
    ServiceImplBase.prototype.execute = function (verb, params) {
        return this._dispatcher.execute(verb, params).catch(function (error) {
            // Any internal error that comes from the dispatcher should be converted
            // to an external error using the enum mapper for error codes.
            var internalError = error;
            var externalErrorCode = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.errorCode.convert(internalError.errorCode);
            throw new TableauError_1.TableauError(externalErrorCode, internalError.message);
        });
    };
    return ServiceImplBase;
}());
exports.ServiceImplBase = ServiceImplBase;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var createDesc = __webpack_require__(50);
module.exports = __webpack_require__(18) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(6);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(17);
var ctx = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the extensions api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Export everything from the shared file
__export(__webpack_require__(0));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(70);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the internal-api-contract to the enums used
 * in the external-api-contract, which developers code against.
 */
var InternalToExternalEnumMappings = /** @class */ (function () {
    function InternalToExternalEnumMappings() {
    }
    InternalToExternalEnumMappings.extensionContext = new EnumConverter_1.EnumConverter((_a = {},
        _a[api_internal_contract_js_1.ExtensionContext.Desktop] = SharedApiExternalContract_1.ExtensionContext.Desktop,
        _a[api_internal_contract_js_1.ExtensionContext.Server] = SharedApiExternalContract_1.ExtensionContext.Server,
        _a));
    InternalToExternalEnumMappings.extensionMode = new EnumConverter_1.EnumConverter((_b = {},
        _b[api_internal_contract_js_1.ExtensionMode.Authoring] = SharedApiExternalContract_1.ExtensionMode.Authoring,
        _b[api_internal_contract_js_1.ExtensionMode.Viewing] = SharedApiExternalContract_1.ExtensionMode.Viewing,
        _b));
    InternalToExternalEnumMappings.columnType = new EnumConverter_1.EnumConverter((_c = {},
        _c[api_internal_contract_js_1.ColumnType.Continuous] = SharedApiExternalContract_1.ColumnType.Continuous,
        _c[api_internal_contract_js_1.ColumnType.Discrete] = SharedApiExternalContract_1.ColumnType.Discrete,
        _c));
    InternalToExternalEnumMappings.fieldAggregationType = new EnumConverter_1.EnumConverter((_d = {},
        _d[api_internal_contract_js_1.FieldAggregationType.Attr] = SharedApiExternalContract_1.FieldAggregationType.Attr,
        _d[api_internal_contract_js_1.FieldAggregationType.Avg] = SharedApiExternalContract_1.FieldAggregationType.Avg,
        _d[api_internal_contract_js_1.FieldAggregationType.Count] = SharedApiExternalContract_1.FieldAggregationType.Count,
        _d[api_internal_contract_js_1.FieldAggregationType.Countd] = SharedApiExternalContract_1.FieldAggregationType.Countd,
        _d[api_internal_contract_js_1.FieldAggregationType.Day] = SharedApiExternalContract_1.FieldAggregationType.Day,
        _d[api_internal_contract_js_1.FieldAggregationType.End] = SharedApiExternalContract_1.FieldAggregationType.End,
        _d[api_internal_contract_js_1.FieldAggregationType.Hour] = SharedApiExternalContract_1.FieldAggregationType.Hour,
        _d[api_internal_contract_js_1.FieldAggregationType.InOut] = SharedApiExternalContract_1.FieldAggregationType.InOut,
        _d[api_internal_contract_js_1.FieldAggregationType.Kurtosis] = SharedApiExternalContract_1.FieldAggregationType.Kurtosis,
        _d[api_internal_contract_js_1.FieldAggregationType.Max] = SharedApiExternalContract_1.FieldAggregationType.Max,
        _d[api_internal_contract_js_1.FieldAggregationType.Mdy] = SharedApiExternalContract_1.FieldAggregationType.Mdy,
        _d[api_internal_contract_js_1.FieldAggregationType.Median] = SharedApiExternalContract_1.FieldAggregationType.Median,
        _d[api_internal_contract_js_1.FieldAggregationType.Min] = SharedApiExternalContract_1.FieldAggregationType.Min,
        _d[api_internal_contract_js_1.FieldAggregationType.Minute] = SharedApiExternalContract_1.FieldAggregationType.Minute,
        _d[api_internal_contract_js_1.FieldAggregationType.MonthYear] = SharedApiExternalContract_1.FieldAggregationType.MonthYear,
        _d[api_internal_contract_js_1.FieldAggregationType.None] = SharedApiExternalContract_1.FieldAggregationType.None,
        _d[api_internal_contract_js_1.FieldAggregationType.Qtr] = SharedApiExternalContract_1.FieldAggregationType.Qtr,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart1] = SharedApiExternalContract_1.FieldAggregationType.Quart1,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart3] = SharedApiExternalContract_1.FieldAggregationType.Quart3,
        _d[api_internal_contract_js_1.FieldAggregationType.Second] = SharedApiExternalContract_1.FieldAggregationType.Second,
        _d[api_internal_contract_js_1.FieldAggregationType.Skewness] = SharedApiExternalContract_1.FieldAggregationType.Skewness,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdev] = SharedApiExternalContract_1.FieldAggregationType.Stdev,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdevp] = SharedApiExternalContract_1.FieldAggregationType.Stdevp,
        _d[api_internal_contract_js_1.FieldAggregationType.Sum] = SharedApiExternalContract_1.FieldAggregationType.Sum,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncDay] = SharedApiExternalContract_1.FieldAggregationType.TruncDay,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncHour] = SharedApiExternalContract_1.FieldAggregationType.TruncHour,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMinute] = SharedApiExternalContract_1.FieldAggregationType.TruncMinute,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMonth] = SharedApiExternalContract_1.FieldAggregationType.TruncMonth,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncQtr] = SharedApiExternalContract_1.FieldAggregationType.TruncQtr,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncSecond] = SharedApiExternalContract_1.FieldAggregationType.TruncSecond,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncWeek] = SharedApiExternalContract_1.FieldAggregationType.TruncWeek,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncYear] = SharedApiExternalContract_1.FieldAggregationType.TruncYear,
        _d[api_internal_contract_js_1.FieldAggregationType.User] = SharedApiExternalContract_1.FieldAggregationType.User,
        _d[api_internal_contract_js_1.FieldAggregationType.Var] = SharedApiExternalContract_1.FieldAggregationType.Var,
        _d[api_internal_contract_js_1.FieldAggregationType.Varp] = SharedApiExternalContract_1.FieldAggregationType.Varp,
        _d[api_internal_contract_js_1.FieldAggregationType.Week] = SharedApiExternalContract_1.FieldAggregationType.Week,
        _d[api_internal_contract_js_1.FieldAggregationType.Weekday] = SharedApiExternalContract_1.FieldAggregationType.Weekday,
        _d[api_internal_contract_js_1.FieldAggregationType.Year] = SharedApiExternalContract_1.FieldAggregationType.Year,
        _d));
    InternalToExternalEnumMappings.fieldRoleType = new EnumConverter_1.EnumConverter((_e = {},
        _e[api_internal_contract_js_1.FieldRoleType.Dimension] = SharedApiExternalContract_1.FieldRoleType.Dimension,
        _e[api_internal_contract_js_1.FieldRoleType.Measure] = SharedApiExternalContract_1.FieldRoleType.Measure,
        _e[api_internal_contract_js_1.FieldRoleType.Unknown] = SharedApiExternalContract_1.FieldRoleType.Unknown,
        _e));
    InternalToExternalEnumMappings.sheetType = new EnumConverter_1.EnumConverter((_f = {},
        _f[api_internal_contract_js_1.SheetType.Dashboard] = SharedApiExternalContract_1.SheetType.Dashboard,
        _f[api_internal_contract_js_1.SheetType.Story] = SharedApiExternalContract_1.SheetType.Story,
        _f[api_internal_contract_js_1.SheetType.Worksheet] = SharedApiExternalContract_1.SheetType.Worksheet,
        _f));
    InternalToExternalEnumMappings.dashboardObjectType = new EnumConverter_1.EnumConverter((_g = {},
        _g[api_internal_contract_js_1.DashboardObjectType.Extension] = SharedApiExternalContract_1.DashboardObjectType.Extension,
        _g[api_internal_contract_js_1.DashboardObjectType.Blank] = SharedApiExternalContract_1.DashboardObjectType.Blank,
        _g[api_internal_contract_js_1.DashboardObjectType.Image] = SharedApiExternalContract_1.DashboardObjectType.Image,
        _g[api_internal_contract_js_1.DashboardObjectType.Legend] = SharedApiExternalContract_1.DashboardObjectType.Legend,
        _g[api_internal_contract_js_1.DashboardObjectType.PageFilter] = SharedApiExternalContract_1.DashboardObjectType.PageFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.ParameterControl] = SharedApiExternalContract_1.DashboardObjectType.ParameterControl,
        _g[api_internal_contract_js_1.DashboardObjectType.QuickFilter] = SharedApiExternalContract_1.DashboardObjectType.QuickFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.Text] = SharedApiExternalContract_1.DashboardObjectType.Text,
        _g[api_internal_contract_js_1.DashboardObjectType.Title] = SharedApiExternalContract_1.DashboardObjectType.Title,
        _g[api_internal_contract_js_1.DashboardObjectType.WebPage] = SharedApiExternalContract_1.DashboardObjectType.WebPage,
        _g[api_internal_contract_js_1.DashboardObjectType.Worksheet] = SharedApiExternalContract_1.DashboardObjectType.Worksheet,
        _g));
    InternalToExternalEnumMappings.dataType = new EnumConverter_1.EnumConverter((_h = {},
        _h[api_internal_contract_js_1.DataType.Bool] = SharedApiExternalContract_1.DataType.Bool,
        _h[api_internal_contract_js_1.DataType.Date] = SharedApiExternalContract_1.DataType.Date,
        _h[api_internal_contract_js_1.DataType.DateTime] = SharedApiExternalContract_1.DataType.DateTime,
        _h[api_internal_contract_js_1.DataType.Float] = SharedApiExternalContract_1.DataType.Float,
        _h[api_internal_contract_js_1.DataType.Int] = SharedApiExternalContract_1.DataType.Int,
        _h[api_internal_contract_js_1.DataType.String] = SharedApiExternalContract_1.DataType.String,
        _h));
    InternalToExternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_j = {},
        _j[api_internal_contract_js_1.FilterUpdateType.Add] = SharedApiExternalContract_1.FilterUpdateType.Add,
        _j[api_internal_contract_js_1.FilterUpdateType.All] = SharedApiExternalContract_1.FilterUpdateType.All,
        _j[api_internal_contract_js_1.FilterUpdateType.Remove] = SharedApiExternalContract_1.FilterUpdateType.Remove,
        _j[api_internal_contract_js_1.FilterUpdateType.Replace] = SharedApiExternalContract_1.FilterUpdateType.Replace,
        _j));
    InternalToExternalEnumMappings.allowableValues = new EnumConverter_1.EnumConverter((_k = {},
        _k[api_internal_contract_js_1.DomainRestrictionType.All] = SharedApiExternalContract_1.ParameterValueType.All,
        _k[api_internal_contract_js_1.DomainRestrictionType.List] = SharedApiExternalContract_1.ParameterValueType.List,
        _k[api_internal_contract_js_1.DomainRestrictionType.Range] = SharedApiExternalContract_1.ParameterValueType.Range,
        _k));
    InternalToExternalEnumMappings.dateStepPeriod = new EnumConverter_1.EnumConverter((_l = {},
        _l[api_internal_contract_js_1.DateStepPeriod.Years] = SharedApiExternalContract_1.PeriodType.Years,
        _l[api_internal_contract_js_1.DateStepPeriod.Quarters] = SharedApiExternalContract_1.PeriodType.Quarters,
        _l[api_internal_contract_js_1.DateStepPeriod.Months] = SharedApiExternalContract_1.PeriodType.Months,
        _l[api_internal_contract_js_1.DateStepPeriod.Weeks] = SharedApiExternalContract_1.PeriodType.Weeks,
        _l[api_internal_contract_js_1.DateStepPeriod.Days] = SharedApiExternalContract_1.PeriodType.Days,
        _l[api_internal_contract_js_1.DateStepPeriod.Hours] = SharedApiExternalContract_1.PeriodType.Hours,
        _l[api_internal_contract_js_1.DateStepPeriod.Minutes] = SharedApiExternalContract_1.PeriodType.Minutes,
        _l[api_internal_contract_js_1.DateStepPeriod.Seconds] = SharedApiExternalContract_1.PeriodType.Seconds,
        _l));
    InternalToExternalEnumMappings.dateRangeType = new EnumConverter_1.EnumConverter((_m = {},
        _m[api_internal_contract_js_1.DateRangeType.Current] = SharedApiExternalContract_1.DateRangeType.Current,
        _m[api_internal_contract_js_1.DateRangeType.Last] = SharedApiExternalContract_1.DateRangeType.Last,
        _m[api_internal_contract_js_1.DateRangeType.LastN] = SharedApiExternalContract_1.DateRangeType.LastN,
        _m[api_internal_contract_js_1.DateRangeType.Next] = SharedApiExternalContract_1.DateRangeType.Next,
        _m[api_internal_contract_js_1.DateRangeType.NextN] = SharedApiExternalContract_1.DateRangeType.NextN,
        _m[api_internal_contract_js_1.DateRangeType.ToDate] = SharedApiExternalContract_1.DateRangeType.ToDate,
        _m));
    InternalToExternalEnumMappings.errorCode = new EnumConverter_1.EnumConverter((_o = {},
        _o[api_internal_contract_js_1.ErrorCodes.INITIALIZATION_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.INTERNAL_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_ENUM_MAPPING] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_PARAMETER] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PERMISSION_DENIED] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PRES_MODEL_PARSING_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.UNKNOWN_VERB_ID] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.VERSION_NOT_CONFIGURED] = SharedApiExternalContract_1.ErrorCodes.APINotInitialized,
        _o));
    InternalToExternalEnumMappings.filterType = new EnumConverter_1.EnumConverter((_p = {},
        _p[api_internal_contract_js_1.FilterType.Categorical] = SharedApiExternalContract_1.FilterType.Categorical,
        _p[api_internal_contract_js_1.FilterType.Range] = SharedApiExternalContract_1.FilterType.Range,
        _p[api_internal_contract_js_1.FilterType.RelativeDate] = SharedApiExternalContract_1.FilterType.RelativeDate,
        _p[api_internal_contract_js_1.FilterType.Hierarchical] = SharedApiExternalContract_1.FilterType.Hierarchical,
        _p));
    return InternalToExternalEnumMappings;
}());
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
/* tslint:enable:typedef */


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(11);
var has = __webpack_require__(23);
var SRC = __webpack_require__(29)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(6).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(30)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(84);
var toPrimitive = __webpack_require__(85);
var dP = Object.defineProperty;

exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(91);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(36);
var defined = __webpack_require__(33);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(49)('keys');
var uid = __webpack_require__(29);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(22).f;
var has = __webpack_require__(23);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(43)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum defining the 4 different types of messages we have defined
 */
var MessageType;
(function (MessageType) {
    MessageType["Initialize"] = "initialize";
    MessageType["Notification"] = "notification";
    MessageType["Command"] = "command";
    MessageType["CommandResponse"] = "command-response";
})(MessageType = exports.MessageType || (exports.MessageType = {}));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
/**
 * Class designed to register and unregister handlers from a user. Only those events
 * which are added via AddNewEventType will be supported by this instance
 */
var EventListenerManager = /** @class */ (function () {
    function EventListenerManager() {
        this._eventListenerManagers = {};
    }
    EventListenerManager.prototype.addEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.UnsupportedEventName, "Cannot add event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].addEventListener(handler);
    };
    EventListenerManager.prototype.removeEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.UnsupportedEventName, "Cannot remove event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].removeEventListener(handler);
    };
    EventListenerManager.prototype.addNewEventType = function (eventManager) {
        this._eventListenerManagers[eventManager.eventType] = eventManager;
    };
    return EventListenerManager;
}());
exports.EventListenerManager = EventListenerManager;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class implements the SingleEventManager interface for a single type of Tableau event
 *
 * @template TEventType The Tableau event type this class specializes
 */
var SingleEventManagerImpl = /** @class */ (function () {
    function SingleEventManagerImpl(eventType) {
        this._eventType = eventType;
        this._handlers = [];
    }
    Object.defineProperty(SingleEventManagerImpl.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        enumerable: true,
        configurable: true
    });
    SingleEventManagerImpl.prototype.addEventListener = function (handler) {
        var _this = this;
        this._handlers.push(handler);
        return function () { return _this.removeEventListener(handler); };
    };
    SingleEventManagerImpl.prototype.removeEventListener = function (handler) {
        var beforeCount = this._handlers.length;
        this._handlers = this._handlers.filter(function (h) { return h !== handler; });
        return beforeCount > this._handlers.length;
    };
    SingleEventManagerImpl.prototype.triggerEvent = function (eventGenerator) {
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                var eventModel = eventGenerator();
                handler(eventModel);
            }
            catch (e) {
                // Since this handler could be outside our control, just catch anything it throws and continue on
                continue;
            }
        }
    };
    return SingleEventManagerImpl;
}());
exports.SingleEventManagerImpl = SingleEventManagerImpl;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
var Param = /** @class */ (function () {
    function Param() {
    }
    /**
     * serializes the date into the format that the server expects.
     * @param date the date to serialize
     */
    Param.serializeDateForPlatform = function (date) {
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var sec = date.getUTCSeconds();
        return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + sec;
    };
    Param.serializeBooleanForPlatform = function (bool) {
        return bool ? 'true' : 'false';
    };
    Param.serializeNumberForPlatform = function (num) {
        return num.toString(10);
    };
    /**
     * Verifies the input is a number
     */
    /* tslint:disable:no-any */
    Param.isTypeNumber = function (input) {
        return typeof (input) === 'number' || input instanceof Number;
    };
    /* tslint:enable:no-any */
    /**
     * Verifies the input is a Date
     */
    /* tslint:disable:no-any */
    Param.isTypeDate = function (input) {
        return input instanceof Date;
    };
    /* tslint:enable:no-any */
    /* tslint:disable-next-line:no-any */
    Param.isTypeString = function (input) {
        return typeof (input) === 'string' || input instanceof String;
    };
    /* tslint:disable-next-line:no-any */
    Param.isTypeBool = function (input) {
        return typeof (input) === 'boolean' || input instanceof Boolean;
    };
    /* tslint:disable-next-line:no-any */
    Param.serializeParamterValue = function (value) {
        if (Param.isTypeNumber(value)) {
            return Param.serializeNumberForPlatform(value);
        }
        else if (Param.isTypeDate(value)) {
            return Param.serializeDateForPlatform(value);
        }
        else if (Param.isTypeBool(value)) {
            return Param.serializeBooleanForPlatform(value);
        }
        else if (Param.isTypeString(value)) {
            return value;
        }
        else {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Unexpected invalid value for: " + value);
        }
    };
    return Param;
}());
exports.Param = Param;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataTable = /** @class */ (function () {
    function DataTable(_data, _columns, _totalRowCount, _isTotalRowCountLimited, _isSummaryData, _marksInfo) {
        this._data = _data;
        this._columns = _columns;
        this._totalRowCount = _totalRowCount;
        this._isTotalRowCountLimited = _isTotalRowCountLimited;
        this._isSummaryData = _isSummaryData;
        this._marksInfo = _marksInfo;
        // TODO: get rid of this in redesign.
        this._name = _isSummaryData ? 'Summary Data Table' : 'Underlying Data Table';
    }
    Object.defineProperty(DataTable.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "marksInfo", {
        get: function () {
            return this._marksInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "totalRowCount", {
        get: function () {
            return this._totalRowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isTotalRowCountLimited", {
        get: function () {
            return this._isTotalRowCountLimited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isSummaryData", {
        get: function () {
            return this._isSummaryData;
        },
        enumerable: true,
        configurable: true
    });
    return DataTable;
}());
exports.DataTable = DataTable;
var MarkInfo = /** @class */ (function () {
    function MarkInfo(_type, _color, _tupleId) {
        this._type = _type;
        this._color = _color;
        this._tupleId = _tupleId;
    }
    Object.defineProperty(MarkInfo.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "tupleId", {
        get: function () {
            return this._tupleId;
        },
        enumerable: true,
        configurable: true
    });
    return MarkInfo;
}());
exports.MarkInfo = MarkInfo;
var Column = /** @class */ (function () {
    function Column(_fieldName, _dataType, // TODO: this shoudl be an enum type
        _isReferenced, _index) {
        this._fieldName = _fieldName;
        this._dataType = _dataType;
        this._isReferenced = _isReferenced;
        this._index = _index;
    }
    Object.defineProperty(Column.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "dataType", {
        get: function () {
            return this._dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isReferenced", {
        get: function () {
            return this._isReferenced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}());
exports.Column = Column;
var DataValue = /** @class */ (function () {
    /* tslint:disable:no-any */
    function DataValue(_value, _formattedValue) {
        this._value = _value;
        this._formattedValue = _formattedValue;
    }
    Object.defineProperty(DataValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataValue.prototype, "formattedValue", {
        get: function () {
            return this._formattedValue;
        },
        enumerable: true,
        configurable: true
    });
    return DataValue;
}());
exports.DataValue = DataValue;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(28) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(17);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(88);
var setToStringTag = __webpack_require__(39);
var getPrototypeOf = __webpack_require__(94);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(2)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(104);
var html = __webpack_require__(53);
var cel = __webpack_require__(31);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(16)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(41);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(25);
var core = __webpack_require__(21);
var hide = __webpack_require__(60);
var redefine = __webpack_require__(133);
var ctx = __webpack_require__(134);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(127);
var createDesc = __webpack_require__(132);
module.exports = __webpack_require__(42) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64);
var defined = __webpack_require__(65);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(139);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

(function () {
  var validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

  function gen(count) {
    var out = "";
    for (var i=0; i<count; i++) {
      out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
  }

  function Guid(guid) {
    if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
      
    this.value = Guid.EMPTY;
    
    if (guid && guid instanceof Guid) {
      this.value = guid.toString();

    } else if (guid && Object.prototype.toString.call(guid) === "[object String]" && Guid.isGuid(guid)) {
      this.value = guid;
    }
    
    this.equals = function(other) {
      // Comparing string `value` against provided `guid` will auto-call
      // toString on `guid` for comparison
      return Guid.isGuid(other) && this.value == other;
    };

    this.isEmpty = function() {
      return this.value === Guid.EMPTY;
    };
    
    this.toString = function() {
      return this.value;
    };
    
    this.toJSON = function() {
      return this.value;
    };
  };

  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";

  Guid.isGuid = function(value) {
    return value && (value instanceof Guid || validator.test(value.toString()));
  };

  Guid.create = function() {
    return new Guid([gen(2), gen(1), gen(1), gen(1), gen(3)].join("-"));
  };

  Guid.raw = function() {
    return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
  };

  if(typeof module != 'undefined' && module.exports) {
    module.exports = Guid;
  }
  else if (typeof window != 'undefined') {
    window.Guid = Guid;
  }
})();


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(45);
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet(_sheetImpl) {
        var _this = _super.call(this) || this;
        _this._sheetImpl = _sheetImpl;
        return _this;
    }
    Object.defineProperty(Sheet.prototype, "name", {
        get: function () {
            return this._sheetImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "sheetType", {
        get: function () {
            return this._sheetImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "size", {
        get: function () {
            return this._sheetImpl.size;
        },
        enumerable: true,
        configurable: true
    });
    Sheet.prototype.findParameterAsync = function (parameterName) {
        return this._sheetImpl.findParameterAsync(parameterName, this);
    };
    Sheet.prototype.getParametersAsync = function () {
        return this._sheetImpl.getParametersAsync(this);
    };
    return Sheet;
}(EventListenerManager_1.EventListenerManager));
exports.Sheet = Sheet;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
/**
 * Represents the current version of the extensions library
 */
var VersionNumber = /** @class */ (function () {
    // private constructor so everyone uses the singleton instance
    function VersionNumber(versionString, isAlpha) {
        var parts = versionString.split('.').map(function (p) { return parseInt(p, 10); });
        if (parts.length !== 3) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Invalid version number: " + versionString);
        }
        this.major = parts[0];
        this.minor = parts[1];
        this.fix = parts[2];
        this.isAlpha = isAlpha;
    }
    Object.defineProperty(VersionNumber, "Instance", {
        /**
         * Gets the singleton instance of the version number.
         */
        get: function () {
            return VersionNumber._instance;
        },
        enumerable: true,
        configurable: true
    });
    VersionNumber.SetVersionNumber = function (numString, isAlpha) {
        VersionNumber._instance = new VersionNumber(numString, isAlpha);
    };
    Object.defineProperty(VersionNumber.prototype, "formattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix;
        },
        enumerable: true,
        configurable: true
    });
    return VersionNumber;
}());
exports.VersionNumber = VersionNumber;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
/**
 * This class converts from a source enum value to destination enum
 * value given a mapping from source to destination when constructed.
 *
 * Note: This exact same class is defined in api-core.  Given its small
 * nature, it is not worth having in a separate project to share this between
 * api-core and api-shared.  If more utility functionality is added that is used by api-core
 * and api-shared but has no other dependecies, a utiltity project might be merited,
 * and this class could be moved.
 */
var EnumConverter = /** @class */ (function () {
    function EnumConverter(_mappings, _defaultVal) {
        this._mappings = _mappings;
        this._defaultVal = _defaultVal;
    }
    EnumConverter.prototype.convert = function (enumVal, throwIfMissing) {
        if (this._mappings.hasOwnProperty(enumVal)) {
            return this._mappings[enumVal];
        }
        if (this._defaultVal !== undefined && !throwIfMissing) {
            return this._defaultVal;
        }
        throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Enum Mapping not found for: " + enumVal);
    };
    return EnumConverter;
}());
exports.EnumConverter = EnumConverter;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent = /** @class */ (function () {
    function TableauEvent(type) {
        this._type = type;
    }
    Object.defineProperty(TableauEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return TableauEvent;
}());
exports.TableauEvent = TableauEvent;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var SheetImpl = /** @class */ (function () {
    function SheetImpl(_sheetInfoImpl) {
        this._sheetInfoImpl = _sheetInfoImpl;
    }
    Object.defineProperty(SheetImpl.prototype, "name", {
        get: function () {
            return this._sheetInfoImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetInfoImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetPath", {
        get: function () {
            return this._sheetInfoImpl.sheetPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "size", {
        get: function () {
            return this._sheetInfoImpl.sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    SheetImpl.prototype.findParameterAsync = function (parameterName, sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(parameterName, 'parameterName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByNameAsync(parameterName, sheet);
    };
    SheetImpl.prototype.getParametersAsync = function (sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.getParametersForSheetAsync(this.sheetPath, sheet);
    };
    return SheetImpl;
}());
exports.SheetImpl = SheetImpl;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSource = /** @class */ (function () {
    function DataSource(_dataSourceImpl) {
        this._dataSourceImpl = _dataSourceImpl;
    }
    Object.defineProperty(DataSource.prototype, "name", {
        get: function () {
            return this._dataSourceImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "id", {
        get: function () {
            return this._dataSourceImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "fields", {
        get: function () {
            return this._dataSourceImpl.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceImpl.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "isExtract", {
        get: function () {
            return this._dataSourceImpl.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSource.prototype.refreshAsync = function () {
        return this._dataSourceImpl.refreshAsync();
    };
    DataSource.prototype.getActiveTablesAsync = function () {
        return this._dataSourceImpl.getActiveTablesAsync();
    };
    DataSource.prototype.getConnectionSummariesAsync = function () {
        return this._dataSourceImpl.getConnectionSummariesAsync();
    };
    DataSource.prototype.getUnderlyingDataAsync = function (options) {
        return this._dataSourceImpl.getUnderlyingDataAsync(options);
    };
    return DataSource;
}());
exports.DataSource = DataSource;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(75);
var ConnectionSummary_1 = __webpack_require__(173);
var Field_1 = __webpack_require__(76);
var TableSummary_1 = __webpack_require__(174);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var DataSourceImpl = /** @class */ (function () {
    function DataSourceImpl(_dataSourceInfo) {
        var _this = this;
        this._dataSourceInfo = _dataSourceInfo;
        this._fields = _dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, _this);
            return new Field_1.Field(fieldImpl);
        });
    }
    Object.defineProperty(DataSourceImpl.prototype, "name", {
        get: function () {
            return this._dataSourceInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "id", {
        get: function () {
            return this._dataSourceInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceInfo.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "isExtract", {
        get: function () {
            return this._dataSourceInfo.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceImpl.prototype.refreshAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.refreshAsync(this._dataSourceInfo.id);
    };
    DataSourceImpl.prototype.getConnectionSummariesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getConnectionSummariesAsync(this._dataSourceInfo.id).then(function (summaries) {
            return summaries.map(function (summary) { return new ConnectionSummary_1.ConnectionSummary(summary); });
        });
    };
    DataSourceImpl.prototype.getActiveTablesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getActiveTablesAsync(this._dataSourceInfo.id).then(function (tableInfos) {
            return tableInfos.map(function (tableInfo) { return new TableSummary_1.TableSummary(tableInfo); });
        });
    };
    DataSourceImpl.prototype.getUnderlyingDataAsync = function (options) {
        var getDataService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return getDataService.getDataSourceDataAsync(this.id, !!options.ignoreAliases, options.maxRows || 0, // 0 and [] are defaults
        options.columnsToInclude || []);
    };
    DataSourceImpl.prototype.initializeWithPublicInterfaces = function (dataSource) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dataSource, 'dataSource');
        this._fields = this._dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, dataSource);
            return new Field_1.Field(fieldImpl);
        });
    };
    return DataSourceImpl;
}());
exports.DataSourceImpl = DataSourceImpl;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(15);
var FieldImpl = /** @class */ (function () {
    function FieldImpl(_fieldInfo, _parentDataSource) {
        this._fieldInfo = _fieldInfo;
        this._parentDataSource = _parentDataSource;
    }
    Object.defineProperty(FieldImpl.prototype, "name", {
        get: function () {
            return this._fieldInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "id", {
        get: function () {
            return this._fieldInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "description", {
        get: function () {
            return this._fieldInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "aggregation", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldAggregationType.convert(this._fieldInfo.aggregation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "dataSource", {
        get: function () {
            return this._parentDataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "role", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldRoleType.convert(this._fieldInfo.role);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isHidden", {
        get: function () {
            return this._fieldInfo.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isGenerated", {
        get: function () {
            return this._fieldInfo.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldInfo.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCombinedField", {
        get: function () {
            return this._fieldInfo.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return FieldImpl;
}());
exports.FieldImpl = FieldImpl;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHelpers_1 = __webpack_require__(8);
var Field = /** @class */ (function () {
    function Field(_fieldImpl) {
        this._fieldImpl = _fieldImpl;
    }
    Object.defineProperty(Field.prototype, "name", {
        get: function () {
            return this._fieldImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "id", {
        get: function () {
            return this._fieldImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "description", {
        get: function () {
            return this._fieldImpl.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "aggregation", {
        get: function () {
            return this._fieldImpl.aggregation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "dataSource", {
        get: function () {
            return this._fieldImpl.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "role", {
        get: function () {
            return this._fieldImpl.role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isHidden", {
        get: function () {
            return this._fieldImpl.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isGenerated", {
        get: function () {
            return this._fieldImpl.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldImpl.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "columnType", {
        get: function () {
            throw ErrorHelpers_1.ErrorHelpers.apiNotImplemented('Field.columnType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCombinedField", {
        get: function () {
            return this._fieldImpl.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}());
exports.Field = Field;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauSheetEvent_1 = __webpack_require__(78);
var TableauWorksheetEvent = /** @class */ (function (_super) {
    __extends(TableauWorksheetEvent, _super);
    function TableauWorksheetEvent(type, _worksheet) {
        var _this = _super.call(this, type, _worksheet) || this;
        _this._worksheet = _worksheet;
        return _this;
    }
    Object.defineProperty(TableauWorksheetEvent.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauWorksheetEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.TableauWorksheetEvent = TableauWorksheetEvent;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent_1 = __webpack_require__(71);
var TableauSheetEvent = /** @class */ (function (_super) {
    __extends(TableauSheetEvent, _super);
    function TableauSheetEvent(type, sheet) {
        var _this = _super.call(this, type) || this;
        _this._sheet = sheet;
        return _this;
    }
    Object.defineProperty(TableauSheetEvent.prototype, "sheet", {
        get: function () {
            return this._sheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauSheetEvent;
}(TableauEvent_1.TableauEvent));
exports.TableauSheetEvent = TableauSheetEvent;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines which type of getData call to make.
 */
var GetDataType;
(function (GetDataType) {
    GetDataType["Summary"] = "summary";
    GetDataType["Underlying"] = "underlying";
})(GetDataType = exports.GetDataType || (exports.GetDataType = {}));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EnumConverter_1 = __webpack_require__(70);
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the external-api-contract to the enums used
 * in the internal-api-contract, which developers code against.
 */
var ExternalToInternalEnumMappings = /** @class */ (function () {
    function ExternalToInternalEnumMappings() {
    }
    ExternalToInternalEnumMappings.filterDomainType = new EnumConverter_1.EnumConverter((_a = {},
        _a[SharedApiExternalContract_1.FilterDomainType.Relevant] = api_internal_contract_js_1.FilterDomainType.Relevant,
        _a[SharedApiExternalContract_1.FilterDomainType.Database] = api_internal_contract_js_1.FilterDomainType.Database,
        _a));
    ExternalToInternalEnumMappings.nullOptions = new EnumConverter_1.EnumConverter((_b = {},
        _b[SharedApiExternalContract_1.FilterNullOption.AllValues] = api_internal_contract_js_1.FilterNullOption.AllValues,
        _b[SharedApiExternalContract_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NonNullValues,
        _b[SharedApiExternalContract_1.FilterNullOption.NullValues] = api_internal_contract_js_1.FilterNullOption.NullValues,
        _b));
    ExternalToInternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_c = {},
        _c[SharedApiExternalContract_1.FilterUpdateType.Add] = api_internal_contract_js_1.FilterUpdateType.Add,
        _c[SharedApiExternalContract_1.FilterUpdateType.All] = api_internal_contract_js_1.FilterUpdateType.All,
        _c[SharedApiExternalContract_1.FilterUpdateType.Remove] = api_internal_contract_js_1.FilterUpdateType.Remove,
        _c[SharedApiExternalContract_1.FilterUpdateType.Replace] = api_internal_contract_js_1.FilterUpdateType.Replace,
        _c));
    ExternalToInternalEnumMappings.setVisibilityType = new EnumConverter_1.EnumConverter((_d = {},
        _d[SharedApiExternalContract_1.ZoneVisibilityType.Show] = true,
        _d[SharedApiExternalContract_1.ZoneVisibilityType.Hide] = false,
        _d));
    return ExternalToInternalEnumMappings;
}());
exports.ExternalToInternalEnumMappings = ExternalToInternalEnumMappings;
var _a, _b, _c, _d;
/* tslint:enable:typedef */


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(82);
__webpack_require__(112);
__webpack_require__(118);
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(123);
var Extensions_1 = __webpack_require__(202);
var ApiShared_1 = __webpack_require__(5);
var isAlpha = typeof EXTENSION_VERSION_IS_ALPHA !== 'undefined' ? EXTENSION_VERSION_IS_ALPHA : false;
ApiShared_1.VersionNumber.SetVersionNumber( true ? "1.1.0" : '0.0.0', isAlpha);
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var ExtensionsApiExternalContract_1 = __webpack_require__(14);
exports.ExtensionContext = ExtensionsApiExternalContract_1.ExtensionContext;
exports.ExtensionMode = ExtensionsApiExternalContract_1.ExtensionMode;
exports.AnalyticsObjectType = ExtensionsApiExternalContract_1.AnalyticsObjectType;
exports.ColumnType = ExtensionsApiExternalContract_1.ColumnType;
exports.DashboardObjectType = ExtensionsApiExternalContract_1.DashboardObjectType;
exports.DataType = ExtensionsApiExternalContract_1.DataType;
exports.DateRangeType = ExtensionsApiExternalContract_1.DateRangeType;
exports.EncodingType = ExtensionsApiExternalContract_1.EncodingType;
exports.ErrorCodes = ExtensionsApiExternalContract_1.ErrorCodes;
exports.FieldAggregationType = ExtensionsApiExternalContract_1.FieldAggregationType;
exports.FieldRoleType = ExtensionsApiExternalContract_1.FieldRoleType;
exports.FilterDomainType = ExtensionsApiExternalContract_1.FilterDomainType;
exports.FilterType = ExtensionsApiExternalContract_1.FilterType;
exports.FilterUpdateType = ExtensionsApiExternalContract_1.FilterUpdateType;
exports.FilterNullOption = ExtensionsApiExternalContract_1.FilterNullOption;
exports.MarkType = ExtensionsApiExternalContract_1.MarkType;
exports.ParameterValueType = ExtensionsApiExternalContract_1.ParameterValueType;
exports.PeriodType = ExtensionsApiExternalContract_1.PeriodType;
exports.QuickTableCalcType = ExtensionsApiExternalContract_1.QuickTableCalcType;
exports.SelectionUpdateType = ExtensionsApiExternalContract_1.SelectionUpdateType;
exports.SheetType = ExtensionsApiExternalContract_1.SheetType;
exports.SortDirection = ExtensionsApiExternalContract_1.SortDirection;
exports.TableauEventType = ExtensionsApiExternalContract_1.TableauEventType;
exports.TrendLineModelType = ExtensionsApiExternalContract_1.TrendLineModelType;
exports.ZoneVisibilityType = ExtensionsApiExternalContract_1.ZoneVisibilityType;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
__webpack_require__(86);
__webpack_require__(95);
__webpack_require__(98);
__webpack_require__(110);
__webpack_require__(111);
module.exports = __webpack_require__(6).Promise;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(27);
var test = {};
test[__webpack_require__(2)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(17)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(30)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(87)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(51)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(33);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(89);
var descriptor = __webpack_require__(50);
var setToStringTag = __webpack_require__(39);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(90);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(23);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(92)(false);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(93);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(23);
var toObject = __webpack_require__(40);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(96);
var getKeys = __webpack_require__(34);
var redefine = __webpack_require__(17);
var global = __webpack_require__(3);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(20);
var wks = __webpack_require__(2);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(54);
var step = __webpack_require__(97);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(51)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var global = __webpack_require__(3);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(27);
var $export = __webpack_require__(13);
var isObject = __webpack_require__(12);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(99);
var forOf = __webpack_require__(100);
var speciesConstructor = __webpack_require__(55);
var task = __webpack_require__(56).set;
var microtask = __webpack_require__(105)();
var newPromiseCapabilityModule = __webpack_require__(41);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(106);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(107)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(39)($Promise, PROMISE);
__webpack_require__(108)(PROMISE);
Wrapper = __webpack_require__(6)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(109)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(101);
var isArrayIter = __webpack_require__(102);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(37);
var getIterFn = __webpack_require__(103);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(27);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(56).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(16)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(17);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(18);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(13);
var core = __webpack_require__(6);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(55);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(41);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
module.exports = __webpack_require__(6).Array.find;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(13);
var $find = __webpack_require__(114)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(54)(KEY);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(36);
var toObject = __webpack_require__(40);
var toLength = __webpack_require__(37);
var asc = __webpack_require__(115);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(116);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var isArray = __webpack_require__(117);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(120) });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(121);
var pIE = __webpack_require__(122);
var toObject = __webpack_require__(40);
var IObject = __webpack_require__(36);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(30)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(14);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
var ApiShared_2 = __webpack_require__(5);
var DashboardContent_1 = __webpack_require__(192);
var Environment_1 = __webpack_require__(193);
var Settings_1 = __webpack_require__(194);
var UI_1 = __webpack_require__(195);
var RegisterAllExtensionsServices_1 = __webpack_require__(196);
var SettingsImpl_1 = __webpack_require__(200);
var UIImpl_1 = __webpack_require__(201);
var VersionNumber_1 = __webpack_require__(69);
var ExtensionsImpl = /** @class */ (function () {
    function ExtensionsImpl() {
    }
    ExtensionsImpl.prototype.initializeAsync = function (isExtensionDialog, contextMenuCallbacks) {
        var _this = this;
        var initOptions = { isAlpha: VersionNumber_1.VersionNumber.Instance.isAlpha };
        if (!this._initializationPromise) {
            this._initializationPromise = new Promise(function (resolve, reject) {
                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
                if (api_internal_contract_js_1.InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise()) {
                    // Running in desktop, use this promise
                    var desktopDispatcherPromise = api_internal_contract_js_1.InternalApiDispatcherHolder.getDesktopDispatcherPromise(initOptions);
                    desktopDispatcherPromise.then(function (dipatcherFactory) {
                        return _this.onDispatcherReceived(dipatcherFactory, isExtensionDialog, contextMenuCallbacks);
                    })
                        .then(function (openPayload) {
                        resolve(openPayload);
                    });
                }
                else {
                    // We must be running in server, so we should try to kick of the server dispatcher bootstrapping
                    var onDispatcherReceivedCallback_1 = _this.onDispatcherReceived.bind(_this);
                    ApiShared_1.doCrossFrameBootstrap(window, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION, initOptions).then(function (factory) {
                        return onDispatcherReceivedCallback_1(factory, isExtensionDialog, contextMenuCallbacks);
                    }).then(function (openPayload) { resolve(openPayload); });
                }
            });
        }
        return this._initializationPromise;
    };
    ExtensionsImpl.prototype.onDispatcherReceived = function (dispatcherFactory, isExtensionDialog, contextMenuFunctions) {
        var _this = this;
        var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
        // Call to register all the services which will use the newly initialized dispatcher
        ApiShared_1.registerAllSharedServices(dispatcher);
        RegisterAllExtensionsServices_1.registerAllExtensionsServices(dispatcher);
        // Get the initialization service and initialize this extension
        var initializationService = ApiShared_1.ApiServiceRegistry.instance.getService("InitializationService" /* InitializationService */);
        var callbackMapKeys = (contextMenuFunctions) ? Object.keys(contextMenuFunctions) : [];
        return initializationService.initializeDashboardExtensionsAsync(isExtensionDialog, callbackMapKeys).then(function (result) {
            if (!result.extensionInstance.locator.dashboardPath) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error during initialization.');
            }
            _this.dashboardContent = _this.initializeDashboardContent(result.extensionDashboardInfo, result.extensionInstance.locator.dashboardPath);
            _this.environment = new Environment_1.Environment(result.extensionEnvironment);
            _this.settings = _this.initializeSettings(result.extensionSettingsInfo);
            _this.ui = new UI_1.UI(new UIImpl_1.UIImpl());
            // After initialization has completed, setup listeners for the callback functions that
            // are meant to be triggered whenever a context menu item is clicked.
            _this.initializeContextMenuCallbacks(contextMenuFunctions);
            // In the normal initialization case, this will be an empty string.  When returning from initializeAsync to the
            // developer, we just ingore that string.  In the case of initializing from an extension dialog, this string
            // is an optional payload sent from the parent extension.
            return result.extensionDialogPayload;
        });
    };
    ExtensionsImpl.prototype.initializeDashboardContent = function (info, sheetPath) {
        var dashboardImpl = new ApiShared_1.DashboardImpl(info, sheetPath);
        var dashboard = new ApiShared_1.Dashboard(dashboardImpl);
        return new DashboardContent_1.DashboardContent(dashboard);
    };
    ExtensionsImpl.prototype.initializeSettings = function (settingsInfo) {
        var settingsImpl = new SettingsImpl_1.SettingsImpl(settingsInfo);
        return new Settings_1.Settings(settingsImpl);
    };
    ExtensionsImpl.prototype.initializeContextMenuCallbacks = function (contextMenuFunctions) {
        var notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        // Unregister function not used since these notifications should be
        // observed for the full lifetime of the extension.
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ContextMenuClick, function (model) {
            // Let through any context menu event, these are already filtered on api-core
            // based on the extension locator.
            return true;
        }, function (event) {
            // Execute the function associated with this context menu ID
            if (contextMenuFunctions) {
                if (!contextMenuFunctions[event.id]) {
                    throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, "Received unexpected context menu Id from event: " + event.id);
                }
                contextMenuFunctions[event.id]();
            }
        });
    };
    return ExtensionsImpl;
}());
exports.ExtensionsImpl = ExtensionsImpl;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// All enum values made available to Extensions developers.
// Enums should be kept in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The context in which the Extensions is currently running.
 */
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
/**
 * The mode in which the Extensions is currently running.
 */
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var AnalyticsObjectType;
(function (AnalyticsObjectType) {
    AnalyticsObjectType["Cluster"] = "cluster";
    AnalyticsObjectType["Forecast"] = "forecast";
    AnalyticsObjectType["TrendLine"] = "trend-line";
})(AnalyticsObjectType = exports.AnalyticsObjectType || (exports.AnalyticsObjectType = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
/**
 * What the object represents in a dashboard.
 */
var DashboardObjectType;
(function (DashboardObjectType) {
    DashboardObjectType["Blank"] = "blank";
    DashboardObjectType["Worksheet"] = "worksheet";
    DashboardObjectType["QuickFilter"] = "quick-filter";
    DashboardObjectType["ParameterControl"] = "parameter-control";
    DashboardObjectType["PageFilter"] = "page-filter";
    DashboardObjectType["Legend"] = "legend";
    DashboardObjectType["Title"] = "title";
    DashboardObjectType["Text"] = "text";
    DashboardObjectType["Image"] = "image";
    DashboardObjectType["WebPage"] = "web-page";
    DashboardObjectType["Extension"] = "extension";
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
/**
 * The different types of data a value can have
 */
var DataType;
(function (DataType) {
    DataType["String"] = "string";
    DataType["Int"] = "int";
    DataType["Float"] = "float";
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["DateTime"] = "date-time";
    DataType["Spatial"] = "spatial";
})(DataType = exports.DataType || (exports.DataType = {}));
/**
 * Valid date ranges for a relative date filter.
 */
var DateRangeType;
(function (DateRangeType) {
    DateRangeType["Last"] = "last";
    DateRangeType["LastN"] = "last-n";
    DateRangeType["Next"] = "next";
    DateRangeType["NextN"] = "next-n";
    DateRangeType["Current"] = "current";
    DateRangeType["ToDate"] = "to-date";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType["Column"] = "column";
    EncodingType["Row"] = "row";
    EncodingType["Page"] = "page";
    EncodingType["Filter"] = "filter";
    EncodingType["MarksType"] = "marks-type";
    EncodingType["MeasureValues"] = "measure-values";
    EncodingType["Color"] = "color";
    EncodingType["Size"] = "size";
    EncodingType["Label"] = "label";
    EncodingType["Detail"] = "detail";
    EncodingType["Tooltip"] = "tooltip";
    EncodingType["Shape"] = "shape";
    EncodingType["Path"] = "path";
    EncodingType["Angle"] = "angle";
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
/**
 * All error codes used by the Extensions API.
 */
var ErrorCodes;
(function (ErrorCodes) {
    /**
     * Thrown when caller attempts to execute command before initialization has completed.
     */
    ErrorCodes["APINotInitialized"] = "api-not-initialized";
    /**
     * Only one dialog can be opened at time with the UI namespace functionality.
     */
    ErrorCodes["DialogAlreadyOpen"] = "dialog-already-open";
    /**
     * The open dialog was closed by the user.
     */
    ErrorCodes["DialogClosedByUser"] = "dialog-closed-by-user";
    /**
     * An error occurred within the Tableau Extensions API. Contact Tableau Support.
     */
    ErrorCodes["InternalError"] = "internal-error";
    /**
     * A dialog must start on the same domain as the parent extenion.
     */
    ErrorCodes["InvalidDomainDialog"] = "invalid-dialog-domain";
    /**
     * A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message field.
     */
    ErrorCodes["InvalidParameter"] = "invalid-parameter";
    /**
     * Can occur if the extension interacts with a filter that has been removed from the worksheet.
     */
    ErrorCodes["MissingFilter"] = "missing-filter";
    /**
     * Can occur if the extension interacts with a parameter that has been removed from the worksheet.
     */
    ErrorCodes["MissingParameter"] = "missing-parameter";
    /**
     * Internal Server Error
     */
    ErrorCodes["ServerError"] = "server-error";
    /**
     * Developer cannot save settings while another save is still in progress.
     */
    ErrorCodes["SettingSaveInProgress"] = "setting-save-in-progress";
    /**
     * An unknown event name was specified in the call to Viz.addEventListeneror Viz.removeEventListener.
     */
    ErrorCodes["UnsupportedEventName"] = "unsupported-event-name";
    /**
     * A method was used for a type of datasource that doesn't support that method (see getActiveTablesAsync for an example)
     */
    ErrorCodes["UnsupportedMethodForDataSourceType"] = "unsupported-method-for-data-source-type";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
/**
 *  Type of aggregation on a field.
 */
var FieldAggregationType;
(function (FieldAggregationType) {
    FieldAggregationType["Sum"] = "sum";
    FieldAggregationType["Avg"] = "avg";
    FieldAggregationType["Min"] = "min";
    FieldAggregationType["Max"] = "max";
    FieldAggregationType["Stdev"] = "stdev";
    FieldAggregationType["Stdevp"] = "stdevp";
    FieldAggregationType["Var"] = "var";
    FieldAggregationType["Varp"] = "varp";
    FieldAggregationType["Count"] = "count";
    FieldAggregationType["Countd"] = "countd";
    FieldAggregationType["Median"] = "median";
    FieldAggregationType["Attr"] = "attr";
    FieldAggregationType["None"] = "none";
    FieldAggregationType["Year"] = "year";
    FieldAggregationType["Qtr"] = "qtr";
    FieldAggregationType["Month"] = "month";
    FieldAggregationType["Day"] = "day";
    FieldAggregationType["Hour"] = "hour";
    FieldAggregationType["Minute"] = "minute";
    FieldAggregationType["Second"] = "second";
    FieldAggregationType["Week"] = "week";
    FieldAggregationType["Weekday"] = "weekday";
    FieldAggregationType["MonthYear"] = "month-year";
    FieldAggregationType["Mdy"] = "mdy";
    FieldAggregationType["End"] = "end";
    FieldAggregationType["TruncYear"] = "trunc-year";
    FieldAggregationType["TruncQtr"] = "trunc-qtr";
    FieldAggregationType["TruncMonth"] = "trunc-month";
    FieldAggregationType["TruncWeek"] = "trunc-week";
    FieldAggregationType["TruncDay"] = "trunc-day";
    FieldAggregationType["TruncHour"] = "trunc-hour";
    FieldAggregationType["TruncMinute"] = "trunc-minute";
    FieldAggregationType["TruncSecond"] = "trunc-second";
    FieldAggregationType["Quart1"] = "quart1";
    FieldAggregationType["Quart3"] = "quart3";
    FieldAggregationType["Skewness"] = "skewness";
    FieldAggregationType["Kurtosis"] = "kurtosis";
    FieldAggregationType["InOut"] = "in-out";
    FieldAggregationType["User"] = "user";
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
/**
 * Role of a field.
 */
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 * An enumeration of the valid types of filters that can be applied.
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["Hierarchical"] = "hierarchical";
    FilterType["RelativeDate"] = "relative-date";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * The different update types for applying filter
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
/**
 * The domain type for a filter
 */
var FilterDomainType;
(function (FilterDomainType) {
    /**
     * The domain values that are relevant to the specified filter
     * i.e. the domain is restricted by a previous filter
     */
    FilterDomainType["Relevant"] = "relevant";
    /**
     * list of all possible domain values from database
     */
    FilterDomainType["Database"] = "database";
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * The option for specifying which values to include for filtering
 * Indicates what to do with null values for a given filter or mark selection call.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "null-values";
    FilterNullOption["NonNullValues"] = "non-null-values";
    FilterNullOption["AllValues"] = "all-values";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
/**
 * Type of mark for a given marks card in a viz.
 */
var MarkType;
(function (MarkType) {
    MarkType["Bar"] = "bar";
    MarkType["Line"] = "line";
    MarkType["Area"] = "area";
    MarkType["Square"] = "square";
    MarkType["Circle"] = "circle";
    MarkType["Shape"] = "shape";
    MarkType["Text"] = "text";
    MarkType["Map"] = "map";
    MarkType["Pie"] = "pie";
    MarkType["GanttBar"] = "gantt-bar";
    MarkType["Polygon"] = "polygon";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
/**
 * An enumeration describing the different types of allowable values.
 * This is used for restricting the domain of a parameter
 */
var ParameterValueType;
(function (ParameterValueType) {
    ParameterValueType["All"] = "all";
    ParameterValueType["List"] = "list";
    ParameterValueType["Range"] = "range";
})(ParameterValueType = exports.ParameterValueType || (exports.ParameterValueType = {}));
/**
 * Date period used in filters and in parameters.
 */
var PeriodType;
(function (PeriodType) {
    PeriodType["Years"] = "years";
    PeriodType["Quarters"] = "quarters";
    PeriodType["Months"] = "months";
    PeriodType["Weeks"] = "weeks";
    PeriodType["Days"] = "days";
    PeriodType["Hours"] = "hours";
    PeriodType["Minutes"] = "minutes";
    PeriodType["Seconds"] = "seconds";
})(PeriodType = exports.PeriodType || (exports.PeriodType = {}));
var QuickTableCalcType;
(function (QuickTableCalcType) {
    QuickTableCalcType["RunningTotal"] = "running-total";
    QuickTableCalcType["Difference"] = "difference";
    QuickTableCalcType["PercentDifference"] = "percent-difference";
    QuickTableCalcType["PercentOfTotal"] = "percent-of-total";
    QuickTableCalcType["Rank"] = "rank";
    QuickTableCalcType["Percentile"] = "percentile";
    QuickTableCalcType["MovingAverage"] = "moving-average";
    QuickTableCalcType["YTDTotal"] = "ytd-total";
    QuickTableCalcType["CompoundGrowthRate"] = "compound-growth-rate";
    QuickTableCalcType["YearOverYearGrowth"] = "year-over-year-growth";
    QuickTableCalcType["YTDGrowth"] = "ytd-growth";
    QuickTableCalcType["Undefined"] = "undefined";
})(QuickTableCalcType = exports.QuickTableCalcType || (exports.QuickTableCalcType = {}));
/**
 * Enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * The type of sheet a Sheet object represents
 */
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["Increasing"] = "increasing";
    SortDirection["Decreasing"] = "decreasing";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/**
 * Represents a certain type of event which can be listened for
 */
var TableauEventType;
(function (TableauEventType) {
    /** Raised when any filter has changed state.*/
    TableauEventType["FilterChanged"] = "filter-changed";
    /** The selected marks on a visualization has changed */
    TableauEventType["MarkSelectionChanged"] = "mark-selection-changed";
    /** A parameter has had its value modified */
    TableauEventType["ParameterChanged"] = "parameter-changed";
    /** Settings have been changed for this extension. */
    TableauEventType["SettingsChanged"] = "settings-changed";
})(TableauEventType = exports.TableauEventType || (exports.TableauEventType = {}));
var TrendLineModelType;
(function (TrendLineModelType) {
    TrendLineModelType["Linear"] = "linear";
    TrendLineModelType["Logarithmic"] = "logarithmic";
    TrendLineModelType["Exponential"] = "exponential";
    TrendLineModelType["Polynomial"] = "polynomial";
})(TrendLineModelType = exports.TrendLineModelType || (exports.TrendLineModelType = {}));
/**
 * Enum that represents the visibility state of a zone
 * @since 1.2.0
 */
var ZoneVisibilityType;
(function (ZoneVisibilityType) {
    /** Used for turning on the visibity of a zone in the dashboard.*/
    ZoneVisibilityType["Show"] = "show";
    /** Used for turning off the visibity of a zone in the dashboard.*/
    ZoneVisibilityType["Hide"] = "hide";
})(ZoneVisibilityType = exports.ZoneVisibilityType || (exports.ZoneVisibilityType = {}));


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
module.exports = __webpack_require__(21).Object.assign;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(59);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(136) });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(128);
var IE8_DOM_DEFINE = __webpack_require__(129);
var toPrimitive = __webpack_require__(131);
var dP = Object.defineProperty;

exports.f = __webpack_require__(42) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(42) && !__webpack_require__(43)(function () {
  return Object.defineProperty(__webpack_require__(130)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var document = __webpack_require__(25).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(25);
var hide = __webpack_require__(60);
var has = __webpack_require__(61);
var SRC = __webpack_require__(62)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(21).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(135);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(137);
var gOPS = __webpack_require__(147);
var pIE = __webpack_require__(148);
var toObject = __webpack_require__(149);
var IObject = __webpack_require__(64);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(43)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(138);
var enumBugKeys = __webpack_require__(146);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(61);
var toIObject = __webpack_require__(63);
var arrayIndexOf = __webpack_require__(140)(false);
var IE_PROTO = __webpack_require__(143)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 139 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(63);
var toLength = __webpack_require__(141);
var toAbsoluteIndex = __webpack_require__(142);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(66);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(66);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(144)('keys');
var uid = __webpack_require__(62);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(21);
var global = __webpack_require__(25);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(145) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 147 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(65);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
module.exports = __webpack_require__(21).Number.isInteger;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(59);

$export($export.S, 'Number', { isInteger: __webpack_require__(152) });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(26);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
    ExtensionContext["Unknown"] = "unknown";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
    ExtensionMode["Unknown"] = "unknown";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
var DashboardObjectType;
(function (DashboardObjectType) {
    DashboardObjectType["Blank"] = "blank";
    DashboardObjectType["Worksheet"] = "worksheet";
    DashboardObjectType["QuickFilter"] = "quick-filter";
    DashboardObjectType["ParameterControl"] = "parameter-control";
    DashboardObjectType["PageFilter"] = "page-filter";
    DashboardObjectType["Legend"] = "legend";
    DashboardObjectType["Title"] = "title";
    DashboardObjectType["Text"] = "text";
    DashboardObjectType["Image"] = "image";
    DashboardObjectType["WebPage"] = "web-page";
    DashboardObjectType["Extension"] = "extension";
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
var DataType;
(function (DataType) {
    DataType["String"] = "string";
    DataType["Int"] = "int";
    DataType["Float"] = "float";
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["DateTime"] = "date-time";
    DataType["Spatial"] = "spatial";
})(DataType = exports.DataType || (exports.DataType = {}));
var EncodedDataType;
(function (EncodedDataType) {
    EncodedDataType["Number"] = "number";
    EncodedDataType["String"] = "string";
    EncodedDataType["Date"] = "date";
    EncodedDataType["Boolean"] = "boolean";
})(EncodedDataType = exports.EncodedDataType || (exports.EncodedDataType = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["INITIALIZATION_ERROR"] = "initialization-error";
    ErrorCodes["INTERNAL_ERROR"] = "internal-error";
    ErrorCodes["MISSING_ENUM_MAPPING"] = "missing-enum-mapping";
    ErrorCodes["MISSING_PARAMETER"] = "missing-parameter";
    ErrorCodes["PERMISSION_DENIED"] = "permission-denied";
    ErrorCodes["PRES_MODEL_PARSING_ERROR"] = "pres-model-parsing-error";
    ErrorCodes["VERSION_NOT_CONFIGURED"] = "version-not-configured";
    ErrorCodes["VISIBILITY_ERROR"] = "visibility-error";
    ErrorCodes["UNKNOWN_VERB_ID"] = "unknown-verb-id";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var FieldAggregationType;
(function (FieldAggregationType) {
    FieldAggregationType["Sum"] = "sum";
    FieldAggregationType["Avg"] = "avg";
    FieldAggregationType["Min"] = "min";
    FieldAggregationType["Max"] = "max";
    FieldAggregationType["Stdev"] = "stdev";
    FieldAggregationType["Stdevp"] = "stdevp";
    FieldAggregationType["Var"] = "var";
    FieldAggregationType["Varp"] = "varp";
    FieldAggregationType["Count"] = "count";
    FieldAggregationType["Countd"] = "countd";
    FieldAggregationType["Median"] = "median";
    FieldAggregationType["Attr"] = "attr";
    FieldAggregationType["None"] = "none";
    FieldAggregationType["Year"] = "year";
    FieldAggregationType["Qtr"] = "qtr";
    FieldAggregationType["Month"] = "month";
    FieldAggregationType["Day"] = "day";
    FieldAggregationType["Hour"] = "hour";
    FieldAggregationType["Minute"] = "minute";
    FieldAggregationType["Second"] = "second";
    FieldAggregationType["Week"] = "week";
    FieldAggregationType["Weekday"] = "weekday";
    FieldAggregationType["MonthYear"] = "month-year";
    FieldAggregationType["Mdy"] = "mdy";
    FieldAggregationType["End"] = "end";
    FieldAggregationType["TruncYear"] = "trunc-year";
    FieldAggregationType["TruncQtr"] = "trunc-qtr";
    FieldAggregationType["TruncMonth"] = "trunc-month";
    FieldAggregationType["TruncWeek"] = "trunc-week";
    FieldAggregationType["TruncDay"] = "trunc-day";
    FieldAggregationType["TruncHour"] = "trunc-hour";
    FieldAggregationType["TruncMinute"] = "trunc-minute";
    FieldAggregationType["TruncSecond"] = "trunc-second";
    FieldAggregationType["Quart1"] = "quart1";
    FieldAggregationType["Quart3"] = "quart3";
    FieldAggregationType["Skewness"] = "skewness";
    FieldAggregationType["Kurtosis"] = "kurtosis";
    FieldAggregationType["InOut"] = "in-out";
    FieldAggregationType["User"] = "user";
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 *  The different update types for applying filter.
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var DomainRestrictionType;
(function (DomainRestrictionType) {
    DomainRestrictionType["All"] = "all";
    DomainRestrictionType["List"] = "list";
    DomainRestrictionType["Range"] = "range";
})(DomainRestrictionType = exports.DomainRestrictionType || (exports.DomainRestrictionType = {}));
var DateStepPeriod;
(function (DateStepPeriod) {
    DateStepPeriod["Years"] = "years";
    DateStepPeriod["Quarters"] = "quarters";
    DateStepPeriod["Months"] = "months";
    DateStepPeriod["Weeks"] = "weeks";
    DateStepPeriod["Days"] = "days";
    DateStepPeriod["Hours"] = "hours";
    DateStepPeriod["Minutes"] = "minutes";
    DateStepPeriod["Seconds"] = "seconds";
})(DateStepPeriod = exports.DateStepPeriod || (exports.DateStepPeriod = {}));
/**
 * The option for specifying which values to include for filtering.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "nullvalues";
    FilterNullOption["NonNullValues"] = "nonnullvalues";
    FilterNullOption["AllValues"] = "allvalues";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
/**
 * The type of filter domain
 */
var FilterDomainType;
(function (FilterDomainType) {
    FilterDomainType["Relevant"] = "relevant";
    FilterDomainType["Database"] = "database";
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * Internal enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * Internal enum for specifying the included values type for range selection.
 */
var QuantitativeIncludedValues;
(function (QuantitativeIncludedValues) {
    QuantitativeIncludedValues["IncludeNull"] = "include-null";
    QuantitativeIncludedValues["IncludeNonNull"] = "include-non-null";
    QuantitativeIncludedValues["IncludeAll"] = "include-all";
})(QuantitativeIncludedValues = exports.QuantitativeIncludedValues || (exports.QuantitativeIncludedValues = {}));
/**
 * Type of mark for a given marks card in a viz.
 */
var MarkType;
(function (MarkType) {
    MarkType["Bar"] = "bar";
    MarkType["Line"] = "line";
    MarkType["Area"] = "area";
    MarkType["Square"] = "square";
    MarkType["Circle"] = "circle";
    MarkType["Shape"] = "shape";
    MarkType["Text"] = "text";
    MarkType["Map"] = "map";
    MarkType["Pie"] = "pie";
    MarkType["GanttBar"] = "gantt-bar";
    MarkType["Polygon"] = "polygon";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
/**
 * Internal enum for specifying the type of filter
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["RelativeDate"] = "relativeDate";
    FilterType["Hierarchical"] = "hierarchical";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * Internal enum for specifying the DateRangeType of a relative date filter
 */
var DateRangeType;
(function (DateRangeType) {
    /**
     * Refers to the last day, week, month, etc. of the date period.
     */
    DateRangeType["Last"] = "last";
    /**
     * Refers to the last N days, weeks, months, etc. of the date period.
     */
    DateRangeType["LastN"] = "lastN";
    /**
     * Refers to the next day, week, month, etc. of the date period.
     */
    DateRangeType["Next"] = "next";
    /**
     * Refers to the next N days, weeks, months, etc. of the date period.
     */
    DateRangeType["NextN"] = "nextN";
    /**
     * Refers to the current day, week, month, etc. of the date period.
     */
    DateRangeType["Current"] = "current";
    /**
     * Refers to everything up to and including the current day, week, month, etc. of the date period.
     */
    DateRangeType["ToDate"] = "toDate";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
/**
 * Used to determine if the launching of an extension dialog succeeded or failed.
 */
var ExtensionDialogResult;
(function (ExtensionDialogResult) {
    ExtensionDialogResult["DialogAlreadyOpen"] = "dialog-already-open";
    ExtensionDialogResult["InvalidDomain"] = "invalid-domain";
    ExtensionDialogResult["Success"] = "success";
})(ExtensionDialogResult = exports.ExtensionDialogResult || (exports.ExtensionDialogResult = {}));


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalApiDispatcherHolder;
(function (InternalApiDispatcherHolder) {
    function getDesktopDispatcherPromise(options) {
        if (!options || typeof options.isAlpha === 'undefined') {
            // tslint:disable-next-line:no-console
            console.warn('This is an alpha version of the Extensions API. Please upgrade to an official release.');
        }
        return window.__tableauDesktopDispatcher;
    }
    InternalApiDispatcherHolder.getDesktopDispatcherPromise = getDesktopDispatcherPromise;
    function hasDesktopApiDispatcherPromise() {
        return !!InternalApiDispatcherHolder.getDesktopDispatcherPromise();
    }
    InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise = hasDesktopApiDispatcherPromise;
    function setDesktopDispatcherPromise(dispatcher) {
        window.__tableauDesktopDispatcher = dispatcher;
    }
    InternalApiDispatcherHolder.setDesktopDispatcherPromise = setDesktopDispatcherPromise;
})(InternalApiDispatcherHolder = exports.InternalApiDispatcherHolder || (exports.InternalApiDispatcherHolder = {}));


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationId;
(function (NotificationId) {
    NotificationId["SelectedMarksChanged"] = "selected-marks-changed";
    NotificationId["ParameterChanged"] = "parameter-changed";
    NotificationId["FilterChanged"] = "filter-changed";
    NotificationId["ExtensionDialogUpdate"] = "extension-dialog-update";
    NotificationId["SettingsChanged"] = "settings-changed";
    NotificationId["ContextMenuClick"] = "context-menu-click";
    NotificationId["TestConversionNotification"] = "test-conversion-notification";
})(NotificationId = exports.NotificationId || (exports.NotificationId = {}));


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParameterId;
(function (ParameterId) {
    ParameterId["ExtensionLocator"] = "extension-locator";
    ParameterId["ExtensionBootstrapInfo"] = "extension-bootstrap-info";
    ParameterId["ExtensionSettingsInfo"] = "extension-settings-info";
    ParameterId["VisualId"] = "visual-id";
    ParameterId["SheetPath"] = "sheet-path";
    ParameterId["IgnoreAliases"] = "ignore-aliases";
    ParameterId["IgnoreSelection"] = "ignore-selection";
    ParameterId["IncludeAllColumns"] = "include-all-columns";
    ParameterId["MaxRows"] = "max-rows";
    ParameterId["UnderlyingDataTable"] = "underlying-data-table";
    ParameterId["UnderlyingSummaryDataTable"] = "underlying-summary-data-table";
    ParameterId["DataSourceDataTable"] = "data-source-data-table";
    ParameterId["SettingsValues"] = "settings-values";
    ParameterId["SelectedData"] = "selected-data";
    ParameterId["HighlightedData"] = "highlighted-data";
    // Filter Params
    ParameterId["FieldName"] = "field-name";
    ParameterId["FilterValues"] = "filter-values";
    ParameterId["FilterUpdateType"] = "filter-update-type";
    ParameterId["IsExcludeMode"] = "is-exclude";
    ParameterId["FilterRangeMin"] = "filter-range-min";
    ParameterId["FilterRangeMax"] = "filter-range-max";
    ParameterId["FilterRangeNullOption"] = "filter-range-null-option";
    ParameterId["WorksheetFilters"] = "worksheet-filters";
    ParameterId["FieldId"] = "field-id";
    ParameterId["DomainType"] = "domain-type";
    ParameterId["CategoricalDomain"] = "categorical-domain";
    ParameterId["QuantitativeDomain"] = "quantitative-dmain";
    ParameterId["Field"] = "field";
    ParameterId["WorksheetName"] = "worksheet-name";
    ParameterId["DashboardName"] = "dashboard";
    ParameterId["ParameterInfo"] = "parameter-info";
    ParameterId["ParameterInfos"] = "parameter-infos";
    ParameterId["ParameterCaption"] = "paremeter-caption";
    ParameterId["ParameterFieldName"] = "parameter-field-name";
    ParameterId["ParameterValue"] = "parameter-value";
    ParameterId["Selection"] = "selection";
    ParameterId["SelectionUpdateType"] = "selectionUpdateType";
    ParameterId["HierValSelectionModels"] = "hierarchicalValueSelectionModels";
    ParameterId["QuantRangeSelectionModels"] = "quantativeRangeSelectionModels";
    ParameterId["DimValSelectionModels"] = "dimensionValueSelectionModels";
    ParameterId["ActiveTablesInfo"] = "active-tables-info";
    ParameterId["DataSource"] = "data-source";
    ParameterId["DataSourceId"] = "data-source-id";
    ParameterId["DeltaTimeMs"] = "delta-time-ms";
    ParameterId["ShouldRefreshDS"] = "should-refresh-ds";
    ParameterId["DataSchema"] = "data-schema";
    ParameterId["DataSourceName"] = "data-source-name";
    ParameterId["ColumnsToInclude"] = "columns-to-include";
    ParameterId["JoinDescription"] = "join-description";
    ParameterId["ConnectionDescriptionSummaries"] = "connection-description-summaries";
    ParameterId["ExtensionDialogUrl"] = "extension-dialog-url";
    ParameterId["ExtensionDialogPayload"] = "extension-dialog-payload";
    ParameterId["IsExtensionDialog"] = "is-extension-dialog";
    ParameterId["ExtensionDialogH"] = "extension-dialog-height";
    ParameterId["ExtensionDialogW"] = "extension-dialog-width";
    ParameterId["ExtensionDialogResult"] = "extension-dialog-result";
    ParameterId["ExtensionContextMenuIds"] = "extension-context-menu-ids";
    ParameterId["TestConversionParameter"] = "test-conversion-parameter";
    ParameterId["Dashboard"] = "dashboard";
    ParameterId["ZoneIdsVisibilityMap"] = "zone-ids-visibility-map";
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Declare this key type and export the NotificationId to make this behave like a string enum
var VerbId;
(function (VerbId) {
    VerbId["ApplyCategoricalFilter"] = "categorical-filter";
    VerbId["ApplyRangeFilter"] = "range-filter";
    VerbId["ClearFilter"] = "clear-filter";
    VerbId["InitializeExtension"] = "initialize-extension";
    VerbId["GetDataSummaryData"] = "get-summary-data";
    VerbId["GetUnderlyingData"] = "get-underlying-data";
    VerbId["GetDataSourceData"] = "get-datasource-data";
    VerbId["SaveExtensionSettings"] = "save-extension-settings";
    VerbId["GetSelectedMarks"] = "get-selected-marks";
    VerbId["GetHighlightedMarks"] = "get-highlighted-marks";
    VerbId["GetParametersForSheet"] = "get-parameters-for-sheet";
    VerbId["FindParameter"] = "find-parameter";
    VerbId["ChangeParameterValue"] = "change-parameter-value";
    VerbId["ClearSelectedMarks"] = "clear-selected-marks";
    VerbId["SelectByValue"] = "select-by-value";
    VerbId["GetDataSources"] = "get-data-sources";
    VerbId["RefreshDataSource"] = "refresh-data-source";
    VerbId["GetFilters"] = "get-filters";
    VerbId["GetCategoricalDomain"] = "get-categorical-domain";
    VerbId["GetRangeDomain"] = "get-range-domain";
    VerbId["GetJoinDescription"] = "get-join-description";
    VerbId["GetConnectionDescriptionSummaries"] = "get-connection-description-summaries";
    VerbId["DisplayDialog"] = "display-dialog";
    VerbId["CloseDialog"] = "close-dialog";
    VerbId["TestConversionVerb"] = "test-conversion-verb";
    VerbId["GetField"] = "get-field";
    VerbId["GetDataSource"] = "get-datasource";
    VerbId["GetActiveTables"] = "get-active-tables";
    VerbId["SetZoneVisibility"] = "set-zone-visibility";
})(VerbId = exports.VerbId || (exports.VerbId = {}));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(159);
var IdentityVersionConverter_1 = __webpack_require__(160);
var VersionTranslations_1 = __webpack_require__(161);
// A mapping from the source version of a model -> the next version of the model. Each major
// version bump can have an array of conversions to perform in order
var executeUpgrades = {
    0: []
};
var executeDowngrades = {
    0: [],
    1: [VersionTranslations_1.DowngradeV2WorksheetNames]
};
var notificationDowngrades = {
    0: []
};
/**
 * Creates a new InternalContractVersionConverter which has the ability to upgrade and downgrade the contract between the two versions
 * which are specified. If externalMajorVersion is greater than platformMajorVersion, an error will be thrown because
 * we won't know how to do those conversions.
 *
 * @param externalMajorVersion The version of the internal api which the external module is using
 * @param platformMajorVersion The version of the internal api which the platform is using
 */
function CreateVersionConverter(externalMajorVersion, platformMajorVersion) {
    if (!Number.isInteger(externalMajorVersion) ||
        !Number.isInteger(platformMajorVersion) ||
        externalMajorVersion < 0 ||
        platformMajorVersion < 0) {
        throw new Error("Versions must be positive integers:\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion === platformMajorVersion) {
        // If we are using the exact same versions, just use the identity converter
        return new IdentityVersionConverter_1.IdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteUpgrades = [];
    for (var i = externalMajorVersion; i < platformMajorVersion; i++) {
        if (i in executeUpgrades) {
            neededExecuteUpgrades.push.apply(neededExecuteUpgrades, executeUpgrades[i]);
        }
    }
    // Walk the span between them backwards to get the necessary downgrades
    var neededExecuteDowngrades = [];
    var neededNotificationDowngrades = [];
    for (var i = platformMajorVersion - 1; i >= externalMajorVersion; i--) {
        if (i in executeDowngrades) {
            neededExecuteDowngrades.push.apply(neededExecuteDowngrades, executeDowngrades[i]);
        }
        if (i in notificationDowngrades) {
            neededNotificationDowngrades.push.apply(neededNotificationDowngrades, notificationDowngrades[i]);
        }
    }
    return new StackingVersionConverter_1.StackingVersionConverter(externalMajorVersion, platformMajorVersion, neededExecuteUpgrades, neededExecuteDowngrades, neededNotificationDowngrades);
}
exports.CreateVersionConverter = CreateVersionConverter;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * The version converter is designed to allow the platform and external modules
 * to seemlessly communicate over two different versions of the internal API. The only
 * mode it supports is external's version <= platform's version. When executing
 * commands, it is used to upgrade the external representation to what platform knows on the way in
 * and downgrade the representations on the way out. Similarly for notifications, it can
 * downgrade those on the way from platform to external.
 */
var StackingVersionConverter = /** @class */ (function () {
    /**
     * Creates a new instance of the StackingVersionConverter
     *
     * @param _externalMajorVersion The major version of the internal contract api-external-js is using
     * @param _platformMajorVersion The major version of the internal contract the api-platform-js is using
     * @param _upgradeExecuteTranslations Ordered list of the translations to perform when upgrading cmd parameters
     * @param _downgradeExecuteTranslations Ordered list of downgrade translations to perform after a cmd
     * @param _downgradeNotificationTranslations Ordered list of downgrade translations to perform on a notification
     */
    function StackingVersionConverter(_externalMajorVersion, _platformMajorVersion, _upgradeExecuteTranslations, _downgradeExecuteTranslations, _downgradeNotificationTranslations) {
        this._externalMajorVersion = _externalMajorVersion;
        this._platformMajorVersion = _platformMajorVersion;
        this._upgradeExecuteTranslations = _upgradeExecuteTranslations;
        this._downgradeExecuteTranslations = _downgradeExecuteTranslations;
        this._downgradeNotificationTranslations = _downgradeNotificationTranslations;
        if (this._externalMajorVersion > this._platformMajorVersion) {
            throw new Error("Cannot convert between external version " + this._externalMajorVersion + " and " + this._platformMajorVersion);
        }
    }
    StackingVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        // Perform the upgrade of the verb and parameters to the level that platform is using
        var upgraded = { verb: verb, parameters: parameters };
        for (var _i = 0, _a = this._upgradeExecuteTranslations; _i < _a.length; _i++) {
            var upgradeTranslation = _a[_i];
            upgraded = upgradeTranslation(upgraded.verb, upgraded.parameters);
        }
        return upgraded;
    };
    StackingVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        // Downgrade the response to what the external module is expecting
        var downgraded = executeResponse;
        for (var _i = 0, _a = this._downgradeExecuteTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    StackingVersionConverter.prototype.downgradeNotification = function (notification) {
        // Downgrade the notification to what the external module is expecting
        var downgraded = notification;
        for (var _i = 0, _a = this._downgradeNotificationTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    return StackingVersionConverter;
}());
exports.StackingVersionConverter = StackingVersionConverter;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * This version converter doesn't actually do anything but is useful for testing or when we have
 * a matching platform and internal version number
*/
var IdentityVersionConverter = /** @class */ (function () {
    function IdentityVersionConverter() {
    }
    IdentityVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        return {
            verb: verb,
            parameters: parameters
        };
    };
    IdentityVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        return executeResponse;
    };
    IdentityVersionConverter.prototype.downgradeNotification = function (notification) {
        return notification;
    };
    return IdentityVersionConverter;
}());
exports.IdentityVersionConverter = IdentityVersionConverter;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This is where we will start to define some of these translations.
// When modifying existing models, add the requisite conversion functions here, then use them
// in the VersionConverterFactory implementation. Import old versions as you would any other module
// 0 <-> Translations
// Uncomment this line to import from the V0 definition of the API
// import * as V0 from '@tableau-api-internal-contract-js_v0';
// 1 <-> 2 Translations
// Uncomment this line to import from the V1 definition of the API
// import * as V1 from '@tableau-api-internal-contract-js_v1';
function DowngradeV2WorksheetNames(executeResponse) {
    // Fix the dashboard friendly name issue. The structures are compatible,
    // so we still return the original reply, but we copy the SheetInfo.name
    // into the DashboardZone.name, where v1 wants to find it.
    var bootstrapInfo = executeResponse.result;
    if (bootstrapInfo.extensionDashboardInfo !== undefined) {
        bootstrapInfo.extensionDashboardInfo.zones.forEach(function (zone) {
            if (zone.sheetInfo) {
                zone.name = zone.sheetInfo.name;
            }
        });
    }
    return executeResponse;
}
exports.DowngradeV2WorksheetNames = DowngradeV2WorksheetNames;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(67);
var CrossFramePreparedMessage_1 = __webpack_require__(163);
var MessageTypes_1 = __webpack_require__(44);
var MessageTypeChecks_1 = __webpack_require__(164);
/**
 * The CrossFrameMessenger is the primary export from the api-messaging module. An instance of
 * this class can be instantiated on both sides of a frame boundary to facilitate communication
 * in both directions between the frames. This class implements both the dispatcher and the listener
 * portions, but doesn't require callers to care about both.
 */
var CrossFrameMessenger = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameMessenger. If you would like to use the CrossFrameMessenger as a MessageListener,
     * be sure to call StartListening and register message handlers.
     * @param thisWindow The window object which the CrossFrameMessenger lives. An onMessage listener will be added here.
     * @param [otherWindow] Optional otherWindow which messages will be posted to.
     *                      If defined, incoming messages must originate from otherWindow to be passed on
     * @param [otherWindowOrigin] The target origin which otherWindow must have in order to receive dispatched messages.
     *                            This value will be sent as the targetOrigin of a postMessage
     *                            (https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
     */
    function CrossFrameMessenger(thisWindow, otherWindow, otherWindowOrigin) {
        this.thisWindow = thisWindow;
        this.otherWindow = otherWindow;
        this.otherWindowOrigin = otherWindowOrigin;
        // Make sure to call StartListening
    }
    ///// MessageListener Implementation
    CrossFrameMessenger.prototype.startListening = function () {
        var _this = this;
        // Check if we already are listening, if not, hook up a message listener
        if (!this.unregisterFunction) {
            var boundHandler_1 = this.onMessageReceived.bind(this);
            this.thisWindow.addEventListener('message', boundHandler_1, true);
            this.unregisterFunction = function () { return _this.thisWindow.removeEventListener('message', boundHandler_1, true); };
        }
    };
    CrossFrameMessenger.prototype.stopListening = function () {
        // Stop listening if we have started listening
        if (this.unregisterFunction) {
            this.unregisterFunction();
            this.unregisterFunction = undefined;
        }
    };
    CrossFrameMessenger.prototype.setInitializeMessageHandler = function (handler) {
        this.initializeMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandResponseMessageHandler = function (handler) {
        this.commandResponseMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandMessageHandler = function (handler) {
        this.commandMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setNotificationMessageHandler = function (handler) {
        this.notificationMessageHandler = handler;
    };
    ///// MessageDispatcher Implementation
    /**
     * @param apiVersion api-internal-contract-js version (exported in JsApiInternalConntract)
     * @param crossFrameVersion crossframe messaging version (exported in JsApiInternalConntract)
     * @param options additional options that can be passed at initialization (information about the version of
     *                external being used for example)
     */
    CrossFrameMessenger.prototype.prepareInitializationMessage = function (apiVersion, crossFrameVersion, options) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Initialize,
            crossFrameVersion: crossFrameVersion,
            apiVersion: apiVersion,
            options: options
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandMessage = function (verbId, parameters) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Command,
            verbId: verbId,
            parameters: parameters
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandResponseMessage = function (commandGuid, data, error) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.CommandResponse,
            commandGuid: commandGuid,
            data: data,
            error: error
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareNotificationMessage = function (notificationId, data) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Notification,
            notificationId: notificationId,
            data: data
        };
        return this.prepareMessage(message);
    };
    /**
     * Prepares a pending message for sending and returns the prepared message
     *
     * @param msg The message to be sent to this.otherWindow
     * @returns The prepared message
     */
    CrossFrameMessenger.prototype.prepareMessage = function (msg) {
        if (!this.otherWindow || !this.otherWindowOrigin) {
            throw 'Other window not initialized, cannot dispatch messages';
        }
        var preparedMessage = new CrossFramePreparedMessage_1.CrossFramePreparedMessage(msg, this.otherWindow, this.otherWindowOrigin);
        return preparedMessage;
    };
    /**
     * Called when a message is received. Does some validation of the message, and then
     * calls an appropriate message handler if one is defined
     *
     * @param event The incoming MessageEvent
     */
    CrossFrameMessenger.prototype.onMessageReceived = function (event) {
        // If we have an otherWindow defined, make sure the message is coming from there
        if (this.otherWindow && event.source !== this.otherWindow) {
            return;
        }
        // Do some validation on event.data to make sure that we have received a real message
        if (!event.data) {
            return;
        }
        var message = event.data;
        if (!MessageTypeChecks_1.isMessage(message)) {
            return;
        }
        // Check the declared message type, validate the message, and call an appropriate hander if one exists
        switch (message.msgType) {
            case MessageTypes_1.MessageType.Initialize: {
                if (!MessageTypeChecks_1.isInitMessage(message) || !this.initializeMessageHandler) {
                    return;
                }
                this.initializeMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.CommandResponse: {
                if (!MessageTypeChecks_1.isCommandResponseMessage(message) || !this.commandResponseMessageHandler) {
                    return;
                }
                this.commandResponseMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Command: {
                if (!MessageTypeChecks_1.isCommandMessage(message) || !this.commandMessageHandler) {
                    return;
                }
                this.commandMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Notification: {
                if (!MessageTypeChecks_1.isNotificationMessage(message) || !this.notificationMessageHandler) {
                    return;
                }
                this.notificationMessageHandler(message, event.source);
                break;
            }
            default:
        }
    };
    return CrossFrameMessenger;
}());
exports.CrossFrameMessenger = CrossFrameMessenger;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the PreparedMessage interface used to post messages between
 * two frames using window.postMessage
 */
var CrossFramePreparedMessage = /** @class */ (function () {
    /**
     * Creates an instance of CrossFramePreparedMessage.
     * @param _message The message to be sent
     * @param _target The target window where the message will be sent
     * @param _origin The targetOrigin where this message can be received
     */
    function CrossFramePreparedMessage(_message, _target, _origin) {
        this._message = _message;
        this._target = _target;
        this._origin = _origin;
    }
    Object.defineProperty(CrossFramePreparedMessage.prototype, "messageGuid", {
        get: function () { return this._message.msgGuid; },
        enumerable: true,
        configurable: true
    });
    CrossFramePreparedMessage.prototype.send = function () {
        this._target.postMessage(this._message, this._origin);
        return this;
    };
    return CrossFramePreparedMessage;
}());
exports.CrossFramePreparedMessage = CrossFramePreparedMessage;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(67);
var MessageTypes_1 = __webpack_require__(44);
/* tslint:disable no-any */
function isMessage(data) {
    if (!data) {
        return false;
    }
    var message = data;
    if (!message || !message.msgGuid || !message.msgType) {
        return false;
    }
    if (!guid.isGuid(message.msgGuid)) {
        return false;
    }
    if (typeof message.msgType !== 'string') {
        return false;
    }
    var messageTypes = [MessageTypes_1.MessageType.Command, MessageTypes_1.MessageType.CommandResponse, MessageTypes_1.MessageType.Initialize, MessageTypes_1.MessageType.Notification];
    if (messageTypes.indexOf(message.msgType) < 0) {
        return false;
    }
    return true;
}
exports.isMessage = isMessage;
function isVersion(versionNumber) {
    if (!versionNumber) {
        return false;
    }
    var v = versionNumber;
    if (typeof v !== 'object') {
        return false;
    }
    if (typeof v.fix !== 'number' || typeof v.minor !== 'number' || typeof v.major !== 'number') {
        return false;
    }
    return true;
}
exports.isVersion = isVersion;
function isInitMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var initMessage = message;
    if (initMessage.msgType !== MessageTypes_1.MessageType.Initialize) {
        return false;
    }
    if (!initMessage.apiVersion || !isVersion(initMessage.apiVersion)) {
        return false;
    }
    if (!initMessage.crossFrameVersion || !isVersion(initMessage.crossFrameVersion)) {
        return false;
    }
    return true;
}
exports.isInitMessage = isInitMessage;
function isCommandResponseMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var crMessage = message;
    if (crMessage.msgType !== MessageTypes_1.MessageType.CommandResponse) {
        return false;
    }
    if (!guid.isGuid(crMessage.commandGuid)) {
        return false;
    }
    if (!crMessage.data && !crMessage.error) {
        return false;
    }
    return true;
}
exports.isCommandResponseMessage = isCommandResponseMessage;
function isCommandMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var commandMessage = message;
    if (commandMessage.msgType !== MessageTypes_1.MessageType.Command) {
        return false;
    }
    if (!commandMessage.parameters || typeof commandMessage.parameters !== 'object') {
        return false;
    }
    if (!commandMessage.verbId || typeof commandMessage.verbId !== 'string') {
        return false;
    }
    return true;
}
exports.isCommandMessage = isCommandMessage;
function isNotificationMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var notificationMessage = message;
    if (notificationMessage.msgType !== MessageTypes_1.MessageType.Notification) {
        return false;
    }
    if (!notificationMessage.data) {
        return false;
    }
    if (!notificationMessage.notificationId || typeof notificationMessage.notificationId !== 'string') {
        return false;
    }
    return true;
}
exports.isNotificationMessage = isNotificationMessage;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(68);
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(_dashboardImpl) {
        var _this = _super.call(this, _dashboardImpl) || this;
        _this._dashboardImpl = _dashboardImpl;
        _dashboardImpl.initializeWithPublicInterfaces(_this);
        return _this;
    }
    Object.defineProperty(Dashboard.prototype, "worksheets", {
        get: function () {
            return this._dashboardImpl.worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "objects", {
        get: function () {
            return this._dashboardImpl.objects;
        },
        enumerable: true,
        configurable: true
    });
    Dashboard.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        return this._dashboardImpl.setZoneVisibilityAsync(zoneVisibilityMap);
    };
    return Dashboard;
}(Sheet_1.Sheet));
exports.Dashboard = Dashboard;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var DashboardObject_1 = __webpack_require__(167);
var api_internal_contract_js_1 = __webpack_require__(1);
var ErrorHelpers_1 = __webpack_require__(8);
var InternalToExternalEnumMappings_1 = __webpack_require__(15);
var Point_1 = __webpack_require__(168);
var SheetImpl_1 = __webpack_require__(72);
var SheetInfoImpl_1 = __webpack_require__(169);
var Size_1 = __webpack_require__(170);
var Worksheet_1 = __webpack_require__(171);
var WorksheetImpl_1 = __webpack_require__(172);
var DashboardImpl = /** @class */ (function (_super) {
    __extends(DashboardImpl, _super);
    function DashboardImpl(_info, _sheetPath) {
        var _this = _super.call(this, new SheetInfoImpl_1.SheetInfoImpl(_info.name, Contract.SheetType.Dashboard, new Size_1.Size(_info.size.h, _info.size.w))) || this;
        _this._info = _info;
        _this._sheetPath = _sheetPath;
        return _this;
    }
    Object.defineProperty(DashboardImpl.prototype, "worksheets", {
        get: function () {
            return this._worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardImpl.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: true,
        configurable: true
    });
    DashboardImpl.prototype.initializeWithPublicInterfaces = function (dashboard) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dashboard, 'dashboard');
        this._worksheets = new Array();
        this._objects = new Array();
        // Process all the zones which are contained in this dashboard
        for (var _i = 0, _a = this._info.zones; _i < _a.length; _i++) {
            var zone = _a[_i];
            var worksheet = undefined;
            var zoneSize = new Size_1.Size(zone.height, zone.width);
            if (zone.zoneType === api_internal_contract_js_1.DashboardObjectType.Worksheet) {
                // zone.sheetInfo was not initialized prior to internal-contract 1.6.0
                var worksheetName = zone.sheetInfo ? zone.sheetInfo.name : zone.name;
                var sheetInfo = new SheetInfoImpl_1.SheetInfoImpl(worksheetName, Contract.SheetType.Worksheet, zoneSize);
                var vizId = {
                    worksheet: worksheetName,
                    dashboard: this._info.name,
                    storyboard: this._sheetPath.storyboard,
                    flipboardZoneID: this._sheetPath.flipboardZoneID,
                    storyPointID: this._sheetPath.storyPointID
                };
                var worksheetImpl = new WorksheetImpl_1.WorksheetImpl(sheetInfo, vizId, dashboard);
                worksheet = new Worksheet_1.Worksheet(worksheetImpl);
                this._worksheets.push(worksheet);
            }
            var zonePoint = new Point_1.Point(zone.x, zone.y);
            var dashboardObject = new DashboardObject_1.DashboardObject(dashboard, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dashboardObjectType.convert(zone.zoneType), zonePoint, zoneSize, worksheet, zone.name, zone.isFloating || false, // before 1.6.0 we didn't have isFloating, so we assume false
            zone.isVisible || true, // before 1.6.0 we didn't have isVisible, so we assume true
            zone.zoneId);
            this._objects.push(dashboardObject);
        }
    };
    DashboardImpl.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        var _this = this;
        Object.keys(zoneVisibilityMap).forEach(function (key) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(zoneVisibilityMap[key], Contract.ZoneVisibilityType);
            ErrorHelpers_1.ErrorHelpers.verifyZoneIsValid(_this, Number.parseInt(key));
        });
        var zoneVisibilityService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("zone-visibility" /* ZoneVisibility */);
        return zoneVisibilityService.setVisibilityAsync(/*Dashboard Name*/ this.name, zoneVisibilityMap);
    };
    return DashboardImpl;
}(SheetImpl_1.SheetImpl));
exports.DashboardImpl = DashboardImpl;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the dashboard objects - the zones in a dashboard.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var DashboardObject = /** @class */ (function () {
    function DashboardObject(_dashboard, _type, _position, _size, _worksheet, _name, _isFloating, _isVisible, _id) {
        this._dashboard = _dashboard;
        this._type = _type;
        this._position = _position;
        this._size = _size;
        this._worksheet = _worksheet;
        this._name = _name;
        this._isFloating = _isFloating;
        this._isVisible = _isVisible;
        this._id = _id;
    }
    Object.defineProperty(DashboardObject.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "isFloating", {
        get: function () {
            return this._isFloating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardObject;
}());
exports.DashboardObject = DashboardObject;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var SheetInfoImpl = /** @class */ (function () {
    function SheetInfoImpl(_name, _sheetType, _sheetSize) {
        this._name = _name;
        this._sheetType = _sheetType;
        this._sheetSize = _sheetSize;
    }
    Object.defineProperty(SheetInfoImpl.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetSize", {
        get: function () {
            return this._sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetPath", {
        get: function () {
            return {
                sheetName: this.name,
                isDashboard: this.sheetType === SharedApiExternalContract_1.SheetType.Dashboard
                // TODO - Stories
            };
        },
        enumerable: true,
        configurable: true
    });
    return SheetInfoImpl;
}());
exports.SheetInfoImpl = SheetInfoImpl;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size = /** @class */ (function () {
    function Size(_height, _width) {
        this._height = _height;
        this._width = _width;
    }
    Object.defineProperty(Size.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    return Size;
}());
exports.Size = Size;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(68);
var Worksheet = /** @class */ (function (_super) {
    __extends(Worksheet, _super);
    function Worksheet(_worksheetImpl) {
        var _this = _super.call(this, _worksheetImpl) || this;
        _this._worksheetImpl = _worksheetImpl;
        // Call to initialize events and then call down to the event listener manager to handle things
        _this._worksheetImpl.initializeEvents(_this).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Worksheet.prototype, "parentDashboard", {
        get: function () {
            return this._worksheetImpl.parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    Worksheet.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        return this._worksheetImpl.applyFilterAsync(fieldName, values, updateType, options);
    };
    Worksheet.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        return this._worksheetImpl.applyRangeFilterAsync(fieldName, filterOptions);
    };
    Worksheet.prototype.clearFilterAsync = function (fieldName) {
        return this._worksheetImpl.clearFilterAsync(fieldName);
    };
    Worksheet.prototype.getDataSourcesAsync = function () {
        return this._worksheetImpl.getDataSourcesAsync();
    };
    Worksheet.prototype.getFiltersAsync = function () {
        return this._worksheetImpl.getFiltersAsync();
    };
    Worksheet.prototype.getSelectedMarksAsync = function () {
        return this._worksheetImpl.getSelectedMarksAsync();
    };
    Worksheet.prototype.getHighlightedMarksAsync = function () {
        return this._worksheetImpl.getHighlightedMarksAsync();
    };
    Worksheet.prototype.getSummaryDataAsync = function (options) {
        return this._worksheetImpl.getSummaryDataAsync(options);
    };
    Worksheet.prototype.getUnderlyingDataAsync = function (options) {
        return this._worksheetImpl.getUnderlyingDataAsync(options);
    };
    Worksheet.prototype.clearSelectedMarksAsync = function () {
        return this._worksheetImpl.clearSelectedMarksAsync();
    };
    Worksheet.prototype.selectMarksByIDAsync = function (marksInfo, updateType) {
        return this._worksheetImpl.selectMarksByIdAsync(marksInfo, updateType);
    };
    Worksheet.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByValueAsync(selections, selectionUpdateType);
    };
    Worksheet.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByIdAsync(selections, selectionUpdateType);
    };
    return Worksheet;
}(Sheet_1.Sheet));
exports.Worksheet = Worksheet;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DataSource_1 = __webpack_require__(73);
var DataSourceImpl_1 = __webpack_require__(74);
var SheetImpl_1 = __webpack_require__(72);
var SingleEventManagerImpl_1 = __webpack_require__(46);
var FilterChangedEvent_1 = __webpack_require__(175);
var MarksSelectedEvent_1 = __webpack_require__(176);
var GetDataService_1 = __webpack_require__(79);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var visualIdsAreEqual = function (a, b) {
    return a && b &&
        a.worksheet === b.worksheet &&
        a.dashboard === b.dashboard &&
        a.storyboard === b.storyboard &&
        a.storyPointID === b.storyPointID &&
        a.flipboardZoneID === b.flipboardZoneID;
};
var WorksheetImpl = /** @class */ (function (_super) {
    __extends(WorksheetImpl, _super);
    function WorksheetImpl(sheetInfoImpl, _visualId, _parentDashboard) {
        var _this = _super.call(this, sheetInfoImpl) || this;
        _this._visualId = _visualId;
        _this._parentDashboard = _parentDashboard;
        return _this;
    }
    Object.defineProperty(WorksheetImpl.prototype, "parentDashboard", {
        get: function () {
            return this._parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param {Worksheet} worksheet The worksheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    WorksheetImpl.prototype.initializeEvents = function (worksheet) {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var marksEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.MarkSelectionChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SelectedMarksChanged, function (model) {
            var visualId = model;
            return visualIdsAreEqual(visualId, _this.visualId);
        }, function (viz) {
            marksEvent.triggerEvent(function () { return new MarksSelectedEvent_1.MarksSelectedEvent(worksheet); });
        });
        var filterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.FilterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.FilterChanged, function (model) {
            var filterEventResponse = model;
            return _this.visualId.worksheet === filterEventResponse.visualId.worksheet;
        }, function (event) {
            filterEvent.triggerEvent(function () { return new FilterChangedEvent_1.FilterChangedEvent(worksheet, event.fieldName); });
        });
        results.push(marksEvent);
        results.push(filterEvent);
        // TODO - other event types
        return results;
    };
    Object.defineProperty(WorksheetImpl.prototype, "visualId", {
        get: function () {
            return this._visualId;
        },
        enumerable: true,
        configurable: true
    });
    WorksheetImpl.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(updateType, Contract.FilterUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyFilterAsync(this.visualId, fieldName, values, updateType, options);
    };
    WorksheetImpl.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(filterOptions, 'filterOptions');
        if (filterOptions.nullOption) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(filterOptions.nullOption, Contract.FilterNullOption);
        }
        else {
            ErrorHelpers_1.ErrorHelpers.verifyRangeParamType(filterOptions.min, filterOptions.max);
        }
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyRangeFilterAsync(this.visualId, fieldName, filterOptions);
    };
    WorksheetImpl.prototype.clearFilterAsync = function (fieldName) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.clearFilterAsync(this.visualId, fieldName);
    };
    WorksheetImpl.prototype.getDataSourcesAsync = function () {
        var _this = this;
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getDataSourcesAsync(this.visualId).then(function (result) {
            var dataSchema = result;
            var worksheetDataSourceInfo = dataSchema.worksheetDataSchemaMap[_this.name];
            var dataSources = [];
            // First, add the primary datasource.  By convention, it comes first in the returned array.
            var primaryId = worksheetDataSourceInfo.primaryDataSource;
            dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[primaryId]));
            // Then, loop through any secondary data sources and add them.
            for (var _i = 0, _a = worksheetDataSourceInfo.referencedDataSourceList; _i < _a.length; _i++) {
                var secondaryId = _a[_i];
                if (secondaryId !== primaryId) {
                    dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[secondaryId]));
                }
            }
            return dataSources;
        });
    };
    WorksheetImpl.prototype.getFiltersAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getFiltersAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getHighlightedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getHighlightedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSummaryDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Summary, !!options.ignoreAliases, !!options.ignoreSelection, true, 0);
    };
    WorksheetImpl.prototype.getUnderlyingDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Underlying, !!options.ignoreAliases, !!options.ignoreSelection, !!options.includeAllColumns, options.maxRows || 0);
    };
    WorksheetImpl.prototype.clearSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.clearSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Contract.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByValueAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Contract.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByIdAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.createDataSourceFromInfo = function (dataSourceInfo) {
        var dataSourceImpl = new DataSourceImpl_1.DataSourceImpl(dataSourceInfo);
        var dataSource = new DataSource_1.DataSource(dataSourceImpl);
        dataSourceImpl.initializeWithPublicInterfaces(dataSource);
        return dataSource;
    };
    return WorksheetImpl;
}(SheetImpl_1.SheetImpl));
exports.WorksheetImpl = WorksheetImpl;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a connection summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var ConnectionSummary = /** @class */ (function () {
    function ConnectionSummary(_connectionInfo) {
        this._connectionInfo = _connectionInfo;
    }
    Object.defineProperty(ConnectionSummary.prototype, "name", {
        get: function () {
            return this._connectionInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "id", {
        get: function () {
            return this._connectionInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "serverURI", {
        get: function () {
            return this._connectionInfo.serverURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "type", {
        get: function () {
            return this._connectionInfo.type;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionSummary;
}());
exports.ConnectionSummary = ConnectionSummary;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a table summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var TableSummary = /** @class */ (function () {
    function TableSummary(_tableInfo) {
        this._tableInfo = _tableInfo;
    }
    Object.defineProperty(TableSummary.prototype, "name", {
        get: function () {
            return this._tableInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "id", {
        get: function () {
            return this._tableInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "connectionId", {
        get: function () {
            return this._tableInfo.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "customSQL", {
        get: function () {
            return this._tableInfo.customSQL;
        },
        enumerable: true,
        configurable: true
    });
    return TableSummary;
}());
exports.TableSummary = TableSummary;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
var TableauWorksheetEvent_1 = __webpack_require__(77);
var FilterChangedEvent = /** @class */ (function (_super) {
    __extends(FilterChangedEvent, _super);
    function FilterChangedEvent(worksheet, _fieldName) {
        var _this = _super.call(this, Contract.TableauEventType.FilterChanged, worksheet) || this;
        _this._fieldName = _fieldName;
        return _this;
    }
    Object.defineProperty(FilterChangedEvent.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    FilterChangedEvent.prototype.getFilterAsync = function () {
        var _this = this;
        return this._worksheet.getFiltersAsync().then(function (filters) {
            // TODO: Filtering of the filters should eventually be done platform side.
            var eventedFilter = filters.find(function (filter) { return (filter.fieldName === _this._fieldName); });
            if (!eventedFilter) {
                // We shouldn't hit this unless the filter was removed from the worksheet
                // after the event was raised.
                throw new TableauError_1.TableauError(Contract.ErrorCodes.MissingFilter, "cannot find filter: " + _this._fieldName);
            }
            return eventedFilter;
        });
    };
    return FilterChangedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.FilterChangedEvent = FilterChangedEvent;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauWorksheetEvent_1 = __webpack_require__(77);
var MarksSelectedEvent = /** @class */ (function (_super) {
    __extends(MarksSelectedEvent, _super);
    function MarksSelectedEvent(worksheet) {
        return _super.call(this, Contract.TableauEventType.MarkSelectionChanged, worksheet) || this;
    }
    MarksSelectedEvent.prototype.getMarksAsync = function () {
        return this.worksheet.getSelectedMarksAsync();
    };
    return MarksSelectedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.MarksSelectedEvent = MarksSelectedEvent;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(178);
// Checks to see if we are running in an iframe currently: https://stackoverflow.com/a/326076/8821153
function inIframe(thisWindow) {
    try {
        return thisWindow.self !== thisWindow.parent;
    }
    catch (e) {
        return true;
    }
}
/**
 * Attempts to bootstrap the extension with a cross-frame parent where Tableau is running
 *
 * @param thisWindow The window which we are running in (injected for unit testing purposes)
 * @param internalContractVersion The version number of the internal contract we are using
 * @returns A promise which is doing the actual bootstrapping
 */
function doCrossFrameBootstrap(thisWindow, internalContractVersion, options) {
    return new Promise(function (resolve, reject) {
        var parent;
        // Normally, we are running inside an iframe.  The exception to this is
        // when we are running as an extension inside a dialog as part of the UINamespace
        // functionality.  In that case, we want the opener of this window rather than the parent.
        if (!inIframe(thisWindow)) {
            parent = thisWindow.opener;
        }
        else {
            parent = thisWindow.parent;
        }
        if (!parent) {
            reject('This extension is not running inside an iframe, desktop, or popup window. Initialization failed.');
        }
        // Create the messenger which will do he communication between this window and our parent
        // Since we don't know where we are running yet, we have to make this initial origin '*'. Once
        // we have successfully initialized our extension, we will limit where we send messages
        var messenger = new api_internal_contract_js_1.CrossFrameMessenger(thisWindow, parent, '*');
        // Prepare to send an initialization message to the parent frame
        var initializationMessage = messenger.prepareInitializationMessage(internalContractVersion, api_internal_contract_js_1.MESSAGING_VERSION, options);
        // When we receive a response back from the parent, we check to make sure the guids match and then we know
        // that the parent is aware of us and we can start communicating
        messenger.setCommandResponseMessageHandler(function (msg) {
            // Verify we are getting a response from our initialize message
            if (msg.commandGuid === initializationMessage.messageGuid) {
                // For server, the versioning of the factory is gonna happen on the other side of our frame, so just return the
                // one which doesn't have any version knowledge
                var dispatcherFactory = function () { return new CrossFrameDispatcher_1.CrossFrameDispatcher(messenger); };
                resolve(dispatcherFactory);
            }
        });
        // Now that our handlers are ready, start listening and send our initialization message
        messenger.startListening();
        initializationMessage.send();
    });
}
exports.doCrossFrameBootstrap = doCrossFrameBootstrap;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is an implementation of the InternalApiDispatcher interface which functions by passing messages
 * across a frame boundary. This is usually between the code where our javscript library has been included
 * by a 3rd party dev and another frame where Tableau server has content.
 */
var CrossFrameDispatcher = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameDispatcher which will use the given messenger to communicate
     * @param _messenger an instantiated and listening messenger object
     */
    function CrossFrameDispatcher(_messenger) {
        this._messenger = _messenger;
        // Collection of pending promises which are waiting to be resolved. When we receive a response back from the other frame,
        // these promises can be either resolved or rejected
        this._pendingPromises = {};
        // The collection of notification handlers which have been registered with this dispatcher
        this._notificationHandlers = [];
        if (!this._messenger) {
            throw 'Missing messenger object';
        }
        // Set up our message handlers. We only care about incoming notifications and command responses
        this._messenger.setCommandResponseMessageHandler(this.onCommandResponse.bind(this));
        this._messenger.setNotificationMessageHandler(this.onNotification.bind(this));
    }
    ////// Start InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.execute = function (verb, parameters) {
        var _this = this;
        // To execute a verb, we first prepare a command message and then define a promise.
        var preparedMessage = this._messenger.prepareCommandMessage(verb, parameters);
        var promise = new Promise(function (resolve, reject) {
            // Save off the pending promise by the messageGuid we are about to send. When a response is
            // received, we'll be able to resolve this promise with the result
            _this._pendingPromises[preparedMessage.messageGuid] = { resolve: resolve, reject: reject };
        });
        // Actually send the message and return the promise
        preparedMessage.send();
        return promise;
    };
    CrossFrameDispatcher.prototype.registerNotificationHandler = function (handler) {
        this._notificationHandlers.push(handler);
    };
    CrossFrameDispatcher.prototype.unregisterNotificationHandler = function (handler) {
        this._notificationHandlers = this._notificationHandlers.filter(function (h) { return h !== handler; });
    };
    ////// End InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.onCommandResponse = function (response) {
        // We got a command response, look through the pending promises and resolve
        if (Object.keys(this._pendingPromises).indexOf(response.commandGuid) < 0) {
            return; // We don't have any reference to this command, just return
        }
        var pendingPromise = this._pendingPromises[response.commandGuid];
        // If we have an error defined, reject the promise
        if (response.error) {
            pendingPromise.reject(response.error);
        }
        // If we have data defined, resolve the promise
        if (response.data) {
            pendingPromise.resolve({ result: response.data });
        }
        // Clean up our pending promises object
        delete this._pendingPromises[response.commandGuid];
    };
    CrossFrameDispatcher.prototype.onNotification = function (notificationMessage) {
        // Go through each notification handler we have registered and let them know a notification came in
        for (var _i = 0, _a = this._notificationHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                handler({ notificationId: notificationMessage.notificationId, data: notificationMessage.data });
            }
            catch (e) {
                // Ignore this. Wrap in try/catch so if one handler errors, the other still get the message
            }
        }
    };
    return CrossFrameDispatcher;
}());
exports.CrossFrameDispatcher = CrossFrameDispatcher;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(7);
var DataSourceServiceImpl_1 = __webpack_require__(180);
var FilterServiceImpl_1 = __webpack_require__(181);
var GetDataServiceImpl_1 = __webpack_require__(183);
var NotificationServiceImpl_1 = __webpack_require__(184);
var ParametersServiceImpl_1 = __webpack_require__(185);
var SelectionServiceImpl_1 = __webpack_require__(189);
var ZoneVisibilityServiceImpl_1 = __webpack_require__(191);
function registerAllSharedServices(dispatcher) {
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new DataSourceServiceImpl_1.DataSourceServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new FilterServiceImpl_1.FilterServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new NotificationServiceImpl_1.NotificationServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ParametersServiceImpl_1.ParametersServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new SelectionServiceImpl_1.SelectionServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ZoneVisibilityServiceImpl_1.ZoneVisibilityServiceImpl(dispatcher));
}
exports.registerAllSharedServices = registerAllSharedServices;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(10);
var TableauError_1 = __webpack_require__(4);
var Field_1 = __webpack_require__(76);
var FieldImpl_1 = __webpack_require__(75);
var DataSource_1 = __webpack_require__(73);
var DataSourceImpl_1 = __webpack_require__(74);
var DataSourceServiceImpl = /** @class */ (function (_super) {
    __extends(DataSourceServiceImpl, _super);
    function DataSourceServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataSourceServiceImpl.prototype, "serviceName", {
        get: function () {
            return "data-source-service" /* DataSourceService */;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceServiceImpl.prototype.refreshAsync = function (dataSourceId) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.DeltaTimeMs] = 0,
            _a[api_internal_contract_js_1.ParameterId.ShouldRefreshDS] = true,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.RefreshDataSource, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getActiveTablesAsync = function (dataSourceId) {
        var joinParameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetActiveTables, joinParameters).then(function (joinResponse) {
            var tableInfos = joinResponse.result;
            // getActiveTables is unsupported for cubes and GA. We do not have a connection type property
            // available from the platform (intentionally, to reduce code churn as new connections are added).
            // Instead,just check if any tables are returned. This array will be empty for any non-table based datasource.
            if (tableInfos.tables.length === 0) {
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
            }
            return tableInfos.tables;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getDataSourcesAsync = function (visualId) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSources, parameters).then(function (response) {
            var dataSchema = response.result;
            return dataSchema;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getConnectionSummariesAsync = function (dataSourceId) {
        var params = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetConnectionDescriptionSummaries, params).then(function (response) {
            var descriptionSummaries = response.result;
            return descriptionSummaries;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getFieldAsync = function (fieldId) {
        var _this = this;
        var fieldIdComponents = this.parseFieldId(fieldId);
        var dataSourceId = fieldIdComponents[1];
        var fieldName = fieldIdComponents[2];
        var verb = api_internal_contract_js_1.VerbId.GetDataSource;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId;
        return this.execute(verb, parameters).then(function (response) {
            var dataSource = response.result;
            var field = dataSource.fields.find(function (f) {
                return f.name === fieldName;
            });
            return _this.convertField(field, _this.convertDataSource(dataSource));
        });
    };
    DataSourceServiceImpl.prototype.convertField = function (field, dataSource) {
        return new Field_1.Field(new FieldImpl_1.FieldImpl(field, dataSource));
    };
    DataSourceServiceImpl.prototype.convertDataSource = function (dataSource) {
        return new DataSource_1.DataSource(new DataSourceImpl_1.DataSourceImpl(dataSource));
    };
    DataSourceServiceImpl.prototype.parseFieldId = function (fieldId) {
        // we can expect exec to return a match to the entire field id at element 0, the datasource id at element 1
        // and the field name at element 2. Field id format is [dataSoucreId].[fieldName]
        return /^\[(.+)\]\.\[(.+)\]$/.exec(fieldId);
    };
    return DataSourceServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.DataSourceServiceImpl = DataSourceServiceImpl;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ExternalToInternalEnumMappings_1 = __webpack_require__(80);
var InternalToExternalEnumMappings_1 = __webpack_require__(15);
var FilterModels_1 = __webpack_require__(182);
var ServiceImplBase_1 = __webpack_require__(10);
var GetDataModels_1 = __webpack_require__(48);
var Param_1 = __webpack_require__(47);
var FilterServiceImpl = /** @class */ (function (_super) {
    __extends(FilterServiceImpl, _super);
    function FilterServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterServiceImpl.prototype, "serviceName", {
        get: function () {
            return "filter-service" /* Filter */;
        },
        enumerable: true,
        configurable: true
    });
    FilterServiceImpl.prototype.applyFilterAsync = function (visualId, fieldName, values, updateType, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyCategoricalFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        parameters[api_internal_contract_js_1.ParameterId.FilterValues] = values;
        parameters[api_internal_contract_js_1.ParameterId.FilterUpdateType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterUpdateType.convert(updateType);
        parameters[api_internal_contract_js_1.ParameterId.IsExcludeMode] =
            (filterOptions === undefined || filterOptions.isExcludeMode === undefined) ? false : filterOptions.isExcludeMode;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.applyRangeFilterAsync = function (visualId, fieldName, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyRangeFilter;
        var parameters = {};
        // if special option is specified, min and max are not needed
        if (filterOptions.nullOption) {
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeNullOption] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.nullOptions.convert(filterOptions.nullOption);
        }
        else {
            if (filterOptions.min) {
                var min = void 0;
                if (filterOptions.min instanceof Date) {
                    min = Param_1.Param.serializeDateForPlatform(filterOptions.min);
                }
                else {
                    min = filterOptions.min;
                }
                parameters[api_internal_contract_js_1.ParameterId.FilterRangeMin] = min;
            }
            if (filterOptions.max) {
                var max = void 0;
                if (filterOptions.max instanceof Date) {
                    max = Param_1.Param.serializeDateForPlatform(filterOptions.max);
                }
                else {
                    max = filterOptions.max;
                }
                parameters[api_internal_contract_js_1.ParameterId.FilterRangeMax] = max;
            }
        }
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.clearFilterAsync = function (visualId, fieldName) {
        var verb = api_internal_contract_js_1.VerbId.ClearFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        return this.execute(verb, parameters).then(function (resposne) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.getFiltersAsync = function (visualId) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetFilters;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            var filters = response.result;
            return _this.convertDomainFilters(filters);
        });
    };
    FilterServiceImpl.prototype.getCategoricalDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetCategoricalDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertCategoricalDomain(domain, domainType);
        });
    };
    FilterServiceImpl.prototype.getRangeDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetRangeDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertRangeDomain(domain, domainType);
        });
    };
    // Helper Methods
    FilterServiceImpl.prototype.convertDomainFilters = function (domainFilters) {
        var _this = this;
        var filters = [];
        domainFilters.forEach(function (domainFilter) {
            switch (domainFilter.filterType) {
                case api_internal_contract_js_1.FilterType.Categorical: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertCategoricalFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Categorical Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.Range: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRangeFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Range Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.RelativeDate: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRelativeDateFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Relative Date Filter');
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        });
        return filters;
    };
    FilterServiceImpl.prototype.convertCategoricalFilter = function (domainFilter) {
        var appliedValues = domainFilter.values.map(function (dv) {
            return new GetDataModels_1.DataValue(dv.value, dv.formattedValue);
        });
        return new FilterModels_1.CategoricalFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.Categorical, appliedValues, domainFilter.isExclude);
    };
    FilterServiceImpl.prototype.convertRangeFilter = function (domainFilter) {
        var minValue = new GetDataModels_1.DataValue(domainFilter.min.value, domainFilter.min.formattedValue);
        var maxValue = new GetDataModels_1.DataValue(domainFilter.max.value, domainFilter.max.formattedValue);
        return new FilterModels_1.RangeFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.Range, minValue, maxValue, domainFilter.includeNullValues);
    };
    FilterServiceImpl.prototype.convertRelativeDateFilter = function (domainFilter) {
        var anchorDateValue = new GetDataModels_1.DataValue(domainFilter.anchorDate.value, domainFilter.anchorDate.formattedValue);
        return new FilterModels_1.RelativeDateFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.RelativeDate, anchorDateValue, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(domainFilter.periodType), InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateRangeType.convert(domainFilter.rangeType), domainFilter.rangeN);
    };
    FilterServiceImpl.prototype.convertCategoricalDomain = function (domain, domainType) {
        var values = domain.values.map(function (domainDv) {
            return new GetDataModels_1.DataValue(domainDv.value, domainDv.formattedValue);
        });
        return new FilterModels_1.CategoricalDomain(values, domainType);
    };
    FilterServiceImpl.prototype.convertRangeDomain = function (domain, domainType) {
        var min = new GetDataModels_1.DataValue(domain.min.value, domain.min.formattedValue);
        var max = new GetDataModels_1.DataValue(domain.max.value, domain.max.formattedValue);
        return new FilterModels_1.RangeDomain(min, max, domainType);
    };
    return FilterServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.FilterServiceImpl = FilterServiceImpl;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var Filter = /** @class */ (function () {
    function Filter(_worksheetName, _fieldName, _filterType, _fieldId) {
        this._worksheetName = _worksheetName;
        this._fieldName = _fieldName;
        this._filterType = _filterType;
        this._fieldId = _fieldId;
    }
    Object.defineProperty(Filter.prototype, "worksheetName", {
        get: function () {
            return this._worksheetName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldId", {
        get: function () {
            return this._fieldId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "filterType", {
        get: function () {
            return this._filterType;
        },
        enumerable: true,
        configurable: true
    });
    Filter.prototype.getFieldAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getFieldAsync(this._fieldId);
    };
    return Filter;
}());
exports.Filter = Filter;
var CategoricalFilter = /** @class */ (function (_super) {
    __extends(CategoricalFilter, _super);
    function CategoricalFilter(worksheetName, fieldName, fieldId, filterType, _appliedValues, _isExcludeMode) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._appliedValues = _appliedValues;
        _this._isExcludeMode = _isExcludeMode;
        return _this;
    }
    Object.defineProperty(CategoricalFilter.prototype, "appliedValues", {
        get: function () {
            return this._appliedValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalFilter.prototype, "isExcludeMode", {
        get: function () {
            return this._isExcludeMode;
        },
        enumerable: true,
        configurable: true
    });
    CategoricalFilter.prototype.getDomainAsync = function (domainType) {
        if (!domainType) {
            domainType = Contract.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Contract.FilterDomainType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getCategoricalDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return CategoricalFilter;
}(Filter));
exports.CategoricalFilter = CategoricalFilter;
var RangeFilter = /** @class */ (function (_super) {
    __extends(RangeFilter, _super);
    function RangeFilter(worksheetName, fieldName, fieldId, filterType, _min, _max, _includeNullValues) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._min = _min;
        _this._max = _max;
        _this._includeNullValues = _includeNullValues;
        return _this;
    }
    Object.defineProperty(RangeFilter.prototype, "minValue", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "maxValue", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "includeNullValues", {
        get: function () {
            return this._includeNullValues;
        },
        enumerable: true,
        configurable: true
    });
    RangeFilter.prototype.getDomainAsync = function (domainType) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        if (!domainType) {
            domainType = Contract.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Contract.FilterDomainType);
        return service.getRangeDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return RangeFilter;
}(Filter));
exports.RangeFilter = RangeFilter;
var RelativeDateFilter = /** @class */ (function (_super) {
    __extends(RelativeDateFilter, _super);
    function RelativeDateFilter(worksheetName, fieldName, fieldId, filterType, _anchorDate, _periodType, _rangeType, _rangeN) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._anchorDate = _anchorDate;
        _this._periodType = _periodType;
        _this._rangeType = _rangeType;
        _this._rangeN = _rangeN;
        return _this;
    }
    Object.defineProperty(RelativeDateFilter.prototype, "anchorDate", {
        get: function () {
            return this._anchorDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "periodType", {
        get: function () {
            return this._periodType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeType", {
        get: function () {
            return this._rangeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeN", {
        get: function () {
            return this._rangeN;
        },
        enumerable: true,
        configurable: true
    });
    return RelativeDateFilter;
}(Filter));
exports.RelativeDateFilter = RelativeDateFilter;
var CategoricalDomain = /** @class */ (function () {
    function CategoricalDomain(_values, _domainType) {
        this._values = _values;
        this._domainType = _domainType;
    }
    Object.defineProperty(CategoricalDomain.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    return CategoricalDomain;
}());
exports.CategoricalDomain = CategoricalDomain;
var RangeDomain = /** @class */ (function () {
    function RangeDomain(_min, _max, _domainType) {
        this._min = _min;
        this._max = _max;
        this._domainType = _domainType;
    }
    Object.defineProperty(RangeDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    return RangeDomain;
}());
exports.RangeDomain = RangeDomain;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(10);
var GetDataModels_1 = __webpack_require__(48);
var GetDataService_1 = __webpack_require__(79);
var GetDataServiceImpl = /** @class */ (function (_super) {
    __extends(GetDataServiceImpl, _super);
    function GetDataServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetDataServiceImpl.prototype, "serviceName", {
        get: function () {
            return "get-data-service" /* GetData */;
        },
        enumerable: true,
        configurable: true
    });
    GetDataServiceImpl.prototype.getMaxRowLimit = function () {
        return 10000;
    };
    GetDataServiceImpl.prototype.getLimitedMaxRows = function (requestedRows) {
        var rowCountLimit = this.getMaxRowLimit() + 1;
        return (requestedRows > 0 && requestedRows < rowCountLimit) ? requestedRows : rowCountLimit;
    };
    GetDataServiceImpl.prototype.getUnderlyingDataAsync = function (visualId, getType, ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
        var _this = this;
        // Create all of our parameters
        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_js_1.VerbId.GetDataSummaryData : api_internal_contract_js_1.VerbId.GetUnderlyingData;
        var requestMaxRows = verb === api_internal_contract_js_1.VerbId.GetUnderlyingData ? this.getLimitedMaxRows(maxRows) : maxRows;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreSelection] = ignoreSelection;
        parameters[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = includeAllColumns;
        parameters[api_internal_contract_js_1.ParameterId.MaxRows] = requestMaxRows;
        return this.execute(verb, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, responseData.isSummary);
        });
    };
    GetDataServiceImpl.prototype.getSelectedMarksAsync = function (visualId) {
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetSelectedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
        var _a;
    };
    GetDataServiceImpl.prototype.getHighlightedMarksAsync = function (visualId) {
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetHighlightedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
        var _a;
    };
    GetDataServiceImpl.prototype.getDataSourceDataAsync = function (dataSourceId, ignoreAliases, maxRows, columnsToInclude) {
        var _this = this;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = this.getLimitedMaxRows(maxRows),
            _a[api_internal_contract_js_1.ParameterId.ColumnsToInclude] = columnsToInclude,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSourceData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
        var _a;
    };
    GetDataServiceImpl.prototype.processResultsTable = function (responseData, isSummary) {
        var headers = responseData.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, h.dataType, h.isReferenced, h.index); });
        // TODO This should be controlled by a flag indicating whether this api will respond marks info or not
        var marks;
        if (responseData.marks) {
            marks = responseData.marks.map(function (h) { return new GetDataModels_1.MarkInfo(h.type, h.color, h.tupleId); });
        }
        // Limit+1 is our sentinal that underlying data contains more rows than user is allowed to fetch.
        // Remove the last element so we always return MaxRowLimit
        var isTotalRowCountLimited = isSummary === false && responseData.dataTable.length === this.getMaxRowLimit() + 1;
        if (isTotalRowCountLimited) {
            responseData.dataTable.length -= 1;
        }
        var table = responseData.dataTable.map(function (row) {
            return row.map(function (cell) {
                return new GetDataModels_1.DataValue(cell.value, cell.formattedValue);
            });
        });
        if (marks) {
            return new GetDataModels_1.DataTable(table, headers, table.length, isTotalRowCountLimited, isSummary, marks);
        }
        return new GetDataModels_1.DataTable(table, headers, table.length, isTotalRowCountLimited, isSummary);
    };
    return GetDataServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registration = /** @class */ (function () {
    function Registration(_filterFn, _callbackFn) {
        this._filterFn = _filterFn;
        this._callbackFn = _callbackFn;
        // Nothing Here
    }
    Registration.prototype.onNotification = function (notificationModel) {
        if (this._filterFn(notificationModel)) {
            this._callbackFn(notificationModel);
        }
    };
    return Registration;
}());
var NotificationServiceImpl = /** @class */ (function () {
    function NotificationServiceImpl(dispatcher) {
        this.dispatcher = dispatcher;
        this._handlers = {};
        this.dispatcher.registerNotificationHandler(this.onNotification.bind(this));
    }
    Object.defineProperty(NotificationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "notification-service" /* Notification */;
        },
        enumerable: true,
        configurable: true
    });
    NotificationServiceImpl.prototype.registerHandler = function (id, filterFn, handler) {
        var _this = this;
        var handlers = this._handlers[id] || new Array();
        var registration = new Registration(filterFn, handler);
        handlers.push(registration);
        this._handlers[id] = handlers;
        return function () { return _this.removeRegistration(id, registration); };
    };
    NotificationServiceImpl.prototype.hasHandlersForNotificationType = function (id) {
        return this._handlers.hasOwnProperty(id);
    };
    NotificationServiceImpl.prototype.onNotification = function (notification) {
        if (!this.hasHandlersForNotificationType(notification.notificationId)) {
            return;
        }
        // Go through and check for all the handlers of this particular notification
        this._handlers[notification.notificationId].forEach(function (h) { return h.onNotification(notification.data); });
    };
    NotificationServiceImpl.prototype.removeRegistration = function (id, registration) {
        if (!this.hasHandlersForNotificationType(id)) {
            return;
        }
        this._handlers[id] = this._handlers[id].filter(function (reg) { return reg !== registration; });
    };
    return NotificationServiceImpl;
}());
exports.NotificationServiceImpl = NotificationServiceImpl;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(10);
var ParameterImpl_1 = __webpack_require__(186);
var Parameter_1 = __webpack_require__(188);
var TableauError_1 = __webpack_require__(4);
var ParametersServiceImpl = /** @class */ (function (_super) {
    __extends(ParametersServiceImpl, _super);
    function ParametersServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ParametersServiceImpl.prototype, "serviceName", {
        get: function () {
            return "parameters-service" /* Parameters */;
        },
        enumerable: true,
        configurable: true
    });
    ParametersServiceImpl.prototype.getParametersForSheetAsync = function (sheetPath, sheet) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.SheetPath] = sheetPath,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetParametersForSheet, parameters).then(function (response) {
            // TODO - Check for error
            var result = response.result;
            return result.map(function (parameterInfo) {
                var impl = new ParameterImpl_1.ParameterImpl(parameterInfo);
                return new Parameter_1.Parameter(impl, sheet);
            });
        });
        var _a;
    };
    ParametersServiceImpl.prototype.changeParameterValueAsync = function (fieldName, newValue) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName,
            _a[api_internal_contract_js_1.ParameterId.ParameterValue] = newValue,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.ChangeParameterValue, parameters).then(function (response) {
            var result = response.result;
            return result;
        });
        var _a;
    };
    ParametersServiceImpl.prototype.findParameterByNameAsync = function (name, sheet) {
        return this.findParameterAsync(sheet, name, undefined);
    };
    ParametersServiceImpl.prototype.findParameterByGlobalFieldNameAsync = function (fieldName, sheet) {
        return this.findParameterAsync(sheet, undefined, fieldName);
    };
    ParametersServiceImpl.prototype.findParameterAsync = function (sheet, name, fieldName) {
        var parameters = {};
        if (name !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterCaption] = name;
        }
        else if (fieldName !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName;
        }
        else {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'name or fieldName must be provided to find parameter');
        }
        return this.execute(api_internal_contract_js_1.VerbId.FindParameter, parameters).then(function (response) {
            var instanceOfParameterInfo = function (object) {
                return 'fieldName' in object;
            };
            // We need to check to see if we got a valid response back again
            if (instanceOfParameterInfo(response.result)) {
                var result = response.result;
                var impl = new ParameterImpl_1.ParameterImpl(result);
                return new Parameter_1.Parameter(impl, sheet);
            }
            else {
                return undefined;
            }
        });
    };
    return ParametersServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ParametersServiceImpl = ParametersServiceImpl;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(15);
var ParameterChangedEvent_1 = __webpack_require__(187);
var GetDataModels_1 = __webpack_require__(48);
var ServiceRegistry_1 = __webpack_require__(7);
var SingleEventManagerImpl_1 = __webpack_require__(46);
var ErrorHelpers_1 = __webpack_require__(8);
var Param_1 = __webpack_require__(47);
var ParameterImpl = /** @class */ (function () {
    function ParameterImpl(parameterInfo) {
        this.setParameterInfo(parameterInfo);
    }
    Object.defineProperty(ParameterImpl.prototype, "name", {
        get: function () {
            return this._parameterInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "currentValue", {
        get: function () {
            return new GetDataModels_1.DataValue(this._parameterInfo.currentValue.value, this._parameterInfo.currentValue.formattedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "dataType", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dataType.convert(this._parameterInfo.dataType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "id", {
        get: function () {
            return this._globalFieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "allowableValues", {
        get: function () {
            return this._allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    ParameterImpl.prototype.changeValueAsync = function (newValue) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyParameter(newValue, 'newValue');
        var coercedValue = Param_1.Param.serializeParamterValue(newValue);
        var parametersService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return parametersService.changeParameterValueAsync(this._globalFieldName, coercedValue).then(function (parameterInfo) {
            _this.setParameterInfo(parameterInfo);
            return _this.currentValue;
        });
    };
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param sheet The sheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    ParameterImpl.prototype.initializeEvents = function (sheet) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(sheet, 'sheet');
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var parameterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.ParameterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ParameterChanged, function (model) {
            var fieldName = model;
            return fieldName === _this._globalFieldName;
        }, function (fieldName) {
            parameterEvent.triggerEvent(function () { return new ParameterChangedEvent_1.ParameterChangedEvent(fieldName, sheet); });
        });
        results.push(parameterEvent);
        return results;
    };
    ParameterImpl.prototype.setParameterInfo = function (parameterInfo) {
        this._parameterInfo = parameterInfo;
        this._globalFieldName = parameterInfo.fieldName;
        var type = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.allowableValues.convert(parameterInfo.allowableValuesType);
        var listValues;
        var minValue;
        var maxValue;
        var stepSize;
        var dateStepPeriod;
        if (type === Contract.ParameterValueType.List) {
            var values = parameterInfo.allowableValues || [];
            listValues = values.map(function (val) { return new GetDataModels_1.DataValue(val.value, val.formattedValue); });
        }
        else if (type === Contract.ParameterValueType.Range) {
            minValue = parameterInfo.minValue && new GetDataModels_1.DataValue(parameterInfo.minValue.value, parameterInfo.minValue.formattedValue);
            maxValue = parameterInfo.maxValue && new GetDataModels_1.DataValue(parameterInfo.maxValue.value, parameterInfo.maxValue.formattedValue);
            stepSize = parameterInfo.stepSize;
            dateStepPeriod = parameterInfo.dateStepPeriod &&
                InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(parameterInfo.dateStepPeriod);
        }
        this._allowableValues = {
            type: type,
            allowableValues: listValues,
            minValue: minValue,
            maxValue: maxValue,
            stepSize: stepSize,
            dateStepPeriod: dateStepPeriod
        };
    };
    return ParameterImpl;
}());
exports.ParameterImpl = ParameterImpl;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(4);
var TableauSheetEvent_1 = __webpack_require__(78);
var ParameterChangedEvent = /** @class */ (function (_super) {
    __extends(ParameterChangedEvent, _super);
    function ParameterChangedEvent(_globalFieldName, sheet) {
        var _this = _super.call(this, Contract.TableauEventType.ParameterChanged, sheet) || this;
        _this._globalFieldName = _globalFieldName;
        return _this;
    }
    ParameterChangedEvent.prototype.getParameterAsync = function () {
        var _this = this;
        // Call down to our service to get the parameter back via its field name
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByGlobalFieldNameAsync(this._globalFieldName, this.sheet).then(function (parameter) {
            if (parameter === undefined) {
                throw new TableauError_1.TableauError(Contract.ErrorCodes.MissingParameter, "Cannot find parameter: " + _this._globalFieldName);
            }
            return parameter;
        });
    };
    return ParameterChangedEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.ParameterChangedEvent = ParameterChangedEvent;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(45);
/**
 * Implementation of the Parameter contract. Calls down to the impl
 * class for almost all of the work it does.
 */
var Parameter = /** @class */ (function (_super) {
    __extends(Parameter, _super);
    function Parameter(parameterImpl, sheet) {
        var _this = _super.call(this) || this;
        _this.parameterImpl = parameterImpl;
        // Initialize our event handling for this class
        _this.parameterImpl.initializeEvents(sheet).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Parameter.prototype, "name", {
        get: function () {
            return this.parameterImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "currentValue", {
        get: function () {
            return this.parameterImpl.currentValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "dataType", {
        get: function () {
            return this.parameterImpl.dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "allowableValues", {
        get: function () {
            return this.parameterImpl.allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "id", {
        get: function () {
            return this.parameterImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Parameter.prototype.changeValueAsync = function (newValue) {
        return this.parameterImpl.changeValueAsync(newValue);
    };
    return Parameter;
}(EventListenerManager_1.EventListenerManager));
exports.Parameter = Parameter;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var SelectionModels_1 = __webpack_require__(190);
var ServiceImplBase_1 = __webpack_require__(10);
var TableauError_1 = __webpack_require__(4);
var SelectionServiceImpl = /** @class */ (function (_super) {
    __extends(SelectionServiceImpl, _super);
    function SelectionServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectionServiceImpl.prototype, "serviceName", {
        get: function () {
            return "selection-service" /* Selection */;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to clear all the selected marks for the given worksheet.
     *
     * @param visualId
     */
    SelectionServiceImpl.prototype.clearSelectedMarksAsync = function (visualId) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.ClearSelectedMarks, parameters).then(function (response) {
            return; // Expecting an empty model and hence the void response.
        });
        var _a;
    };
    /**
     * Method to select marks for the given worksheet.
     *
     * @param visualId
     * @param selectionCriteria
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.selectMarksByValueAsync = function (visualId, selectionCriterias, selectionUpdateType) {
        if (selectionCriterias.length === 0) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'Selection criteria missing for selecting marks by value');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionCriteriaType = this.validateSelectionCriteria(selectionCriterias[0]);
        var selectionModelContainer = this.parseSelectionMarks(selectionCriterias, selectionCriteriaType);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a);
        switch (selectionCriteriaType) {
            case SelectionCriteriaType.HierarchicalType: {
                parameters[api_internal_contract_js_1.ParameterId.HierValSelectionModels] = selectionModelContainer.hierModelArr;
                break;
            }
            case SelectionCriteriaType.RangeType: {
                parameters[api_internal_contract_js_1.ParameterId.QuantRangeSelectionModels] = selectionModelContainer.quantModelArr;
                break;
            }
            case SelectionCriteriaType.DimensionType: {
                parameters[api_internal_contract_js_1.ParameterId.DimValSelectionModels] = selectionModelContainer.dimModelArr;
                break;
            }
            default:
                break;
        }
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
        var _a;
    };
    /**
   * Method to select marks for the given worksheet.
   *
   * @param visualId
   * @param MarkInfo
   * @param selectionUpdateType
   */
    SelectionServiceImpl.prototype.selectMarksByIdAsync = function (visualId, marks, selectionUpdateType) {
        if (marks.length === 0) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'Marks info missing for selecting marks by Id');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionModelContainer = this.parseSelectionIds(marks);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a[api_internal_contract_js_1.ParameterId.Selection] = selectionModelContainer.selection,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
        var _a;
    };
    /**
     * Method to prepare the pres models for selection by MarksInfo
     * @param marks
     */
    SelectionServiceImpl.prototype.parseSelectionIds = function (marks) {
        var ids = [];
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        for (var i = 0; i < marks.length; i++) {
            var tupleId = marks[i].tupleId;
            if (tupleId !== undefined && tupleId !== null) {
                ids.push(tupleId.toString()); // collect the tuple ids
            }
            else {
                throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'tupleId parsing error');
            }
        }
        if (ids.length !== 0) {
            var tupleSelectionModel = new SelectionModels_1.TupleSelectionModel();
            tupleSelectionModel.selectionType = 'tuples';
            tupleSelectionModel.objectIds = ids;
            selectionModelContainer.selection = tupleSelectionModel;
        }
        return selectionModelContainer;
    };
    /**
     * Method to prepare the pres models for selection by values.
     *
     * Supports 3 types for selection:
     * 1) hierarchical value based selection
     * 2) range value based selection
     * 3) Dimension value based selection
     *
     * @param marks
     * @param hierModelArr
     * @param dimModelArr
     * @param quantModelArr
     * @param selection
     */
    SelectionServiceImpl.prototype.parseSelectionMarks = function (selectionCriterias, selectionType) {
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        var mixedSelectionsError = false;
        for (var i = 0; i < selectionCriterias.length; i++) {
            var st = selectionCriterias[i];
            if (st.fieldName && (st.value !== undefined && st.value !== null)) {
                var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
                var rangeOption = st.value;
                if (catRegex.test(st.fieldName)) {
                    if (selectionType === SelectionCriteriaType.HierarchicalType) {
                        var hierModel = this.addToParamsList(st.fieldName, st.value);
                        selectionModelContainer.hierModelArr.push(hierModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else if (rangeOption.min !== undefined
                    && rangeOption.max !== undefined) {
                    if (selectionType === SelectionCriteriaType.RangeType) {
                        var quantModel = this.addToRangeParamsList(st.fieldName, rangeOption);
                        selectionModelContainer.quantModelArr.push(quantModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else {
                    if (selectionType === SelectionCriteriaType.DimensionType) {
                        var dimModel = this.addToParamsList(st.fieldName, st.value);
                        selectionModelContainer.dimModelArr.push(dimModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
            }
        }
        if (mixedSelectionsError) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'Selection Criteria parsing error');
        }
        return selectionModelContainer;
    };
    /**
     *
     * @param selectionCriterias Validate and determine the selection criterias type.
     */
    SelectionServiceImpl.prototype.validateSelectionCriteria = function (selectionCriteria) {
        var selectionType;
        // Determine the type of selection, this command is by looking at the first selection
        var crit = selectionCriteria;
        var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
        var rangeOption = crit.value;
        if (crit.fieldName && (crit.value !== undefined && crit.value !== null)) {
            if (catRegex.test(crit.fieldName)) {
                selectionType = SelectionCriteriaType.HierarchicalType;
            }
            else if (rangeOption.min !== undefined
                && rangeOption.max !== undefined) {
                selectionType = SelectionCriteriaType.RangeType;
            }
            else {
                selectionType = SelectionCriteriaType.DimensionType;
            }
        }
        else {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'Selection Criteria parsing error');
        }
        return selectionType;
    };
    /**
     * Method to transform the key value pair into value based pres model object.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToParamsList = function (fieldName, value) {
        var valueSelectionModel = new SelectionModels_1.ValueSelectionModel();
        var markValues = [];
        if (value instanceof Array) {
            var valueArr = value;
            for (var i = 0; i < valueArr.length; i++) {
                markValues.push(valueArr[i].toString());
            }
        }
        else {
            markValues.push(value.toString());
        }
        valueSelectionModel.qualifiedFieldCaption = fieldName;
        valueSelectionModel.selectValues = markValues;
        return valueSelectionModel;
    };
    /**
     * Method to transform the key value pair into range based selection pres model.
     *
     * TODO: Need to handle the parsing of date type values.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToRangeParamsList = function (fieldName, value) {
        var rangeSelectionModel = new SelectionModels_1.RangeSelectionModel();
        rangeSelectionModel.qualifiedFieldCaption = fieldName;
        if (value.max !== undefined && value.max !== null) {
            rangeSelectionModel.maxValue = value.max.toString();
        }
        if (value.min !== undefined && value.min !== null) {
            rangeSelectionModel.minValue = value.min.toString();
        }
        rangeSelectionModel.included = this.validateNullOptionType(value.nullOption);
        return rangeSelectionModel;
    };
    /**
     * Method to validate the selection update type.
     *
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.validateSelectionUpdateType = function (selectionUpdateType) {
        if (selectionUpdateType === Contract.SelectionUpdateType.Replace) {
            return api_internal_contract_js_1.SelectionUpdateType.Replace;
        }
        else if (selectionUpdateType === Contract.SelectionUpdateType.Add) {
            return api_internal_contract_js_1.SelectionUpdateType.Add;
        }
        else if (selectionUpdateType === Contract.SelectionUpdateType.Remove) {
            return api_internal_contract_js_1.SelectionUpdateType.Remove;
        }
        return api_internal_contract_js_1.SelectionUpdateType.Replace;
    };
    /**
     * Method to validate the include type for range selection.
     *
     * @param nullOption
     */
    SelectionServiceImpl.prototype.validateNullOptionType = function (nullOption) {
        if (nullOption) {
            if (nullOption === Contract.FilterNullOption.NullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNull;
            }
            else if (nullOption === Contract.FilterNullOption.NonNullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNonNull;
            }
            else if (nullOption === Contract.FilterNullOption.AllValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
            }
        }
        return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
    };
    return SelectionServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.SelectionServiceImpl = SelectionServiceImpl;
/**
 * Enum for the different selection criteria types.
 */
var SelectionCriteriaType;
(function (SelectionCriteriaType) {
    SelectionCriteriaType[SelectionCriteriaType["HierarchicalType"] = 1] = "HierarchicalType";
    SelectionCriteriaType[SelectionCriteriaType["RangeType"] = 2] = "RangeType";
    SelectionCriteriaType[SelectionCriteriaType["DimensionType"] = 3] = "DimensionType";
    SelectionCriteriaType[SelectionCriteriaType["TuplesType"] = 4] = "TuplesType";
})(SelectionCriteriaType || (SelectionCriteriaType = {}));


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Selection Model.
 */
var SelectionModel = /** @class */ (function () {
    function SelectionModel() {
    }
    return SelectionModel;
}());
exports.SelectionModel = SelectionModel;
/**
 * Value based selection model. Meant for hierarchical, range and categorical selections.
 */
var ValueSelectionModel = /** @class */ (function (_super) {
    __extends(ValueSelectionModel, _super);
    function ValueSelectionModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectValues = [];
        return _this;
    }
    return ValueSelectionModel;
}(SelectionModel));
exports.ValueSelectionModel = ValueSelectionModel;
/**
 * Hierarchical value selection model
 */
var HierarchicalSelectionModel = /** @class */ (function (_super) {
    __extends(HierarchicalSelectionModel, _super);
    function HierarchicalSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HierarchicalSelectionModel;
}(ValueSelectionModel));
exports.HierarchicalSelectionModel = HierarchicalSelectionModel;
/**
 * Range based value selection model
 */
var RangeSelectionModel = /** @class */ (function (_super) {
    __extends(RangeSelectionModel, _super);
    function RangeSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RangeSelectionModel;
}(SelectionModel));
exports.RangeSelectionModel = RangeSelectionModel;
/**
 * Dimension value selection model
 */
var DimensionSelectionModel = /** @class */ (function (_super) {
    __extends(DimensionSelectionModel, _super);
    function DimensionSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DimensionSelectionModel;
}(ValueSelectionModel));
exports.DimensionSelectionModel = DimensionSelectionModel;
/**
 * Tuple based selection model
 */
var TupleSelectionModel = /** @class */ (function () {
    function TupleSelectionModel() {
        this.objectIds = [];
    }
    return TupleSelectionModel;
}());
exports.TupleSelectionModel = TupleSelectionModel;
/**
 * Container class to populate all the selection models when parsing input
 */
var SelectionModelsContainer = /** @class */ (function () {
    function SelectionModelsContainer() {
        this.hierModelArr = [];
        this.dimModelArr = [];
        this.quantModelArr = [];
    }
    return SelectionModelsContainer;
}());
exports.SelectionModelsContainer = SelectionModelsContainer;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExternalToInternalEnumMappings_1 = __webpack_require__(80);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(10);
var ZoneVisibilityServiceImpl = /** @class */ (function (_super) {
    __extends(ZoneVisibilityServiceImpl, _super);
    function ZoneVisibilityServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ZoneVisibilityServiceImpl.prototype, "serviceName", {
        get: function () {
            return "zone-visibility" /* ZoneVisibility */;
        },
        enumerable: true,
        configurable: true
    });
    ZoneVisibilityServiceImpl.prototype.setVisibilityAsync = function (dashboard, zoneVisibilityMap) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.Dashboard] = dashboard,
            _a[api_internal_contract_js_1.ParameterId.ZoneIdsVisibilityMap] = {},
            _a);
        Object.keys(zoneVisibilityMap).forEach(function (key) {
            parameters[api_internal_contract_js_1.ParameterId.ZoneIdsVisibilityMap][key] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.setVisibilityType.convert(zoneVisibilityMap[key]);
        });
        return this.execute(api_internal_contract_js_1.VerbId.SetZoneVisibility, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    return ZoneVisibilityServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ZoneVisibilityServiceImpl = ZoneVisibilityServiceImpl;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external DashboardContent namespace.
 * This does not follow the Impl pattern as DashboardContent is
 * currently just a (single) property bag.
 */
var DashboardContent = /** @class */ (function () {
    function DashboardContent(_dashboard) {
        this._dashboard = _dashboard;
    }
    Object.defineProperty(DashboardContent.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardContent;
}());
exports.DashboardContent = DashboardContent;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
/**
 * Implementation of the external environment namespace.
 * Environment does not follow the Impl pattern as it is
 * just a property bag.
 */
var Environment = /** @class */ (function () {
    function Environment(extensionEnvironment) {
        this._apiVersion = extensionEnvironment.apiVersion;
        this._context = ApiShared_1.InternalToExternalEnumMappings.extensionContext.convert(extensionEnvironment.extensionContext);
        this._language = extensionEnvironment.extensionLanguage;
        this._locale = extensionEnvironment.extensionLocale;
        this._mode = ApiShared_1.InternalToExternalEnumMappings.extensionMode.convert(extensionEnvironment.extensionMode);
        this._operatingSystem = extensionEnvironment.operatingSystem;
        this._tableauVersion = extensionEnvironment.tableauVersion;
        this._externalScriptVersion = ApiShared_1.VersionNumber.Instance;
    }
    Object.defineProperty(Environment.prototype, "apiVersion", {
        get: function () {
            return this._apiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "operatingSystem", {
        get: function () {
            return this._operatingSystem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "tableauVersion", {
        get: function () {
            return this._tableauVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "externalScriptVersion", {
        get: function () {
            return this._externalScriptVersion;
        },
        enumerable: true,
        configurable: true
    });
    return Environment;
}());
exports.Environment = Environment;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
/**
 * Implementation of the external settings namespace.
 */
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(_settingsImpl) {
        var _this = _super.call(this) || this;
        _this._settingsImpl = _settingsImpl;
        // Initialize our event handling for this class
        _this._settingsImpl.initializeEvents().forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Settings.prototype.erase = function (key) {
        this._settingsImpl.erase(key);
    };
    Settings.prototype.get = function (key) {
        return this._settingsImpl.get(key);
    };
    Settings.prototype.getAll = function () {
        return this._settingsImpl.getAll();
    };
    Object.defineProperty(Settings.prototype, "isModified", {
        get: function () {
            return this._settingsImpl.isModified;
        },
        enumerable: true,
        configurable: true
    });
    Settings.prototype.saveAsync = function () {
        return this._settingsImpl.saveAsync();
    };
    Settings.prototype.set = function (key, value) {
        this._settingsImpl.set(key, value);
    };
    return Settings;
}(ApiShared_1.EventListenerManager));
exports.Settings = Settings;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external UI namespace.
 */
var UI = /** @class */ (function () {
    function UI(_impl) {
        this._impl = _impl;
    }
    UI.prototype.displayDialogAsync = function (url, payload, options) {
        return this._impl.displayDialogAsync(url, payload, options);
    };
    UI.prototype.closeDialog = function (payload) {
        this._impl.closeDialog(payload);
    };
    return UI;
}());
exports.UI = UI;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
var InitializationServiceImpl_1 = __webpack_require__(197);
var SettingsServiceImpl_1 = __webpack_require__(198);
var UIServiceImpl_1 = __webpack_require__(199);
function registerAllExtensionsServices(dispatcher) {
    ApiShared_1.ApiServiceRegistry.instance.registerService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new UIServiceImpl_1.UIServiceImpl(dispatcher));
}
exports.registerAllExtensionsServices = registerAllExtensionsServices;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
var api_internal_contract_js_1 = __webpack_require__(1);
var InitializationServiceImpl = /** @class */ (function (_super) {
    __extends(InitializationServiceImpl, _super);
    function InitializationServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InitializationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "InitializationService" /* InitializationService */;
        },
        enumerable: true,
        configurable: true
    });
    InitializationServiceImpl.prototype.initializeDashboardExtensionsAsync = function (isExtensionDialog, contextMenuIds) {
        var params = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionContextMenuIds] = contextMenuIds,
            _a[api_internal_contract_js_1.ParameterId.IsExtensionDialog] = isExtensionDialog,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.InitializeExtension, params).then(function (response) {
            // TODO - Validate return value
            var result = response.result;
            return result;
        });
        var _a;
    };
    return InitializationServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.InitializationServiceImpl = InitializationServiceImpl;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(14);
var ApiShared_1 = __webpack_require__(5);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_2 = __webpack_require__(5);
var SettingsServiceImpl = /** @class */ (function (_super) {
    __extends(SettingsServiceImpl, _super);
    function SettingsServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SettingsServiceImpl.prototype, "serviceName", {
        get: function () {
            return "SettingsService" /* SettingsService */;
        },
        enumerable: true,
        configurable: true
    });
    SettingsServiceImpl.prototype.saveSettingsAsync = function (settings) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.SettingsValues] = settings, _a);
        return this.execute(api_internal_contract_js_1.VerbId.SaveExtensionSettings, parameters).then(function (value) {
            var result = value.result;
            if (!result || !result.settingsValues) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error savings settings.');
            }
            return (result.settingsValues);
        });
        var _a;
    };
    return SettingsServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.SettingsServiceImpl = SettingsServiceImpl;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(14);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
var DEFAULT_DIALOG_HEIGHT = 400; // in pixels
var DEFAULT_DIALOG_WIDTH = 600; // in pixels
var UIServiceImpl = /** @class */ (function (_super) {
    __extends(UIServiceImpl, _super);
    function UIServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIServiceImpl.prototype, "serviceName", {
        get: function () {
            return "UIService" /* UIService */;
        },
        enumerable: true,
        configurable: true
    });
    UIServiceImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogUrl] = url,
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload,
            _a);
        var h = ((options) && (options.height)) ? options.height : DEFAULT_DIALOG_HEIGHT;
        var w = ((options) && (options.width)) ? options.width : DEFAULT_DIALOG_WIDTH;
        // On the platform side, we do something reasonable regardess of whether the passed
        // height and width are too large or too small.  But this likely indicates a developer error,
        // so we throw an error here to help with debugging.
        if (h <= 0 || w <= 0) {
            throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InvalidParameter, 'Size parameters for displayDialogAsync must be positive');
        }
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogH] = h;
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogW] = w;
        return this.execute(api_internal_contract_js_1.VerbId.DisplayDialog, parameters).then(function (response) {
            var dialogResult = response.result;
            switch (dialogResult) {
                case api_internal_contract_js_1.ExtensionDialogResult.DialogAlreadyOpen:
                    throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.DialogAlreadyOpen, 'There already exists an open dialog for this extension.');
                case api_internal_contract_js_1.ExtensionDialogResult.InvalidDomain:
                    throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InvalidDomainDialog, 'The url of an extension dialog must match the domain of the parent extension.');
                default:// Success case
                    return;
            }
        });
        var _a;
    };
    UIServiceImpl.prototype.closeDialog = function (payload) {
        var parameters = (payload) ? (_a = {}, _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload, _a) : {};
        return this.execute(api_internal_contract_js_1.VerbId.CloseDialog, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    return UIServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.UIServiceImpl = UIServiceImpl;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(14);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
var SettingsChangedEvent = /** @class */ (function (_super) {
    __extends(SettingsChangedEvent, _super);
    function SettingsChangedEvent(_newSettings) {
        var _this = _super.call(this, Contract.TableauEventType.SettingsChanged) || this;
        _this._newSettings = _newSettings;
        return _this;
    }
    Object.defineProperty(SettingsChangedEvent.prototype, "newSettings", {
        get: function () {
            return this._newSettings;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsChangedEvent;
}(ApiShared_1.TableauEvent));
var SettingsImpl = /** @class */ (function () {
    function SettingsImpl(settingsInfo) {
        // Since promises can't be introspected for state, keep a variable that
        // indicates a save is in progress, so that set/erase can't be called during a save.
        this._saveInProgress = false;
        this.initializeSettings(settingsInfo);
    }
    SettingsImpl.prototype.erase = function (key) {
        ApiShared_1.ErrorHelpers.verifyParameter(key, 'key');
        // Only make a modification if we have the key already
        if (this._currentSettings[key]) {
            this.verifySettingsAreUnlocked();
            delete this._currentSettings[key];
            this._isModified = true;
        }
    };
    SettingsImpl.prototype.get = function (key) {
        ApiShared_1.ErrorHelpers.verifyParameter(key, 'key');
        return this._currentSettings[key];
    };
    SettingsImpl.prototype.getAll = function () {
        // Returns a mutable copy of the settings
        return Object.assign({}, this._currentSettings);
    };
    Object.defineProperty(SettingsImpl.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    SettingsImpl.prototype.saveAsync = function () {
        var _this = this;
        this.verifySettingsAreUnlocked();
        // Just resolve immediately if settings are unchanged
        if (!this._isModified) {
            return Promise.resolve(this._currentSettings);
        }
        this._saveInProgress = true;
        // Use the settings service to save settings to twb
        var settingsService = ApiShared_1.ApiServiceRegistry.instance.getService("SettingsService" /* SettingsService */);
        return settingsService.saveSettingsAsync(this._currentSettings).then(function (newSettings) {
            _this._saveInProgress = false;
            _this._isModified = false;
            if (_this._currentSettings === undefined) {
                _this._currentSettings = newSettings;
            }
            else {
                Object.assign(_this._currentSettings, newSettings);
            }
            return newSettings;
        });
    };
    SettingsImpl.prototype.set = function (key, value) {
        ApiShared_1.ErrorHelpers.verifyStringParameter(key, 'key'); // Key shouldn't be an empty string.
        ApiShared_1.ErrorHelpers.verifyParameter(value, 'value'); // Empty string value is allowed.
        this.verifySettingsAreUnlocked();
        this._currentSettings[key] = value;
        this._isModified = true;
    };
    /**
     * Initializes all events relevant to settings object.  This is only a settingsUpdate event currently.
     *
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager.
     */
    SettingsImpl.prototype.initializeEvents = function () {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        var settingsChangedEvent = new ApiShared_1.SingleEventManagerImpl(Contract.TableauEventType.SettingsChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SettingsChanged, function (model) {
            return true;
        }, function (event) {
            _this._currentSettings = event.newSettings;
            settingsChangedEvent.triggerEvent(function () { return new SettingsChangedEvent(event.newSettings); });
        });
        results.push(settingsChangedEvent);
        return results;
    };
    SettingsImpl.prototype.initializeSettings = function (settingsInfo) {
        ApiShared_1.ErrorHelpers.verifyParameter(settingsInfo, 'settingsInfo');
        ApiShared_1.ErrorHelpers.verifyParameter(settingsInfo.settingsValues, 'settingsInfo.SettingsValues');
        this._currentSettings = settingsInfo.settingsValues;
        // Reset the isModified flag
        this._isModified = false;
    };
    /**
     * This helper should be called before any local update to this.currentSettings.
     * Checks if a current save call is still in progress and throws an error if so.
     */
    SettingsImpl.prototype.verifySettingsAreUnlocked = function () {
        if (this._saveInProgress) {
            throw new ApiShared_1.TableauError(Contract.ErrorCodes.SettingSaveInProgress, SettingsImpl.ASYNC_SAVE_IN_PROGRESS);
        }
    };
    SettingsImpl.ASYNC_SAVE_IN_PROGRESS = 'Async Save is in progress, updating settings is not allowed.';
    return SettingsImpl;
}());
exports.SettingsImpl = SettingsImpl;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(14);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
var UIImpl = /** @class */ (function () {
    function UIImpl() {
    }
    UIImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var uiService = ApiShared_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        var notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        return new Promise(function (resolve, reject) {
            uiService.displayDialogAsync(url, payload || '', options).then(function () {
                var unregisterFn = notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ExtensionDialogUpdate, function (model) {
                    return true; // Let through any dialog update event
                }, function (event) {
                    if (event.isCloseEvent) {
                        resolve(event.closePayload);
                    }
                    else {
                        reject(new ApiShared_1.TableauError(Contract.ErrorCodes.DialogClosedByUser, 'Extension dialog closed by user.'));
                    }
                    unregisterFn();
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    UIImpl.prototype.closeDialog = function (payload) {
        var uiService = ApiShared_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        uiService.closeDialog(payload);
    };
    return UIImpl;
}());
exports.UIImpl = UIImpl;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external Extensions namespace.
 */
var Extensions = /** @class */ (function () {
    function Extensions(extensionImpl) {
        this.extensionImpl = extensionImpl;
        this.extensionImpl = extensionImpl;
    }
    Object.defineProperty(Extensions.prototype, "dashboardContent", {
        get: function () {
            return this.extensionImpl.dashboardContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "environment", {
        get: function () {
            return this.extensionImpl.environment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "settings", {
        get: function () {
            return this.extensionImpl.settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "ui", {
        get: function () {
            return this.extensionImpl.ui;
        },
        enumerable: true,
        configurable: true
    });
    Extensions.prototype.initializeAsync = function (contextMenuCallbacks) {
        return this.extensionImpl.initializeAsync(false, contextMenuCallbacks).then();
    };
    Extensions.prototype.initializeDialogAsync = function () {
        return this.extensionImpl.initializeAsync(true);
    };
    return Extensions;
}());
exports.Extensions = Extensions;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGUyZDI0NTEyNThlYTJjZjI5MmEiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9BcGlTaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRMaXN0ZW5lck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaW5nbGVFdmVudE1hbmFnZXJJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL1BhcmFtLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9HZXREYXRhTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9WZXJzaW9uTnVtYmVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0VudW1Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGF0YVNvdXJjZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9GaWVsZEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL2FycmF5L2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvRXh0ZW5zaW9uc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9FeHRlcm5hbENvbnRyYWN0L0VudW1zLnRzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vL2U6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy9lOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9udW1iZXIvaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1BhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9WZXJicy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1N0YWNraW5nVmVyc2lvbkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uVHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9NZXNzYWdlVHlwZUNoZWNrcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW5mb0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2l6ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Xb3Jrc2hlZXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nvbm5lY3Rpb25TdW1tYXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lQm9vdHN0cmFwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZURpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvUmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0RhdGFTb3VyY2VTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0ZpbHRlclNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9HZXREYXRhU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9QYXJhbWV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvWm9uZVZpc2liaWxpdHlTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1NldHRpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1VJLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvVUlTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9TZXR0aW5nc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvVUlJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBLDZGQUE2Rjs7Ozs7QUFJN0YsbUNBQXlDOzs7Ozs7Ozs7QUNKekM7Ozs7R0FJRzs7Ozs7QUFFSCw4Q0FBOEM7QUFDOUMseUJBQWtDO0FBQ2xDLHlCQUFzQztBQUV0QyxtQ0FBaUM7QUFDakMsbUNBQWtEO0FBRWxELG1DQUF5QztBQUN6QyxtQ0FBc0M7QUFDdEMsbUNBQWlDO0FBR2pDLG1DQUFxRDtBQUdyRCxpREFBaUQ7QUFFakQsbUNBQWdEO0FBR2hELGtDQUFt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YUFBYSxDQUFnQjtRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQVcsd0NBQWdCO2FBQTNCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxtQ0FBVzthQUF0QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUU7YUFBYjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLG9CQUFrQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVNLDBDQUFxQixHQUE1QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBNUJZLGdDQUFVIiwiZmlsZSI6InRhYmxlYXUuZXh0ZW5zaW9ucy4xLjEuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0LWV4dGVuc2lvbnMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gODEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhlMmQyNDUxMjU4ZWEyY2YyOTJhIiwiLy8gVGhpcyBmaWxlIHJlLWV4cG9ydHMgZXZlcnl0aGluZyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBzaGFyZWQgZW1iZWRkaW5nIGFwaSBwdWJsaWMgaW50ZXJmYWNlXG5cbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9EYXRhU291cmNlSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRGF0YVRhYmxlSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRW51bXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0V2ZW50SW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRmlsdGVySW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2VsZWN0aW9uSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvUGFyYW1ldGVySW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2VsZWN0aW9uSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2hlZXRJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9UYWJsZWF1RXJyb3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwiLyoqXG4gKiBUaGlzIGlzIHlvdXIgbWFpbi4gVGhpcyBpcyB3aGVyZSB5b3UgcmUtZXhwb3J0IGV2ZXJ5dGhpbmcgeW91IHdhbnQgdG8gYmUgcHVibGljbHkgYXZhaWxhYmxlLlxuICpcbiAqIFRoZSBidWlsZCBlbmZvcmNlcyB0aGF0IHRoZSBmaWxlIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHRoZSBnbG9iYWwgdmFyaWFibGUgdGhhdCBpcyBleHBvcnRlZC5cbiAqL1xuXG4vLyBUaGUgZm9sbG93aW5nIHBvbHlmaWxscyBhcmUgbmVlZGVkIGZvciBJRTExXG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbic7XG5pbXBvcnQgJ2NvcmUtanMvZm4vbnVtYmVyL2lzLWludGVnZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L0VudW1zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L01vZGVscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9QYXJhbWV0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvVmVyYnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvSW5pdGlhbGl6YXRpb25PcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL1ZlcnNpb25OdW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbmluZy9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5cbi8vIFRoZXNlIGFyZSB0aGUgZXhwb3J0cyBmcm9tIHRoZSBtZXNzYWdpbmcgc3R1ZmZcblxuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvQ3Jvc3NGcmFtZU1lc3Nlbmdlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZURpc3BhdGNoZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VMaXN0ZW5lcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5cbi8vIEV4cG9ydCBhIGhhcmRjb2RlZCB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdC4gVGhpcyBzaG91bGQgbWF0Y2ggd2hhdCdzIGluIHBhY2thZ2UuanNvbi5cbi8vIE5vcm1hbGx5LCB3ZSdkIHVzZSBzb21lIHNvcnQgb2Ygd2VicGFjayByZXBsYWNlbWVudCB0byBpbmplY3QgdGhpcyBpbnRvIGNvZGUsIGJ1dCB0aGF0IGRvZXNuJ3Rcbi8vIHdvcmsgd2l0aCB0aGUgbW9kdWxlLWRldi1zY3JpcHRzIGFuZCB0aGlzIGlzbid0IHRvbyBtdWNoIHdvcmsuXG4vLyBJZiB5b3UgZm9yZ2V0IHRvIGtlZXAgdGhpcyBpbiBzeW5jIHdpdGggcGFja2FnZS5qc29uLCBhIHRlc3Qgd2lsbCBmYWlsIHNvIHdlIHNob3VsZCBiZSBvay5cbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OID0ge1xuICBtYWpvcjogMixcbiAgbWlub3I6IDAsXG4gIGZpeDogMFxufTtcblxuLy8gRXhwb3J0IHRoZSB2ZXJzaW9uIG51bWJlciBvZiBtZXNzYWdpbmcgZm9yIGNvbnN1bWVycyB0byB1c2UuXG4vLyBCZSB2ZXJ5IGNhcmVmdWwgbWFraW5nIGFueSB1cGRhdGVzIHRvIHRoaXMgY29udHJhY3Qgd2hpY2ggYnJlYWsgdmVyc2lvbiBjb21wYXRpYmlsaXR5LlxuZXhwb3J0IGNvbnN0IE1FU1NBR0lOR19WRVJTSU9OID0ge1xuICBtYWpvcjogMSxcbiAgbWlub3I6IDAsXG4gIGZpeDogMFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBDdXN0b20gZXJyb3IgY2xhc3MgdGhhdCBleHRlbmRzIHRoZSBkZWZhdWx0IEphdmFTY3JpcHQgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBhbGxvd3MgdXMgdG8gcHJvdmlkZSBhIGZpZWxkIHdpdGggYSBzcGVjaWZpYyBlcnJvciBjb2RlXG4gKiBzbyB0aGF0IGRldmVsb3BlcnMgY2FuIG1vcmUgZWFzaWx5IHByb2dyYW1tYXRpY2FsbHkgcmVzcG9uZFxuICogdG8gZXJyb3Igc2NlbmFyaW9zLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGVhdUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZXJyb3JDb2RlOiBDb250cmFjdC5FcnJvckNvZGVzLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgJHtfZXJyb3JDb2RlfTogJHttZXNzYWdlfWApO1xuXG4gICAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuICAgIC8vIEVycm9yIGluaGVyaXRhbmNlIGRvZXMgbm90IHdvcmsgcHJvcGVydGx5IHdoZW4gY29tcGlsaW5nIHRvIEVTNSwgdGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZm9yY2VcbiAgICAvLyB0aGUgcHJvdG8gY2hhaW4gdG8gYmUgYnVpbHQgY29ycmVjdGx5LiAgU2VlIHRoZSBnaXRodWIgbGluayBhYm92ZSBmb3IgZGV0YWlscy5cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVGFibGVhdUVycm9yLnByb3RvdHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVycm9yQ29kZSgpOiBDb250cmFjdC5FcnJvckNvZGVzIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JDb2RlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3IudHMiLCIvLyBFeHBvcnQgZXZlcnl0aGluZyB3aGljaCBoYWQgYmVlbiBwcmV2aW91c2x5IGluIHRoZSBhcGktc2hhcmVkIG1vZHVsZVxuXG5leHBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL0FwaVNoYXJlZC9EYXNoYm9hcmQnO1xuZXhwb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5leHBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9TaW5nbGVFdmVudE1hbmFnZXInO1xuZXhwb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9BcGlTaGFyZWQvVGFibGVhdUVycm9yJztcbmV4cG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9WZXJzaW9uTnVtYmVyJztcblxuZXhwb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5leHBvcnQgeyBUYWJsZWF1RXZlbnQgfSBmcm9tICcuL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdUV2ZW50JztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuZXhwb3J0IHsgRGFzaGJvYXJkSW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbCc7XG5leHBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZSc7XG5leHBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAnO1xuZXhwb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0FwaVNoYXJlZC50cyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBCYXNlIGludGVyZmFjZSBmb3IgYW4gYXBpIHNlcnZpY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGlTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIG5hbWUgZm9yIHRoaXMgc2VydmljZS5cbiAgICovXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBzZXJ2aWNlIG5hbWUgd2hpY2ggd2lsbCBiZSByZWdpc3RlcmVkIGluIHRoZSBhcGktc2hhcmVkIHByb2plY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gU2VydmljZU5hbWVzIHtcbiAgRGF0YVNvdXJjZVNlcnZpY2UgPSAnZGF0YS1zb3VyY2Utc2VydmljZScsXG4gIEdldERhdGEgPSAnZ2V0LWRhdGEtc2VydmljZScsXG4gIEZpbHRlciA9ICdmaWx0ZXItc2VydmljZScsXG4gIE5vdGlmaWNhdGlvbiA9ICdub3RpZmljYXRpb24tc2VydmljZScsXG4gIFBhcmFtZXRlcnMgPSAncGFyYW1ldGVycy1zZXJ2aWNlJyxcbiAgU2VsZWN0aW9uID0gJ3NlbGVjdGlvbi1zZXJ2aWNlJyxcbiAgWm9uZVZpc2liaWxpdHkgPSAnem9uZS12aXNpYmlsaXR5J1xufVxuXG4vKipcbiAqIERvIHNvbWUgZ2xvYmFibCBkZWNsYXJhdGlvbnMgc28gd2UgY2FuIGNyZWF0ZSBhIHNpbmdsZXRvbiBvbiB0aGUgd2luZG93IG9iamVjdFxuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBfX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnk6IFNlcnZpY2VSZWdpc3RyeSB8IHVuZGVmaW5lZDsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBuZXcgc2VydmljZSBpbnRvIHRoZSBzZXJ2aWNlIHJlZ2lzdHJ5LiBBbnkgZXhpc3Rpbmcgb25lIHdpbGxcbiAgICogYmUgb3ZlcndyaXR0ZW4uIHRoZSBzZXJ2aWNlIGlzIHJlZ2lzdGVyZWQgdW5kZXIgc2VydmljZS5zZXJ2aWNlTmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0FwaVNlcnZpY2V9IHNlcnZpY2UgVGhlIHNlcnZpdmUgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlOiBBcGlTZXJ2aWNlKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBnaXZlbiBzZXJ2aWNlIGZyb20gdGhlIHJlZ2lzdHJ5LiBJZiB0aGVyZSBpcyBub3QgYVxuICAgKiBzZXJ2aWNlIHJlZ2lzdGVyZWQgdW5kZXIgdGhhdCBuYW1lLCB0aHJvd3MgYW5kIGVycm9yXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSBUIFRoZSB0eXBlIG9mIHRoZSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICogQHJldHVybnMge1R9IFRoZSByZXF1ZXN0ZWQgc2VydmljZVxuICAgKi9cbiAgZ2V0U2VydmljZTxUIGV4dGVuZHMgQXBpU2VydmljZT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQ7XG59XG5cbmNsYXNzIFNlcnZpY2VSZWdpc3RyeUltcGwgaW1wbGVtZW50cyBTZXJ2aWNlUmVnaXN0cnkge1xuICBwcml2YXRlIF9zZXJ2aWNlczogeyBbc2VydmljZU5hbWU6IHN0cmluZ106IEFwaVNlcnZpY2U7IH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3NlcnZpY2VzID0ge307XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJTZXJ2aWNlKHNlcnZpY2U6IEFwaVNlcnZpY2UpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VOYW1lXSA9IHNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VydmljZTxUIGV4dGVuZHMgQXBpU2VydmljZT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQge1xuICAgIGlmICghdGhpcy5fc2VydmljZXMuaGFzT3duUHJvcGVydHkoc2VydmljZU5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYFNlcnZpY2Ugbm90IHJlZ2lzdGVyZWQ6ICR7c2VydmljZU5hbWV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VzW3NlcnZpY2VOYW1lXSBhcyBUO1xuICB9XG59XG5cbi8qKlxuICogc3RhdGljIGNsYXNzIHVzZWQgZm9yIGdldHRpbmcgYWNjZXNzIHRvIHRoZSBzaW5nbGUgaW5zdGFuY2VcbiAqIG9mIHRoZSBBcGlTZXJ2aWNlUmVnaXN0cnlcbiAqL1xuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2VSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFNlcnZpY2VSZWdpc3RyeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU2VydmljZVJlZ2lzdHJ5IHtcbiAgICBpZiAoIXdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgIEFwaVNlcnZpY2VSZWdpc3RyeS5zZXRJbnN0YW5jZShuZXcgU2VydmljZVJlZ2lzdHJ5SW1wbCgpKTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VydmljZSByZWdpc3RyeSBmYWlsZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIG92ZXJyaWRlIHRoZSByZWdpc3RyeSBpbnN0YW5jZS4gQ2FuIGJlIHVzZWQgYnkgdW5pdCB0ZXN0c1xuICAgKlxuICAgKiBAcGFyYW0ge1NlcnZpY2VSZWdpc3RyeX0gc2VydmljZVJlZ2lzdHJ5IFRoZSBuZXcgcmVnaXN0cnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2Uoc2VydmljZVJlZ2lzdHJ5PzogU2VydmljZVJlZ2lzdHJ5KTogdm9pZCB7XG4gICAgd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSA9IHNlcnZpY2VSZWdpc3RyeTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgdG8gYXZvaWQgYW55b25lIGNvbnN0cnVjdGluZyB0aGlzXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeS50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuL1BhcmFtJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcbmltcG9ydCB7IERhc2hib2FyZEltcGwgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb25zdHJ1Y3QgY29tbW9uIGVycm9ycyB0aHJvdWdob3V0IHRoZSBleHRlcm5hbFxuICogcHJvamVjdHMgKGFwaS1zaGFyZWQsIGV4dGVuc2lvbnMtYXBpLCBldGMuKS4gIEl0IGhhcyBzb21lIGR1cGxpY2F0aW9uIHdpdGhcbiAqIHRoZSBFcnJvckhlbHBlcnMgY2xhc3MgaW4gYXBpLWNvcmUsIGJ1dCBpcyBzZXBhcmF0ZSBkdWUgdG8gdGhlIG5lZWQgdG8gdGhyb3dcbiAqIGFuIGV4dGVybmFsIFRhYmxlYXVFcnJvciB2cy4gYW4gSW50ZXJuYWxUYWJsZWF1RXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlcnMge1xuICAvKipcbiAgICogVGhyb3dzIHdpdGggY29kZSBJbnRlcm5hbEVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZSBuYW1lIG9mIGFwaSB0aGF0IHdhcyBjYWxsZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwaU5vdEltcGxlbWVudGVkKGFwaU5hbWU6IHN0cmluZyk6IFRhYmxlYXVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcGlOYW1lfSBBUEkgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gaW50ZXJuYWwgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUludGVybmFsVmFsdWUoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVBhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBlbXB0eSBzdHJpbmcsIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogc3RyaW5nLCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBhcmd1bWVudFZhbHVlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgcGFzc2VkIHZhbHVlIGlzIGEgdmFsaWQgdmFsdWUgZm9yIHRoYXQgZW51bS5cbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgdGhlIGVudW0gdmFsdWUgaXMgbm90IHZhbGlkLlxuICAgKlxuICAgKiBTdHJpbmcgZW51bXMgYXJlIHtzdHJpbmcgOiBzdHJpbmd9IGRpY3Rpb25hcmllcyB3aGljaCBhcmUgbm90IHJldmVyc2UgbWFwcGFibGVcbiAgICogVGhpcyBpcyBhbiB1Z2x5IHdvcmthcm91bmRcbiAgICpcbiAgICogQHBhcmFtIGVudW1WYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGVudW1UeXBlIGVudW0gdG8gdmVyaWZ5IGFnYWluc3RcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5RW51bVZhbHVlPEVudW1UeXBlPihlbnVtVmFsdWU6IEVudW1UeXBlLCBlbnVtVHlwZTogYW55KSB7XG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZm9yRWFjaCgoZW51bUtleSkgPT4ge1xuICAgICAgaWYgKGVudW1UeXBlW2VudW1LZXldID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2VudW1WYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgZW51bTogJHtlbnVtVHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHBhcmFtcyBtaW4gYW5kIG1heCBmb3IgYXBwbHlpbmcgcmFuZ2UgZmlsdGVyLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIG1pbiByYW5nZSBtaW5cbiAgICogQHBhcmFtIG1heCByYW5nZSBtYXhcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UmFuZ2VQYXJhbVR5cGUobWluOiBhbnksIG1heDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFtaW4gJiYgIW1heCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIGF0IGxlYXN0IG9uZSBvZiBtaW4gb3IgbWF4IGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtaW4pICYmICFQYXJhbS5pc1R5cGVEYXRlKG1pbikpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1pbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobWF4ICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWF4KSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtYXguJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiBtYXggJiYgdHlwZW9mIChtaW4pICE9PSB0eXBlb2YgKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IHRoZSB6b25lSWQgaXMgcHJlc2VudCBpbiB0aGUgY3VycmVudCBkYXNoYm9hcmQgYW5kIGlzIEZsb2F0aW5nLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgZWl0aGVyIGNvbmRpdGlvbiBpcyBmYWxzZS5cbiAgICpcbiAgICogQHBhcmFtIGRhc2hib2FyZCBjdXJyZW50IGRhc2hib2FyZFxuICAgKiBAcGFyYW0gem9uZUlEIFpvbmVJZCB0byBiZSB2YWxpZGF0ZWRcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5Wm9uZUlzVmFsaWQoZGFzaGJvYXJkOiBEYXNoYm9hcmRJbXBsLCB6b25lSUQ6IG51bWJlcik6IHZvaWQge1xuXG4gICAgbGV0IGlzVmFsaWQgPSBkYXNoYm9hcmQub2JqZWN0cy5zb21lKChkYXNoYm9hcmRPYmplY3QpID0+IHtcbiAgICAgIHJldHVybiBkYXNoYm9hcmRPYmplY3QuaWQgPT09IHpvbmVJRCAmJiBkYXNoYm9hcmRPYmplY3QuaXNGbG9hdGluZztcbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgIGBVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIFpvbmUgSWQ6ICR7em9uZUlEfSBpcyBlaXRoZXIgbm90IHByZXNlbnQgb3IgaXMgYSBmaXhlZCB6b25lLmApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzLnRzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBJbnRlcm5hbFRhYmxlYXVFcnJvcixcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBFYWNoIFNlcnZjZUltcGwgc2hvdWxkIGV4dGVuZCB0aGlzIGJhc2UgY2xhc3MgZm9yIHRoZSBzYWtlIG9mXG4gKiBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuICBUaGlzIGJhc2UgaGFuZGxlcyB0aGUgY29udmVyc2lvblxuICogZnJvbSBpbnRlcm5hbCBlcnJvcnMgdG8gZXh0ZXJuYWwgZXJyb3JzIHRoYXQgd2UgdGhyb3cgdG8gZGV2ZWxvcGVyc1xuICovXG5leHBvcnQgY2xhc3MgU2VydmljZUltcGxCYXNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikgeyB9XG5cbiAgcHJvdGVjdGVkIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaGVyLmV4ZWN1dGUodmVyYiwgcGFyYW1zKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEFueSBpbnRlcm5hbCBlcnJvciB0aGF0IGNvbWVzIGZyb20gdGhlIGRpc3BhdGNoZXIgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAgICAgLy8gdG8gYW4gZXh0ZXJuYWwgZXJyb3IgdXNpbmcgdGhlIGVudW0gbWFwcGVyIGZvciBlcnJvciBjb2Rlcy5cbiAgICAgIGNvbnN0IGludGVybmFsRXJyb3IgPSBlcnJvciBhcyBJbnRlcm5hbFRhYmxlYXVFcnJvcjtcbiAgICAgIGNvbnN0IGV4dGVybmFsRXJyb3JDb2RlOiBFcnJvckNvZGVzID0gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmVycm9yQ29kZS5jb252ZXJ0KGludGVybmFsRXJyb3IuZXJyb3JDb2RlKTtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoZXh0ZXJuYWxFcnJvckNvZGUsIGludGVybmFsRXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlLnRzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhpcyBmaWxlIHJlLWV4cG9ydHMgZXZlcnl0aGluZyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBleHRlbnNpb25zIGFwaSBwdWJsaWMgaW50ZXJmYWNlXG5cbi8vIEV4cG9ydCBldmVyeXRoaW5nIGZyb20gdGhlIHNoYXJlZCBmaWxlXG5leHBvcnQgKiBmcm9tICcuL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vLyBFeHBvcnQgdGhlIG5hbWVzcGFjZXMgd2hpY2ggYXJlIHNwZWNpZmljIHRvIGV4dGVuc2lvbnNcbmV4cG9ydCB7IEV4dGVuc2lvbnMgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9FeHRlbnNpb25zJztcbmV4cG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50JztcbmV4cG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRW52aXJvbm1lbnQnO1xuZXhwb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9TZXR0aW5ncyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9VSSc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJpbXBvcnQge1xuICBDb2x1bW5UeXBlIGFzIEV4dGVybmFsQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSBhcyBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlIGFzIEV4dGVybmFsRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUgYXMgRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLFxuICBFcnJvckNvZGVzIGFzIEV4dGVybmFsRXJyb3JDb2RlcyxcbiAgRXh0ZW5zaW9uQ29udGV4dCBhcyBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LFxuICBFeHRlbnNpb25Nb2RlIGFzIEV4dGVybmFsRXh0ZW5zaW9uc01vZGUsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlIGFzIEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUgYXMgRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEV4dGVybmFsRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFBhcmFtZXRlclZhbHVlVHlwZSBhcyBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZSxcbiAgUGVyaW9kVHlwZSBhcyBFeHRlcm5hbERhdGVQZXJpb2QsXG4gIFNoZWV0VHlwZSBhcyBFeHRlcm5hbFNoZWV0VHlwZSxcbn0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIENvbHVtblR5cGUgYXMgSW50ZXJuYWxDb2x1bW5UeXBlLFxuICBEYXNoYm9hcmRPYmplY3RUeXBlIGFzIEludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUgYXMgSW50ZXJuYWxEYXRhVHlwZSxcbiAgRGF0ZVJhbmdlVHlwZSBhcyBJbnRlcm5hbERhdGVSYW5nZVR5cGUsXG4gIERhdGVTdGVwUGVyaW9kIGFzIEludGVybmFsRGF0ZVN0ZXBQZXJpb2QsXG4gIERvbWFpblJlc3RyaWN0aW9uVHlwZSBhcyBJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZSxcbiAgRXJyb3JDb2RlcyBhcyBJbnRlcm5hbEVycm9yQ29kZXMsXG4gIEV4dGVuc2lvbkNvbnRleHQgYXMgSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSBhcyBJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSBhcyBJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlIGFzIEludGVybmFsRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyVHlwZSBhcyBJbnRlcm5hbEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBTaGVldFR5cGUgYXMgSW50ZXJuYWxTaGVldFR5cGUsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcblxuLyogdHNsaW50OmRpc2FibGU6dHlwZWRlZiAtIERpc2FibGUgdGhpcyB0byBtYWtlIGRlY2xhcmluZyB0aGVzZSBjbGFzc2VzIGEgYml0IGVhc2llciAqL1xuLyoqXG4gKiBNYXBzIGVudW1zIHVzZWQgYnkgdGhlIGludGVybmFsLWFwaS1jb250cmFjdCB0byB0aGUgZW51bXMgdXNlZFxuICogaW4gdGhlIGV4dGVybmFsLWFwaS1jb250cmFjdCwgd2hpY2ggZGV2ZWxvcGVycyBjb2RlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3Mge1xuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbkNvbnRleHQgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LCBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0Pih7XG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuRGVza3RvcF06IEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuRGVza3RvcCxcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5TZXJ2ZXJdOiBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LlNlcnZlclxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbk1vZGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLCBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlPih7XG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc01vZGUuQXV0aG9yaW5nXTogRXh0ZXJuYWxFeHRlbnNpb25zTW9kZS5BdXRob3JpbmcsXG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc01vZGUuVmlld2luZ106IEV4dGVybmFsRXh0ZW5zaW9uc01vZGUuVmlld2luZ1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGNvbHVtblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbENvbHVtblR5cGUsIEV4dGVybmFsQ29sdW1uVHlwZT4oe1xuICAgIFtJbnRlcm5hbENvbHVtblR5cGUuQ29udGludW91c106IEV4dGVybmFsQ29sdW1uVHlwZS5Db250aW51b3VzLFxuICAgIFtJbnRlcm5hbENvbHVtblR5cGUuRGlzY3JldGVdOiBFeHRlcm5hbENvbHVtblR5cGUuRGlzY3JldGVcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWVsZEFnZ3JlZ2F0aW9uVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsIEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdHRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdHRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF2Z106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXZnLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudGRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50ZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5EYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkRheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5FbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkVuZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ib3VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ib3VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkluT3V0XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Jbk91dCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5LdXJ0b3Npc106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuS3VydG9zaXMsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWF4XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NYXgsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWR5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZHksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWVkaWFuXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZWRpYW4sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWluXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW4sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWludXRlXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW51dGUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTW9udGhZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Nb250aFllYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTm9uZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTm9uZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDFdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDNdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TZWNvbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNlY29uZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ta2V3bmVzc106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2tld25lc3MsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2cF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZwLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN1bV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3VtLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jRGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0RheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0hvdXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jSG91cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01pbnV0ZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNaW51dGUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNb250aF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNb250aCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1F0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNRdHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNTZWNvbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jU2Vjb25kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jV2Vla106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNXZWVrLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNZZWFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlVzZXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlVzZXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFycF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFycCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtkYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtkYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuWWVhcixcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWVsZFJvbGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWVsZFJvbGVUeXBlLCBFeHRlcm5hbEZpZWxkUm9sZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLkRpbWVuc2lvbl06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5EaW1lbnNpb24sXG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5NZWFzdXJlXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLk1lYXN1cmUsXG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5Vbmtub3duXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLlVua25vd24sXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgc2hlZXRUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxTaGVldFR5cGUsIEV4dGVybmFsU2hlZXRUeXBlPih7XG4gICAgW0ludGVybmFsU2hlZXRUeXBlLkRhc2hib2FyZF06IEV4dGVybmFsU2hlZXRUeXBlLkRhc2hib2FyZCxcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuU3RvcnldOiBFeHRlcm5hbFNoZWV0VHlwZS5TdG9yeSxcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuV29ya3NoZWV0XTogRXh0ZXJuYWxTaGVldFR5cGUuV29ya3NoZWV0XG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGFzaGJvYXJkT2JqZWN0VHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSwgRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlPih7XG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5FeHRlbnNpb25dOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuRXh0ZW5zaW9uLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuQmxhbmtdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuQmxhbmssXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5JbWFnZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5JbWFnZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkxlZ2VuZF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5MZWdlbmQsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYWdlRmlsdGVyXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhZ2VGaWx0ZXIsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYXJhbWV0ZXJDb250cm9sXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhcmFtZXRlckNvbnRyb2wsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5RdWlja0ZpbHRlcl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5RdWlja0ZpbHRlcixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRleHRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGV4dCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRpdGxlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRpdGxlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV2ViUGFnZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5XZWJQYWdlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0XTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGFUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRhVHlwZSwgRXh0ZXJuYWxEYXRhVHlwZT4oe1xuICAgIFtJbnRlcm5hbERhdGFUeXBlLkJvb2xdOiBFeHRlcm5hbERhdGFUeXBlLkJvb2wsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRGF0ZV06IEV4dGVybmFsRGF0YVR5cGUuRGF0ZSxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5EYXRlVGltZV06IEV4dGVybmFsRGF0YVR5cGUuRGF0ZVRpbWUsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRmxvYXRdOiBFeHRlcm5hbERhdGFUeXBlLkZsb2F0LFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkludF06IEV4dGVybmFsRGF0YVR5cGUuSW50LFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLlN0cmluZ106IEV4dGVybmFsRGF0YVR5cGUuU3RyaW5nXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyVXBkYXRlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmlsdGVyVXBkYXRlVHlwZSwgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlPih7XG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGRdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbCxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZV06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmUsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBhbGxvd2FibGVWYWx1ZXMgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZSwgRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuQWxsXTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuQWxsLFxuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5MaXN0XTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCxcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuUmFuZ2VdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVTdGVwUGVyaW9kID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRlU3RlcFBlcmlvZCwgRXh0ZXJuYWxEYXRlUGVyaW9kPih7XG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuWWVhcnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuWWVhcnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuUXVhcnRlcnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuUXVhcnRlcnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuTW9udGhzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLk1vbnRocyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5XZWVrc106IEV4dGVybmFsRGF0ZVBlcmlvZC5XZWVrcyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5EYXlzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLkRheXMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuSG91cnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuSG91cnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuTWludXRlc106IEV4dGVybmFsRGF0ZVBlcmlvZC5NaW51dGVzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlNlY29uZHNdOiBFeHRlcm5hbERhdGVQZXJpb2QuU2Vjb25kc1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVSYW5nZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGVSYW5nZVR5cGUsIEV4dGVybmFsRGF0ZVJhbmdlVHlwZT4oe1xuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuQ3VycmVudF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5DdXJyZW50LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdE5dOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdE4sXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHQsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0Tl06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0TixcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLlRvRGF0ZV06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5Ub0RhdGVcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBlcnJvckNvZGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEVycm9yQ29kZXMsIEV4dGVybmFsRXJyb3JDb2Rlcz4oe1xuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuSU5JVElBTElaQVRJT05fRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLklOVEVSTkFMX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5NSVNTSU5HX0VOVU1fTUFQUElOR106IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuTUlTU0lOR19QQVJBTUVURVJdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlBFUk1JU1NJT05fREVOSUVEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5QUkVTX01PREVMX1BBUlNJTkdfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlVOS05PV05fVkVSQl9JRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVkVSU0lPTl9OT1RfQ09ORklHVVJFRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5BUElOb3RJbml0aWFsaXplZFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpbHRlclR5cGUsIEV4dGVybmFsRmlsdGVyVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWwsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SYW5nZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SYW5nZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGUsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5IaWVyYXJjaGljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLnRzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuXG4vKipcbiAqIEVudW0gZGVmaW5pbmcgdGhlIDQgZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzIHdlIGhhdmUgZGVmaW5lZFxuICovXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIEluaXRpYWxpemUgPSAnaW5pdGlhbGl6ZScsXG4gIE5vdGlmaWNhdGlvbiA9ICdub3RpZmljYXRpb24nLFxuICBDb21tYW5kID0gJ2NvbW1hbmQnLFxuICBDb21tYW5kUmVzcG9uc2UgPSAnY29tbWFuZC1yZXNwb25zZSdcbn1cblxuLyoqXG4gKiBUaGUgTWVzc2FnZSBpbnRlcmZhY2UgaXMgdGhlIGJhc2UgaW50ZXJmYWNlIGZvciBhbGwgdGhlIG90aGVyXG4gKiBtZXNzYWdlIHR5cGUgaW50ZXJmYWNlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkIGZvciB0aGlzIG1lc3NhZ2VcbiAgICovXG4gIG1zZ0d1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhpcyBtZXNzYWdlXG4gICAqL1xuICBtc2dUeXBlOiBNZXNzYWdlVHlwZTtcbn1cblxuLyoqXG4gKiBUaGUgaW5pdGlhbGl6ZSBtZXNzYWdlIGlzIHRoZSBmaXJzdCBtZXNzYWdlIHdoaWNoIHdpbGwgYmUgc2VudFxuICogZnJvbSB0aGUgamF2YXNjcmlwdCB0byBzZXQgdXAgY29tbXVuaWNhdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbml0aWFsaXplTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhlIGFwaSB3aGljaCB0aGUgc2VuZGVyIHdhbnRzIHRvIHVzZVxuICAgKi9cbiAgYXBpVmVyc2lvbjogVmVyc2lvbk51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhpcyBtZXNzYWdpbmcgY29udHJhY3QgdG8gYmUgdXNlZC4gRm9yIG5vdywgdGhlcmVcbiAgICogc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgdmVyc2lvbiBidXQgc2VuZGluZyB0aGlzIGFsb25nIHNob3VsZCBoZWxwXG4gICAqIGlmIHdlIG5lZWQgdG8gYWRkIGEgbmV3IHZlcnNpb24gaW4gYSBmdXR1cmUgcmVsZWFzZVxuICAgKi9cbiAgY3Jvc3NGcmFtZVZlcnNpb246IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgYXQgdGhlIHRpbWUgb2YgaW5pdGlhbGl6YXRpb25cbiAgICovXG4gIG9wdGlvbnM/OiBJbml0aWFsaXphdGlvbk9wdGlvbnM7XG59XG5cbi8qKlxuICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgd2hlbiBhIG5vdGlmaWNhdGlvbiBvY2N1cnMgZnJvbSB0aGUgcHJlc2xheWVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIGlkIGZvciB0aGlzIHR5cGUgb2Ygbm90aWZpY2F0aW9uXG4gICAqL1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRhIHdoaWNoIGNhbWUgYWxvbmcgd2l0aCB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBkYXRhOiBNb2RlbDtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGNhbGxpbmcgYW4gaW50ZXJuYWwgY29udHJhY3QgY29tbWFuZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGNvbW1hbmQgd2hpY2ggc2hvdWxkIGJlIGV4ZWN1dGVkXG4gICAqL1xuICB2ZXJiSWQ6IFZlcmJJZDtcblxuICAvKipcbiAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBjb21tYW5kXG4gICAqL1xuICBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycztcbn1cblxuLyoqXG4gKiBUaGlzIG1lc3NhZ2UgaXMgc2VudCBpbiByZXNwb25zZSB0byBhIENvbW1hbmRNZXNzYWdlIHdpdGggdGhlXG4gKiByZXN1bHQgb2YgdGhhdCBjb21tYW5kcyBpbnZvY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogR3VpZCBvZiB0aGUgQ29tbWFuZE1lc3NhZ2Ugd2hpY2ggdGhpcyBpcyBpbiByZXNwb25zZSB0b1xuICAgKi9cbiAgY29tbWFuZEd1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdGhlcmUgd2FzIGFuIGVycm9yIHJldHVybmVkIGZyb20gdGhlIGNvbW1hbmQsIHRoaXMgd2lsbCBiZSBkZWZpbmVkXG4gICAqIGFuZCBjb250YWluIHRoZSBlcnJvclxuICAgKi9cbiAgZXJyb3I/OiBNb2RlbDtcblxuICAvKipcbiAgICogSWYgdGhlIGNvbW1hbmQgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LCB0aGlzIHdpbGwgY29udGFpbiB0aGUgY29tbWFuZCByZXN1bHRcbiAgICovXG4gIGRhdGE/OiBNb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIENsYXNzIGRlc2lnbmVkIHRvIHJlZ2lzdGVyIGFuZCB1bnJlZ2lzdGVyIGhhbmRsZXJzIGZyb20gYSB1c2VyLiBPbmx5IHRob3NlIGV2ZW50c1xuICogd2hpY2ggYXJlIGFkZGVkIHZpYSBBZGROZXdFdmVudFR5cGUgd2lsbCBiZSBzdXBwb3J0ZWQgYnkgdGhpcyBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5FdmVudExpc3RlbmVyTWFuYWdlciB7XG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJNYW5hZ2VyczogeyBbdGFibGVhdUV2ZW50VHlwZTogc3RyaW5nXTogU2luZ2xlRXZlbnRNYW5hZ2VyOyB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMgPSB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSxcbiAgICBoYW5kbGVyOiBDb250cmFjdC5UYWJsZWF1RXZlbnRIYW5kbGVyRm4pOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZEV2ZW50TmFtZSwgYENhbm5vdCBhZGQgZXZlbnQsIHVuc3VwcG9ydGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRUeXBlXS5hZGRFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBoYW5kbGVyOiBDb250cmFjdC5UYWJsZWF1RXZlbnRIYW5kbGVyRm4pOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuVW5zdXBwb3J0ZWRFdmVudE5hbWUsIGBDYW5ub3QgcmVtb3ZlIGV2ZW50LCB1bnN1cHBvcnRlZCBldmVudCB0eXBlOiAke2V2ZW50VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50VHlwZV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGROZXdFdmVudFR5cGUoZXZlbnRNYW5hZ2VyOiBTaW5nbGVFdmVudE1hbmFnZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRNYW5hZ2VyLmV2ZW50VHlwZV0gPSBldmVudE1hbmFnZXI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIHRoZSBTaW5nbGVFdmVudE1hbmFnZXIgaW50ZXJmYWNlIGZvciBhIHNpbmdsZSB0eXBlIG9mIFRhYmxlYXUgZXZlbnRcbiAqXG4gKiBAdGVtcGxhdGUgVEV2ZW50VHlwZSBUaGUgVGFibGVhdSBldmVudCB0eXBlIHRoaXMgY2xhc3Mgc3BlY2lhbGl6ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbmdsZUV2ZW50TWFuYWdlckltcGw8VEV2ZW50VHlwZSBleHRlbmRzIENvbnRyYWN0LlRhYmxlYXVFdmVudD4gaW1wbGVtZW50cyBTaW5nbGVFdmVudE1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGU7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiBBcnJheTwoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUpIHtcbiAgICB0aGlzLl9ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXZlbnRUeXBlKCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9ldmVudFR5cGU7XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyOiAoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXI6IChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJlZm9yZUNvdW50ID0gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gdGhpcy5faGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gICAgcmV0dXJuIGJlZm9yZUNvdW50ID4gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFdmVudChldmVudEdlbmVyYXRvcjogKCkgPT4gVEV2ZW50VHlwZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnRNb2RlbCA9IGV2ZW50R2VuZXJhdG9yKCk7XG4gICAgICAgIGhhbmRsZXIoZXZlbnRNb2RlbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoaXMgaGFuZGxlciBjb3VsZCBiZSBvdXRzaWRlIG91ciBjb250cm9sLCBqdXN0IGNhdGNoIGFueXRoaW5nIGl0IHRocm93cyBhbmQgY29udGludWUgb25cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbSB7XG4gIC8qKlxuICAgKiBzZXJpYWxpemVzIHRoZSBkYXRlIGludG8gdGhlIGZvcm1hdCB0aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cy5cbiAgICogQHBhcmFtIGRhdGUgdGhlIGRhdGUgdG8gc2VyaWFsaXplXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGg6IG51bWJlciA9IGRhdGUuZ2V0VVRDTW9udGgoKSArIDE7XG4gICAgY29uc3QgZGF5OiBudW1iZXIgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCBoaDogbnVtYmVyID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGNvbnN0IG1tOiBudW1iZXIgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWM6IG51bWJlciA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtoaH06JHttbX06JHtzZWN9YDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplQm9vbGVhbkZvclBsYXRmb3JtKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBib29sID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplTnVtYmVyRm9yUGxhdGZvcm0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBpbnB1dCBpcyBhIG51bWJlclxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlTnVtYmVyKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdudW1iZXInIHx8IGlucHV0IGluc3RhbmNlb2YgTnVtYmVyO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBpbnB1dCBpcyBhIERhdGVcbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZURhdGUoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIERhdGU7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlU3RyaW5nKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZUJvb2woaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ2Jvb2xlYW4nIHx8IGlucHV0IGluc3RhbmNlb2YgQm9vbGVhbjtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVQYXJhbXRlclZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChQYXJhbS5pc1R5cGVOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplTnVtYmVyRm9yUGxhdGZvcm0odmFsdWUgYXMgbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZURhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKHZhbHVlIGFzIERhdGUpO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlQm9vbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVCb29sZWFuRm9yUGxhdGZvcm0odmFsdWUgYXMgYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgVW5leHBlY3RlZCBpbnZhbGlkIHZhbHVlIGZvcjogJHt2YWx1ZX1gKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL1BhcmFtLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhVGFibGUge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGE6IEFycmF5PEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4+LFxuICAgIHByaXZhdGUgX2NvbHVtbnM6IEFycmF5PENvbnRyYWN0LkNvbHVtbj4sXG4gICAgcHJpdmF0ZSBfdG90YWxSb3dDb3VudDogbnVtYmVyLFxuICAgIHByaXZhdGUgX2lzVG90YWxSb3dDb3VudExpbWl0ZWQ6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaXNTdW1tYXJ5RGF0YTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9tYXJrc0luZm8/OiBBcnJheTxNYXJrSW5mbz4pIHtcbiAgICAvLyBUT0RPOiBnZXQgcmlkIG9mIHRoaXMgaW4gcmVkZXNpZ24uXG4gICAgdGhpcy5fbmFtZSA9IF9pc1N1bW1hcnlEYXRhID8gJ1N1bW1hcnkgRGF0YSBUYWJsZScgOiAnVW5kZXJseWluZyBEYXRhIFRhYmxlJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhKCk6IEFycmF5PEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpOiBBcnJheTxDb250cmFjdC5Db2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFya3NJbmZvKCk6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzSW5mbztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG90YWxSb3dDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJvd0NvdW50O1xuICB9XG5cbiAgcHVibGljIGdldCBpc1RvdGFsUm93Q291bnRMaW1pdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1RvdGFsUm93Q291bnRMaW1pdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1N1bW1hcnlEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1N1bW1hcnlEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXJrSW5mbyBpbXBsZW1lbnRzIENvbnRyYWN0Lk1hcmtJbmZvIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0Lk1hcmtUeXBlLFxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfdHVwbGVJZD86IE51bWJlclxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5NYXJrVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgcHVibGljIGdldCB0dXBsZUlkKCk6IE51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R1cGxlSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbiBpbXBsZW1lbnRzIENvbnRyYWN0LkNvbHVtbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9kYXRhVHlwZTogQ29udHJhY3QuRGF0YVR5cGUsIC8vIFRPRE86IHRoaXMgc2hvdWRsIGJlIGFuIGVudW0gdHlwZVxuICAgIHByaXZhdGUgX2lzUmVmZXJlbmNlZDogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVmZXJlbmNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWZlcmVuY2VkO1xuICB9XG5cbiAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YVZhbHVlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZTogYW55LFxuICAgIHByaXZhdGUgX2Zvcm1hdHRlZFZhbHVlOiBzdHJpbmcpIHsgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlZFZhbHVlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZhbGlkYXRvciA9IG5ldyBSZWdFeHAoXCJeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JFwiLCBcImlcIik7XG5cbiAgZnVuY3Rpb24gZ2VuKGNvdW50KSB7XG4gICAgdmFyIG91dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgaT0wOyBpPGNvdW50OyBpKyspIHtcbiAgICAgIG91dCArPSAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBHdWlkKGd1aWQpIHtcbiAgICBpZiAoIWd1aWQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50OyBgdmFsdWVgIGhhcyBubyB2YWx1ZS5cIik7XG4gICAgICBcbiAgICB0aGlzLnZhbHVlID0gR3VpZC5FTVBUWTtcbiAgICBcbiAgICBpZiAoZ3VpZCAmJiBndWlkIGluc3RhbmNlb2YgR3VpZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQudG9TdHJpbmcoKTtcblxuICAgIH0gZWxzZSBpZiAoZ3VpZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3VpZCkgPT09IFwiW29iamVjdCBTdHJpbmddXCIgJiYgR3VpZC5pc0d1aWQoZ3VpZCkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBndWlkO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAvLyBDb21wYXJpbmcgc3RyaW5nIGB2YWx1ZWAgYWdhaW5zdCBwcm92aWRlZCBgZ3VpZGAgd2lsbCBhdXRvLWNhbGxcbiAgICAgIC8vIHRvU3RyaW5nIG9uIGBndWlkYCBmb3IgY29tcGFyaXNvblxuICAgICAgcmV0dXJuIEd1aWQuaXNHdWlkKG90aGVyKSAmJiB0aGlzLnZhbHVlID09IG90aGVyO1xuICAgIH07XG5cbiAgICB0aGlzLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBHdWlkLkVNUFRZO1xuICAgIH07XG4gICAgXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBHdWlkLkVNUFRZID0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIjtcblxuICBHdWlkLmlzR3VpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZSBpbnN0YW5jZW9mIEd1aWQgfHwgdmFsaWRhdG9yLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpO1xuICB9O1xuXG4gIEd1aWQuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBHdWlkKFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIikpO1xuICB9O1xuXG4gIEd1aWQucmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIik7XG4gIH07XG5cbiAgaWYodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gR3VpZDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lkd1aWQgPSBHdWlkO1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcblxuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9JbXBsL1NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldCBleHRlbmRzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJhY3QuU2hlZXQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbXBsOiBTaGVldEltcGwpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogQ29udHJhY3QuU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLnNoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLnNpemU7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5maW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZSwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuUGFyYW1ldGVyPj4ge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuZ2V0UGFyYW1ldGVyc0FzeW5jKHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsImltcG9ydCB7IFZlcnNpb25OdW1iZXIgYXMgVmVyc2lvbk51bWJlckNvbnRyYWN0IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZXh0ZW5zaW9ucyBsaWJyYXJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uTnVtYmVyIGltcGxlbWVudHMgVmVyc2lvbk51bWJlckNvbnRyYWN0IHtcbiAgLy8gVXNpbmcgc29tZSB3ZWJwYWNrIHRyaWNrcywgd2UgY2FuIGluamVjdCB0aGlzIHZlcnNpb24gaW50byBvdXIgY29kZSAoa2luZGEgbGlrZSBjKysgcHJlcHJvY2Vzc29yIHN0dWZmKVxuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgdmVyc2lvbiBudW1iZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBWZXJzaW9uTnVtYmVyIHtcbiAgICByZXR1cm4gVmVyc2lvbk51bWJlci5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFNldFZlcnNpb25OdW1iZXIobnVtU3RyaW5nOiBzdHJpbmcsIGlzQWxwaGE6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBWZXJzaW9uTnVtYmVyLl9pbnN0YW5jZSA9IG5ldyBWZXJzaW9uTnVtYmVyKG51bVN0cmluZywgaXNBbHBoYSk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgbWFqb3I6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IG1pbm9yOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBmaXg6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IGlzQWxwaGE6IGJvb2xlYW47XG5cbiAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3RvciBzbyBldmVyeW9uZSB1c2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih2ZXJzaW9uU3RyaW5nOiBzdHJpbmcsIGlzQWxwaGE6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYXJ0cyA9IHZlcnNpb25TdHJpbmcuc3BsaXQoJy4nKS5tYXAocCA9PiBwYXJzZUludChwLCAxMCkpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgSW52YWxpZCB2ZXJzaW9uIG51bWJlcjogJHt2ZXJzaW9uU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHRoaXMubWFqb3IgPSBwYXJ0c1swXTtcbiAgICB0aGlzLm1pbm9yID0gcGFydHNbMV07XG4gICAgdGhpcy5maXggPSBwYXJ0c1syXTtcbiAgICB0aGlzLmlzQWxwaGEgPSBpc0FscGhhO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLm1ham9yfS4ke3RoaXMubWlub3J9LiR7dGhpcy5maXh9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVmVyc2lvbk51bWJlci50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnZlcnRzIGZyb20gYSBzb3VyY2UgZW51bSB2YWx1ZSB0byBkZXN0aW5hdGlvbiBlbnVtXG4gKiB2YWx1ZSBnaXZlbiBhIG1hcHBpbmcgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24gd2hlbiBjb25zdHJ1Y3RlZC5cbiAqXG4gKiBOb3RlOiBUaGlzIGV4YWN0IHNhbWUgY2xhc3MgaXMgZGVmaW5lZCBpbiBhcGktY29yZS4gIEdpdmVuIGl0cyBzbWFsbFxuICogbmF0dXJlLCBpdCBpcyBub3Qgd29ydGggaGF2aW5nIGluIGEgc2VwYXJhdGUgcHJvamVjdCB0byBzaGFyZSB0aGlzIGJldHdlZW5cbiAqIGFwaS1jb3JlIGFuZCBhcGktc2hhcmVkLiAgSWYgbW9yZSB1dGlsaXR5IGZ1bmN0aW9uYWxpdHkgaXMgYWRkZWQgdGhhdCBpcyB1c2VkIGJ5IGFwaS1jb3JlXG4gKiBhbmQgYXBpLXNoYXJlZCBidXQgaGFzIG5vIG90aGVyIGRlcGVuZGVjaWVzLCBhIHV0aWx0aXR5IHByb2plY3QgbWlnaHQgYmUgbWVyaXRlZCxcbiAqIGFuZCB0aGlzIGNsYXNzIGNvdWxkIGJlIG1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgRW51bUNvbnZlcnRlcjxUU291cmNlVHlwZSBleHRlbmRzIHN0cmluZywgVERlc3RpbmF0aW9uVHlwZT4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWFwcGluZ3M6IHsgW2VudW1WYWw6IHN0cmluZ106IFREZXN0aW5hdGlvblR5cGU7IH0sXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZhbD86IFREZXN0aW5hdGlvblR5cGUpIHsgfVxuXG4gIHB1YmxpYyBjb252ZXJ0KGVudW1WYWw6IFRTb3VyY2VUeXBlLCB0aHJvd0lmTWlzc2luZz86IGJvb2xlYW4pOiBURGVzdGluYXRpb25UeXBlIHtcbiAgICBpZiAodGhpcy5fbWFwcGluZ3MuaGFzT3duUHJvcGVydHkoZW51bVZhbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXBwaW5nc1tlbnVtVmFsIGFzIHN0cmluZ107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRWYWwgIT09IHVuZGVmaW5lZCAmJiAhdGhyb3dJZk1pc3NpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgRW51bSBNYXBwaW5nIG5vdCBmb3VuZCBmb3I6ICR7ZW51bVZhbH1gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRW51bUNvbnZlcnRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdUV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVhdUV2ZW50IHtcbiAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdUV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoZWV0SW5mb0ltcGw6IFNoZWV0SW5mb0ltcGwpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBDb250cmFjdC5TaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRQYXRoKCk6IFNoZWV0UGF0aCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRQYXRoO1xuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IENvbnRyYWN0LlNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0U2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIocGFyYW1ldGVyTmFtZSwgJ3BhcmFtZXRlck5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmZpbmRQYXJhbWV0ZXJCeU5hbWVBc3luYyhwYXJhbWV0ZXJOYW1lLCBzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0FzeW5jKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuUGFyYW1ldGVyPj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0UGFyYW1ldGVyc0ZvclNoZWV0QXN5bmModGhpcy5zaGVldFBhdGgsIHNoZWV0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL0ltcGwvRGF0YVNvdXJjZUltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUltcGw6IERhdGFTb3VyY2VJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dHJhY3RVcGRhdGVUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmV4dHJhY3RVcGRhdGVUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4dHJhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmlzRXh0cmFjdDtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLnJlZnJlc2hBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRBY3RpdmVUYWJsZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vRmllbGRJbXBsJztcblxuaW1wb3J0IHsgQ29ubmVjdGlvblN1bW1hcnkgfSBmcm9tICcuLi9Db25uZWN0aW9uU3VtbWFyeSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL0ZpZWxkJztcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gJy4uL1RhYmxlU3VtbWFyeSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZUltcGwge1xuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PEZpZWxkPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUluZm86IEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX2ZpZWxkcyA9IF9kYXRhU291cmNlSW5mby5maWVsZHMubWFwKGZpZWxkTW9kZWwgPT4ge1xuICAgICAgY29uc3QgZmllbGRJbXBsID0gbmV3IEZpZWxkSW1wbChmaWVsZE1vZGVsLCB0aGlzKTtcbiAgICAgIHJldHVybiBuZXcgRmllbGQoZmllbGRJbXBsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UucmVmcmVzaEFzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPihzdW1tYXJpZXMgPT4ge1xuICAgICAgcmV0dXJuIHN1bW1hcmllcy5tYXAoc3VtbWFyeSA9PiBuZXcgQ29ubmVjdGlvblN1bW1hcnkoc3VtbWFyeSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5nZXRBY3RpdmVUYWJsZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+Pih0YWJsZUluZm9zID0+IHtcbiAgICAgIHJldHVybiB0YWJsZUluZm9zLm1hcCh0YWJsZUluZm8gPT4gbmV3IFRhYmxlU3VtbWFyeSh0YWJsZUluZm8pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuXG4gICAgY29uc3QgZ2V0RGF0YVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIGdldERhdGFTZXJ2aWNlLmdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgICB0aGlzLmlkLFxuICAgICAgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsXG4gICAgICBvcHRpb25zLm1heFJvd3MgfHwgMCwgICAgICAgLy8gMCBhbmQgW10gYXJlIGRlZmF1bHRzXG4gICAgICBvcHRpb25zLmNvbHVtbnNUb0luY2x1ZGUgfHwgW10pO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGF0YVNvdXJjZSwgJ2RhdGFTb3VyY2UnKTtcblxuICAgIHRoaXMuX2ZpZWxkcyA9IHRoaXMuX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIGRhdGFTb3VyY2UpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW5mbzogSW50ZXJuYWxDb250cmFjdC5GaWVsZCxcbiAgICBwcml2YXRlIF9wYXJlbnREYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZEFnZ3JlZ2F0aW9uVHlwZS5jb252ZXJ0KHRoaXMuX2ZpZWxkSW5mby5hZ2dyZWdhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZFJvbGVUeXBlLmNvbnZlcnQodGhpcy5fZmllbGRJbmZvLnJvbGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vSW1wbC9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIENvbnRyYWN0LkZpZWxkIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW1wbDogRmllbGRJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5hZ2dyZWdhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5yb2xlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5UeXBlKCk6IENvbnRyYWN0LkNvbHVtblR5cGUge1xuICAgIHRocm93IEVycm9ySGVscGVycy5hcGlOb3RJbXBsZW1lbnRlZCgnRmllbGQuY29sdW1uVHlwZScpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVTaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1U2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1U2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVXb3Jrc2hlZXRFdmVudCB7XG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBwcm90ZWN0ZWQgX3dvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0KSB7XG4gICAgc3VwZXIodHlwZSwgX3dvcmtzaGVldCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdVNoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1U2hlZXRFdmVudCB7XG4gIHByaXZhdGUgX3NoZWV0OiBDb250cmFjdC5TaGVldDtcblxuICBwdWJsaWMgZ2V0IHNoZWV0KCk6IENvbnRyYWN0LlNoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLl9zaGVldCA9IHNoZWV0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFZpc3VhbElkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuLyoqXG4gKiBEZWZpbmVzIHdoaWNoIHR5cGUgb2YgZ2V0RGF0YSBjYWxsIHRvIG1ha2UuXG4gKi9cbmV4cG9ydCBlbnVtIEdldERhdGFUeXBlIHtcbiAgU3VtbWFyeSA9ICdzdW1tYXJ5JyxcbiAgVW5kZXJseWluZyA9ICd1bmRlcmx5aW5nJ1xufVxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGltcGxlbWVudGluZyB0aGUgbG9naWMgZm9yIHZhcmlvdXMgZ2V0RGF0YSBjYWxsc1xuICpcbiAqIEBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2VcbiAqIEBleHRlbmRzIHtBcGlTZXJ2aWNlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdldERhdGFTZXJ2aWNlIGV4dGVuZHMgQXBpU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxpbWl0IG9mIHJvd3MgZm9yIGdldFVuZGVybHlpbmdEYXRhQXN5bmNcbiAgICovXG4gIGdldE1heFJvd0xpbWl0KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgdW5kZXJseWluZyBkYXRhIGZvciBhIHBhcnRpY3VsYXIgdmlzdWFsXG4gICAqXG4gICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAgKiBAcGFyYW0ge0dldERhdGFUeXBlfSBnZXRUeXBlICBUaGUgdHlwZSBvZiBnZXREYXRhIGNhbGwgdG8gbWFrZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUFsaWFzZXMgIFdoZXRoZXIgb3Igbm90IGFsaWFzZXMgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBpZ25vcmVTZWxlY3Rpb24gIFdoZXRoZXIgb3Igbm90IHNlbGVjdGlvbiBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVBbGxDb2x1bW5zICBTaG91bGQgYWxsIGNvbHVtbnMgYmUgaW5jbHVkZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0dXJuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKFxuICAgIHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBnZXRUeXBlOiBHZXREYXRhVHlwZSxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIGlnbm9yZVNlbGVjdGlvbjogYm9vbGVhbixcbiAgICBpbmNsdWRlQWxsQ29sdW1uczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRTZWxlY3RlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWFya3MgZm9yIGEgZ2l2ZW4gdmlzdWFsXG4gICAqXG4gICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICogQHJldHVybnMge1Byb21pc2U8QWN0aXZlTWFya3M+fSAgQ29sbGVjdGlvbiBvZiBkYXRhIHRhYmxlcyB3aXRoIHRoZSBhY3RpdmUgbWFya3NcbiAgKi9cbiAgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPjtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFzb3VyY2VJZCAgVGhlIGlkIG9mIHRoZSBkYXRhc291cmNlIHRvIGdldCBkYXRhIGZvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUFsaWFzZXMgIFdoZXRoZXIgYWxpYXMgdmFsdWVzIHNob3VsZCBiZSBpZ25vcmVkIGluIHRoZSByZXR1cm5lZCBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSb3dzIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIHJldHJpZXZlXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gY29sdW1uc1RvSW5jbHVkZSAgQ29sbGVjdGlvbiBvZiBjb2x1bW4gY2FwdGlvbnMgd2hpY2ggc2hvdWxkIGJlIHJldHVybmVkLiBFbXB0eSBtZWFucyBhbGwgY29sdW1uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+fSAgRGF0YSB0YWJsZSB3aXRoIHRoZSByZXF1ZXN0ZWQgZGF0YVxuICAgKi9cbiAgZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICBkYXRhc291cmNlSWQ6IHN0cmluZyxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcixcbiAgICBjb2x1bW5zVG9JbmNsdWRlOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCJpbXBvcnQgeyBFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vVXRpbHMvRW51bUNvbnZlcnRlcic7XG5pbXBvcnQge1xuICBGaWx0ZXJEb21haW5UeXBlIGFzIEV4dGVybmFsRG9tYWluVHlwZSxcbiAgRmlsdGVyTnVsbE9wdGlvbiBhcyBFeHRlcm5hbE51bGxPcHRpb24sXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBab25lVmlzaWJpbGl0eVR5cGUgYXMgWm9uZVZpc2liaWxpdHlUeXBlXG59IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRmlsdGVyRG9tYWluVHlwZSBhcyBJbnRlcm5hbERvbWFpblR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24gYXMgSW50ZXJuYWxOdWxsT3B0aW9uLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZVxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5cbi8qIHRzbGludDpkaXNhYmxlOnR5cGVkZWYgLSBEaXNhYmxlIHRoaXMgdG8gbWFrZSBkZWNsYXJpbmcgdGhlc2UgY2xhc3NlcyBhIGJpdCBlYXNpZXIgKi9cbi8qKlxuICogTWFwcyBlbnVtcyB1c2VkIGJ5IHRoZSBleHRlcm5hbC1hcGktY29udHJhY3QgdG8gdGhlIGVudW1zIHVzZWRcbiAqIGluIHRoZSBpbnRlcm5hbC1hcGktY29udHJhY3QsIHdoaWNoIGRldmVsb3BlcnMgY29kZSBhZ2FpbnN0LlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzIHtcbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJEb21haW5UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxEb21haW5UeXBlLCBJbnRlcm5hbERvbWFpblR5cGU+KHtcbiAgICBbRXh0ZXJuYWxEb21haW5UeXBlLlJlbGV2YW50XTogSW50ZXJuYWxEb21haW5UeXBlLlJlbGV2YW50LFxuICAgIFtFeHRlcm5hbERvbWFpblR5cGUuRGF0YWJhc2VdOiBJbnRlcm5hbERvbWFpblR5cGUuRGF0YWJhc2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBudWxsT3B0aW9ucyA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsTnVsbE9wdGlvbiwgSW50ZXJuYWxOdWxsT3B0aW9uPih7XG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5BbGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uQWxsVmFsdWVzLFxuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uTm9uTnVsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5Ob25OdWxsVmFsdWVzLFxuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uTnVsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5OdWxsVmFsdWVzXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyVXBkYXRlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZSwgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlPih7XG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGRdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbCxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZV06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmUsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBzZXRWaXNpYmlsaXR5VHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPFpvbmVWaXNpYmlsaXR5VHlwZSwgQm9vbGVhbj4oe1xuICAgIFtab25lVmlzaWJpbGl0eVR5cGUuU2hvd106IHRydWUsXG4gICAgW1pvbmVWaXNpYmlsaXR5VHlwZS5IaWRlXTogZmFsc2VcbiAgfSk7XG59XG4vKiB0c2xpbnQ6ZW5hYmxlOnR5cGVkZWYgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9FeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCIvKipcbiAqIFRoaXMgaXMgeW91ciBtYWluLiBUaGlzIGlzIHdoZXJlIHlvdSByZS1leHBvcnQgZXZlcnl0aGluZyB5b3Ugd2FudCB0byBiZSBwdWJsaWNseSBhdmFpbGFibGUuXG4gKlxuICogVGhlIGJ1aWxkIGVuZm9yY2VzIHRoYXQgdGhlIGZpbGUgaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGdsb2JhbCB2YXJpYWJsZSB0aGF0IGlzIGV4cG9ydGVkLlxuICovXG5cbi8vIFRoZSBmb2xsb3dpbmcgcG9seWZpbGxzIGFyZSBuZWVkZWQgZm9yIElFMTFcbmltcG9ydCAnY29yZS1qcy9mbi9wcm9taXNlJztcbmltcG9ydCAnY29yZS1qcy9mbi9hcnJheS9maW5kJztcbmltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJztcblxuLy8gRHVlIHRvIHRoZSB3YXkgd2UgY29uZmlndXJlZCB3ZWJwYWNrLCB3ZSBzaG91bGQgYmUgZXhwb3J0aW5nIHRoaW5ncyB3aGljaCB3aWxsIGJlIHVuZGVyXG4vLyBhIGdsb2JhbCB2YXJpYWJsZSBjYWxsZWQgXCJ0YWJsZWF1XCIuIEV4cG9ydCBldmVyeXRoaW5nIHdlIHdhbnQgdG8gYmUgdmlzaWJsZSB1bmRlciB0YWJsZWF1XG4vLyBmcm9tIHRoaXMgZmlsZS5cblxuaW1wb3J0IHsgRXh0ZW5zaW9uc0ltcGwgfSBmcm9tICcuL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5pbXBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9BcGlTaGFyZWQnO1xuXG5kZWNsYXJlIHZhciBFWFRFTlNJT05fVkVSU0lPTl9JU19BTFBIQTogYm9vbGVhbjtcbmNvbnN0IGlzQWxwaGE6IGJvb2xlYW4gPSB0eXBlb2YgRVhURU5TSU9OX1ZFUlNJT05fSVNfQUxQSEEgIT09ICd1bmRlZmluZWQnID8gRVhURU5TSU9OX1ZFUlNJT05fSVNfQUxQSEEgOiBmYWxzZTtcblxuZGVjbGFyZSB2YXIgRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUjogc3RyaW5nO1xuVmVyc2lvbk51bWJlci5TZXRWZXJzaW9uTnVtYmVyKHR5cGVvZiBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSICE9PSAndW5kZWZpbmVkJyA/IEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVIgOiAnMC4wLjAnLCBpc0FscGhhKTtcblxuY29uc3QgZXh0ZW5zaW9uSW1wbCA9IG5ldyBFeHRlbnNpb25zSW1wbCgpO1xuZXhwb3J0IGNvbnN0IGV4dGVuc2lvbnMgPSBuZXcgRXh0ZW5zaW9ucyhleHRlbnNpb25JbXBsKTtcblxuLy8gRXhwb3J0IEVudW1zXG4vLyBUaGVzZSBzaG93IHVwIHVuZGVyIHRoZSB0YWJsZWF1IG9iamVjdC4gSS5lLiB0YWJsZWF1LkV4dGVuc2lvbkNvbnRleHQuU2VydmVyXG5leHBvcnQge1xuICBFeHRlbnNpb25Db250ZXh0LFxuICBFeHRlbnNpb25Nb2RlLFxuICBBbmFseXRpY3NPYmplY3RUeXBlLFxuICBDb2x1bW5UeXBlLFxuICBEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSxcbiAgRGF0ZVJhbmdlVHlwZSxcbiAgRW5jb2RpbmdUeXBlLFxuICBFcnJvckNvZGVzLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSxcbiAgRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyRG9tYWluVHlwZSxcbiAgRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSxcbiAgRmlsdGVyTnVsbE9wdGlvbixcbiAgTWFya1R5cGUsXG4gIFBhcmFtZXRlclZhbHVlVHlwZSxcbiAgUGVyaW9kVHlwZSxcbiAgUXVpY2tUYWJsZUNhbGNUeXBlLFxuICBTZWxlY3Rpb25VcGRhdGVUeXBlLFxuICBTaGVldFR5cGUsXG4gIFNvcnREaXJlY3Rpb24sXG4gIFRhYmxlYXVFdmVudFR5cGUsXG4gIFRyZW5kTGluZU1vZGVsVHlwZSxcbiAgWm9uZVZpc2liaWxpdHlUeXBlXG59IGZyb20gJy4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb250ZXh0TWVudUV2ZW50LFxuICBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlcixcbiAgTm90aWZpY2F0aW9uSWQsXG4gIFNoZWV0UGF0aCxcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbiAgSW5pdGlhbGl6YXRpb25PcHRpb25zLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIERhc2hib2FyZCxcbiAgRGFzaGJvYXJkSW1wbCxcbiAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwLFxuICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICByZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLFxuICBTZXJ2aWNlTmFtZXNcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGVudCB9IGZyb20gJy4uL05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4uL05hbWVzcGFjZXMvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi9OYW1lc3BhY2VzL1NldHRpbmdzJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9VSSc7XG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyc7XG5pbXBvcnQgeyBTZXR0aW5nc0ltcGwgfSBmcm9tICcuL1NldHRpbmdzSW1wbCc7XG5pbXBvcnQgeyBVSUltcGwgfSBmcm9tICcuL1VJSW1wbCc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQvVmVyc2lvbk51bWJlcic7XG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrTWFwID0geyBba2V5OiBzdHJpbmddOiAoKSA9PiB7fSB9O1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc0ltcGwge1xuICBwcml2YXRlIF9pbml0aWFsaXphdGlvblByb21pc2U6IFByb21pc2U8c3RyaW5nPjtcblxuICBwdWJsaWMgZGFzaGJvYXJkQ29udGVudDogRGFzaGJvYXJkQ29udGVudDtcbiAgcHVibGljIGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgcHVibGljIHVpOiBVSTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZUFzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLCBjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBpbml0T3B0aW9uczogSW5pdGlhbGl6YXRpb25PcHRpb25zID0geyBpc0FscGhhOiBWZXJzaW9uTnVtYmVyLkluc3RhbmNlLmlzQWxwaGEgfTtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IHRoaW5nIHdlIHdhbnQgdG8gZG8gaXMgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGEgZGVza3RvcCBkaXNwYXRjaGVyIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdXNcbiAgICAgICAgaWYgKEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5oYXNEZXNrdG9wQXBpRGlzcGF0Y2hlclByb21pc2UoKSkge1xuICAgICAgICAgIC8vIFJ1bm5pbmcgaW4gZGVza3RvcCwgdXNlIHRoaXMgcHJvbWlzZVxuICAgICAgICAgIGNvbnN0IGRlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSA9IEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5nZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoaW5pdE9wdGlvbnMpO1xuXG4gICAgICAgICAgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlLnRoZW4oKGRpcGF0Y2hlckZhY3RvcnkpID0+XG4gICAgICAgICAgICB0aGlzLm9uRGlzcGF0Y2hlclJlY2VpdmVkKGRpcGF0Y2hlckZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcykpXG4gICAgICAgICAgICAudGhlbigob3BlblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuUGF5bG9hZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXZSBtdXN0IGJlIHJ1bm5pbmcgaW4gc2VydmVyLCBzbyB3ZSBzaG91bGQgdHJ5IHRvIGtpY2sgb2YgdGhlIHNlcnZlciBkaXNwYXRjaGVyIGJvb3RzdHJhcHBpbmdcbiAgICAgICAgICBjb25zdCBvbkRpc3BhdGNoZXJSZWNlaXZlZENhbGxiYWNrID0gdGhpcy5vbkRpc3BhdGNoZXJSZWNlaXZlZC5iaW5kKHRoaXMpO1xuICAgICAgICAgIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcCh3aW5kb3csIElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04sIGluaXRPcHRpb25zKS50aGVuKChmYWN0b3J5OiBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb25EaXNwYXRjaGVyUmVjZWl2ZWRDYWxsYmFjayhmYWN0b3J5LCBpc0V4dGVuc2lvbkRpYWxvZywgY29udGV4dE1lbnVDYWxsYmFja3MpO1xuICAgICAgICAgIH0pLnRoZW4oKG9wZW5QYXlsb2FkKSA9PiB7IHJlc29sdmUob3BlblBheWxvYWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EaXNwYXRjaGVyUmVjZWl2ZWQoXG4gICAgZGlzcGF0Y2hlckZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gICAgaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sXG4gICAgY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICBjb25zdCBkaXNwYXRjaGVyID0gZGlzcGF0Y2hlckZhY3RvcnkoSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTik7XG5cbiAgICAvLyBDYWxsIHRvIHJlZ2lzdGVyIGFsbCB0aGUgc2VydmljZXMgd2hpY2ggd2lsbCB1c2UgdGhlIG5ld2x5IGluaXRpYWxpemVkIGRpc3BhdGNoZXJcbiAgICByZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzKGRpc3BhdGNoZXIpO1xuICAgIHJlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzKGRpc3BhdGNoZXIpO1xuXG4gICAgLy8gR2V0IHRoZSBpbml0aWFsaXphdGlvbiBzZXJ2aWNlIGFuZCBpbml0aWFsaXplIHRoaXMgZXh0ZW5zaW9uXG4gICAgY29uc3QgaW5pdGlhbGl6YXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8SW5pdGlhbGl6YXRpb25TZXJ2aWNlPihcbiAgICAgIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuSW5pdGlhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrTWFwS2V5cyA9IChjb250ZXh0TWVudUZ1bmN0aW9ucykgPyBPYmplY3Qua2V5cyhjb250ZXh0TWVudUZ1bmN0aW9ucykgOiBbXTtcbiAgICByZXR1cm4gaW5pdGlhbGl6YXRpb25TZXJ2aWNlLmluaXRpYWxpemVEYXNoYm9hcmRFeHRlbnNpb25zQXN5bmMoaXNFeHRlbnNpb25EaWFsb2csIGNhbGxiYWNrTWFwS2V5cykudGhlbjxzdHJpbmc+KHJlc3VsdCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdVbmV4cGVjdGVkIGVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXNoYm9hcmRDb250ZW50ID0gdGhpcy5pbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChyZXN1bHQuZXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyxcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbkluc3RhbmNlLmxvY2F0b3IuZGFzaGJvYXJkUGF0aCk7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHJlc3VsdC5leHRlbnNpb25FbnZpcm9ubWVudCk7XG4gICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5pbml0aWFsaXplU2V0dGluZ3MocmVzdWx0LmV4dGVuc2lvblNldHRpbmdzSW5mbyk7XG4gICAgICB0aGlzLnVpID0gbmV3IFVJKG5ldyBVSUltcGwoKSk7XG5cbiAgICAgIC8vIEFmdGVyIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQsIHNldHVwIGxpc3RlbmVycyBmb3IgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0XG4gICAgICAvLyBhcmUgbWVhbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW5ldmVyIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zKTtcblxuICAgICAgLy8gSW4gdGhlIG5vcm1hbCBpbml0aWFsaXphdGlvbiBjYXNlLCB0aGlzIHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nLiAgV2hlbiByZXR1cm5pbmcgZnJvbSBpbml0aWFsaXplQXN5bmMgdG8gdGhlXG4gICAgICAvLyBkZXZlbG9wZXIsIHdlIGp1c3QgaW5nb3JlIHRoYXQgc3RyaW5nLiAgSW4gdGhlIGNhc2Ugb2YgaW5pdGlhbGl6aW5nIGZyb20gYW4gZXh0ZW5zaW9uIGRpYWxvZywgdGhpcyBzdHJpbmdcbiAgICAgIC8vIGlzIGFuIG9wdGlvbmFsIHBheWxvYWQgc2VudCBmcm9tIHRoZSBwYXJlbnQgZXh0ZW5zaW9uLlxuICAgICAgcmV0dXJuIHJlc3VsdC5leHRlbnNpb25EaWFsb2dQYXlsb2FkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChpbmZvOiBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLCBzaGVldFBhdGg6IFNoZWV0UGF0aCk6IERhc2hib2FyZENvbnRlbnQge1xuICAgIGNvbnN0IGRhc2hib2FyZEltcGwgPSBuZXcgRGFzaGJvYXJkSW1wbChpbmZvLCBzaGVldFBhdGgpO1xuICAgIGNvbnN0IGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmQoZGFzaGJvYXJkSW1wbCk7XG4gICAgcmV0dXJuIG5ldyBEYXNoYm9hcmRDb250ZW50KGRhc2hib2FyZCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IFNldHRpbmdzIHtcbiAgICBjb25zdCBzZXR0aW5nc0ltcGwgPSBuZXcgU2V0dGluZ3NJbXBsKHNldHRpbmdzSW5mbyk7XG4gICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5nc0ltcGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQ29udGV4dE1lbnVDYWxsYmFja3MoY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcblxuICAgIC8vIFVucmVnaXN0ZXIgZnVuY3Rpb24gbm90IHVzZWQgc2luY2UgdGhlc2Ugbm90aWZpY2F0aW9ucyBzaG91bGQgYmVcbiAgICAvLyBvYnNlcnZlZCBmb3IgdGhlIGZ1bGwgbGlmZXRpbWUgb2YgdGhlIGV4dGVuc2lvbi5cbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5Db250ZXh0TWVudUNsaWNrLCAobW9kZWwpID0+IHtcbiAgICAgIC8vIExldCB0aHJvdWdoIGFueSBjb250ZXh0IG1lbnUgZXZlbnQsIHRoZXNlIGFyZSBhbHJlYWR5IGZpbHRlcmVkIG9uIGFwaS1jb3JlXG4gICAgICAvLyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIGxvY2F0b3IuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAoZXZlbnQ6IENvbnRleHRNZW51RXZlbnQpID0+IHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnRleHQgbWVudSBJRFxuICAgICAgaWYgKGNvbnRleHRNZW51RnVuY3Rpb25zKSB7XG4gICAgICAgIGlmICghY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBSZWNlaXZlZCB1bmV4cGVjdGVkIGNvbnRleHQgbWVudSBJZCBmcm9tIGV2ZW50OiAke2V2ZW50LmlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwiLy8gQWxsIGVudW0gdmFsdWVzIG1hZGUgYXZhaWxhYmxlIHRvIEV4dGVuc2lvbnMgZGV2ZWxvcGVycy5cbi8vIEVudW1zIHNob3VsZCBiZSBrZXB0IGluIGFscGhhYmV0aWNhbCBvcmRlci5cblxuLyoqXG4gKiBUaGUgY29udGV4dCBpbiB3aGljaCB0aGUgRXh0ZW5zaW9ucyBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uQ29udGV4dCB7XG4gIERlc2t0b3AgPSAnZGVza3RvcCcsXG4gIFNlcnZlciA9ICdzZXJ2ZXInXG59XG5cbi8qKlxuICogVGhlIG1vZGUgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbk1vZGUge1xuICBBdXRob3JpbmcgPSAnYXV0aG9yaW5nJyxcbiAgVmlld2luZyA9ICd2aWV3aW5nJ1xufVxuXG5leHBvcnQgZW51bSBBbmFseXRpY3NPYmplY3RUeXBlIHtcbiAgQ2x1c3RlciA9ICdjbHVzdGVyJyxcbiAgRm9yZWNhc3QgPSAnZm9yZWNhc3QnLFxuICBUcmVuZExpbmUgPSAndHJlbmQtbGluZSdcbn1cblxuZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gIERpc2NyZXRlID0gJ2Rpc2NyZXRlJyxcbiAgQ29udGludW91cyA9ICdjb250aW51b3VzJ1xufVxuXG4vKipcbiAqIFdoYXQgdGhlIG9iamVjdCByZXByZXNlbnRzIGluIGEgZGFzaGJvYXJkLlxuICovXG5leHBvcnQgZW51bSBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgQmxhbmsgPSAnYmxhbmsnLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0JyxcbiAgUXVpY2tGaWx0ZXIgPSAncXVpY2stZmlsdGVyJyxcbiAgUGFyYW1ldGVyQ29udHJvbCA9ICdwYXJhbWV0ZXItY29udHJvbCcsXG4gIFBhZ2VGaWx0ZXIgPSAncGFnZS1maWx0ZXInLFxuICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgVGl0bGUgPSAndGl0bGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBJbWFnZSA9ICdpbWFnZScsXG4gIFdlYlBhZ2UgPSAnd2ViLXBhZ2UnLFxuICBFeHRlbnNpb24gPSAnZXh0ZW5zaW9uJ1xufVxuXG4vKipcbiAqIFRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZGF0YSBhIHZhbHVlIGNhbiBoYXZlXG4gKi9cbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIEludCA9ICdpbnQnLFxuICBGbG9hdCA9ICdmbG9hdCcsXG4gIEJvb2wgPSAnYm9vbCcsXG4gIERhdGUgPSAnZGF0ZScsXG4gIERhdGVUaW1lID0gJ2RhdGUtdGltZScsXG4gIFNwYXRpYWwgPSAnc3BhdGlhbCdcbn1cblxuLyoqXG4gKiBWYWxpZCBkYXRlIHJhbmdlcyBmb3IgYSByZWxhdGl2ZSBkYXRlIGZpbHRlci5cbiAqL1xuZXhwb3J0IGVudW0gRGF0ZVJhbmdlVHlwZSB7XG4gIExhc3QgPSAnbGFzdCcsXG4gIExhc3ROID0gJ2xhc3QtbicsXG4gIE5leHQgPSAnbmV4dCcsXG4gIE5leHROID0gJ25leHQtbicsXG4gIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gIFRvRGF0ZSA9ICd0by1kYXRlJ1xufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBDb2x1bW4gPSAnY29sdW1uJyxcbiAgUm93ID0gJ3JvdycsXG4gIFBhZ2UgPSAncGFnZScsXG4gIEZpbHRlciA9ICdmaWx0ZXInLFxuICBNYXJrc1R5cGUgPSAnbWFya3MtdHlwZScsXG4gIE1lYXN1cmVWYWx1ZXMgPSAnbWVhc3VyZS12YWx1ZXMnLFxuICBDb2xvciA9ICdjb2xvcicsXG4gIFNpemUgPSAnc2l6ZScsXG4gIExhYmVsID0gJ2xhYmVsJyxcbiAgRGV0YWlsID0gJ2RldGFpbCcsXG4gIFRvb2x0aXAgPSAndG9vbHRpcCcsXG4gIFNoYXBlID0gJ3NoYXBlJyxcbiAgUGF0aCA9ICdwYXRoJyxcbiAgQW5nbGUgPSAnYW5nbGUnXG59XG5cbi8qKlxuICogQWxsIGVycm9yIGNvZGVzIHVzZWQgYnkgdGhlIEV4dGVuc2lvbnMgQVBJLlxuICovXG5leHBvcnQgZW51bSBFcnJvckNvZGVzIHtcbiAgLyoqXG4gICAqIFRocm93biB3aGVuIGNhbGxlciBhdHRlbXB0cyB0byBleGVjdXRlIGNvbW1hbmQgYmVmb3JlIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAqL1xuICBBUElOb3RJbml0aWFsaXplZCA9ICdhcGktbm90LWluaXRpYWxpemVkJyxcbiAgLyoqXG4gICAqIE9ubHkgb25lIGRpYWxvZyBjYW4gYmUgb3BlbmVkIGF0IHRpbWUgd2l0aCB0aGUgVUkgbmFtZXNwYWNlIGZ1bmN0aW9uYWxpdHkuXG4gICAqL1xuICBEaWFsb2dBbHJlYWR5T3BlbiA9ICdkaWFsb2ctYWxyZWFkeS1vcGVuJyxcbiAgLyoqXG4gICAqIFRoZSBvcGVuIGRpYWxvZyB3YXMgY2xvc2VkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgRGlhbG9nQ2xvc2VkQnlVc2VyID0gJ2RpYWxvZy1jbG9zZWQtYnktdXNlcicsXG4gIC8qKlxuICAgKiBBbiBlcnJvciBvY2N1cnJlZCB3aXRoaW4gdGhlIFRhYmxlYXUgRXh0ZW5zaW9ucyBBUEkuIENvbnRhY3QgVGFibGVhdSBTdXBwb3J0LlxuICAgKi9cbiAgSW50ZXJuYWxFcnJvciA9ICdpbnRlcm5hbC1lcnJvcicsXG4gIC8qKlxuICAgKiBBIGRpYWxvZyBtdXN0IHN0YXJ0IG9uIHRoZSBzYW1lIGRvbWFpbiBhcyB0aGUgcGFyZW50IGV4dGVuaW9uLlxuICAgKi9cbiAgSW52YWxpZERvbWFpbkRpYWxvZyA9ICdpbnZhbGlkLWRpYWxvZy1kb21haW4nLFxuICAvKipcbiAgICogQSBwYXJhbWV0ZXIgaXMgbm90IHRoZSBjb3JyZWN0IGRhdGEgdHlwZSBvciBmb3JtYXQuIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIGluIHRoZSBFcnJvci5tZXNzYWdlIGZpZWxkLlxuICAgKi9cbiAgSW52YWxpZFBhcmFtZXRlciA9ICdpbnZhbGlkLXBhcmFtZXRlcicsXG4gIC8qKlxuICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIGZpbHRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgKi9cbiAgTWlzc2luZ0ZpbHRlciA9ICdtaXNzaW5nLWZpbHRlcicsXG4gIC8qKlxuICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIHBhcmFtZXRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgKi9cbiAgTWlzc2luZ1BhcmFtZXRlciA9ICdtaXNzaW5nLXBhcmFtZXRlcicsXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG4gIFNlcnZlckVycm9yID0gJ3NlcnZlci1lcnJvcicsXG4gIC8qKlxuICAgKiBEZXZlbG9wZXIgY2Fubm90IHNhdmUgc2V0dGluZ3Mgd2hpbGUgYW5vdGhlciBzYXZlIGlzIHN0aWxsIGluIHByb2dyZXNzLlxuICAgKi9cbiAgU2V0dGluZ1NhdmVJblByb2dyZXNzID0gJ3NldHRpbmctc2F2ZS1pbi1wcm9ncmVzcycsXG4gIC8qKlxuICAgKiBBbiB1bmtub3duIGV2ZW50IG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGUgY2FsbCB0byBWaXouYWRkRXZlbnRMaXN0ZW5lcm9yIFZpei5yZW1vdmVFdmVudExpc3RlbmVyLlxuICAgKi9cbiAgVW5zdXBwb3J0ZWRFdmVudE5hbWUgPSAndW5zdXBwb3J0ZWQtZXZlbnQtbmFtZScsXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB3YXMgdXNlZCBmb3IgYSB0eXBlIG9mIGRhdGFzb3VyY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhhdCBtZXRob2QgKHNlZSBnZXRBY3RpdmVUYWJsZXNBc3luYyBmb3IgYW4gZXhhbXBsZSlcbiAgICovXG4gIFVuc3VwcG9ydGVkTWV0aG9kRm9yRGF0YVNvdXJjZVR5cGUgPSAndW5zdXBwb3J0ZWQtbWV0aG9kLWZvci1kYXRhLXNvdXJjZS10eXBlJ1xufVxuXG4vKipcbiAqICBUeXBlIG9mIGFnZ3JlZ2F0aW9uIG9uIGEgZmllbGQuXG4gKi9cbmV4cG9ydCBlbnVtIEZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgU3VtID0gJ3N1bScsXG4gIEF2ZyA9ICdhdmcnLFxuICBNaW4gPSAnbWluJyxcbiAgTWF4ID0gJ21heCcsXG4gIFN0ZGV2ID0gJ3N0ZGV2JyxcbiAgU3RkZXZwID0gJ3N0ZGV2cCcsXG4gIFZhciA9ICd2YXInLFxuICBWYXJwID0gJ3ZhcnAnLFxuICBDb3VudCA9ICdjb3VudCcsXG4gIENvdW50ZCA9ICdjb3VudGQnLFxuICBNZWRpYW4gPSAnbWVkaWFuJyxcbiAgQXR0ciA9ICdhdHRyJyxcbiAgTm9uZSA9ICdub25lJyxcbiAgWWVhciA9ICd5ZWFyJyxcbiAgUXRyID0gJ3F0cicsXG4gIE1vbnRoID0gJ21vbnRoJyxcbiAgRGF5ID0gJ2RheScsXG4gIEhvdXIgPSAnaG91cicsXG4gIE1pbnV0ZSA9ICdtaW51dGUnLFxuICBTZWNvbmQgPSAnc2Vjb25kJyxcbiAgV2VlayA9ICd3ZWVrJyxcbiAgV2Vla2RheSA9ICd3ZWVrZGF5JyxcbiAgTW9udGhZZWFyID0gJ21vbnRoLXllYXInLFxuICBNZHkgPSAnbWR5JyxcbiAgRW5kID0gJ2VuZCcsXG4gIFRydW5jWWVhciA9ICd0cnVuYy15ZWFyJyxcbiAgVHJ1bmNRdHIgPSAndHJ1bmMtcXRyJyxcbiAgVHJ1bmNNb250aCA9ICd0cnVuYy1tb250aCcsXG4gIFRydW5jV2VlayA9ICd0cnVuYy13ZWVrJyxcbiAgVHJ1bmNEYXkgPSAndHJ1bmMtZGF5JyxcbiAgVHJ1bmNIb3VyID0gJ3RydW5jLWhvdXInLFxuICBUcnVuY01pbnV0ZSA9ICd0cnVuYy1taW51dGUnLFxuICBUcnVuY1NlY29uZCA9ICd0cnVuYy1zZWNvbmQnLFxuICBRdWFydDEgPSAncXVhcnQxJyxcbiAgUXVhcnQzID0gJ3F1YXJ0MycsXG4gIFNrZXduZXNzID0gJ3NrZXduZXNzJyxcbiAgS3VydG9zaXMgPSAna3VydG9zaXMnLFxuICBJbk91dCA9ICdpbi1vdXQnLFxuICBVc2VyID0gJ3VzZXInXG59XG5cbi8qKlxuICogUm9sZSBvZiBhIGZpZWxkLlxuICovXG5leHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgRGltZW5zaW9uID0gJ2RpbWVuc2lvbicsXG4gIE1lYXN1cmUgPSAnbWVhc3VyZScsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuLyoqXG4gKiBBbiBlbnVtZXJhdGlvbiBvZiB0aGUgdmFsaWQgdHlwZXMgb2YgZmlsdGVycyB0aGF0IGNhbiBiZSBhcHBsaWVkLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIEhpZXJhcmNoaWNhbCA9ICdoaWVyYXJjaGljYWwnLFxuICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmUtZGF0ZSdcbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IHVwZGF0ZSB0eXBlcyBmb3IgYXBwbHlpbmcgZmlsdGVyXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbi8qKlxuICogVGhlIGRvbWFpbiB0eXBlIGZvciBhIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJEb21haW5UeXBlIHtcbiAgLyoqXG4gICAqIFRoZSBkb21haW4gdmFsdWVzIHRoYXQgYXJlIHJlbGV2YW50IHRvIHRoZSBzcGVjaWZpZWQgZmlsdGVyXG4gICAqIGkuZS4gdGhlIGRvbWFpbiBpcyByZXN0cmljdGVkIGJ5IGEgcHJldmlvdXMgZmlsdGVyXG4gICAqL1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIC8qKlxuICAgKiBsaXN0IG9mIGFsbCBwb3NzaWJsZSBkb21haW4gdmFsdWVzIGZyb20gZGF0YWJhc2VcbiAgICovXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIFRoZSBvcHRpb24gZm9yIHNwZWNpZnlpbmcgd2hpY2ggdmFsdWVzIHRvIGluY2x1ZGUgZm9yIGZpbHRlcmluZ1xuICogSW5kaWNhdGVzIHdoYXQgdG8gZG8gd2l0aCBudWxsIHZhbHVlcyBmb3IgYSBnaXZlbiBmaWx0ZXIgb3IgbWFyayBzZWxlY3Rpb24gY2FsbC5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyTnVsbE9wdGlvbiB7XG4gIE51bGxWYWx1ZXMgPSAnbnVsbC12YWx1ZXMnLFxuICBOb25OdWxsVmFsdWVzID0gJ25vbi1udWxsLXZhbHVlcycsXG4gIEFsbFZhbHVlcyA9ICdhbGwtdmFsdWVzJ1xufVxuXG4vKipcbiAqIFR5cGUgb2YgbWFyayBmb3IgYSBnaXZlbiBtYXJrcyBjYXJkIGluIGEgdml6LlxuICovXG5leHBvcnQgZW51bSBNYXJrVHlwZSB7XG4gIEJhciA9ICdiYXInLFxuICBMaW5lID0gJ2xpbmUnLFxuICBBcmVhID0gJ2FyZWEnLFxuICBTcXVhcmUgPSAnc3F1YXJlJyxcbiAgQ2lyY2xlID0gJ2NpcmNsZScsXG4gIFNoYXBlID0gJ3NoYXBlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgTWFwID0gJ21hcCcsXG4gIFBpZSA9ICdwaWUnLFxuICBHYW50dEJhciA9ICdnYW50dC1iYXInLFxuICBQb2x5Z29uID0gJ3BvbHlnb24nXG59XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gZGVzY3JpYmluZyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGFsbG93YWJsZSB2YWx1ZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIHJlc3RyaWN0aW5nIHRoZSBkb21haW4gb2YgYSBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGVudW0gUGFyYW1ldGVyVmFsdWVUeXBlIHtcbiAgQWxsID0gJ2FsbCcsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJhbmdlID0gJ3JhbmdlJ1xufVxuXG4vKipcbiAqIERhdGUgcGVyaW9kIHVzZWQgaW4gZmlsdGVycyBhbmQgaW4gcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGVudW0gUGVyaW9kVHlwZSB7XG4gIFllYXJzID0gJ3llYXJzJyxcbiAgUXVhcnRlcnMgPSAncXVhcnRlcnMnLFxuICBNb250aHMgPSAnbW9udGhzJyxcbiAgV2Vla3MgPSAnd2Vla3MnLFxuICBEYXlzID0gJ2RheXMnLFxuICBIb3VycyA9ICdob3VycycsXG4gIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gIFNlY29uZHMgPSAnc2Vjb25kcydcbn1cblxuZXhwb3J0IGVudW0gUXVpY2tUYWJsZUNhbGNUeXBlIHtcbiAgUnVubmluZ1RvdGFsID0gJ3J1bm5pbmctdG90YWwnLFxuICBEaWZmZXJlbmNlID0gJ2RpZmZlcmVuY2UnLFxuICBQZXJjZW50RGlmZmVyZW5jZSA9ICdwZXJjZW50LWRpZmZlcmVuY2UnLFxuICBQZXJjZW50T2ZUb3RhbCA9ICdwZXJjZW50LW9mLXRvdGFsJyxcbiAgUmFuayA9ICdyYW5rJyxcbiAgUGVyY2VudGlsZSA9ICdwZXJjZW50aWxlJyxcbiAgTW92aW5nQXZlcmFnZSA9ICdtb3ZpbmctYXZlcmFnZScsXG4gIFlURFRvdGFsID0gJ3l0ZC10b3RhbCcsXG4gIENvbXBvdW5kR3Jvd3RoUmF0ZSA9ICdjb21wb3VuZC1ncm93dGgtcmF0ZScsXG4gIFllYXJPdmVyWWVhckdyb3d0aCA9ICd5ZWFyLW92ZXIteWVhci1ncm93dGgnLFxuICBZVERHcm93dGggPSAneXRkLWdyb3d0aCcsXG4gIFVuZGVmaW5lZCA9ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogRW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gKi9cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblVwZGF0ZVR5cGUge1xuICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgQWRkID0gJ3NlbGVjdC1hZGQnLFxuICBSZW1vdmUgPSAnc2VsZWN0LXJlbW92ZSdcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBzaGVldCBhIFNoZWV0IG9iamVjdCByZXByZXNlbnRzXG4gKi9cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIFNvcnREaXJlY3Rpb24ge1xuICBJbmNyZWFzaW5nID0gJ2luY3JlYXNpbmcnLFxuICBEZWNyZWFzaW5nID0gJ2RlY3JlYXNpbmcnXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNlcnRhaW4gdHlwZSBvZiBldmVudCB3aGljaCBjYW4gYmUgbGlzdGVuZWQgZm9yXG4gKi9cbmV4cG9ydCBlbnVtIFRhYmxlYXVFdmVudFR5cGUge1xuICAvKiogUmFpc2VkIHdoZW4gYW55IGZpbHRlciBoYXMgY2hhbmdlZCBzdGF0ZS4qL1xuICBGaWx0ZXJDaGFuZ2VkID0gJ2ZpbHRlci1jaGFuZ2VkJyxcblxuICAvKiogVGhlIHNlbGVjdGVkIG1hcmtzIG9uIGEgdmlzdWFsaXphdGlvbiBoYXMgY2hhbmdlZCAqL1xuICBNYXJrU2VsZWN0aW9uQ2hhbmdlZCA9ICdtYXJrLXNlbGVjdGlvbi1jaGFuZ2VkJyxcblxuICAvKiogQSBwYXJhbWV0ZXIgaGFzIGhhZCBpdHMgdmFsdWUgbW9kaWZpZWQgKi9cbiAgUGFyYW1ldGVyQ2hhbmdlZCA9ICdwYXJhbWV0ZXItY2hhbmdlZCcsXG5cbiAgLyoqIFNldHRpbmdzIGhhdmUgYmVlbiBjaGFuZ2VkIGZvciB0aGlzIGV4dGVuc2lvbi4gKi9cbiAgU2V0dGluZ3NDaGFuZ2VkID0gJ3NldHRpbmdzLWNoYW5nZWQnXG59XG5cbmV4cG9ydCBlbnVtIFRyZW5kTGluZU1vZGVsVHlwZSB7XG4gIExpbmVhciA9ICdsaW5lYXInLFxuICBMb2dhcml0aG1pYyA9ICdsb2dhcml0aG1pYycsXG4gIEV4cG9uZW50aWFsID0gJ2V4cG9uZW50aWFsJyxcbiAgUG9seW5vbWlhbCA9ICdwb2x5bm9taWFsJ1xufVxuXG4vKipcbiAqIEVudW0gdGhhdCByZXByZXNlbnRzIHRoZSB2aXNpYmlsaXR5IHN0YXRlIG9mIGEgem9uZVxuICogQHNpbmNlIDEuMi4wXG4gKi9cbmV4cG9ydCBlbnVtIFpvbmVWaXNpYmlsaXR5VHlwZSB7XG4gIC8qKiBVc2VkIGZvciB0dXJuaW5nIG9uIHRoZSB2aXNpYml0eSBvZiBhIHpvbmUgaW4gdGhlIGRhc2hib2FyZC4qL1xuICBTaG93ID0gJ3Nob3cnLFxuXG4gIC8qKiBVc2VkIGZvciB0dXJuaW5nIG9mZiB0aGUgdmlzaWJpdHkgb2YgYSB6b25lIGluIHRoZSBkYXNoYm9hcmQuKi9cbiAgSGlkZSA9ICdoaWRlJyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovZ2l0bGFiL2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcy9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L2dpdGxhYi9hcGktaW50ZXJuYWwtY29udHJhY3QtanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk51bWJlci5pc0ludGVnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL251bWJlci9pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgaXNJbnRlZ2VyOiByZXF1aXJlKCcuL19pcy1pbnRlZ2VyJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCkge1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi9naXRsYWIvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgRGVza3RvcCA9ICdkZXNrdG9wJyxcbiAgU2VydmVyID0gJ3NlcnZlcicsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gRXh0ZW5zaW9uTW9kZSB7XG4gIEF1dGhvcmluZyA9ICdhdXRob3JpbmcnLFxuICBWaWV3aW5nID0gJ3ZpZXdpbmcnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgSW50ID0gJ2ludCcsXG4gIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgQm9vbCA9ICdib29sJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgU3BhdGlhbCA9ICdzcGF0aWFsJ1xufVxuXG5leHBvcnQgZW51bSBFbmNvZGVkRGF0YVR5cGUge1xuICBOdW1iZXIgPSAnbnVtYmVyJyxcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIERhdGUgPSAnZGF0ZScsXG4gIEJvb2xlYW4gPSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIElOSVRJQUxJWkFUSU9OX0VSUk9SID0gJ2luaXRpYWxpemF0aW9uLWVycm9yJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICBNSVNTSU5HX0VOVU1fTUFQUElORyA9ICdtaXNzaW5nLWVudW0tbWFwcGluZycsXG4gIE1JU1NJTkdfUEFSQU1FVEVSID0gJ21pc3NpbmctcGFyYW1ldGVyJyxcbiAgUEVSTUlTU0lPTl9ERU5JRUQgPSAncGVybWlzc2lvbi1kZW5pZWQnLFxuICBQUkVTX01PREVMX1BBUlNJTkdfRVJST1IgPSAncHJlcy1tb2RlbC1wYXJzaW5nLWVycm9yJyxcbiAgVkVSU0lPTl9OT1RfQ09ORklHVVJFRCA9ICd2ZXJzaW9uLW5vdC1jb25maWd1cmVkJyxcbiAgVklTSUJJTElUWV9FUlJPUiA9ICd2aXNpYmlsaXR5LWVycm9yJyxcbiAgVU5LTk9XTl9WRVJCX0lEID0gJ3Vua25vd24tdmVyYi1pZCdcbn1cblxuZXhwb3J0IGVudW0gRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICBTdW0gPSAnc3VtJyxcbiAgQXZnID0gJ2F2ZycsXG4gIE1pbiA9ICdtaW4nLFxuICBNYXggPSAnbWF4JyxcbiAgU3RkZXYgPSAnc3RkZXYnLFxuICBTdGRldnAgPSAnc3RkZXZwJyxcbiAgVmFyID0gJ3ZhcicsXG4gIFZhcnAgPSAndmFycCcsXG4gIENvdW50ID0gJ2NvdW50JyxcbiAgQ291bnRkID0gJ2NvdW50ZCcsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBBdHRyID0gJ2F0dHInLFxuICBOb25lID0gJ25vbmUnLFxuICBZZWFyID0gJ3llYXInLFxuICBRdHIgPSAncXRyJyxcbiAgTW9udGggPSAnbW9udGgnLFxuICBEYXkgPSAnZGF5JyxcbiAgSG91ciA9ICdob3VyJyxcbiAgTWludXRlID0gJ21pbnV0ZScsXG4gIFNlY29uZCA9ICdzZWNvbmQnLFxuICBXZWVrID0gJ3dlZWsnLFxuICBXZWVrZGF5ID0gJ3dlZWtkYXknLFxuICBNb250aFllYXIgPSAnbW9udGgteWVhcicsXG4gIE1keSA9ICdtZHknLFxuICBFbmQgPSAnZW5kJyxcbiAgVHJ1bmNZZWFyID0gJ3RydW5jLXllYXInLFxuICBUcnVuY1F0ciA9ICd0cnVuYy1xdHInLFxuICBUcnVuY01vbnRoID0gJ3RydW5jLW1vbnRoJyxcbiAgVHJ1bmNXZWVrID0gJ3RydW5jLXdlZWsnLFxuICBUcnVuY0RheSA9ICd0cnVuYy1kYXknLFxuICBUcnVuY0hvdXIgPSAndHJ1bmMtaG91cicsXG4gIFRydW5jTWludXRlID0gJ3RydW5jLW1pbnV0ZScsXG4gIFRydW5jU2Vjb25kID0gJ3RydW5jLXNlY29uZCcsXG4gIFF1YXJ0MSA9ICdxdWFydDEnLFxuICBRdWFydDMgPSAncXVhcnQzJyxcbiAgU2tld25lc3MgPSAnc2tld25lc3MnLFxuICBLdXJ0b3NpcyA9ICdrdXJ0b3NpcycsXG4gIEluT3V0ID0gJ2luLW91dCcsXG4gIFVzZXIgPSAndXNlcidcbn1cblxuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogIFRoZSBkaWZmZXJlbnQgdXBkYXRlIHR5cGVzIGZvciBhcHBseWluZyBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIERvbWFpblJlc3RyaWN0aW9uVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuZXhwb3J0IGVudW0gRGF0ZVN0ZXBQZXJpb2Qge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbi8qKlxuICogVGhlIG9wdGlvbiBmb3Igc3BlY2lmeWluZyB3aGljaCB2YWx1ZXMgdG8gaW5jbHVkZSBmb3IgZmlsdGVyaW5nLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJOdWxsT3B0aW9uIHtcbiAgTnVsbFZhbHVlcyA9ICdudWxsdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub25udWxsdmFsdWVzJyxcbiAgQWxsVmFsdWVzID0gJ2FsbHZhbHVlcydcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBmaWx0ZXIgZG9tYWluXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlckRvbWFpblR5cGUge1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgaW5jbHVkZWQgdmFsdWVzIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMge1xuICBJbmNsdWRlTnVsbCA9ICdpbmNsdWRlLW51bGwnLFxuICBJbmNsdWRlTm9uTnVsbCA9ICdpbmNsdWRlLW5vbi1udWxsJyxcbiAgSW5jbHVkZUFsbCA9ICdpbmNsdWRlLWFsbCdcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICBCYXIgPSAnYmFyJyxcbiAgTGluZSA9ICdsaW5lJyxcbiAgQXJlYSA9ICdhcmVhJyxcbiAgU3F1YXJlID0gJ3NxdWFyZScsXG4gIENpcmNsZSA9ICdjaXJjbGUnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIE1hcCA9ICdtYXAnLFxuICBQaWUgPSAncGllJyxcbiAgR2FudHRCYXIgPSAnZ2FudHQtYmFyJyxcbiAgUG9seWdvbiA9ICdwb2x5Z29uJyxcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSB0eXBlIG9mIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIFJlbGF0aXZlRGF0ZSA9ICdyZWxhdGl2ZURhdGUnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIERhdGVSYW5nZVR5cGUgb2YgYSByZWxhdGl2ZSBkYXRlIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbGFzdCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3QgPSAnbGFzdCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3ROID0gJ2xhc3ROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbmV4dCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHQgPSAnbmV4dCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHROID0gJ25leHROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gZXZlcnl0aGluZyB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgVG9EYXRlID0gJ3RvRGF0ZSdcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiB0aGUgbGF1bmNoaW5nIG9mIGFuIGV4dGVuc2lvbiBkaWFsb2cgc3VjY2VlZGVkIG9yIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uRGlhbG9nUmVzdWx0IHtcbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIEludmFsaWREb21haW4gPSAnaW52YWxpZC1kb21haW4nLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9jb250cmFjdC9Nb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi9jb250cmFjdC9Ob3RpZmljYXRpb25zJztcbmltcG9ydCB7IFZlcmJJZCB9IGZyb20gJy4uL2NvbnRyYWN0L1ZlcmJzJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL1ZlcnNpb25OdW1iZXInO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25PcHRpb25zIH0gZnJvbSAnLi9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25IYW5kbGVyID0gKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVQYXJhbWV0ZXJzIHtcbiAgW2tleTogc3RyaW5nXTogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVJlc3BvbnNlIHtcbiAgcmVzdWx0OiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG4gIGRhdGE6IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG4gIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPjtcbiAgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkO1xuICB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbn1cblxuLy8gVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgZ2V0IGNhbGxlZCBmcm9tIHRoZSBleHRlcm5hbCBzaWRlIG9mIHRoaW5ncyB0byBpbnN0YW50aWF0ZSBhIHByb3Blcmx5XG4vLyB2ZXJzaW9uZWQgQVBJIGRpc3BhdGNoZXIgd2hpY2ggdGhpcyBwYXJ0aWN1bGFyIHZlcnNpb24gb2YgZXh0ZXJuYWwga25vd3MgaG93IHRvIHVzZVxuZXhwb3J0IHR5cGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSA9IChpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogVmVyc2lvbk51bWJlcikgPT4gSW50ZXJuYWxBcGlEaXNwYXRjaGVyO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBfX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PjsgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlciB7XG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2Uob3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucyk6IFByb21pc2U8SW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4ge1xuICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucy5pc0FscGhhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBhbiBhbHBoYSB2ZXJzaW9uIG9mIHRoZSBFeHRlbnNpb25zIEFQSS4gUGxlYXNlIHVwZ3JhZGUgdG8gYW4gb2ZmaWNpYWwgcmVsZWFzZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93Ll9fdGFibGVhdURlc2t0b3BEaXNwYXRjaGVyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGhhc0Rlc2t0b3BBcGlEaXNwYXRjaGVyUHJvbWlzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKGRpc3BhdGNoZXI6IFByb21pc2U8SW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4pOiB2b2lkIHtcbiAgICB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2ludGVyZmFjZS9JbnRlcm5hbEFwaURpc3BhdGNoZXIudHMiLCJleHBvcnQgZW51bSBOb3RpZmljYXRpb25JZCB7XG4gIFNlbGVjdGVkTWFya3NDaGFuZ2VkID0gJ3NlbGVjdGVkLW1hcmtzLWNoYW5nZWQnLFxuICBQYXJhbWV0ZXJDaGFuZ2VkID0gJ3BhcmFtZXRlci1jaGFuZ2VkJyxcbiAgRmlsdGVyQ2hhbmdlZCA9ICdmaWx0ZXItY2hhbmdlZCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1VwZGF0ZSA9ICdleHRlbnNpb24tZGlhbG9nLXVwZGF0ZScsXG4gIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJyxcbiAgQ29udGV4dE1lbnVDbGljayA9ICdjb250ZXh0LW1lbnUtY2xpY2snLFxuICBUZXN0Q29udmVyc2lvbk5vdGlmaWNhdGlvbiA9ICd0ZXN0LWNvbnZlcnNpb24tbm90aWZpY2F0aW9uJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9Ob3RpZmljYXRpb25zLnRzIiwiZXhwb3J0IGVudW0gUGFyYW1ldGVySWQge1xuICBFeHRlbnNpb25Mb2NhdG9yID0gJ2V4dGVuc2lvbi1sb2NhdG9yJyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyA9ICdleHRlbnNpb24tYm9vdHN0cmFwLWluZm8nLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8gPSAnZXh0ZW5zaW9uLXNldHRpbmdzLWluZm8nLFxuICBWaXN1YWxJZCA9ICd2aXN1YWwtaWQnLFxuICBTaGVldFBhdGggPSAnc2hlZXQtcGF0aCcsXG4gIElnbm9yZUFsaWFzZXMgPSAnaWdub3JlLWFsaWFzZXMnLFxuICBJZ25vcmVTZWxlY3Rpb24gPSAnaWdub3JlLXNlbGVjdGlvbicsXG4gIEluY2x1ZGVBbGxDb2x1bW5zID0gJ2luY2x1ZGUtYWxsLWNvbHVtbnMnLFxuICBNYXhSb3dzID0gJ21heC1yb3dzJyxcbiAgVW5kZXJseWluZ0RhdGFUYWJsZSA9ICd1bmRlcmx5aW5nLWRhdGEtdGFibGUnLFxuICBVbmRlcmx5aW5nU3VtbWFyeURhdGFUYWJsZSA9ICd1bmRlcmx5aW5nLXN1bW1hcnktZGF0YS10YWJsZScsXG4gIERhdGFTb3VyY2VEYXRhVGFibGUgPSAnZGF0YS1zb3VyY2UtZGF0YS10YWJsZScsXG4gIFNldHRpbmdzVmFsdWVzID0gJ3NldHRpbmdzLXZhbHVlcycsXG4gIFNlbGVjdGVkRGF0YSA9ICdzZWxlY3RlZC1kYXRhJyxcbiAgSGlnaGxpZ2h0ZWREYXRhID0gJ2hpZ2hsaWdodGVkLWRhdGEnLFxuXG4gIC8vIEZpbHRlciBQYXJhbXNcbiAgRmllbGROYW1lID0gJ2ZpZWxkLW5hbWUnLFxuICBGaWx0ZXJWYWx1ZXMgPSAnZmlsdGVyLXZhbHVlcycsXG4gIEZpbHRlclVwZGF0ZVR5cGUgPSAnZmlsdGVyLXVwZGF0ZS10eXBlJyxcbiAgSXNFeGNsdWRlTW9kZSA9ICdpcy1leGNsdWRlJyxcbiAgRmlsdGVyUmFuZ2VNaW4gPSAnZmlsdGVyLXJhbmdlLW1pbicsXG4gIEZpbHRlclJhbmdlTWF4ID0gJ2ZpbHRlci1yYW5nZS1tYXgnLFxuICBGaWx0ZXJSYW5nZU51bGxPcHRpb24gPSAnZmlsdGVyLXJhbmdlLW51bGwtb3B0aW9uJyxcbiAgV29ya3NoZWV0RmlsdGVycyA9ICd3b3Jrc2hlZXQtZmlsdGVycycsXG4gIEZpZWxkSWQgPSAnZmllbGQtaWQnLFxuICBEb21haW5UeXBlID0gJ2RvbWFpbi10eXBlJyxcbiAgQ2F0ZWdvcmljYWxEb21haW4gPSAnY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgUXVhbnRpdGF0aXZlRG9tYWluID0gJ3F1YW50aXRhdGl2ZS1kbWFpbicsXG4gIEZpZWxkID0gJ2ZpZWxkJyxcblxuICBXb3Jrc2hlZXROYW1lID0gJ3dvcmtzaGVldC1uYW1lJyxcbiAgRGFzaGJvYXJkTmFtZSA9ICdkYXNoYm9hcmQnLFxuXG4gIFBhcmFtZXRlckluZm8gPSAncGFyYW1ldGVyLWluZm8nLFxuICBQYXJhbWV0ZXJJbmZvcyA9ICdwYXJhbWV0ZXItaW5mb3MnLFxuICBQYXJhbWV0ZXJDYXB0aW9uID0gJ3BhcmVtZXRlci1jYXB0aW9uJyxcbiAgUGFyYW1ldGVyRmllbGROYW1lID0gJ3BhcmFtZXRlci1maWVsZC1uYW1lJyxcbiAgUGFyYW1ldGVyVmFsdWUgPSAncGFyYW1ldGVyLXZhbHVlJyxcbiAgU2VsZWN0aW9uID0gJ3NlbGVjdGlvbicsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgPSAnc2VsZWN0aW9uVXBkYXRlVHlwZScsXG4gIEhpZXJWYWxTZWxlY3Rpb25Nb2RlbHMgPSAnaGllcmFyY2hpY2FsVmFsdWVTZWxlY3Rpb25Nb2RlbHMnLFxuICBRdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzID0gJ3F1YW50YXRpdmVSYW5nZVNlbGVjdGlvbk1vZGVscycsXG4gIERpbVZhbFNlbGVjdGlvbk1vZGVscyA9ICdkaW1lbnNpb25WYWx1ZVNlbGVjdGlvbk1vZGVscycsXG5cbiAgQWN0aXZlVGFibGVzSW5mbyA9ICdhY3RpdmUtdGFibGVzLWluZm8nLFxuICBEYXRhU291cmNlID0gJ2RhdGEtc291cmNlJyxcbiAgRGF0YVNvdXJjZUlkID0gJ2RhdGEtc291cmNlLWlkJyxcbiAgRGVsdGFUaW1lTXMgPSAnZGVsdGEtdGltZS1tcycsXG4gIFNob3VsZFJlZnJlc2hEUyA9ICdzaG91bGQtcmVmcmVzaC1kcycsXG4gIERhdGFTY2hlbWEgPSAnZGF0YS1zY2hlbWEnLFxuICBEYXRhU291cmNlTmFtZSA9ICdkYXRhLXNvdXJjZS1uYW1lJyxcbiAgQ29sdW1uc1RvSW5jbHVkZSA9ICdjb2x1bW5zLXRvLWluY2x1ZGUnLFxuICBKb2luRGVzY3JpcHRpb24gPSAnam9pbi1kZXNjcmlwdGlvbicsXG4gIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdjb25uZWN0aW9uLWRlc2NyaXB0aW9uLXN1bW1hcmllcycsXG5cbiAgRXh0ZW5zaW9uRGlhbG9nVXJsID0gJ2V4dGVuc2lvbi1kaWFsb2ctdXJsJyxcbiAgRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZCA9ICdleHRlbnNpb24tZGlhbG9nLXBheWxvYWQnLFxuICBJc0V4dGVuc2lvbkRpYWxvZyA9ICdpcy1leHRlbnNpb24tZGlhbG9nJyxcbiAgRXh0ZW5zaW9uRGlhbG9nSCA9ICdleHRlbnNpb24tZGlhbG9nLWhlaWdodCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1cgPSAnZXh0ZW5zaW9uLWRpYWxvZy13aWR0aCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCA9ICdleHRlbnNpb24tZGlhbG9nLXJlc3VsdCcsXG5cbiAgRXh0ZW5zaW9uQ29udGV4dE1lbnVJZHMgPSAnZXh0ZW5zaW9uLWNvbnRleHQtbWVudS1pZHMnLFxuXG4gIFRlc3RDb252ZXJzaW9uUGFyYW1ldGVyID0gJ3Rlc3QtY29udmVyc2lvbi1wYXJhbWV0ZXInLFxuXG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBab25lSWRzVmlzaWJpbGl0eU1hcCA9ICd6b25lLWlkcy12aXNpYmlsaXR5LW1hcCdcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwiLy8gRGVjbGFyZSB0aGlzIGtleSB0eXBlIGFuZCBleHBvcnQgdGhlIE5vdGlmaWNhdGlvbklkIHRvIG1ha2UgdGhpcyBiZWhhdmUgbGlrZSBhIHN0cmluZyBlbnVtXG5leHBvcnQgZW51bSBWZXJiSWQge1xuICBBcHBseUNhdGVnb3JpY2FsRmlsdGVyID0gJ2NhdGVnb3JpY2FsLWZpbHRlcicsXG4gIEFwcGx5UmFuZ2VGaWx0ZXIgPSAncmFuZ2UtZmlsdGVyJyxcbiAgQ2xlYXJGaWx0ZXIgPSAnY2xlYXItZmlsdGVyJyxcbiAgSW5pdGlhbGl6ZUV4dGVuc2lvbiA9ICdpbml0aWFsaXplLWV4dGVuc2lvbicsXG4gIEdldERhdGFTdW1tYXJ5RGF0YSA9ICdnZXQtc3VtbWFyeS1kYXRhJyxcbiAgR2V0VW5kZXJseWluZ0RhdGEgPSAnZ2V0LXVuZGVybHlpbmctZGF0YScsXG4gIEdldERhdGFTb3VyY2VEYXRhID0gJ2dldC1kYXRhc291cmNlLWRhdGEnLFxuICBTYXZlRXh0ZW5zaW9uU2V0dGluZ3MgPSAnc2F2ZS1leHRlbnNpb24tc2V0dGluZ3MnLFxuICBHZXRTZWxlY3RlZE1hcmtzID0gJ2dldC1zZWxlY3RlZC1tYXJrcycsXG4gIEdldEhpZ2hsaWdodGVkTWFya3MgPSAnZ2V0LWhpZ2hsaWdodGVkLW1hcmtzJyxcbiAgR2V0UGFyYW1ldGVyc0ZvclNoZWV0ID0gJ2dldC1wYXJhbWV0ZXJzLWZvci1zaGVldCcsXG4gIEZpbmRQYXJhbWV0ZXIgPSAnZmluZC1wYXJhbWV0ZXInLFxuICBDaGFuZ2VQYXJhbWV0ZXJWYWx1ZSA9ICdjaGFuZ2UtcGFyYW1ldGVyLXZhbHVlJyxcbiAgQ2xlYXJTZWxlY3RlZE1hcmtzID0gJ2NsZWFyLXNlbGVjdGVkLW1hcmtzJyxcbiAgU2VsZWN0QnlWYWx1ZSA9ICdzZWxlY3QtYnktdmFsdWUnLFxuICBHZXREYXRhU291cmNlcyA9ICdnZXQtZGF0YS1zb3VyY2VzJyxcbiAgUmVmcmVzaERhdGFTb3VyY2UgPSAncmVmcmVzaC1kYXRhLXNvdXJjZScsXG4gIEdldEZpbHRlcnMgPSAnZ2V0LWZpbHRlcnMnLFxuICBHZXRDYXRlZ29yaWNhbERvbWFpbiA9ICdnZXQtY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgR2V0UmFuZ2VEb21haW4gPSAnZ2V0LXJhbmdlLWRvbWFpbicsXG4gIEdldEpvaW5EZXNjcmlwdGlvbiA9ICdnZXQtam9pbi1kZXNjcmlwdGlvbicsXG4gIEdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdnZXQtY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuICBEaXNwbGF5RGlhbG9nID0gJ2Rpc3BsYXktZGlhbG9nJyxcbiAgQ2xvc2VEaWFsb2cgPSAnY2xvc2UtZGlhbG9nJyxcbiAgVGVzdENvbnZlcnNpb25WZXJiID0gJ3Rlc3QtY29udmVyc2lvbi12ZXJiJyxcbiAgR2V0RmllbGQgPSAnZ2V0LWZpZWxkJyxcbiAgR2V0RGF0YVNvdXJjZSA9ICdnZXQtZGF0YXNvdXJjZScsXG4gIEdldEFjdGl2ZVRhYmxlcyA9ICdnZXQtYWN0aXZlLXRhYmxlcycsXG4gIFNldFpvbmVWaXNpYmlsaXR5ID0gJ3NldC16b25lLXZpc2liaWxpdHknXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRG93bmdyYWRlVjJXb3Jrc2hlZXROYW1lcyB9IGZyb20gJy4vVmVyc2lvblRyYW5zbGF0aW9ucyc7XG5cbi8vIEEgbWFwcGluZyBmcm9tIHRoZSBzb3VyY2UgdmVyc2lvbiBvZiBhIG1vZGVsIC0+IHRoZSBuZXh0IHZlcnNpb24gb2YgdGhlIG1vZGVsLiBFYWNoIG1ham9yXG4vLyB2ZXJzaW9uIGJ1bXAgY2FuIGhhdmUgYW4gYXJyYXkgb2YgY29udmVyc2lvbnMgdG8gcGVyZm9ybSBpbiBvcmRlclxuY29uc3QgZXhlY3V0ZVVwZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiB9ID0ge1xuICAwOiBbXVxufTtcblxuY29uc3QgZXhlY3V0ZURvd25ncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiB9ID0ge1xuICAwOiBbXSxcbiAgMTogW0Rvd25ncmFkZVYyV29ya3NoZWV0TmFtZXNdXG59O1xuXG5jb25zdCBub3RpZmljYXRpb25Eb3duZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPiB9ID0ge1xuICAwOiBbXVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHdoaWNoIGhhcyB0aGUgYWJpbGl0eSB0byB1cGdyYWRlIGFuZCBkb3duZ3JhZGUgdGhlIGNvbnRyYWN0IGJldHdlZW4gdGhlIHR3byB2ZXJzaW9uc1xuICogd2hpY2ggYXJlIHNwZWNpZmllZC4gSWYgZXh0ZXJuYWxNYWpvclZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBiZWNhdXNlXG4gKiB3ZSB3b24ndCBrbm93IGhvdyB0byBkbyB0aG9zZSBjb252ZXJzaW9ucy5cbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIHVzaW5nXG4gKiBAcGFyYW0gcGxhdGZvcm1NYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZlcnNpb25Db252ZXJ0ZXIoZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlciwgcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcik6IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIoZXh0ZXJuYWxNYWpvclZlcnNpb24pIHx8XG4gICAgIU51bWJlci5pc0ludGVnZXIocGxhdGZvcm1NYWpvclZlcnNpb24pIHx8XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24gPCAwIHx8XG4gICAgcGxhdGZvcm1NYWpvclZlcnNpb24gPCAwKSB7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFZlcnNpb25zIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlcnM6XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA+IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCB2ZXJzaW9uIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXRmb3JtIHZlcnNpb24uXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA9PT0gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgdGhlIGV4YWN0IHNhbWUgdmVyc2lvbnMsIGp1c3QgdXNlIHRoZSBpZGVudGl0eSBjb252ZXJ0ZXJcbiAgICByZXR1cm4gbmV3IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlcigpO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZSB2ZXJzaW9ucyB3ZSBoYXZlIGhlcmUgYW5kIGNvbGxlY3QgdGhlIHVwZ3JhZGUgYW5kIGRvd25ncmFkZXMgbmVjZXNzYXJ5XG4gIGxldCBuZWVkZWRFeGVjdXRlVXBncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+ID0gW107XG4gIGZvciAobGV0IGkgPSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaSA8IHBsYXRmb3JtTWFqb3JWZXJzaW9uOyBpKyspIHtcbiAgICBpZiAoaSBpbiBleGVjdXRlVXBncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVVcGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZW0gYmFja3dhcmRzIHRvIGdldCB0aGUgbmVjZXNzYXJ5IGRvd25ncmFkZXNcbiAgbGV0IG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gPSBbXTtcbiAgbGV0IG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+ID0gW107XG4gIGZvciAobGV0IGkgPSBwbGF0Zm9ybU1ham9yVmVyc2lvbiAtIDE7IGkgPj0gZXh0ZXJuYWxNYWpvclZlcnNpb247IGktLSkge1xuICAgIGlmIChpIGluIGV4ZWN1dGVEb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVEb3duZ3JhZGVzW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoaSBpbiBub3RpZmljYXRpb25Eb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzLnB1c2goLi4ubm90aWZpY2F0aW9uRG93bmdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIoXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBuZWVkZWRFeGVjdXRlVXBncmFkZXMsIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycyB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhlIHZlcnNpb24gY29udmVydGVyIGlzIGRlc2lnbmVkIHRvIGFsbG93IHRoZSBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgbW9kdWxlc1xuICogdG8gc2VlbWxlc3NseSBjb21tdW5pY2F0ZSBvdmVyIHR3byBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgdGhlIGludGVybmFsIEFQSS4gVGhlIG9ubHlcbiAqIG1vZGUgaXQgc3VwcG9ydHMgaXMgZXh0ZXJuYWwncyB2ZXJzaW9uIDw9IHBsYXRmb3JtJ3MgdmVyc2lvbi4gV2hlbiBleGVjdXRpbmdcbiAqIGNvbW1hbmRzLCBpdCBpcyB1c2VkIHRvIHVwZ3JhZGUgdGhlIGV4dGVybmFsIHJlcHJlc2VudGF0aW9uIHRvIHdoYXQgcGxhdGZvcm0ga25vd3Mgb24gdGhlIHdheSBpblxuICogYW5kIGRvd25ncmFkZSB0aGUgcmVwcmVzZW50YXRpb25zIG9uIHRoZSB3YXkgb3V0LiBTaW1pbGFybHkgZm9yIG5vdGlmaWNhdGlvbnMsIGl0IGNhblxuICogZG93bmdyYWRlIHRob3NlIG9uIHRoZSB3YXkgZnJvbSBwbGF0Zm9ybSB0byBleHRlcm5hbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlclxuICAgKlxuICAgKiBAcGFyYW0gX2V4dGVybmFsTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9wbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgbWFqb3IgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiB1cGdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiBkb3duZ3JhZGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gYWZ0ZXIgYSBjbWRcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2V4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIHByaXZhdGUgX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4pIHtcblxuICAgIGlmICh0aGlzLl9leHRlcm5hbE1ham9yVmVyc2lvbiA+IHRoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb252ZXJ0IGJldHdlZW4gZXh0ZXJuYWwgdmVyc2lvbiAke3RoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9ufSBhbmQgJHt0aGlzLl9wbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICAvLyBQZXJmb3JtIHRoZSB1cGdyYWRlIG9mIHRoZSB2ZXJiIGFuZCBwYXJhbWV0ZXJzIHRvIHRoZSBsZXZlbCB0aGF0IHBsYXRmb3JtIGlzIHVzaW5nXG4gICAgbGV0IHVwZ3JhZGVkID0geyB2ZXJiOiB2ZXJiLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIH07XG4gICAgZm9yIChjb25zdCB1cGdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHVwZ3JhZGVkID0gdXBncmFkZVRyYW5zbGF0aW9uKHVwZ3JhZGVkLnZlcmIsIHVwZ3JhZGVkLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVFeGVjdXRlUmV0dXJuKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcbiAgICAvLyBEb3duZ3JhZGUgdGhlIHJlc3BvbnNlIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IGV4ZWN1dGVSZXNwb25zZTtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGRvd25ncmFkZWQgPSBkb3duZ3JhZGVUcmFuc2xhdGlvbihkb3duZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG93bmdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIC8vIERvd25ncmFkZSB0aGUgbm90aWZpY2F0aW9uIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IG5vdGlmaWNhdGlvbjtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyB2ZXJzaW9uIGNvbnZlcnRlciBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGJ1dCBpcyB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB3ZSBoYXZlXG4gKiBhIG1hdGNoaW5nIHBsYXRmb3JtIGFuZCBpbnRlcm5hbCB2ZXJzaW9uIG51bWJlclxuKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgaW1wbGVtZW50cyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJiOiB2ZXJiIGFzIFZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgYXMgRXhlY3V0ZVBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8gfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBvbGQgdmVycyBhbmQgcGFyYW1ldGVycyBmcm9tIHRoZSBleHRlcm5hbCBiZWZvcmUgd2Ugc2VuZCBpdCB0byBwbGF0Zm9ybSAqL1xuZXhwb3J0IHR5cGUgVXBncmFkZUV4ZWN1dGVDYWxsID1cbiAgKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KSA9PiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgfTtcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZWQgYSByZXNwb25zZSBiYWNrIGZyb20gcGxhdGZvcm0gYW5kIHdlIG5lZWQgdG8gZG93bmdyYWRlIGl0IHRvIGV4dGVybmFsJ3MgdmVyc2lvbiAqL1xuZXhwb3J0IHR5cGUgRG93bmdyYWRlRXhlY3V0ZVJldHVybiA9XG4gIChleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSkgPT4gRXhlY3V0ZVJlc3BvbnNlO1xuXG4vKiogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB3ZSByZWNlaXZlIGEgbm90aWZpY2F0aW9uIGZyb20gcGxhdGZvcm0gYW5kIHdlIG5lZWQgdG8gZG93bmdyYWRlIGl0IHRvIGV4dGVybmFsJ3MgdmVyc2lvbiAqL1xuZXhwb3J0IHR5cGUgRG93bmdyYWRlTm90aWZpY2F0aW9uID1cbiAgKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiBOb3RpZmljYXRpb247XG5cblxuLy8gVGhpcyBpcyB3aGVyZSB3ZSB3aWxsIHN0YXJ0IHRvIGRlZmluZSBzb21lIG9mIHRoZXNlIHRyYW5zbGF0aW9ucy5cbi8vIFdoZW4gbW9kaWZ5aW5nIGV4aXN0aW5nIG1vZGVscywgYWRkIHRoZSByZXF1aXNpdGUgY29udmVyc2lvbiBmdW5jdGlvbnMgaGVyZSwgdGhlbiB1c2UgdGhlbVxuLy8gaW4gdGhlIFZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5IGltcGxlbWVudGF0aW9uLiBJbXBvcnQgb2xkIHZlcnNpb25zIGFzIHlvdSB3b3VsZCBhbnkgb3RoZXIgbW9kdWxlXG5cbi8vIDAgPC0+IFRyYW5zbGF0aW9uc1xuLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBpbXBvcnQgZnJvbSB0aGUgVjAgZGVmaW5pdGlvbiBvZiB0aGUgQVBJXG4vLyBpbXBvcnQgKiBhcyBWMCBmcm9tICdAdGFibGVhdS1hcGktaW50ZXJuYWwtY29udHJhY3QtanNfdjAnO1xuXG4vLyAxIDwtPiAyIFRyYW5zbGF0aW9uc1xuLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBpbXBvcnQgZnJvbSB0aGUgVjEgZGVmaW5pdGlvbiBvZiB0aGUgQVBJXG4vLyBpbXBvcnQgKiBhcyBWMSBmcm9tICdAdGFibGVhdS1hcGktaW50ZXJuYWwtY29udHJhY3QtanNfdjEnO1xuXG5leHBvcnQgZnVuY3Rpb24gRG93bmdyYWRlVjJXb3Jrc2hlZXROYW1lcyhleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG5cbiAgLy8gRml4IHRoZSBkYXNoYm9hcmQgZnJpZW5kbHkgbmFtZSBpc3N1ZS4gVGhlIHN0cnVjdHVyZXMgYXJlIGNvbXBhdGlibGUsXG4gIC8vIHNvIHdlIHN0aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgcmVwbHksIGJ1dCB3ZSBjb3B5IHRoZSBTaGVldEluZm8ubmFtZVxuICAvLyBpbnRvIHRoZSBEYXNoYm9hcmRab25lLm5hbWUsIHdoZXJlIHYxIHdhbnRzIHRvIGZpbmQgaXQuXG5cbiAgbGV0IGJvb3RzdHJhcEluZm8gPSBleGVjdXRlUmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gIGlmIChib290c3RyYXBJbmZvLmV4dGVuc2lvbkRhc2hib2FyZEluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgIGJvb3RzdHJhcEluZm8uZXh0ZW5zaW9uRGFzaGJvYXJkSW5mby56b25lcy5mb3JFYWNoKHpvbmUgPT4ge1xuICAgICAgaWYgKHpvbmUuc2hlZXRJbmZvKSB7XG4gICAgICAgIHpvbmUubmFtZSA9IHpvbmUuc2hlZXRJbmZvLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXhlY3V0ZVJlc3BvbnNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25UcmFuc2xhdGlvbnMudHMiLCJpbXBvcnQgKiBhcyBndWlkIGZyb20gJ2d1aWQnO1xuXG5pbXBvcnQgeyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuaW1wb3J0IHsgUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIGlzQ29tbWFuZE1lc3NhZ2UsXG4gIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgaXNJbml0TWVzc2FnZSxcbiAgaXNNZXNzYWdlLFxuICBpc05vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vTWVzc2FnZVR5cGVDaGVja3MnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZS9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuXG4vKipcbiAqIFRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGlzIHRoZSBwcmltYXJ5IGV4cG9ydCBmcm9tIHRoZSBhcGktbWVzc2FnaW5nIG1vZHVsZS4gQW4gaW5zdGFuY2Ugb2ZcbiAqIHRoaXMgY2xhc3MgY2FuIGJlIGluc3RhbnRpYXRlZCBvbiBib3RoIHNpZGVzIG9mIGEgZnJhbWUgYm91bmRhcnkgdG8gZmFjaWxpdGF0ZSBjb21tdW5pY2F0aW9uXG4gKiBpbiBib3RoIGRpcmVjdGlvbnMgYmV0d2VlbiB0aGUgZnJhbWVzLiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYm90aCB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGxpc3RlbmVyXG4gKiBwb3J0aW9ucywgYnV0IGRvZXNuJ3QgcmVxdWlyZSBjYWxsZXJzIHRvIGNhcmUgYWJvdXQgYm90aC5cbiAqL1xuZXhwb3J0IGNsYXNzIENyb3NzRnJhbWVNZXNzZW5nZXIgaW1wbGVtZW50cyBNZXNzZW5nZXIge1xuICBwcml2YXRlIHVucmVnaXN0ZXJGdW5jdGlvbjogdW5kZWZpbmVkIHwgKCgpID0+IHZvaWQpO1xuICBwcml2YXRlIGluaXRpYWxpemVNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IEluaXRpYWxpemVNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgY29tbWFuZE1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogQ29tbWFuZE1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IE5vdGlmaWNhdGlvbk1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDcm9zc0ZyYW1lTWVzc2VuZ2VyLiBJZiB5b3Ugd291bGQgbGlrZSB0byB1c2UgdGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgYXMgYSBNZXNzYWdlTGlzdGVuZXIsXG4gICAqIGJlIHN1cmUgdG8gY2FsbCBTdGFydExpc3RlbmluZyBhbmQgcmVnaXN0ZXIgbWVzc2FnZSBoYW5kbGVycy5cbiAgICogQHBhcmFtIHRoaXNXaW5kb3cgVGhlIHdpbmRvdyBvYmplY3Qgd2hpY2ggdGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgbGl2ZXMuIEFuIG9uTWVzc2FnZSBsaXN0ZW5lciB3aWxsIGJlIGFkZGVkIGhlcmUuXG4gICAqIEBwYXJhbSBbb3RoZXJXaW5kb3ddIE9wdGlvbmFsIG90aGVyV2luZG93IHdoaWNoIG1lc3NhZ2VzIHdpbGwgYmUgcG9zdGVkIHRvLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICBJZiBkZWZpbmVkLCBpbmNvbWluZyBtZXNzYWdlcyBtdXN0IG9yaWdpbmF0ZSBmcm9tIG90aGVyV2luZG93IHRvIGJlIHBhc3NlZCBvblxuICAgKiBAcGFyYW0gW290aGVyV2luZG93T3JpZ2luXSBUaGUgdGFyZ2V0IG9yaWdpbiB3aGljaCBvdGhlcldpbmRvdyBtdXN0IGhhdmUgaW4gb3JkZXIgdG8gcmVjZWl2ZSBkaXNwYXRjaGVkIG1lc3NhZ2VzLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHZhbHVlIHdpbGwgYmUgc2VudCBhcyB0aGUgdGFyZ2V0T3JpZ2luIG9mIGEgcG9zdE1lc3NhZ2VcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvcG9zdE1lc3NhZ2UpXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0aGlzV2luZG93OiBXaW5kb3csIHByaXZhdGUgb3RoZXJXaW5kb3c/OiBXaW5kb3csIHByaXZhdGUgb3RoZXJXaW5kb3dPcmlnaW4/OiBzdHJpbmcpIHtcbiAgICAvLyBNYWtlIHN1cmUgdG8gY2FsbCBTdGFydExpc3RlbmluZ1xuICB9XG5cbiAgLy8vLy8gTWVzc2FnZUxpc3RlbmVyIEltcGxlbWVudGF0aW9uXG5cbiAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKCk6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgYXJlIGxpc3RlbmluZywgaWYgbm90LCBob29rIHVwIGEgbWVzc2FnZSBsaXN0ZW5lclxuICAgIGlmICghdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGJvdW5kSGFuZGxlciA9IHRoaXMub25NZXNzYWdlUmVjZWl2ZWQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMudGhpc1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYm91bmRIYW5kbGVyLCB0cnVlKTtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uID0gKCkgPT4gdGhpcy50aGlzV2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBib3VuZEhhbmRsZXIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdG9wTGlzdGVuaW5nKCk6IHZvaWQge1xuICAgIC8vIFN0b3AgbGlzdGVuaW5nIGlmIHdlIGhhdmUgc3RhcnRlZCBsaXN0ZW5pbmdcbiAgICBpZiAodGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKCk7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBJbml0aWFsaXplTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemVNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tbWFuZE1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBDb21tYW5kTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0Tm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IE5vdGlmaWNhdGlvbk1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICAvLy8vLyBNZXNzYWdlRGlzcGF0Y2hlciBJbXBsZW1lbnRhdGlvblxuXG4gIC8qKlxuICAgKiBAcGFyYW0gYXBpVmVyc2lvbiBhcGktaW50ZXJuYWwtY29udHJhY3QtanMgdmVyc2lvbiAoZXhwb3J0ZWQgaW4gSnNBcGlJbnRlcm5hbENvbm50cmFjdClcbiAgICogQHBhcmFtIGNyb3NzRnJhbWVWZXJzaW9uIGNyb3NzZnJhbWUgbWVzc2FnaW5nIHZlcnNpb24gKGV4cG9ydGVkIGluIEpzQXBpSW50ZXJuYWxDb25udHJhY3QpXG4gICAqIEBwYXJhbSBvcHRpb25zIGFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgYXQgaW5pdGlhbGl6YXRpb24gKGluZm9ybWF0aW9uIGFib3V0IHRoZSB2ZXJzaW9uIG9mXG4gICAqICAgICAgICAgICAgICAgIGV4dGVybmFsIGJlaW5nIHVzZWQgZm9yIGV4YW1wbGUpXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShcbiAgICBhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLCBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlciwgb3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucyk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSxcbiAgICAgIGNyb3NzRnJhbWVWZXJzaW9uOiBjcm9zc0ZyYW1lVmVyc2lvbixcbiAgICAgIGFwaVZlcnNpb246IGFwaVZlcnNpb24sXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiSWQ6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmQsXG4gICAgICB2ZXJiSWQ6IHZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRSZXNwb25zZU1lc3NhZ2UoY29tbWFuZEd1aWQ6IHN0cmluZywgZGF0YTogTW9kZWwgfCB1bmRlZmluZWQsIGVycm9yOiBNb2RlbCB8IHVuZGVmaW5lZCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsXG4gICAgICBjb21tYW5kR3VpZDogY29tbWFuZEd1aWQsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVOb3RpZmljYXRpb25NZXNzYWdlKG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZCwgZGF0YTogTW9kZWwpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbklkLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhIHBlbmRpbmcgbWVzc2FnZSBmb3Igc2VuZGluZyBhbmQgcmV0dXJucyB0aGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnQgdG8gdGhpcy5vdGhlcldpbmRvd1xuICAgKiBAcmV0dXJucyBUaGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBwcmVwYXJlTWVzc2FnZShtc2c6IE1lc3NhZ2UpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGlmICghdGhpcy5vdGhlcldpbmRvdyB8fCAhdGhpcy5vdGhlcldpbmRvd09yaWdpbikge1xuICAgICAgdGhyb3cgJ090aGVyIHdpbmRvdyBub3QgaW5pdGlhbGl6ZWQsIGNhbm5vdCBkaXNwYXRjaCBtZXNzYWdlcyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGFyZWRNZXNzYWdlID0gbmV3IENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UobXNnLCB0aGlzLm90aGVyV2luZG93LCB0aGlzLm90aGVyV2luZG93T3JpZ2luKTtcbiAgICByZXR1cm4gcHJlcGFyZWRNZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZC4gRG9lcyBzb21lIHZhbGlkYXRpb24gb2YgdGhlIG1lc3NhZ2UsIGFuZCB0aGVuXG4gICAqIGNhbGxzIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UgaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGluY29taW5nIE1lc3NhZ2VFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIG90aGVyV2luZG93IGRlZmluZWQsIG1ha2Ugc3VyZSB0aGUgbWVzc2FnZSBpcyBjb21pbmcgZnJvbSB0aGVyZVxuICAgIGlmICh0aGlzLm90aGVyV2luZG93ICYmIGV2ZW50LnNvdXJjZSAhPT0gdGhpcy5vdGhlcldpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERvIHNvbWUgdmFsaWRhdGlvbiBvbiBldmVudC5kYXRhIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgcmVjZWl2ZWQgYSByZWFsIG1lc3NhZ2VcbiAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBkZWNsYXJlZCBtZXNzYWdlIHR5cGUsIHZhbGlkYXRlIHRoZSBtZXNzYWdlLCBhbmQgY2FsbCBhbiBhcHByb3ByaWF0ZSBoYW5kZXIgaWYgb25lIGV4aXN0c1xuICAgIHN3aXRjaCAobWVzc2FnZS5tc2dUeXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkluaXRpYWxpemU6IHtcbiAgICAgICAgaWYgKCFpc0luaXRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmluaXRpYWxpemVNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2U6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kOiB7XG4gICAgICAgIGlmICghaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uOiB7XG4gICAgICAgIGlmICghaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBKdXN0IGlnbm9yZSB0aGlzIHNpbmNlIHdlIGRvbid0IGtub3cgaG93IHRvIGhhbmRsZSB0aGUgbWVzc2FnZSB0eXBlXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyLnRzIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBQcmVwYXJlZE1lc3NhZ2UgfSBmcm9tICcuL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQcmVwYXJlZE1lc3NhZ2UgaW50ZXJmYWNlIHVzZWQgdG8gcG9zdCBtZXNzYWdlcyBiZXR3ZWVuXG4gKiB0d28gZnJhbWVzIHVzaW5nIHdpbmRvdy5wb3N0TWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSBpbXBsZW1lbnRzIFByZXBhcmVkTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UuXG4gICAqIEBwYXJhbSBfbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBzZW50XG4gICAqIEBwYXJhbSBfdGFyZ2V0IFRoZSB0YXJnZXQgd2luZG93IHdoZXJlIHRoZSBtZXNzYWdlIHdpbGwgYmUgc2VudFxuICAgKiBAcGFyYW0gX29yaWdpbiBUaGUgdGFyZ2V0T3JpZ2luIHdoZXJlIHRoaXMgbWVzc2FnZSBjYW4gYmUgcmVjZWl2ZWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlOiBNZXNzYWdlLCBwcml2YXRlIF90YXJnZXQ6IFdpbmRvdywgcHJpdmF0ZSBfb3JpZ2luOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgcHVibGljIGdldCBtZXNzYWdlR3VpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbWVzc2FnZS5tc2dHdWlkOyB9XG5cbiAgcHVibGljIHNlbmQoKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UodGhpcy5fbWVzc2FnZSwgdGhpcy5fb3JpZ2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsImltcG9ydCAqIGFzIGd1aWQgZnJvbSAnZ3VpZCc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01lc3NhZ2UoZGF0YTogTWVzc2FnZSB8IGFueSk6IGRhdGEgaXMgTWVzc2FnZSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkYXRhIGFzIE1lc3NhZ2U7XG4gIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5tc2dHdWlkIHx8ICFtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWd1aWQuaXNHdWlkKG1lc3NhZ2UubXNnR3VpZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIG1lc3NhZ2UubXNnVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4gPVxuICAgIFtNZXNzYWdlVHlwZS5Db21tYW5kLCBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsIE1lc3NhZ2VUeXBlLkluaXRpYWxpemUsIE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbl07XG5cbiAgaWYgKG1lc3NhZ2VUeXBlcy5pbmRleE9mKG1lc3NhZ2UubXNnVHlwZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb24odmVyc2lvbk51bWJlcjogVmVyc2lvbk51bWJlciB8IGFueSk6IHZlcnNpb25OdW1iZXIgaXMgVmVyc2lvbk51bWJlciB7XG4gIGlmICghdmVyc2lvbk51bWJlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHYgPSB2ZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXI7XG5cbiAgaWYgKHR5cGVvZiB2ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygdi5maXggIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1pbm9yICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygdi5tYWpvciAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5pdE1lc3NhZ2UobWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIEluaXRpYWxpemVNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpbml0TWVzc2FnZSA9IG1lc3NhZ2UgYXMgSW5pdGlhbGl6ZU1lc3NhZ2U7XG4gIGlmIChpbml0TWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Jbml0aWFsaXplKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpbml0TWVzc2FnZS5hcGlWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuYXBpVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmNyb3NzRnJhbWVWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY3JNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlO1xuICBpZiAoY3JNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQoY3JNZXNzYWdlLmNvbW1hbmRHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY3JNZXNzYWdlLmRhdGEgJiYgIWNyTWVzc2FnZS5lcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZE1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kTWVzc2FnZTtcbiAgaWYgKGNvbW1hbmRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjb21tYW5kTWVzc2FnZS52ZXJiSWQgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnZlcmJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90aWZpY2F0aW9uTWVzc2FnZShtZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBOb3RpZmljYXRpb25NZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBub3RpZmljYXRpb25NZXNzYWdlID0gbWVzc2FnZSBhcyBOb3RpZmljYXRpb25NZXNzYWdlO1xuICBpZiAobm90aWZpY2F0aW9uTWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCB8fCB0eXBlb2Ygbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRJbXBsIH0gZnJvbSAnLi9JbXBsL0Rhc2hib2FyZEltcGwnO1xuaW1wb3J0IHsgU2hlZXQgfSBmcm9tICcuL1NoZWV0JztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIFNoZWV0IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZEltcGw6IERhc2hib2FyZEltcGwpIHtcbiAgICBzdXBlcihfZGFzaGJvYXJkSW1wbCk7XG4gICAgX2Rhc2hib2FyZEltcGwuaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXRzKCk6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmRJbXBsLndvcmtzaGVldHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9iamVjdHMoKTogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwub2JqZWN0cztcbiAgfVxuXG4gIHB1YmxpYyBzZXRab25lVmlzaWJpbGl0eUFzeW5jKHpvbmVWaXNpYmlsaXR5TWFwOiBNYXA8bnVtYmVyLCBDb250cmFjdC5ab25lVmlzaWJpbGl0eVR5cGU+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwuc2V0Wm9uZVZpc2liaWxpdHlBc3luYyh6b25lVmlzaWJpbGl0eU1hcCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRGFzaGJvYXJkT2JqZWN0IH0gZnJvbSAnLi4vRGFzaGJvYXJkT2JqZWN0JztcbmltcG9ydCB7XG4gIERhc2hib2FyZE9iamVjdFR5cGUsXG4gIEV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gIFNoZWV0UGF0aCxcbiAgVmlzdWFsSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vUG9pbnQnO1xuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9TaGVldEltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5pbXBvcnQgeyBab25lVmlzaWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9ab25lVmlzaWJpbGl0eVNlcnZpY2UnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uL1NpemUnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL1dvcmtzaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkSW1wbCBleHRlbmRzIFNoZWV0SW1wbCB7XG4gIHByaXZhdGUgX3dvcmtzaGVldHM6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD47XG4gIHByaXZhdGUgX29iamVjdHM6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luZm86IEV4dGVuc2lvbkRhc2hib2FyZEluZm8sIHByaXZhdGUgX3NoZWV0UGF0aDogU2hlZXRQYXRoKSB7XG4gICAgc3VwZXIobmV3IFNoZWV0SW5mb0ltcGwoX2luZm8ubmFtZSwgQ29udHJhY3QuU2hlZXRUeXBlLkRhc2hib2FyZCwgbmV3IFNpemUoX2luZm8uc2l6ZS5oLCBfaW5mby5zaXplLncpKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldHMoKTogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9iamVjdHMoKTogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGFzaGJvYXJkLCAnZGFzaGJvYXJkJyk7XG5cbiAgICB0aGlzLl93b3Jrc2hlZXRzID0gbmV3IEFycmF5PFdvcmtzaGVldD4oKTtcbiAgICB0aGlzLl9vYmplY3RzID0gbmV3IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4oKTtcblxuICAgIC8vIFByb2Nlc3MgYWxsIHRoZSB6b25lcyB3aGljaCBhcmUgY29udGFpbmVkIGluIHRoaXMgZGFzaGJvYXJkXG4gICAgZm9yIChjb25zdCB6b25lIG9mIHRoaXMuX2luZm8uem9uZXMpIHtcbiAgICAgIGxldCB3b3Jrc2hlZXQ6IFdvcmtzaGVldCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgICAgY29uc3Qgem9uZVNpemUgPSBuZXcgU2l6ZSh6b25lLmhlaWdodCwgem9uZS53aWR0aCk7XG5cbiAgICAgIGlmICh6b25lLnpvbmVUeXBlID09PSBEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldCkge1xuICAgICAgICAvLyB6b25lLnNoZWV0SW5mbyB3YXMgbm90IGluaXRpYWxpemVkIHByaW9yIHRvIGludGVybmFsLWNvbnRyYWN0IDEuNi4wXG4gICAgICAgIGxldCB3b3Jrc2hlZXROYW1lID0gem9uZS5zaGVldEluZm8gPyB6b25lLnNoZWV0SW5mby5uYW1lIDogem9uZS5uYW1lO1xuICAgICAgICBjb25zdCBzaGVldEluZm8gPSBuZXcgU2hlZXRJbmZvSW1wbCh3b3Jrc2hlZXROYW1lLCBDb250cmFjdC5TaGVldFR5cGUuV29ya3NoZWV0LCB6b25lU2l6ZSk7XG4gICAgICAgIGNvbnN0IHZpeklkOiBWaXN1YWxJZCA9IHtcbiAgICAgICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWUsXG4gICAgICAgICAgZGFzaGJvYXJkOiB0aGlzLl9pbmZvLm5hbWUsXG4gICAgICAgICAgc3Rvcnlib2FyZDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5Ym9hcmQsXG4gICAgICAgICAgZmxpcGJvYXJkWm9uZUlEOiB0aGlzLl9zaGVldFBhdGguZmxpcGJvYXJkWm9uZUlELFxuICAgICAgICAgIHN0b3J5UG9pbnRJRDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5UG9pbnRJRFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldEltcGwgPSBuZXcgV29ya3NoZWV0SW1wbChzaGVldEluZm8sIHZpeklkLCBkYXNoYm9hcmQpO1xuICAgICAgICB3b3Jrc2hlZXQgPSBuZXcgV29ya3NoZWV0KHdvcmtzaGVldEltcGwpO1xuICAgICAgICB0aGlzLl93b3Jrc2hlZXRzLnB1c2god29ya3NoZWV0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgem9uZVBvaW50ID0gbmV3IFBvaW50KHpvbmUueCwgem9uZS55KTtcblxuICAgICAgY29uc3QgZGFzaGJvYXJkT2JqZWN0ID0gbmV3IERhc2hib2FyZE9iamVjdChcbiAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGFzaGJvYXJkT2JqZWN0VHlwZS5jb252ZXJ0KHpvbmUuem9uZVR5cGUpLFxuICAgICAgICB6b25lUG9pbnQsXG4gICAgICAgIHpvbmVTaXplLFxuICAgICAgICB3b3Jrc2hlZXQsXG4gICAgICAgIHpvbmUubmFtZSxcbiAgICAgICAgem9uZS5pc0Zsb2F0aW5nIHx8IGZhbHNlLCAgIC8vIGJlZm9yZSAxLjYuMCB3ZSBkaWRuJ3QgaGF2ZSBpc0Zsb2F0aW5nLCBzbyB3ZSBhc3N1bWUgZmFsc2VcbiAgICAgICAgem9uZS5pc1Zpc2libGUgfHwgdHJ1ZSwgICAgICAvLyBiZWZvcmUgMS42LjAgd2UgZGlkbid0IGhhdmUgaXNWaXNpYmxlLCBzbyB3ZSBhc3N1bWUgdHJ1ZVxuICAgICAgICB6b25lLnpvbmVJZFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKGRhc2hib2FyZE9iamVjdCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFpvbmVWaXNpYmlsaXR5QXN5bmMoem9uZVZpc2liaWxpdHlNYXA6IE1hcDxudW1iZXIsIENvbnRyYWN0LlpvbmVWaXNpYmlsaXR5VHlwZT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBPYmplY3Qua2V5cyh6b25lVmlzaWJpbGl0eU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlpvbmVWaXNpYmlsaXR5VHlwZT4oem9uZVZpc2liaWxpdHlNYXBba2V5XSwgQ29udHJhY3QuWm9uZVZpc2liaWxpdHlUeXBlKTtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlab25lSXNWYWxpZCh0aGlzLCBOdW1iZXIucGFyc2VJbnQoa2V5KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB6b25lVmlzaWJpbGl0eVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxab25lVmlzaWJpbGl0eVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLlpvbmVWaXNpYmlsaXR5KTtcblxuICAgIHJldHVybiB6b25lVmlzaWJpbGl0eVNlcnZpY2Uuc2V0VmlzaWJpbGl0eUFzeW5jKC8qRGFzaGJvYXJkIE5hbWUqLyB0aGlzLm5hbWUsIHpvbmVWaXNpYmlsaXR5TWFwKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGRhc2hib2FyZCBvYmplY3RzIC0gdGhlIHpvbmVzIGluIGEgZGFzaGJvYXJkLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkT2JqZWN0IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkLFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0LkRhc2hib2FyZE9iamVjdFR5cGUsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IENvbnRyYWN0LlBvaW50LFxuICAgIHByaXZhdGUgX3NpemU6IENvbnRyYWN0LlNpemUsXG4gICAgcHJpdmF0ZSBfd29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWQsXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2lzRmxvYXRpbmc6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2lkOiBudW1iZXJcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IENvbnRyYWN0LlBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldCgpOiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNGbG9hdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNGbG9hdGluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmRPYmplY3QudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIFBvaW50IGltcGxlbWVudHMgQ29udHJhY3QuUG9pbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfeDogbnVtYmVyLCBwcml2YXRlIF95OiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BvaW50LnRzIiwiaW1wb3J0IHsgU2hlZXRUeXBlLCBTaXplIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbmZvSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfc2hlZXRUeXBlOiBTaGVldFR5cGUsXG4gICAgcHJpdmF0ZSBfc2hlZXRTaXplOiBTaXplXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0U2l6ZSgpOiBTaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hlZXROYW1lOiB0aGlzLm5hbWUsXG4gICAgICBpc0Rhc2hib2FyZDogdGhpcy5zaGVldFR5cGUgPT09IFNoZWV0VHlwZS5EYXNoYm9hcmRcbiAgICAgIC8vIFRPRE8gLSBTdG9yaWVzXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBTaXplIGltcGxlbWVudHMgQ29udHJhY3QuU2l6ZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9oZWlnaHQ6IG51bWJlciwgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2l6ZS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBTaGVldCB9IGZyb20gJy4vU2hlZXQnO1xuaW1wb3J0IHsgV29ya3NoZWV0SW1wbCB9IGZyb20gJy4vSW1wbC9Xb3Jrc2hlZXRJbXBsJztcblxuZXhwb3J0IGNsYXNzIFdvcmtzaGVldCBleHRlbmRzIFNoZWV0IGltcGxlbWVudHMgQ29udHJhY3QuV29ya3NoZWV0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmtzaGVldEltcGw6IFdvcmtzaGVldEltcGwpIHtcbiAgICBzdXBlcihfd29ya3NoZWV0SW1wbCk7XG5cbiAgICAvLyBDYWxsIHRvIGluaXRpYWxpemUgZXZlbnRzIGFuZCB0aGVuIGNhbGwgZG93biB0byB0aGUgZXZlbnQgbGlzdGVuZXIgbWFuYWdlciB0byBoYW5kbGUgdGhpbmdzXG4gICAgdGhpcy5fd29ya3NoZWV0SW1wbC5pbml0aWFsaXplRXZlbnRzKHRoaXMpLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0V2ZW50VHlwZShlKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudERhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnBhcmVudERhc2hib2FyZDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsIG9wdGlvbnM6IENvbnRyYWN0LkZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmFwcGx5RmlsdGVyQXN5bmMoZmllbGROYW1lLCB2YWx1ZXMsIHVwZGF0ZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5hcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lLCBmaWx0ZXJPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5jbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0RGF0YVNvdXJjZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRGaWx0ZXJzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdW1tYXJ5RGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFN1bW1hcnlEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFVuZGVybHlpbmdEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5jbGVhclNlbGVjdGVkTWFya3NBc3luYygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJREFzeW5jKG1hcmtzSW5mbzogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuc2VsZWN0TWFya3NCeUlkQXN5bmMobWFya3NJbmZvLCB1cGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1dvcmtzaGVldC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRGF0YVNjaGVtYSxcbiAgRGF0YVNvdXJjZSBhcyBEYXRhU291cmNlSW5mbyxcbiAgRmlsdGVyRXZlbnQsIE5vdGlmaWNhdGlvbklkLFxuICBWaXN1YWxJZCxcbiAgV29ya3NoZWV0RGF0YVNvdXJjZUluZm9cbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uL0RhdGFTb3VyY2UnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL0RhdGFTb3VyY2VJbXBsJztcbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vU2hlZXRJbXBsJztcbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEZpbHRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9GaWx0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgTWFya3NTZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL01hcmtzU2VsZWN0ZWRFdmVudCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0RhdGFTb3VyY2VTZXJ2aWNlJztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9GaWx0ZXJTZXJ2aWNlJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlLCBHZXREYXRhVHlwZSB9IGZyb20gJy4uL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZWxlY3Rpb25TZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmNvbnN0IHZpc3VhbElkc0FyZUVxdWFsID0gZnVuY3Rpb24gKGE6IFZpc3VhbElkLCBiOiBWaXN1YWxJZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gYSAmJiBiICYmXG4gICAgYS53b3Jrc2hlZXQgPT09IGIud29ya3NoZWV0ICYmXG4gICAgYS5kYXNoYm9hcmQgPT09IGIuZGFzaGJvYXJkICYmXG4gICAgYS5zdG9yeWJvYXJkID09PSBiLnN0b3J5Ym9hcmQgJiZcbiAgICBhLnN0b3J5UG9pbnRJRCA9PT0gYi5zdG9yeVBvaW50SUQgJiZcbiAgICBhLmZsaXBib2FyZFpvbmVJRCA9PT0gYi5mbGlwYm9hcmRab25lSUQ7XG59O1xuXG5leHBvcnQgY2xhc3MgV29ya3NoZWV0SW1wbCBleHRlbmRzIFNoZWV0SW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaGVldEluZm9JbXBsOiBTaGVldEluZm9JbXBsLFxuICAgIHByaXZhdGUgX3Zpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBwcml2YXRlIF9wYXJlbnREYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCkge1xuICAgIHN1cGVyKHNoZWV0SW5mb0ltcGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnREYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50RGFzaGJvYXJkO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2hpY2ggZ29lcyB0aHJvdWdoIGFuZCByZWdpc3RlcnMgZWFjaCBldmVudCB0eXBlIHRoaXMgaW1wbCBrbm93cyBhYm91dFxuICAgKiB3aXRoIHRoZSBOb3RpZmljYXRpb25TZXJ2aWNlLiBJdCByZXR1cm5zIGFuIGFycmF5IG9mIFNpbmdsZUV2ZW50TWFuYWdlciBvYmplY3RzIHdoaWNoXG4gICAqIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlciB0byBoYW5kbGUgdXNlciByZWdpc3RyYXRpb24gLyB1bnJlZ2lzdHJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtXb3Jrc2hlZXR9IHdvcmtzaGVldCBUaGUgd29ya3NoZWV0IG9iamVjdCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlclxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMod29ya3NoZWV0OiBXb3Jrc2hlZXQpOiBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+IHtcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4oKTtcbiAgICBsZXQgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZTtcblxuICAgIHRyeSB7XG4gICAgICBub3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGlzIHNlcnZpY2UgcmVnaXN0ZXJlZCwganVzdCByZXR1cm5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYWxsIG9mIHRoZSBldmVudCBtYW5hZ2VycyB3ZSdsbCBuZWVkIChvbmUgZm9yIGVhY2ggZXZlbnQgdHlwZSlcbiAgICBjb25zdCBtYXJrc0V2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8TWFya3NTZWxlY3RlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkKTtcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5TZWxlY3RlZE1hcmtzQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCB2aXN1YWxJZCA9IG1vZGVsIGFzIFZpc3VhbElkO1xuICAgICAgcmV0dXJuIHZpc3VhbElkc0FyZUVxdWFsKHZpc3VhbElkLCB0aGlzLnZpc3VhbElkKTtcbiAgICB9LCAodml6OiBWaXN1YWxJZCkgPT4ge1xuICAgICAgbWFya3NFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IE1hcmtzU2VsZWN0ZWRFdmVudCh3b3Jrc2hlZXQpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRlckV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8RmlsdGVyQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLkZpbHRlckNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLkZpbHRlckNoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyRXZlbnRSZXNwb25zZSA9IG1vZGVsIGFzIEZpbHRlckV2ZW50O1xuICAgICAgcmV0dXJuIHRoaXMudmlzdWFsSWQud29ya3NoZWV0ID09PSBmaWx0ZXJFdmVudFJlc3BvbnNlLnZpc3VhbElkLndvcmtzaGVldDtcbiAgICB9LCAoZXZlbnQ6IEZpbHRlckV2ZW50KSA9PiB7XG4gICAgICBmaWx0ZXJFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IEZpbHRlckNoYW5nZWRFdmVudCh3b3Jrc2hlZXQsIGV2ZW50LmZpZWxkTmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKG1hcmtzRXZlbnQpO1xuICAgIHJlc3VsdHMucHVzaChmaWx0ZXJFdmVudCk7XG5cbiAgICAvLyBUT0RPIC0gb3RoZXIgZXZlbnQgdHlwZXNcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIGdldCB2aXN1YWxJZCgpOiBWaXN1YWxJZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc3VhbElkO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RmlsdGVyQXN5bmMoXG4gICAgZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlczogQXJyYXk8c3RyaW5nPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSwgb3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlPih1cGRhdGVUeXBlLCBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5hcHBseUZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSwgdmFsdWVzLCB1cGRhdGVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWVsZE5hbWUsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpbHRlck9wdGlvbnMsICdmaWx0ZXJPcHRpb25zJyk7XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKSB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24+KGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbiwgQ29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlSYW5nZVBhcmFtVHlwZShmaWx0ZXJPcHRpb25zLm1pbiwgZmlsdGVyT3B0aW9ucy5tYXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5hcHBseVJhbmdlRmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lLCBmaWx0ZXJPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpZWxkTmFtZSwgJ2ZpZWxkTmFtZScpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmNsZWFyRmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gc2VydmljZS5nZXREYXRhU291cmNlc0FzeW5jKHRoaXMudmlzdWFsSWQpLnRoZW48QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+KHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBkYXRhU2NoZW1hOiBEYXRhU2NoZW1hID0gcmVzdWx0IGFzIERhdGFTY2hlbWE7XG4gICAgICBjb25zdCB3b3Jrc2hlZXREYXRhU291cmNlSW5mbzogV29ya3NoZWV0RGF0YVNvdXJjZUluZm8gPSBkYXRhU2NoZW1hLndvcmtzaGVldERhdGFTY2hlbWFNYXBbdGhpcy5uYW1lXTtcblxuICAgICAgbGV0IGRhdGFTb3VyY2VzOiBBcnJheTxDb250cmFjdC5EYXRhU291cmNlPiA9IFtdO1xuXG4gICAgICAvLyBGaXJzdCwgYWRkIHRoZSBwcmltYXJ5IGRhdGFzb3VyY2UuICBCeSBjb252ZW50aW9uLCBpdCBjb21lcyBmaXJzdCBpbiB0aGUgcmV0dXJuZWQgYXJyYXkuXG4gICAgICBsZXQgcHJpbWFyeUlkOiBzdHJpbmcgPSB3b3Jrc2hlZXREYXRhU291cmNlSW5mby5wcmltYXJ5RGF0YVNvdXJjZTtcbiAgICAgIGRhdGFTb3VyY2VzLnB1c2godGhpcy5jcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNjaGVtYS5kYXRhU291cmNlc1twcmltYXJ5SWRdKSk7XG5cbiAgICAgIC8vIFRoZW4sIGxvb3AgdGhyb3VnaCBhbnkgc2Vjb25kYXJ5IGRhdGEgc291cmNlcyBhbmQgYWRkIHRoZW0uXG4gICAgICBmb3IgKGxldCBzZWNvbmRhcnlJZCBvZiB3b3Jrc2hlZXREYXRhU291cmNlSW5mby5yZWZlcmVuY2VkRGF0YVNvdXJjZUxpc3QpIHtcbiAgICAgICAgaWYgKHNlY29uZGFyeUlkICE9PSBwcmltYXJ5SWQpIHtcbiAgICAgICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbc2Vjb25kYXJ5SWRdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RmlsdGVyc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFNlbGVjdGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICAgIHRoaXMudmlzdWFsSWQsIEdldERhdGFUeXBlLlN1bW1hcnksICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLCAhIW9wdGlvbnMuaWdub3JlU2VsZWN0aW9uLCB0cnVlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFVuZGVybHlpbmdEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICAgIHRoaXMudmlzdWFsSWQsXG4gICAgICBHZXREYXRhVHlwZS5VbmRlcmx5aW5nLFxuICAgICAgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlU2VsZWN0aW9uLFxuICAgICAgISFvcHRpb25zLmluY2x1ZGVBbGxDb2x1bW5zLFxuICAgICAgb3B0aW9ucy5tYXhSb3dzIHx8IDApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhclNlbGVjdGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2VsZWN0aW9ucywgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZT4oc2VsZWN0aW9uVXBkYXRlVHlwZSwgQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2VsZWN0TWFya3NCeVZhbHVlQXN5bmModGhpcy52aXN1YWxJZCwgc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNvdXJjZUluZm86IERhdGFTb3VyY2VJbmZvKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgZGF0YVNvdXJjZUltcGwgPSBuZXcgRGF0YVNvdXJjZUltcGwoZGF0YVNvdXJjZUluZm8pO1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZShkYXRhU291cmNlSW1wbCk7XG4gICAgZGF0YVNvdXJjZUltcGwuaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhdGFTb3VyY2UpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1dvcmtzaGVldEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnkgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgY29ubmVjdGlvbiBzdW1tYXJ5LlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvblN1bW1hcnkgaW1wbGVtZW50cyBDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25uZWN0aW9uSW5mbzogQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBzZXJ2ZXJVUkkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8uc2VydmVyVVJJO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnR5cGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nvbm5lY3Rpb25TdW1tYXJ5LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBUYWJsZUluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgdGFibGUgc3VtbWFyeS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlU3VtbWFyeSBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlU3VtbWFyeSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJsZUluZm86IFRhYmxlSW5mbykgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8uY29ubmVjdGlvbklkO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXN0b21TUUwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmN1c3RvbVNRTDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVTdW1tYXJ5LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5GaWx0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQsIHByaXZhdGUgX2ZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5GaWx0ZXJDaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuRmlsdGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldC5nZXRGaWx0ZXJzQXN5bmMoKS50aGVuPENvbnRyYWN0LkZpbHRlcj4oZmlsdGVycyA9PiB7XG4gICAgICAvLyBUT0RPOiBGaWx0ZXJpbmcgb2YgdGhlIGZpbHRlcnMgc2hvdWxkIGV2ZW50dWFsbHkgYmUgZG9uZSBwbGF0Zm9ybSBzaWRlLlxuICAgICAgY29uc3QgZXZlbnRlZEZpbHRlciA9IGZpbHRlcnMuZmluZCgoZmlsdGVyKSA9PiAoZmlsdGVyLmZpZWxkTmFtZSA9PT0gdGhpcy5fZmllbGROYW1lKSk7XG5cbiAgICAgIGlmICghZXZlbnRlZEZpbHRlcikge1xuICAgICAgICAvLyBXZSBzaG91bGRuJ3QgaGl0IHRoaXMgdW5sZXNzIHRoZSBmaWx0ZXIgd2FzIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0XG4gICAgICAgIC8vIGFmdGVyIHRoZSBldmVudCB3YXMgcmFpc2VkLlxuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuTWlzc2luZ0ZpbHRlciwgYGNhbm5vdCBmaW5kIGZpbHRlcjogJHt0aGlzLl9maWVsZE5hbWV9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudGVkRmlsdGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVXb3Jrc2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVdvcmtzaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIE1hcmtzU2VsZWN0ZWRFdmVudCBleHRlbmRzIFRhYmxlYXVXb3Jrc2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0Lk1hcmtzU2VsZWN0ZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuTWFya1NlbGVjdGlvbkNoYW5nZWQsIHdvcmtzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLndvcmtzaGVldC5nZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL01hcmtzU2VsZWN0ZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQge1xuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBDcm9zc0ZyYW1lTWVzc2VuZ2VyLFxuICBNRVNTQUdJTkdfVkVSU0lPTiBhcyBBcGlNZXNzYWdpbmdWZXJzaW9uLFxuICBJbml0aWFsaXphdGlvbk9wdGlvbnMsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IENyb3NzRnJhbWVEaXNwYXRjaGVyIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lRGlzcGF0Y2hlcic7XG5cbi8vIENoZWNrcyB0byBzZWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gYW4gaWZyYW1lIGN1cnJlbnRseTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMyNjA3Ni84ODIxMTUzXG5mdW5jdGlvbiBpbklmcmFtZSh0aGlzV2luZG93OiBXaW5kb3cpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdGhpc1dpbmRvdy5zZWxmICE9PSB0aGlzV2luZG93LnBhcmVudDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gYm9vdHN0cmFwIHRoZSBleHRlbnNpb24gd2l0aCBhIGNyb3NzLWZyYW1lIHBhcmVudCB3aGVyZSBUYWJsZWF1IGlzIHJ1bm5pbmdcbiAqXG4gKiBAcGFyYW0gdGhpc1dpbmRvdyBUaGUgd2luZG93IHdoaWNoIHdlIGFyZSBydW5uaW5nIGluIChpbmplY3RlZCBmb3IgdW5pdCB0ZXN0aW5nIHB1cnBvc2VzKVxuICogQHBhcmFtIGludGVybmFsQ29udHJhY3RWZXJzaW9uIFRoZSB2ZXJzaW9uIG51bWJlciBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3Qgd2UgYXJlIHVzaW5nXG4gKiBAcmV0dXJucyBBIHByb21pc2Ugd2hpY2ggaXMgZG9pbmcgdGhlIGFjdHVhbCBib290c3RyYXBwaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb0Nyb3NzRnJhbWVCb290c3RyYXAoXG4gIHRoaXNXaW5kb3c6IFdpbmRvdywgaW50ZXJuYWxDb250cmFjdFZlcnNpb246IENvbnRyYWN0LlZlcnNpb25OdW1iZXIsIG9wdGlvbnM6IEluaXRpYWxpemF0aW9uT3B0aW9ucylcbiAgOiBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2U8Q29udHJhY3QuSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgbGV0IHBhcmVudDogV2luZG93O1xuXG4gICAgLy8gTm9ybWFsbHksIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUuICBUaGUgZXhjZXB0aW9uIHRvIHRoaXMgaXNcbiAgICAvLyB3aGVuIHdlIGFyZSBydW5uaW5nIGFzIGFuIGV4dGVuc2lvbiBpbnNpZGUgYSBkaWFsb2cgYXMgcGFydCBvZiB0aGUgVUlOYW1lc3BhY2VcbiAgICAvLyBmdW5jdGlvbmFsaXR5LiAgSW4gdGhhdCBjYXNlLCB3ZSB3YW50IHRoZSBvcGVuZXIgb2YgdGhpcyB3aW5kb3cgcmF0aGVyIHRoYW4gdGhlIHBhcmVudC5cbiAgICBpZiAoIWluSWZyYW1lKHRoaXNXaW5kb3cpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzV2luZG93Lm9wZW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJlamVjdCgnVGhpcyBleHRlbnNpb24gaXMgbm90IHJ1bm5pbmcgaW5zaWRlIGFuIGlmcmFtZSwgZGVza3RvcCwgb3IgcG9wdXAgd2luZG93LiBJbml0aWFsaXphdGlvbiBmYWlsZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtZXNzZW5nZXIgd2hpY2ggd2lsbCBkbyBoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhpcyB3aW5kb3cgYW5kIG91ciBwYXJlbnRcbiAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IHdoZXJlIHdlIGFyZSBydW5uaW5nIHlldCwgd2UgaGF2ZSB0byBtYWtlIHRoaXMgaW5pdGlhbCBvcmlnaW4gJyonLiBPbmNlXG4gICAgLy8gd2UgaGF2ZSBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQgb3VyIGV4dGVuc2lvbiwgd2Ugd2lsbCBsaW1pdCB3aGVyZSB3ZSBzZW5kIG1lc3NhZ2VzXG4gICAgY29uc3QgbWVzc2VuZ2VyID0gbmV3IENyb3NzRnJhbWVNZXNzZW5nZXIodGhpc1dpbmRvdywgcGFyZW50LCAnKicpO1xuXG4gICAgLy8gUHJlcGFyZSB0byBzZW5kIGFuIGluaXRpYWxpemF0aW9uIG1lc3NhZ2UgdG8gdGhlIHBhcmVudCBmcmFtZVxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uTWVzc2FnZSA9XG4gICAgICBtZXNzZW5nZXIucHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShpbnRlcm5hbENvbnRyYWN0VmVyc2lvbiwgQXBpTWVzc2FnaW5nVmVyc2lvbiwgb3B0aW9ucyk7XG5cbiAgICAvLyBXaGVuIHdlIHJlY2VpdmUgYSByZXNwb25zZSBiYWNrIGZyb20gdGhlIHBhcmVudCwgd2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBndWlkcyBtYXRjaCBhbmQgdGhlbiB3ZSBrbm93XG4gICAgLy8gdGhhdCB0aGUgcGFyZW50IGlzIGF3YXJlIG9mIHVzIGFuZCB3ZSBjYW4gc3RhcnQgY29tbXVuaWNhdGluZ1xuICAgIG1lc3Nlbmdlci5zZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcihmdW5jdGlvbiAobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlKTogdm9pZCB7XG5cbiAgICAgIC8vIFZlcmlmeSB3ZSBhcmUgZ2V0dGluZyBhIHJlc3BvbnNlIGZyb20gb3VyIGluaXRpYWxpemUgbWVzc2FnZVxuICAgICAgaWYgKG1zZy5jb21tYW5kR3VpZCA9PT0gaW5pdGlhbGl6YXRpb25NZXNzYWdlLm1lc3NhZ2VHdWlkKSB7XG5cbiAgICAgICAgLy8gRm9yIHNlcnZlciwgdGhlIHZlcnNpb25pbmcgb2YgdGhlIGZhY3RvcnkgaXMgZ29ubmEgaGFwcGVuIG9uIHRoZSBvdGhlciBzaWRlIG9mIG91ciBmcmFtZSwgc28ganVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9uZSB3aGljaCBkb2Vzbid0IGhhdmUgYW55IHZlcnNpb24ga25vd2xlZGdlXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoZXJGYWN0b3J5ID0gKCkgPT4gbmV3IENyb3NzRnJhbWVEaXNwYXRjaGVyKG1lc3Nlbmdlcik7XG4gICAgICAgIHJlc29sdmUoZGlzcGF0Y2hlckZhY3RvcnkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTm93IHRoYXQgb3VyIGhhbmRsZXJzIGFyZSByZWFkeSwgc3RhcnQgbGlzdGVuaW5nIGFuZCBzZW5kIG91ciBpbml0aWFsaXphdGlvbiBtZXNzYWdlXG4gICAgbWVzc2VuZ2VyLnN0YXJ0TGlzdGVuaW5nKCk7XG4gICAgaW5pdGlhbGl6YXRpb25NZXNzYWdlLnNlbmQoKTtcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAudHMiLCJpbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXhlY3V0ZVJlc3BvbnNlLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG4gIE1vZGVsLFxuICBOb3RpZmljYXRpb25IYW5kbGVyLFxuICBWZXJiSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBNZXNzZW5nZXIsIE5vdGlmaWNhdGlvbk1lc3NhZ2UgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIEludGVybmFsQXBpRGlzcGF0Y2hlciBpbnRlcmZhY2Ugd2hpY2ggZnVuY3Rpb25zIGJ5IHBhc3NpbmcgbWVzc2FnZXNcbiAqIGFjcm9zcyBhIGZyYW1lIGJvdW5kYXJ5LiBUaGlzIGlzIHVzdWFsbHkgYmV0d2VlbiB0aGUgY29kZSB3aGVyZSBvdXIgamF2c2NyaXB0IGxpYnJhcnkgaGFzIGJlZW4gaW5jbHVkZWRcbiAqIGJ5IGEgM3JkIHBhcnR5IGRldiBhbmQgYW5vdGhlciBmcmFtZSB3aGVyZSBUYWJsZWF1IHNlcnZlciBoYXMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENyb3NzRnJhbWVEaXNwYXRjaGVyIGltcGxlbWVudHMgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIHtcblxuICAvLyBDb2xsZWN0aW9uIG9mIHBlbmRpbmcgcHJvbWlzZXMgd2hpY2ggYXJlIHdhaXRpbmcgdG8gYmUgcmVzb2x2ZWQuIFdoZW4gd2UgcmVjZWl2ZSBhIHJlc3BvbnNlIGJhY2sgZnJvbSB0aGUgb3RoZXIgZnJhbWUsXG4gIC8vIHRoZXNlIHByb21pc2VzIGNhbiBiZSBlaXRoZXIgcmVzb2x2ZWQgb3IgcmVqZWN0ZWRcbiAgcHJpdmF0ZSBfcGVuZGluZ1Byb21pc2VzOlxuICAgIHsgW21lc3NhZ2VHdWlkOiBzdHJpbmddOiB7IHJlc29sdmU6IChyZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKSA9PiB2b2lkLCByZWplY3Q6IChlcnJvcjogTW9kZWwpID0+IHZvaWQgfSB9ID0ge307XG5cbiAgLy8gVGhlIGNvbGxlY3Rpb24gb2Ygbm90aWZpY2F0aW9uIGhhbmRsZXJzIHdoaWNoIGhhdmUgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhpcyBkaXNwYXRjaGVyXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkhhbmRsZXJzOiBBcnJheTxOb3RpZmljYXRpb25IYW5kbGVyPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVEaXNwYXRjaGVyIHdoaWNoIHdpbGwgdXNlIHRoZSBnaXZlbiBtZXNzZW5nZXIgdG8gY29tbXVuaWNhdGVcbiAgICogQHBhcmFtIF9tZXNzZW5nZXIgYW4gaW5zdGFudGlhdGVkIGFuZCBsaXN0ZW5pbmcgbWVzc2VuZ2VyIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NlbmdlcjogTWVzc2VuZ2VyKSB7XG4gICAgaWYgKCF0aGlzLl9tZXNzZW5nZXIpIHtcbiAgICAgIHRocm93ICdNaXNzaW5nIG1lc3NlbmdlciBvYmplY3QnO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBvdXIgbWVzc2FnZSBoYW5kbGVycy4gV2Ugb25seSBjYXJlIGFib3V0IGluY29taW5nIG5vdGlmaWNhdGlvbnMgYW5kIGNvbW1hbmQgcmVzcG9uc2VzXG4gICAgdGhpcy5fbWVzc2VuZ2VyLnNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKHRoaXMub25Db21tYW5kUmVzcG9uc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fbWVzc2VuZ2VyLnNldE5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKHRoaXMub25Ob3RpZmljYXRpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLy8vLy8gU3RhcnQgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGltcGxlbWVudGF0aW9uXG5cbiAgcHVibGljIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPiB7XG4gICAgLy8gVG8gZXhlY3V0ZSBhIHZlcmIsIHdlIGZpcnN0IHByZXBhcmUgYSBjb21tYW5kIG1lc3NhZ2UgYW5kIHRoZW4gZGVmaW5lIGEgcHJvbWlzZS5cbiAgICBjb25zdCBwcmVwYXJlZE1lc3NhZ2UgPSB0aGlzLl9tZXNzZW5nZXIucHJlcGFyZUNvbW1hbmRNZXNzYWdlKHZlcmIsIHBhcmFtZXRlcnMpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgLy8gU2F2ZSBvZmYgdGhlIHBlbmRpbmcgcHJvbWlzZSBieSB0aGUgbWVzc2FnZUd1aWQgd2UgYXJlIGFib3V0IHRvIHNlbmQuIFdoZW4gYSByZXNwb25zZSBpc1xuICAgICAgLy8gcmVjZWl2ZWQsIHdlJ2xsIGJlIGFibGUgdG8gcmVzb2x2ZSB0aGlzIHByb21pc2Ugd2l0aCB0aGUgcmVzdWx0XG4gICAgICB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcHJlcGFyZWRNZXNzYWdlLm1lc3NhZ2VHdWlkXSA9IHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfTtcbiAgICB9KTtcblxuICAgIC8vIEFjdHVhbGx5IHNlbmQgdGhlIG1lc3NhZ2UgYW5kIHJldHVybiB0aGUgcHJvbWlzZVxuICAgIHByZXBhcmVkTWVzc2FnZS5zZW5kKCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHVucmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycyA9IHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLmZpbHRlcihoID0+IGggIT09IGhhbmRsZXIpO1xuICB9XG5cbiAgLy8vLy8vIEVuZCBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50YXRpb25cblxuICBwcml2YXRlIG9uQ29tbWFuZFJlc3BvbnNlKHJlc3BvbnNlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlKTogdm9pZCB7XG4gICAgLy8gV2UgZ290IGEgY29tbWFuZCByZXNwb25zZSwgbG9vayB0aHJvdWdoIHRoZSBwZW5kaW5nIHByb21pc2VzIGFuZCByZXNvbHZlXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX3BlbmRpbmdQcm9taXNlcykuaW5kZXhPZihyZXNwb25zZS5jb21tYW5kR3VpZCkgPCAwKSB7XG4gICAgICByZXR1cm47IC8vIFdlIGRvbid0IGhhdmUgYW55IHJlZmVyZW5jZSB0byB0aGlzIGNvbW1hbmQsIGp1c3QgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ1Byb21pc2UgPSB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcmVzcG9uc2UuY29tbWFuZEd1aWRdO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBlcnJvciBkZWZpbmVkLCByZWplY3QgdGhlIHByb21pc2VcbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIHBlbmRpbmdQcm9taXNlLnJlamVjdChyZXNwb25zZS5lcnJvcik7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBkYXRhIGRlZmluZWQsIHJlc29sdmUgdGhlIHByb21pc2VcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcGVuZGluZ1Byb21pc2UucmVzb2x2ZSh7IHJlc3VsdDogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBvdXIgcGVuZGluZyBwcm9taXNlcyBvYmplY3RcbiAgICBkZWxldGUgdGhpcy5fcGVuZGluZ1Byb21pc2VzW3Jlc3BvbnNlLmNvbW1hbmRHdWlkXTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uTWVzc2FnZTogTm90aWZpY2F0aW9uTWVzc2FnZSk6IHZvaWQge1xuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBub3RpZmljYXRpb24gaGFuZGxlciB3ZSBoYXZlIHJlZ2lzdGVyZWQgYW5kIGxldCB0aGVtIGtub3cgYSBub3RpZmljYXRpb24gY2FtZSBpblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaGFuZGxlcih7IG5vdGlmaWNhdGlvbklkOiBub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkLCBkYXRhOiBub3RpZmljYXRpb25NZXNzYWdlLmRhdGEgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGlzLiBXcmFwIGluIHRyeS9jYXRjaCBzbyBpZiBvbmUgaGFuZGxlciBlcnJvcnMsIHRoZSBvdGhlciBzdGlsbCBnZXQgdGhlIG1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZURpc3BhdGNoZXIudHMiLCJpbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnkgfSBmcm9tICcuL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0ZpbHRlclNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9HZXREYXRhU2VydmljZUltcGwnO1xuaW1wb3J0IHsgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL05vdGlmaWNhdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwnO1xuaW1wb3J0IHsgWm9uZVZpc2liaWxpdHlTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9ab25lVmlzaWJpbGl0eVNlcnZpY2VJbXBsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IERhdGFTb3VyY2VTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEdldERhdGFTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEZpbHRlclNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgTm90aWZpY2F0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBQYXJhbWV0ZXJzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZWxlY3Rpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFpvbmVWaXNpYmlsaXR5U2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvUmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcy50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSxcbiAgRGF0YVNjaGVtYSxcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIFBhcmFtZXRlcklkLFxuICBUYWJsZUluZm8sXG4gIFRhYmxlSW5mb3MsXG4gIFZlcmJJZCxcbiAgVmlzdWFsSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL0RhdGFTb3VyY2VTZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgSW50ZXJuYWxDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL0ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvRmllbGRJbXBsJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL0RhdGFTb3VyY2UnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuLi8uLi9JbXBsL0RhdGFTb3VyY2VJbXBsJztcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIERhdGFTb3VyY2VTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLkRlbHRhVGltZU1zXTogMCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TaG91bGRSZWZyZXNoRFNdOiB0cnVlXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlJlZnJlc2hEYXRhU291cmNlLCBwYXJhbWV0ZXJzKS50aGVuPHZvaWQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVUYWJsZXNBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8VGFibGVJbmZvPj4ge1xuICAgIGNvbnN0IGpvaW5QYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgLy8gR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFibGVzIHVzZWQgYnkgdGhpcyBjb25uZWN0aW9uXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0QWN0aXZlVGFibGVzLCBqb2luUGFyYW1ldGVycykudGhlbjxBcnJheTxUYWJsZUluZm8+Pihqb2luUmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgdGFibGVJbmZvcyA9IGpvaW5SZXNwb25zZS5yZXN1bHQgYXMgVGFibGVJbmZvcztcblxuICAgICAgLy8gZ2V0QWN0aXZlVGFibGVzIGlzIHVuc3VwcG9ydGVkIGZvciBjdWJlcyBhbmQgR0EuIFdlIGRvIG5vdCBoYXZlIGEgY29ubmVjdGlvbiB0eXBlIHByb3BlcnR5XG4gICAgICAvLyBhdmFpbGFibGUgZnJvbSB0aGUgcGxhdGZvcm0gKGludGVudGlvbmFsbHksIHRvIHJlZHVjZSBjb2RlIGNodXJuIGFzIG5ldyBjb25uZWN0aW9ucyBhcmUgYWRkZWQpLlxuICAgICAgLy8gSW5zdGVhZCxqdXN0IGNoZWNrIGlmIGFueSB0YWJsZXMgYXJlIHJldHVybmVkLiBUaGlzIGFycmF5IHdpbGwgYmUgZW1wdHkgZm9yIGFueSBub24tdGFibGUgYmFzZWQgZGF0YXNvdXJjZS5cbiAgICAgIGlmICh0YWJsZUluZm9zLnRhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLlVuc3VwcG9ydGVkTWV0aG9kRm9yRGF0YVNvdXJjZVR5cGUsXG4gICAgICAgICAgYGdldEFjdGl2ZVRhYmxlcyBpcyBub3Qgc3VwcG9ydGVkIGZvcjogJHtkYXRhU291cmNlSWR9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YWJsZUluZm9zLnRhYmxlcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8RGF0YVNjaGVtYT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldERhdGFTb3VyY2VzLCBwYXJhbWV0ZXJzKS50aGVuPERhdGFTY2hlbWE+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTY2hlbWEgPSByZXNwb25zZS5yZXN1bHQgYXMgRGF0YVNjaGVtYTtcbiAgICAgIHJldHVybiBkYXRhU2NoZW1hO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8Q29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgLy8gR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFibGVzIHVzZWQgYnkgdGhpcyBjb25uZWN0aW9uXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0Q29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyaWVzLCBwYXJhbXMpLnRoZW48Q29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvblN1bW1hcmllcyA9IHJlc3BvbnNlLnJlc3VsdCBhcyBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W107XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25TdW1tYXJpZXM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRBc3luYyhmaWVsZElkOiBzdHJpbmcpOiBQcm9taXNlPENvbnRyYWN0LkZpZWxkPiB7XG4gICAgbGV0IGZpZWxkSWRDb21wb25lbnRzID0gdGhpcy5wYXJzZUZpZWxkSWQoZmllbGRJZCk7XG4gICAgbGV0IGRhdGFTb3VyY2VJZCA9IGZpZWxkSWRDb21wb25lbnRzWzFdO1xuICAgIGxldCBmaWVsZE5hbWUgPSBmaWVsZElkQ29tcG9uZW50c1syXTtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldERhdGFTb3VyY2U7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdID0gZGF0YVNvdXJjZUlkO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LkZpZWxkPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZGF0YVNvdXJjZSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LkRhdGFTb3VyY2U7XG4gICAgICBsZXQgZmllbGQgPSBkYXRhU291cmNlLmZpZWxkcy5maW5kKChmKSA9PiB7XG4gICAgICAgIHJldHVybiBmLm5hbWUgPT09IGZpZWxkTmFtZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydEZpZWxkKGZpZWxkISwgdGhpcy5jb252ZXJ0RGF0YVNvdXJjZShkYXRhU291cmNlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRGaWVsZChmaWVsZDogSW50ZXJuYWxDb250cmFjdC5GaWVsZCwgZGF0YVNvdXJjZTogQ29udHJhY3QuRGF0YVNvdXJjZSk6IENvbnRyYWN0LkZpZWxkIHtcbiAgICByZXR1cm4gbmV3IEZpZWxkKG5ldyBGaWVsZEltcGwoZmllbGQsIGRhdGFTb3VyY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydERhdGFTb3VyY2UoZGF0YVNvdXJjZTogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhU291cmNlKG5ldyBEYXRhU291cmNlSW1wbChkYXRhU291cmNlKSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRmllbGRJZChmaWVsZElkOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAvLyB3ZSBjYW4gZXhwZWN0IGV4ZWMgdG8gcmV0dXJuIGEgbWF0Y2ggdG8gdGhlIGVudGlyZSBmaWVsZCBpZCBhdCBlbGVtZW50IDAsIHRoZSBkYXRhc291cmNlIGlkIGF0IGVsZW1lbnQgMVxuICAgIC8vIGFuZCB0aGUgZmllbGQgbmFtZSBhdCBlbGVtZW50IDIuIEZpZWxkIGlkIGZvcm1hdCBpcyBbZGF0YVNvdWNyZUlkXS5bZmllbGROYW1lXVxuICAgIHJldHVybiAvXlxcWyguKylcXF1cXC5cXFsoLispXFxdJC8uZXhlYyhmaWVsZElkKSE7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBGaWx0ZXJUeXBlLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgYXMgSW50ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5cbmltcG9ydCB7XG4gIENhdGVnb3JpY2FsRG9tYWluLFxuICBDYXRlZ29yaWNhbEZpbHRlcixcbiAgUmFuZ2VEb21haW4sXG4gIFJhbmdlRmlsdGVyLFxuICBSZWxhdGl2ZURhdGVGaWx0ZXJcbn0gZnJvbSAnLi4vLi4vTW9kZWxzL0ZpbHRlck1vZGVscyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi8uLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEZpbHRlclNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5GaWx0ZXI7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgdmFsdWVzOiBBcnJheTxzdHJpbmc+LFxuICAgIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsXG4gICAgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseUNhdGVnb3JpY2FsRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJWYWx1ZXNdID0gdmFsdWVzO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyVXBkYXRlVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyVXBkYXRlVHlwZS5jb252ZXJ0KHVwZGF0ZVR5cGUpO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSXNFeGNsdWRlTW9kZV0gPVxuICAgICAgKGZpbHRlck9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXJPcHRpb25zLmlzRXhjbHVkZU1vZGUgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IGZpbHRlck9wdGlvbnMuaXNFeGNsdWRlTW9kZTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseVJhbmdlRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG5cbiAgICAvLyBpZiBzcGVjaWFsIG9wdGlvbiBpcyBzcGVjaWZpZWQsIG1pbiBhbmQgbWF4IGFyZSBub3QgbmVlZGVkXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU51bGxPcHRpb25dID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLm51bGxPcHRpb25zLmNvbnZlcnQoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWluKSB7XG4gICAgICAgIGxldCBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWluIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIG1pbiA9IFBhcmFtLnNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShmaWx0ZXJPcHRpb25zLm1pbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWluID0gZmlsdGVyT3B0aW9ucy5taW47XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1pbl0gPSBtaW47XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCkge1xuICAgICAgICBsZXQgbWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBtYXggPSBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZmlsdGVyT3B0aW9ucy5tYXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1heCA9IGZpbHRlck9wdGlvbnMubWF4O1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyUmFuZ2VNYXhdID0gbWF4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQ2xlYXJGaWx0ZXI7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9zbmUgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5HZXRGaWx0ZXJzO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBmaWx0ZXJzID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PEludGVybmFsQ29udHJhY3QuRmlsdGVyPjtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnREb21haW5GaWx0ZXJzKGZpbHRlcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3JpY2FsRG9tYWluQXN5bmMoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0Q2F0ZWdvcmljYWxEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Q2F0ZWdvcmljYWxEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYW5nZURvbWFpbkFzeW5jKHdvcmtzaGVldE5hbWU6IHN0cmluZywgZmllbGRJZDogc3RyaW5nLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5SYW5nZURvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0UmFuZ2VEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LlJhbmdlRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuUmFuZ2VEb21haW47XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSYW5nZURvbWFpbihkb21haW4sIGRvbWFpblR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSGVscGVyIE1ldGhvZHNcbiAgcHJpdmF0ZSBjb252ZXJ0RG9tYWluRmlsdGVycyhkb21haW5GaWx0ZXJzOiBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj4pOiBBcnJheTxDb250cmFjdC5GaWx0ZXI+IHtcbiAgICBsZXQgZmlsdGVyczogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiA9IFtdO1xuICAgIGRvbWFpbkZpbHRlcnMuZm9yRWFjaChkb21haW5GaWx0ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkb21haW5GaWx0ZXIuZmlsdGVyVHlwZSkge1xuICAgICAgICBjYXNlIEZpbHRlclR5cGUuQ2F0ZWdvcmljYWw6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHRoaXMuY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2F0ZWdvcmljYWwgRmlsdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLlJhbmdlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSYW5nZUZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFJhbmdlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGU6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSZWxhdGl2ZURhdGVGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSZWxhdGl2ZSBEYXRlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Q2F0ZWdvcmljYWxGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIge1xuICAgIGxldCBhcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+ID0gZG9tYWluRmlsdGVyLnZhbHVlcy5tYXAoZHYgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoZHYudmFsdWUsIGR2LmZvcm1hdHRlZFZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2F0ZWdvcmljYWxGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgICAgYXBwbGllZFZhbHVlcyxcbiAgICAgIGRvbWFpbkZpbHRlci5pc0V4Y2x1ZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyKTogQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIubWluLnZhbHVlLCBkb21haW5GaWx0ZXIubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1heC52YWx1ZSwgZG9tYWluRmlsdGVyLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIENvbnRyYWN0LkZpbHRlclR5cGUuUmFuZ2UsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgZG9tYWluRmlsdGVyLmluY2x1ZGVOdWxsVmFsdWVzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJlbGF0aXZlRGF0ZUZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyKTogQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgICBsZXQgYW5jaG9yRGF0ZVZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5hbmNob3JEYXRlLnZhbHVlLCBkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSZWxhdGl2ZURhdGVGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZSxcbiAgICAgIGFuY2hvckRhdGVWYWx1ZSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KGRvbWFpbkZpbHRlci5wZXJpb2RUeXBlKSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlUmFuZ2VUeXBlLmNvbnZlcnQoZG9tYWluRmlsdGVyLnJhbmdlVHlwZSksXG4gICAgICBkb21haW5GaWx0ZXIucmFuZ2VOXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRG9tYWluKFxuICAgIGRvbWFpbjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbixcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4ge1xuICAgIGxldCB2YWx1ZXM6IEFycmF5PERhdGFWYWx1ZT4gPSBkb21haW4udmFsdWVzLm1hcCgoZG9tYWluRHYpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGRvbWFpbkR2LnZhbHVlLCBkb21haW5Edi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBDYXRlZ29yaWNhbERvbWFpbih2YWx1ZXMsIGRvbWFpblR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuUmFuZ2VEb21haW4ge1xuICAgIGxldCBtaW46IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluLm1pbi52YWx1ZSwgZG9tYWluLm1pbi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgbGV0IG1heDogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW4ubWF4LnZhbHVlLCBkb21haW4ubWF4LmZvcm1hdHRlZFZhbHVlKTtcbiAgICByZXR1cm4gbmV3IFJhbmdlRG9tYWluKFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgZG9tYWluVHlwZVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRmlsdGVyU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIHByb3RlY3RlZCBfZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIF9maWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByb3RlY3RlZCBfZmllbGRJZDogc3RyaW5nKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0TmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZElkO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWx0ZXJUeXBlKCk6IENvbnRyYWN0LkZpbHRlclR5cGUge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5GaWVsZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRGaWVsZEFzeW5jKHRoaXMuX2ZpZWxkSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWNhbEZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9hcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+LFxuICAgIHByaXZhdGUgX2lzRXhjbHVkZU1vZGU6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBhcHBsaWVkVmFsdWVzKCk6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWVkVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4Y2x1ZGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1ZGVNb2RlO1xuICB9XG5cbiAgcHVibGljIGdldERvbWFpbkFzeW5jKGRvbWFpblR5cGU/OiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKHRoaXMuX3dvcmtzaGVldE5hbWUsIHRoaXMuX2ZpZWxkSWQsIGRvbWFpblR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJhbmdlRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9pbmNsdWRlTnVsbFZhbHVlczogYm9vbGVhbikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pblZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbFZhbHVlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU51bGxWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG9tYWluQXN5bmMoZG9tYWluVHlwZT86IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LlJhbmdlRG9tYWluPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFJhbmdlRG9tYWluQXN5bmModGhpcy5fd29ya3NoZWV0TmFtZSwgdGhpcy5fZmllbGRJZCwgZG9tYWluVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbGF0aXZlRGF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfYW5jaG9yRGF0ZTogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX3BlcmlvZFR5cGU6IENvbnRyYWN0LlBlcmlvZFR5cGUsXG4gICAgcHJpdmF0ZSBfcmFuZ2VUeXBlOiBDb250cmFjdC5EYXRlUmFuZ2VUeXBlLFxuICAgIHByaXZhdGUgX3JhbmdlTjogbnVtYmVyKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW5jaG9yRGF0ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3JEYXRlO1xuICB9XG5cbiAgcHVibGljIGdldCBwZXJpb2RUeXBlKCk6IENvbnRyYWN0LlBlcmlvZFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9wZXJpb2RUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCByYW5nZVR5cGUoKTogQ29udHJhY3QuRGF0ZVJhbmdlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFuZ2VOKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlTjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmljYWxEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4sXG4gICAgcHJpdmF0ZSBfZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSkge1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZXMoKTogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5SYW5nZURvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9kb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpblR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbigpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heCgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFUYWJsZSBhcyBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlLFxuICBQYXJhbWV0ZXJJZCxcbiAgU2VsZWN0ZWRNYXJrc1RhYmxlLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IENvbHVtbiwgRGF0YVRhYmxlLCBEYXRhVmFsdWUsIE1hcmtJbmZvIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIEdldERhdGFTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEdldERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuR2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhSb3dMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiAxMDAwMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGltaXRlZE1heFJvd3MocmVxdWVzdGVkUm93czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCByb3dDb3VudExpbWl0ID0gdGhpcy5nZXRNYXhSb3dMaW1pdCgpICsgMTtcbiAgICByZXR1cm4gKHJlcXVlc3RlZFJvd3MgPiAwICYmIHJlcXVlc3RlZFJvd3MgPCByb3dDb3VudExpbWl0KSA/IHJlcXVlc3RlZFJvd3MgOiByb3dDb3VudExpbWl0O1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgLy8gQ3JlYXRlIGFsbCBvZiBvdXIgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHZlcmIgPSBnZXRUeXBlID09PSBHZXREYXRhVHlwZS5TdW1tYXJ5ID8gVmVyYklkLkdldERhdGFTdW1tYXJ5RGF0YSA6IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YTtcbiAgICBjb25zdCByZXF1ZXN0TWF4Um93cyA9IHZlcmIgPT09IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YSA/IHRoaXMuZ2V0TGltaXRlZE1heFJvd3MobWF4Um93cykgOiBtYXhSb3dzO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdID0gaWdub3JlQWxpYXNlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZVNlbGVjdGlvbl0gPSBpZ25vcmVTZWxlY3Rpb247XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JbmNsdWRlQWxsQ29sdW1uc10gPSBpbmNsdWRlQWxsQ29sdW1ucztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLk1heFJvd3NdID0gcmVxdWVzdE1heFJvd3M7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVRhYmxlPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgVW5kZXJseWluZ0RhdGFUYWJsZTtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhLmRhdGEsIHJlc3BvbnNlRGF0YS5pc1N1bW1hcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldFNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgU2VsZWN0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEhpZ2hsaWdodGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgZGF0YVNvdXJjZUlkOiBzdHJpbmcsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIsXG4gICAgY29sdW1uc1RvSW5jbHVkZTogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdOiBpZ25vcmVBbGlhc2VzLFxuICAgICAgW1BhcmFtZXRlcklkLk1heFJvd3NdOiB0aGlzLmdldExpbWl0ZWRNYXhSb3dzKG1heFJvd3MpLFxuICAgICAgW1BhcmFtZXRlcklkLkNvbHVtbnNUb0luY2x1ZGVdOiBjb2x1bW5zVG9JbmNsdWRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlRGF0YSwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhOiBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LCBpc1N1bW1hcnk6IGJvb2xlYW4pOiBEYXRhVGFibGUge1xuICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZURhdGEuaGVhZGVycy5tYXAoaCA9PiBuZXcgQ29sdW1uKGguZmllbGRDYXB0aW9uLFxuICAgICAgaC5kYXRhVHlwZSxcbiAgICAgIGguaXNSZWZlcmVuY2VkLFxuICAgICAgaC5pbmRleCkpO1xuXG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cblxuICAgIC8vIExpbWl0KzEgaXMgb3VyIHNlbnRpbmFsIHRoYXQgdW5kZXJseWluZyBkYXRhIGNvbnRhaW5zIG1vcmUgcm93cyB0aGFuIHVzZXIgaXMgYWxsb3dlZCB0byBmZXRjaC5cbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBzbyB3ZSBhbHdheXMgcmV0dXJuIE1heFJvd0xpbWl0XG4gICAgY29uc3QgaXNUb3RhbFJvd0NvdW50TGltaXRlZCA9IGlzU3VtbWFyeSA9PT0gZmFsc2UgJiYgcmVzcG9uc2VEYXRhLmRhdGFUYWJsZS5sZW5ndGggPT09IHRoaXMuZ2V0TWF4Um93TGltaXQoKSArIDE7XG4gICAgaWYgKGlzVG90YWxSb3dDb3VudExpbWl0ZWQpIHtcbiAgICAgIHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubGVuZ3RoIC09IDE7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGUgPSByZXNwb25zZURhdGEuZGF0YVRhYmxlLm1hcChyb3cgPT4ge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoY2VsbCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGNlbGwudmFsdWUsIGNlbGwuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWFya3MpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzVG90YWxSb3dDb3VudExpbWl0ZWQsIGlzU3VtbWFyeSwgbWFya3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGFUYWJsZSh0YWJsZSwgaGVhZGVycywgdGFibGUubGVuZ3RoLCBpc1RvdGFsUm93Q291bnRMaW1pdGVkLCBpc1N1bW1hcnkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciwgTW9kZWwsIE5vdGlmaWNhdGlvbiwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlLCBVbnJlZ2lzdGVyRm4gfSBmcm9tICcuLi9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmNsYXNzIFJlZ2lzdHJhdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWx0ZXJGbjogKG5vdGlmaWNhdGlvbk1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbixcbiAgICBwcml2YXRlIF9jYWxsYmFja0ZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiB2b2lkKSB7XG4gICAgLy8gTm90aGluZyBIZXJlXG4gIH1cblxuICBwdWJsaWMgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckZuKG5vdGlmaWNhdGlvbk1vZGVsKSkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tGbihub3RpZmljYXRpb25Nb2RlbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9oYW5kbGVyczogeyBbbm90aWZpY2F0aW9uSWQ6IHN0cmluZ106IEFycmF5PFJlZ2lzdHJhdGlvbj4gfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpIHtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoaWQ6IE5vdGlmaWNhdGlvbklkLCBmaWx0ZXJGbjogKG1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbiwgaGFuZGxlcjogKG1vZGVsOiBNb2RlbCkgPT4gdm9pZCk6IFVucmVnaXN0ZXJGbiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tpZF0gfHwgbmV3IEFycmF5PFJlZ2lzdHJhdGlvbj4oKTtcbiAgICBjb25zdCByZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uKGZpbHRlckZuLCBoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5wdXNoKHJlZ2lzdHJhdGlvbik7XG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gaGFuZGxlcnM7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlUmVnaXN0cmF0aW9uKGlkLCByZWdpc3RyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQ6IE5vdGlmaWNhdGlvbklkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLmhhc093blByb3BlcnR5KGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzSGFuZGxlcnNGb3JOb3RpZmljYXRpb25UeXBlKG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGFuZCBjaGVjayBmb3IgYWxsIHRoZSBoYW5kbGVycyBvZiB0aGlzIHBhcnRpY3VsYXIgbm90aWZpY2F0aW9uXG4gICAgdGhpcy5faGFuZGxlcnNbbm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkXS5mb3JFYWNoKGggPT4gaC5vbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVSZWdpc3RyYXRpb24oaWQ6IE5vdGlmaWNhdGlvbklkLCByZWdpc3RyYXRpb246IFJlZ2lzdHJhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gdGhpcy5faGFuZGxlcnNbaWRdLmZpbHRlcihyZWcgPT4gcmVnICE9PSByZWdpc3RyYXRpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL05vdGlmaWNhdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBNb2RlbCxcbiAgUGFyYW1ldGVySWQsXG4gIFBhcmFtZXRlckluZm8sXG4gIFNoZWV0UGF0aCxcbiAgVmVyYklkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFBhcmFtZXRlckltcGwgfSBmcm9tICcuLi8uLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vUGFyYW1ldGVyJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnNTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFBhcmFtZXRlcnNTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycztcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyhzaGVldFBhdGg6IFNoZWV0UGF0aCwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxQYXJhbWV0ZXI+PiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5TaGVldFBhdGhdOiBzaGVldFBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0UGFyYW1ldGVyc0ZvclNoZWV0LCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBDaGVjayBmb3IgZXJyb3JcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PFBhcmFtZXRlckluZm8+O1xuICAgICAgcmV0dXJuIHJlc3VsdC5tYXAocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChwYXJhbWV0ZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIoaW1wbCwgc2hlZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGFyYW1ldGVyVmFsdWVBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZyk6IFByb21pc2U8UGFyYW1ldGVySW5mbz4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXTogZmllbGROYW1lLFxuICAgICAgW1BhcmFtZXRlcklkLlBhcmFtZXRlclZhbHVlXTogbmV3VmFsdWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuQ2hhbmdlUGFyYW1ldGVyVmFsdWUsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJCeU5hbWVBc3luYyhuYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCBuYW1lLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJCeUdsb2JhbEZpZWxkTmFtZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPFBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRQYXJhbWV0ZXJBc3luYyhzaGVldCwgdW5kZWZpbmVkLCBmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGFyYW1ldGVyQXN5bmMoXG4gICAgc2hlZXQ6IENvbnRyYWN0LlNoZWV0LFxuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlBhcmFtZXRlckNhcHRpb25dID0gbmFtZTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlBhcmFtZXRlckZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnbmFtZSBvciBmaWVsZE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0byBmaW5kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkZpbmRQYXJhbWV0ZXIsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2VPZlBhcmFtZXRlckluZm8gPSAob2JqZWN0OiBNb2RlbCk6IG9iamVjdCBpcyBQYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgcmV0dXJuICdmaWVsZE5hbWUnIGluIG9iamVjdDtcbiAgICAgIH07XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdG8gc2VlIGlmIHdlIGdvdCBhIHZhbGlkIHJlc3BvbnNlIGJhY2sgYWdhaW5cbiAgICAgIGlmIChpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyhyZXNwb25zZS5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBQYXJhbWV0ZXJJbmZvO1xuICAgICAgICBjb25zdCBpbXBsID0gbmV3IFBhcmFtZXRlckltcGwocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIoaW1wbCwgc2hlZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklkLCBQYXJhbWV0ZXJJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50JztcbmltcG9ydCB7IERhdGFWYWx1ZSB9IGZyb20gJy4uL01vZGVscy9HZXREYXRhTW9kZWxzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJJbXBsIHtcbiAgcHJpdmF0ZSBfYWxsb3dhYmxlVmFsdWVzOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbjtcbiAgcHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm87XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pIHtcbiAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVySW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gbmV3IERhdGFWYWx1ZSh0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS52YWx1ZSwgdGhpcy5fcGFyYW1ldGVySW5mby5jdXJyZW50VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBDb250cmFjdC5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRhVHlwZS5jb252ZXJ0KHRoaXMuX3BhcmFtZXRlckluZm8uZGF0YVR5cGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93YWJsZVZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8RGF0YVZhbHVlPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihuZXdWYWx1ZSwgJ25ld1ZhbHVlJyk7XG5cbiAgICBsZXQgY29lcmNlZFZhbHVlID0gUGFyYW0uc2VyaWFsaXplUGFyYW10ZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgY29uc3QgcGFyYW1ldGVyc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzU2VydmljZS5jaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgY29lcmNlZFZhbHVlKS50aGVuKHBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm8pO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2hpY2ggZ29lcyB0aHJvdWdoIGFuZCByZWdpc3RlcnMgZWFjaCBldmVudCB0eXBlIHRoaXMgaW1wbCBrbm93cyBhYm91dFxuICAgKiB3aXRoIHRoZSBOb3RpZmljYXRpb25TZXJ2aWNlLiBJdCByZXR1cm5zIGFuIGFycmF5IG9mIFNpbmdsZUV2ZW50TWFuYWdlciBvYmplY3RzIHdoaWNoXG4gICAqIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlciB0byBoYW5kbGUgdXNlciByZWdpc3RyYXRpb24gLyB1bnJlZ2lzdHJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNoZWV0IFRoZSBzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IHBhcmFtZXRlckV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8UGFyYW1ldGVyQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlBhcmFtZXRlckNoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gbW9kZWwgYXMgc3RyaW5nO1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gdGhpcy5fZ2xvYmFsRmllbGROYW1lO1xuICAgIH0sIChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcGFyYW1ldGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQoZmllbGROYW1lLCBzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKHBhcmFtZXRlckV2ZW50KTtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJJbmZvID0gcGFyYW1ldGVySW5mbztcbiAgICB0aGlzLl9nbG9iYWxGaWVsZE5hbWUgPSBwYXJhbWV0ZXJJbmZvLmZpZWxkTmFtZTtcblxuICAgIGNvbnN0IHR5cGUgPSBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuYWxsb3dhYmxlVmFsdWVzLmNvbnZlcnQocGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXNUeXBlKTtcbiAgICBsZXQgbGlzdFZhbHVlczogQXJyYXk8RGF0YVZhbHVlPiB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWluVmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgc3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBsZXQgZGF0ZVN0ZXBQZXJpb2Q6IENvbnRyYWN0LlBlcmlvZFR5cGUgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLkxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtZXRlckluZm8uYWxsb3dhYmxlVmFsdWVzIHx8IFtdO1xuICAgICAgbGlzdFZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IG5ldyBEYXRhVmFsdWUodmFsLnZhbHVlLCB2YWwuZm9ybWF0dGVkVmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnRyYWN0LlBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZSkge1xuICAgICAgbWluVmFsdWUgPSBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlICYmIG5ldyBEYXRhVmFsdWUocGFyYW1ldGVySW5mby5taW5WYWx1ZS52YWx1ZSwgcGFyYW1ldGVySW5mby5taW5WYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICBtYXhWYWx1ZSA9IHBhcmFtZXRlckluZm8ubWF4VmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIHN0ZXBTaXplID0gcGFyYW1ldGVySW5mby5zdGVwU2l6ZTtcbiAgICAgIGRhdGVTdGVwUGVyaW9kID0gcGFyYW1ldGVySW5mby5kYXRlU3RlcFBlcmlvZCAmJlxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGF0ZVN0ZXBQZXJpb2QuY29udmVydChwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hbGxvd2FibGVWYWx1ZXMgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgYWxsb3dhYmxlVmFsdWVzOiBsaXN0VmFsdWVzLFxuICAgICAgbWluVmFsdWU6IG1pblZhbHVlLFxuICAgICAgbWF4VmFsdWU6IG1heFZhbHVlLFxuICAgICAgc3RlcFNpemU6IHN0ZXBTaXplLFxuICAgICAgZGF0ZVN0ZXBQZXJpb2Q6IGRhdGVTdGVwUGVyaW9kXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVNoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVTaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckNoYW5nZWRFdmVudCBleHRlbmRzIFRhYmxlYXVTaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dsb2JhbEZpZWxkTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlcj4ge1xuICAgIC8vIENhbGwgZG93biB0byBvdXIgc2VydmljZSB0byBnZXQgdGhlIHBhcmFtZXRlciBiYWNrIHZpYSBpdHMgZmllbGQgbmFtZVxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmZpbmRQYXJhbWV0ZXJCeUdsb2JhbEZpZWxkTmFtZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgdGhpcy5zaGVldCkudGhlbihwYXJhbWV0ZXIgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5NaXNzaW5nUGFyYW1ldGVyLCBgQ2Fubm90IGZpbmQgcGFyYW1ldGVyOiAke3RoaXMuX2dsb2JhbEZpZWxkTmFtZX1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4vSW1wbC9QYXJhbWV0ZXJJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgUGFyYW1ldGVyIGNvbnRyYWN0LiBDYWxscyBkb3duIHRvIHRoZSBpbXBsXG4gKiBjbGFzcyBmb3IgYWxtb3N0IGFsbCBvZiB0aGUgd29yayBpdCBkb2VzLlxuICovXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbWV0ZXJJbXBsOiBQYXJhbWV0ZXJJbXBsLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBvdXIgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhcmFtZXRlckltcGwuaW5pdGlhbGl6ZUV2ZW50cyhzaGVldCkuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudFZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmRhdGFUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxvd2FibGVWYWx1ZXMoKTogQ29udHJhY3QuUGFyYW1ldGVyRG9tYWluUmVzdHJpY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IERhdGUpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BhcmFtZXRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgUGFyYW1ldGVySWQsXG4gIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLFxuICBTZWxlY3Rpb25VcGRhdGVUeXBlIGFzIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCxcbiAgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwsXG4gIFJhbmdlU2VsZWN0aW9uTW9kZWwsXG4gIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcixcbiAgVHVwbGVTZWxlY3Rpb25Nb2RlbCxcbiAgVmFsdWVTZWxlY3Rpb25Nb2RlbFxufSBmcm9tICcuLi8uLi9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VsZWN0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBTZWxlY3Rpb25TZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbGVhciBhbGwgdGhlIHNlbGVjdGVkIG1hcmtzIGZvciB0aGUgZ2l2ZW4gd29ya3NoZWV0LlxuICAgKlxuICAgKiBAcGFyYW0gdmlzdWFsSWRcbiAgICovXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbGVhclNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuOyAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZWxlY3QgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKiBAcGFyYW0gc2VsZWN0aW9uQ3JpdGVyaWFcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgc2VsZWN0aW9uQ3JpdGVyaWFzOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ1NlbGVjdGlvbiBjcml0ZXJpYSBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWFzWzBdKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXMsIHNlbGVjdGlvbkNyaXRlcmlhVHlwZSk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkLFxuICAgICAgW1BhcmFtZXRlcklkLlNlbGVjdGlvblVwZGF0ZVR5cGVdOiBzZWxlY3Rpb25UeXBlXG4gICAgfTtcblxuICAgIHN3aXRjaCAoc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKSB7XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlOiB7XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSGllclZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlOiB7XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUXVhbnRSYW5nZVNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkRpbWVuc2lvblR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5EaW1WYWxTZWxlY3Rpb25Nb2RlbHNdID0gc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAqIE1ldGhvZCB0byBzZWxlY3QgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gKlxuICogQHBhcmFtIHZpc3VhbElkXG4gKiBAcGFyYW0gTWFya0luZm9cbiAqIEBwYXJhbSBzZWxlY3Rpb25VcGRhdGVUeXBlXG4gKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAobWFya3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ01hcmtzIGluZm8gbWlzc2luZyBmb3Igc2VsZWN0aW5nIG1hcmtzIGJ5IElkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uVHlwZTogc3RyaW5nID0gdGhpcy52YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSB0aGlzLnBhcnNlU2VsZWN0aW9uSWRzKG1hcmtzKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGUsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uXTogc2VsZWN0aW9uTW9kZWxDb250YWluZXIuc2VsZWN0aW9uXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TZWxlY3RCeVZhbHVlLCBwYXJhbWV0ZXJzKS50aGVuPHZvaWQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgICByZXR1cm47XG4gICAgICAvLyBUT0RPIEludmVzdGlnYXRlIHRoZSBlcnJvciByZXNwb25zZSB3aXRoIG11bHRpcGxlIG91dHB1dCBwYXJhbXMgYW5kIHRocm93IGVycm9yIGFjY29yZGluZ2x5LlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmVwYXJlIHRoZSBwcmVzIG1vZGVscyBmb3Igc2VsZWN0aW9uIGJ5IE1hcmtzSW5mb1xuICAgKiBAcGFyYW0gbWFya3NcbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25JZHMobWFya3M6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPik6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gICAgbGV0IGlkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0dXBsZUlkOiBOdW1iZXIgfCB1bmRlZmluZWQgPSBtYXJrc1tpXS50dXBsZUlkO1xuICAgICAgaWYgKHR1cGxlSWQgIT09IHVuZGVmaW5lZCAmJiB0dXBsZUlkICE9PSBudWxsKSB7IC8vIElmIHR1cGxlIGlkIGlzIHByb3ZpZGVkIHVzZSB0aGF0IGluc3RlYWQgb2YgcGFpclxuICAgICAgICBpZHMucHVzaCh0dXBsZUlkLnRvU3RyaW5nKCkpOyAvLyBjb2xsZWN0IHRoZSB0dXBsZSBpZHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAndHVwbGVJZCBwYXJzaW5nIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZHMubGVuZ3RoICE9PSAwKSB7IC8vIHR1cGxlIGlkcyBiYXNlZCBzZWxlY3Rpb25cbiAgICAgIGxldCB0dXBsZVNlbGVjdGlvbk1vZGVsOiBUdXBsZVNlbGVjdGlvbk1vZGVsID0gbmV3IFR1cGxlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICAgIHR1cGxlU2VsZWN0aW9uTW9kZWwuc2VsZWN0aW9uVHlwZSA9ICd0dXBsZXMnO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5vYmplY3RJZHMgPSBpZHM7XG4gICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb24gPSB0dXBsZVNlbGVjdGlvbk1vZGVsO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmVwYXJlIHRoZSBwcmVzIG1vZGVscyBmb3Igc2VsZWN0aW9uIGJ5IHZhbHVlcy5cbiAgICpcbiAgICogU3VwcG9ydHMgMyB0eXBlcyBmb3Igc2VsZWN0aW9uOlxuICAgKiAxKSBoaWVyYXJjaGljYWwgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDIpIHJhbmdlIHZhbHVlIGJhc2VkIHNlbGVjdGlvblxuICAgKiAzKSBEaW1lbnNpb24gdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKiBAcGFyYW0gaGllck1vZGVsQXJyXG4gICAqIEBwYXJhbSBkaW1Nb2RlbEFyclxuICAgKiBAcGFyYW0gcXVhbnRNb2RlbEFyclxuICAgKiBAcGFyYW0gc2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIHBhcnNlU2VsZWN0aW9uTWFya3Moc2VsZWN0aW9uQ3JpdGVyaWFzOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IG5ldyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIoKTtcbiAgICBsZXQgbWl4ZWRTZWxlY3Rpb25zRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uQ3JpdGVyaWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdCA9IHNlbGVjdGlvbkNyaXRlcmlhc1tpXTtcbiAgICAgIGlmIChzdC5maWVsZE5hbWUgJiYgKHN0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgc3QudmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICAgICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gc3QudmFsdWUgYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZTtcbiAgICAgICAgaWYgKGNhdFJlZ2V4LnRlc3Qoc3QuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlKSB7XG4gICAgICAgICAgICBsZXQgaGllck1vZGVsOiBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuaGllck1vZGVsQXJyLnB1c2goaGllck1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWl4ZWRTZWxlY3Rpb25zRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5taW4gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZSkge1xuICAgICAgICAgICAgbGV0IHF1YW50TW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSB0aGlzLmFkZFRvUmFuZ2VQYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgcmFuZ2VPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIucXVhbnRNb2RlbEFyci5wdXNoKHF1YW50TW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIERpbWVuc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkRpbWVuc2lvblR5cGUpIHtcbiAgICAgICAgICAgIGxldCBkaW1Nb2RlbDogRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgPSB0aGlzLmFkZFRvUGFyYW1zTGlzdChzdC5maWVsZE5hbWUsIHN0LnZhbHVlKSBhcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbDtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmRpbU1vZGVsQXJyLnB1c2goZGltTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWl4ZWRTZWxlY3Rpb25zRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VsZWN0aW9uIENyaXRlcmlhIHBhcnNpbmcgZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYXMgVmFsaWRhdGUgYW5kIGRldGVybWluZSB0aGUgc2VsZWN0aW9uIGNyaXRlcmlhcyB0eXBlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvbkNyaXRlcmlhKHNlbGVjdGlvbkNyaXRlcmlhOiBDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYSk6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSB7XG4gICAgbGV0IHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2Ygc2VsZWN0aW9uLCB0aGlzIGNvbW1hbmQgaXMgYnkgbG9va2luZyBhdCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgbGV0IGNyaXQ6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhID0gc2VsZWN0aW9uQ3JpdGVyaWE7XG5cbiAgICBsZXQgY2F0UmVnZXggPSBuZXcgUmVnRXhwKCcoXFxbW0EtWmEtejAtOV0rXSkuKicsICdnJyk7XG4gICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gY3JpdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuXG4gICAgaWYgKGNyaXQuZmllbGROYW1lICYmIChjcml0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY3JpdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgIGlmIChjYXRSZWdleC50ZXN0KGNyaXQuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuSGllcmFyY2hpY2FsVHlwZTtcbiAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU7XG4gICAgICB9IGVsc2UgeyAvLyBEaW1lcnNpb24gdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdHJhbnNmb3JtIHRoZSBrZXkgdmFsdWUgcGFpciBpbnRvIHZhbHVlIGJhc2VkIHByZXMgbW9kZWwgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVTZWxlY3Rpb25Nb2RlbFxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBhZGRUb1BhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBvYmplY3QpOiBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbiAgICBsZXQgdmFsdWVTZWxlY3Rpb25Nb2RlbDogVmFsdWVTZWxlY3Rpb25Nb2RlbCA9IG5ldyBWYWx1ZVNlbGVjdGlvbk1vZGVsKCk7XG4gICAgbGV0IG1hcmtWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsZXQgdmFsdWVBcnI6IEFycmF5PHN0cmluZz4gPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFya1ZhbHVlcy5wdXNoKHZhbHVlQXJyW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgdmFsdWVTZWxlY3Rpb25Nb2RlbC5xdWFsaWZpZWRGaWVsZENhcHRpb24gPSBmaWVsZE5hbWU7XG4gICAgdmFsdWVTZWxlY3Rpb25Nb2RlbC5zZWxlY3RWYWx1ZXMgPSBtYXJrVmFsdWVzO1xuICAgIHJldHVybiB2YWx1ZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gcmFuZ2UgYmFzZWQgc2VsZWN0aW9uIHByZXMgbW9kZWwuXG4gICAqXG4gICAqIFRPRE86IE5lZWQgdG8gaGFuZGxlIHRoZSBwYXJzaW5nIG9mIGRhdGUgdHlwZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUmFuZ2VQYXJhbXNMaXN0KGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogQ29udHJhY3QuUmFuZ2VWYWx1ZSk6IFJhbmdlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCByYW5nZVNlbGVjdGlvbk1vZGVsOiBSYW5nZVNlbGVjdGlvbk1vZGVsID0gbmV3IFJhbmdlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICBpZiAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubWF4ICE9PSBudWxsKSB7XG4gICAgICByYW5nZVNlbGVjdGlvbk1vZGVsLm1heFZhbHVlID0gdmFsdWUubWF4LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5taW4gIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWluVmFsdWUgPSB2YWx1ZS5taW4udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5pbmNsdWRlZCA9IHRoaXMudmFsaWRhdGVOdWxsT3B0aW9uVHlwZSh2YWx1ZS5udWxsT3B0aW9uKTtcbiAgICByZXR1cm4gcmFuZ2VTZWxlY3Rpb25Nb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHNlbGVjdGlvbiB1cGRhdGUgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBzdHJpbmcge1xuICAgIGlmIChzZWxlY3Rpb25VcGRhdGVUeXBlID09PSBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlLlJlcGxhY2UpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVwbGFjZTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuQWRkKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLkFkZDtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVtb3ZlKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlbW92ZTtcbiAgICB9XG4gICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgaW5jbHVkZSB0eXBlIGZvciByYW5nZSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBudWxsT3B0aW9uXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlTnVsbE9wdGlvblR5cGUobnVsbE9wdGlvbjogQ29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYgKG51bGxPcHRpb24pIHtcbiAgICAgIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOb25OdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLkFsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgfVxuXG59XG5cbi8qKlxuICogRW51bSBmb3IgdGhlIGRpZmZlcmVudCBzZWxlY3Rpb24gY3JpdGVyaWEgdHlwZXMuXG4gKi9cbmVudW0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgSGllcmFyY2hpY2FsVHlwZSA9IDEsXG4gIFJhbmdlVHlwZSA9IDIsXG4gIERpbWVuc2lvblR5cGUgPSAzLFxuICBUdXBsZXNUeXBlID0gNCxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCIvKipcbiAqIFNlbGVjdGlvbiBNb2RlbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHF1YWxpZmllZEZpZWxkQ2FwdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIFZhbHVlIGJhc2VkIHNlbGVjdGlvbiBtb2RlbC4gTWVhbnQgZm9yIGhpZXJhcmNoaWNhbCwgcmFuZ2UgYW5kIGNhdGVnb3JpY2FsIHNlbGVjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIGV4dGVuZHMgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogSGllcmFyY2hpY2FsIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cblxuLyoqXG4gKiBSYW5nZSBiYXNlZCB2YWx1ZSBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFJhbmdlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBtaW5WYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgbWF4VmFsdWU6IHN0cmluZztcbiAgcHVibGljIGluY2x1ZGVkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cbi8qKlxuICogVHVwbGUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBUdXBsZVNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IHN0cmluZztcbiAgcHVibGljIG9iamVjdElkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xufVxuXG4vKipcbiAqIENvbnRhaW5lciBjbGFzcyB0byBwb3B1bGF0ZSBhbGwgdGhlIHNlbGVjdGlvbiBtb2RlbHMgd2hlbiBwYXJzaW5nIGlucHV0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICBwdWJsaWMgaGllck1vZGVsQXJyOiBBcnJheTxIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIGRpbU1vZGVsQXJyOiBBcnJheTxEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHF1YW50TW9kZWxBcnI6IEFycmF5PFJhbmdlU2VsZWN0aW9uTW9kZWw+ID0gW107XG4gIHB1YmxpYyBzZWxlY3Rpb246IFR1cGxlU2VsZWN0aW9uTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwiaW1wb3J0IHsgRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzIGFzIEV4dGVybmFsRW51bUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9FeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgUGFyYW1ldGVySWQsIFZlcmJJZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgWm9uZVZpc2liaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vWm9uZVZpc2liaWxpdHlTZXJ2aWNlJztcbmltcG9ydCB7IFpvbmVWaXNpYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgWm9uZVZpc2liaWxpdHlTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFpvbmVWaXNpYmlsaXR5U2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLlpvbmVWaXNpYmlsaXR5O1xuICB9XG5cbiAgcHVibGljIHNldFZpc2liaWxpdHlBc3luYyhkYXNoYm9hcmQ6IFN0cmluZywgem9uZVZpc2liaWxpdHlNYXA6IE1hcDxudW1iZXIsIFpvbmVWaXNpYmlsaXR5VHlwZT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkRhc2hib2FyZF06IGRhc2hib2FyZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5ab25lSWRzVmlzaWJpbGl0eU1hcF06IHt9XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh6b25lVmlzaWJpbGl0eU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlpvbmVJZHNWaXNpYmlsaXR5TWFwXVtrZXldID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLnNldFZpc2liaWxpdHlUeXBlLmNvbnZlcnQoem9uZVZpc2liaWxpdHlNYXBba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TZXRab25lVmlzaWJpbGl0eSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvWm9uZVZpc2liaWxpdHlTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgRGFzaGJvYXJkQ29udGVudCBuYW1lc3BhY2UuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIERhc2hib2FyZENvbnRlbnQgaXNcbiAqIGN1cnJlbnRseSBqdXN0IGEgKHNpbmdsZSkgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGVudCBpbXBsZW1lbnRzIENvbnRyYWN0LkRhc2hib2FyZENvbnRlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uRW52aXJvbm1lbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIGFzIEVudW1NYXBwaW5ncywgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIGVudmlyb25tZW50IG5hbWVzcGFjZS5cbiAqIEVudmlyb25tZW50IGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzXG4gKiBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQgaW1wbGVtZW50cyBDb250cmFjdC5FbnZpcm9ubWVudCB7XG4gIHByaXZhdGUgX2FwaVZlcnNpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfY29udGV4dDogQ29udHJhY3QuRXh0ZW5zaW9uQ29udGV4dDtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX21vZGU6IENvbnRyYWN0LkV4dGVuc2lvbk1vZGU7XG4gIHByaXZhdGUgX29wZXJhdGluZ1N5c3RlbTogc3RyaW5nO1xuICBwcml2YXRlIF90YWJsZWF1VmVyc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9leHRlcm5hbFNjcmlwdFZlcnNpb246IFZlcnNpb25OdW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGV4dGVuc2lvbkVudmlyb25tZW50OiBFeHRlbnNpb25FbnZpcm9ubWVudCkge1xuICAgIHRoaXMuX2FwaVZlcnNpb24gPSBleHRlbnNpb25FbnZpcm9ubWVudC5hcGlWZXJzaW9uO1xuICAgIHRoaXMuX2NvbnRleHQgPSBFbnVtTWFwcGluZ3MuZXh0ZW5zaW9uQ29udGV4dC5jb252ZXJ0KGV4dGVuc2lvbkVudmlyb25tZW50LmV4dGVuc2lvbkNvbnRleHQpO1xuICAgIHRoaXMuX2xhbmd1YWdlID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTGFuZ3VhZ2U7XG4gICAgdGhpcy5fbG9jYWxlID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTG9jYWxlO1xuICAgIHRoaXMuX21vZGUgPSBFbnVtTWFwcGluZ3MuZXh0ZW5zaW9uTW9kZS5jb252ZXJ0KGV4dGVuc2lvbkVudmlyb25tZW50LmV4dGVuc2lvbk1vZGUpO1xuICAgIHRoaXMuX29wZXJhdGluZ1N5c3RlbSA9IGV4dGVuc2lvbkVudmlyb25tZW50Lm9wZXJhdGluZ1N5c3RlbTtcbiAgICB0aGlzLl90YWJsZWF1VmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LnRhYmxlYXVWZXJzaW9uO1xuICAgIHRoaXMuX2V4dGVybmFsU2NyaXB0VmVyc2lvbiA9IFZlcnNpb25OdW1iZXIuSW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwaVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpVmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vZGUoKTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wZXJhdGluZ1N5c3RlbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpbmdTeXN0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhYmxlYXVWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlYXVWZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBleHRlcm5hbFNjcmlwdFZlcnNpb24oKTogVmVyc2lvbk51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVybmFsU2NyaXB0VmVyc2lvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRW52aXJvbm1lbnQudHMiLCJpbXBvcnQgeyBTZXR0aW5ncyBhcyBTZXR0aW5nc0NvbnRyYWN0IH0gZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc0ltcGwgfSBmcm9tICcuLi9JbXBsL1NldHRpbmdzSW1wbCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbGxlY3Rpb24gfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBzZXR0aW5ncyBuYW1lc3BhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgU2V0dGluZ3NDb250cmFjdCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXR0aW5nc0ltcGw6IFNldHRpbmdzSW1wbCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIG91ciBldmVudCBoYW5kbGluZyBmb3IgdGhpcyBjbGFzc1xuICAgIHRoaXMuX3NldHRpbmdzSW1wbC5pbml0aWFsaXplRXZlbnRzKCkuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBlcmFzZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3NldHRpbmdzSW1wbC5lcmFzZShrZXkpO1xuICB9XG5cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGwoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmdldEFsbCgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc01vZGlmaWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuaXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLnNhdmVBc3luYygpO1xuICB9XG5cbiAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3NldHRpbmdzSW1wbC5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1NldHRpbmdzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBVSUltcGwgfSBmcm9tICcuLi9JbXBsL1VJSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIFVJIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFVJIGltcGxlbWVudHMgQ29udHJhY3QuVUkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaW1wbDogVUlJbXBsKSB7IH1cblxuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkPzogc3RyaW5nLCBvcHRpb25zPzogQ29udHJhY3QuRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ltcGwuZGlzcGxheURpYWxvZ0FzeW5jKHVybCwgcGF5bG9hZCwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2ltcGwuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1VJLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEluaXRpYWxpemF0aW9uU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL1NldHRpbmdzU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9VSVNlcnZpY2VJbXBsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzKGRpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcik6IHZvaWQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBJbml0aWFsaXphdGlvblNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgU2V0dGluZ3NTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFVJU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL1JlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzLnRzIiwiaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vSW5pdGlhbGl6YXRpb25TZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemF0aW9uU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBJbml0aWFsaXphdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuSW5pdGlhbGl6YXRpb25TZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVEYXNoYm9hcmRFeHRlbnNpb25zQXN5bmMoaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sIGNvbnRleHRNZW51SWRzOiBzdHJpbmdbXSk6IFByb21pc2U8RXh0ZW5zaW9uQm9vdHN0cmFwSW5mbz4ge1xuICAgIGNvbnN0IHBhcmFtczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uQ29udGV4dE1lbnVJZHNdOiBjb250ZXh0TWVudUlkcyxcbiAgICAgIFtQYXJhbWV0ZXJJZC5Jc0V4dGVuc2lvbkRpYWxvZ106IGlzRXh0ZW5zaW9uRGlhbG9nXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkluaXRpYWxpemVFeHRlbnNpb24sIHBhcmFtcykudGhlbjxFeHRlbnNpb25Cb290c3RyYXBJbmZvPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBUT0RPIC0gVmFsaWRhdGUgcmV0dXJuIHZhbHVlXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25Cb290c3RyYXBJbmZvO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2V0dGluZ3NTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBTZXR0aW5nc1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuU2V0dGluZ3NTZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIHNhdmVTZXR0aW5nc0FzeW5jKHNldHRpbmdzOiBTZXR0aW5nc0NvbGxlY3Rpb24pOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuU2V0dGluZ3NWYWx1ZXNdOiBzZXR0aW5ncyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2F2ZUV4dGVuc2lvblNldHRpbmdzLCBwYXJhbWV0ZXJzKS50aGVuPFNldHRpbmdzQ29sbGVjdGlvbj4odmFsdWUgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUucmVzdWx0IGFzIEV4dGVuc2lvblNldHRpbmdzSW5mbztcblxuICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5zZXR0aW5nc1ZhbHVlcykge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1VuZXhwZWN0ZWQgZXJyb3Igc2F2aW5ncyBzZXR0aW5ncy4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChyZXN1bHQuc2V0dGluZ3NWYWx1ZXMpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9TZXR0aW5nc1NlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRGlhbG9nT3B0aW9ucywgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UsIFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uL1VJU2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRElBTE9HX0hFSUdIVDogbnVtYmVyID0gNDAwOyAvLyBpbiBwaXhlbHNcbmNvbnN0IERFRkFVTFRfRElBTE9HX1dJRFRIOiBudW1iZXIgPSA2MDA7IC8vIGluIHBpeGVsc1xuXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFVJU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5VSVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkOiBzdHJpbmcsIG9wdGlvbnM/OiBEaWFsb2dPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1VybF06IHVybCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZFxuICAgIH07XG5cbiAgICBjb25zdCBoOiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLmhlaWdodCkpID8gb3B0aW9ucy5oZWlnaHQgOiBERUZBVUxUX0RJQUxPR19IRUlHSFQ7XG4gICAgY29uc3QgdzogbnVtYmVyID0gKChvcHRpb25zKSAmJiAob3B0aW9ucy53aWR0aCkpID8gb3B0aW9ucy53aWR0aCA6IERFRkFVTFRfRElBTE9HX1dJRFRIO1xuXG4gICAgLy8gT24gdGhlIHBsYXRmb3JtIHNpZGUsIHdlIGRvIHNvbWV0aGluZyByZWFzb25hYmxlIHJlZ2FyZGVzcyBvZiB3aGV0aGVyIHRoZSBwYXNzZWRcbiAgICAvLyBoZWlnaHQgYW5kIHdpZHRoIGFyZSB0b28gbGFyZ2Ugb3IgdG9vIHNtYWxsLiAgQnV0IHRoaXMgbGlrZWx5IGluZGljYXRlcyBhIGRldmVsb3BlciBlcnJvcixcbiAgICAvLyBzbyB3ZSB0aHJvdyBhbiBlcnJvciBoZXJlIHRvIGhlbHAgd2l0aCBkZWJ1Z2dpbmcuXG4gICAgaWYgKGggPD0gMCB8fCB3IDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2l6ZSBwYXJhbWV0ZXJzIGZvciBkaXNwbGF5RGlhbG9nQXN5bmMgbXVzdCBiZSBwb3NpdGl2ZScpO1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nSF0gPSBoO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nV10gPSB3O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRGlzcGxheURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2dSZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0O1xuICAgICAgc3dpdGNoIChkaWFsb2dSZXN1bHQpIHtcbiAgICAgICAgY2FzZSBFeHRlbnNpb25EaWFsb2dSZXN1bHQuRGlhbG9nQWxyZWFkeU9wZW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkRpYWxvZ0FscmVhZHlPcGVuLCAnVGhlcmUgYWxyZWFkeSBleGlzdHMgYW4gb3BlbiBkaWFsb2cgZm9yIHRoaXMgZXh0ZW5zaW9uLicpO1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5JbnZhbGlkRG9tYWluOlxuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkRG9tYWluRGlhbG9nLFxuICAgICAgICAgICAgJ1RoZSB1cmwgb2YgYW4gZXh0ZW5zaW9uIGRpYWxvZyBtdXN0IG1hdGNoIHRoZSBkb21haW4gb2YgdGhlIHBhcmVudCBleHRlbnNpb24uJyk7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFN1Y2Nlc3MgY2FzZVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0gKHBheWxvYWQpID8geyBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZF06IHBheWxvYWQgfSA6IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuQ2xvc2VEaWFsb2csIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9VSVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25TZXR0aW5nc0luZm8sIE5vdGlmaWNhdGlvbklkLCBTZXR0aW5nc0V2ZW50IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5LFxuICBFcnJvckhlbHBlcnMsXG4gIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gIFNlcnZpY2VOYW1lcyxcbiAgU2luZ2xlRXZlbnRNYW5hZ2VyLFxuICBTaW5nbGVFdmVudE1hbmFnZXJJbXBsLFxuICBUYWJsZWF1RXJyb3IsXG4gIFRhYmxlYXVFdmVudFxufSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbGxlY3Rpb24sIFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1NldHRpbmdzU2VydmljZSc7XG5cbmNsYXNzIFNldHRpbmdzQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdUV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuU2V0dGluZ3NDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbmV3U2V0dGluZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5ld1NldHRpbmdzKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX25ld1NldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0ltcGwge1xuICBwcml2YXRlIHN0YXRpYyBBU1lOQ19TQVZFX0lOX1BST0dSRVNTOiBzdHJpbmcgPSAnQXN5bmMgU2F2ZSBpcyBpbiBwcm9ncmVzcywgdXBkYXRpbmcgc2V0dGluZ3MgaXMgbm90IGFsbG93ZWQuJztcbiAgcHJpdmF0ZSBfaXNNb2RpZmllZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY3VycmVudFNldHRpbmdzOiBTZXR0aW5nc0NvbGxlY3Rpb247XG5cbiAgLy8gU2luY2UgcHJvbWlzZXMgY2FuJ3QgYmUgaW50cm9zcGVjdGVkIGZvciBzdGF0ZSwga2VlcCBhIHZhcmlhYmxlIHRoYXRcbiAgLy8gaW5kaWNhdGVzIGEgc2F2ZSBpcyBpbiBwcm9ncmVzcywgc28gdGhhdCBzZXQvZXJhc2UgY2FuJ3QgYmUgY2FsbGVkIGR1cmluZyBhIHNhdmUuXG4gIHByaXZhdGUgX3NhdmVJblByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNldHRpbmdzSW5mbzogRXh0ZW5zaW9uU2V0dGluZ3NJbmZvKSB7XG4gICAgdGhpcy5pbml0aWFsaXplU2V0dGluZ3Moc2V0dGluZ3NJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBlcmFzZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICAvLyBPbmx5IG1ha2UgYSBtb2RpZmljYXRpb24gaWYgd2UgaGF2ZSB0aGUga2V5IGFscmVhZHlcbiAgICBpZiAodGhpcy5fY3VycmVudFNldHRpbmdzW2tleV0pIHtcbiAgICAgIHRoaXMudmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpO1xuXG4gICAgICBkZWxldGUgdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gICAgICB0aGlzLl9pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGtleSwgJ2tleScpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTZXR0aW5nc1trZXldO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIC8vIFJldHVybnMgYSBtdXRhYmxlIGNvcHkgb2YgdGhlIHNldHRpbmdzXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTW9kaWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTW9kaWZpZWQ7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUFzeW5jKCk6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAvLyBKdXN0IHJlc29sdmUgaW1tZWRpYXRlbHkgaWYgc2V0dGluZ3MgYXJlIHVuY2hhbmdlZFxuICAgIGlmICghdGhpcy5faXNNb2RpZmllZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZTxTZXR0aW5nc0NvbGxlY3Rpb24+KHRoaXMuX2N1cnJlbnRTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2F2ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgLy8gVXNlIHRoZSBzZXR0aW5ncyBzZXJ2aWNlIHRvIHNhdmUgc2V0dGluZ3MgdG8gdHdiXG4gICAgY29uc3Qgc2V0dGluZ3NTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2V0dGluZ3NTZXJ2aWNlPihcbiAgICAgIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuU2V0dGluZ3NTZXJ2aWNlKTtcblxuICAgIHJldHVybiBzZXR0aW5nc1NlcnZpY2Uuc2F2ZVNldHRpbmdzQXN5bmModGhpcy5fY3VycmVudFNldHRpbmdzKS50aGVuPFNldHRpbmdzQ29sbGVjdGlvbj4obmV3U2V0dGluZ3MgPT4ge1xuICAgICAgdGhpcy5fc2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3MgPSBuZXdTZXR0aW5ncztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fY3VycmVudFNldHRpbmdzLCBuZXdTZXR0aW5ncyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3U2V0dGluZ3M7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVN0cmluZ1BhcmFtZXRlcihrZXksICdrZXknKTsgLy8gS2V5IHNob3VsZG4ndCBiZSBhbiBlbXB0eSBzdHJpbmcuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcih2YWx1ZSwgJ3ZhbHVlJyk7IC8vIEVtcHR5IHN0cmluZyB2YWx1ZSBpcyBhbGxvd2VkLlxuICAgIHRoaXMudmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpO1xuXG4gICAgdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbGwgZXZlbnRzIHJlbGV2YW50IHRvIHNldHRpbmdzIG9iamVjdC4gIFRoaXMgaXMgb25seSBhIHNldHRpbmdzVXBkYXRlIGV2ZW50IGN1cnJlbnRseS5cbiAgICpcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlci5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ3NDaGFuZ2VkRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxTZXR0aW5nc0NoYW5nZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5TZXR0aW5nc0NoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlNldHRpbmdzQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAoZXZlbnQ6IFNldHRpbmdzRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IGV2ZW50Lm5ld1NldHRpbmdzO1xuICAgICAgc2V0dGluZ3NDaGFuZ2VkRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBTZXR0aW5nc0NoYW5nZWRFdmVudChldmVudC5uZXdTZXR0aW5ncykpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKHNldHRpbmdzQ2hhbmdlZEV2ZW50KTtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplU2V0dGluZ3Moc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNldHRpbmdzSW5mbywgJ3NldHRpbmdzSW5mbycpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLnNldHRpbmdzVmFsdWVzLCAnc2V0dGluZ3NJbmZvLlNldHRpbmdzVmFsdWVzJyk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3MgPSBzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXM7XG5cbiAgICAvLyBSZXNldCB0aGUgaXNNb2RpZmllZCBmbGFnXG4gICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaGVscGVyIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIGFueSBsb2NhbCB1cGRhdGUgdG8gdGhpcy5jdXJyZW50U2V0dGluZ3MuXG4gICAqIENoZWNrcyBpZiBhIGN1cnJlbnQgc2F2ZSBjYWxsIGlzIHN0aWxsIGluIHByb2dyZXNzIGFuZCB0aHJvd3MgYW4gZXJyb3IgaWYgc28uXG4gICAqL1xuICBwcml2YXRlIHZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NhdmVJblByb2dyZXNzKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuU2V0dGluZ1NhdmVJblByb2dyZXNzLCBTZXR0aW5nc0ltcGwuQVNZTkNfU0FWRV9JTl9QUk9HUkVTUyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9TZXR0aW5nc0ltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IERpYWxvZ1VwZGF0ZUV2ZW50LCBOb3RpZmljYXRpb25JZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gIFNlcnZpY2VOYW1lcyxcbiAgVGFibGVhdUVycm9yXG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1VJU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBVSUltcGwge1xuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkPzogc3RyaW5nLCBvcHRpb25zPzogQ29udHJhY3QuRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdWlTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8VUlTZXJ2aWNlPihFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHVpU2VydmljZS5kaXNwbGF5RGlhbG9nQXN5bmModXJsLCBwYXlsb2FkIHx8ICcnLCBvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgdW5yZWdpc3RlckZuID0gbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuRXh0ZW5zaW9uRGlhbG9nVXBkYXRlLCAobW9kZWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gTGV0IHRocm91Z2ggYW55IGRpYWxvZyB1cGRhdGUgZXZlbnRcbiAgICAgICAgfSwgKGV2ZW50OiBEaWFsb2dVcGRhdGVFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5pc0Nsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuY2xvc2VQYXlsb2FkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5EaWFsb2dDbG9zZWRCeVVzZXIsICdFeHRlbnNpb24gZGlhbG9nIGNsb3NlZCBieSB1c2VyLicpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bnJlZ2lzdGVyRm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5VSVNlcnZpY2UpO1xuXG4gICAgdWlTZXJ2aWNlLmNsb3NlRGlhbG9nKHBheWxvYWQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9VSUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IENhbGxiYWNrTWFwLCBFeHRlbnNpb25zSW1wbCB9IGZyb20gJy4uL0ltcGwvRXh0ZW5zaW9uc0ltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBFeHRlbnNpb25zIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbnMgaW1wbGVtZW50cyBDb250cmFjdC5FeHRlbnNpb25zIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZXh0ZW5zaW9uSW1wbDogRXh0ZW5zaW9uc0ltcGwpIHtcbiAgICB0aGlzLmV4dGVuc2lvbkltcGwgPSBleHRlbnNpb25JbXBsO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXNoYm9hcmRDb250ZW50KCk6IENvbnRyYWN0LkRhc2hib2FyZENvbnRlbnQge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuZGFzaGJvYXJkQ29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKTogQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuZW52aXJvbm1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNldHRpbmdzKCk6IENvbnRyYWN0LlNldHRpbmdzIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnNldHRpbmdzO1xuICB9XG5cbiAgcHVibGljIGdldCB1aSgpOiBDb250cmFjdC5VSSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC51aTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplQXN5bmMoY29udGV4dE1lbnVDYWxsYmFja3M/OiBDYWxsYmFja01hcCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuaW5pdGlhbGl6ZUFzeW5jKGZhbHNlLCBjb250ZXh0TWVudUNhbGxiYWNrcykudGhlbjx2b2lkPigpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVEaWFsb2dBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuaW5pdGlhbGl6ZUFzeW5jKHRydWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FeHRlbnNpb25zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==