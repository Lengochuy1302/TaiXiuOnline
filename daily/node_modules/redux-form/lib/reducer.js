'use strict';

exports.__esModule = true;
exports.initialState = exports.globalErrorKey = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initialState, _behaviors;

var _actionTypes = require('./actionTypes');

var _mapValues = require('./mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _write = require('./write');

var _write2 = _interopRequireDefault(_write);

var _getValuesFromState = require('./getValuesFromState');

var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

var _initializeState = require('./initializeState');

var _initializeState2 = _interopRequireDefault(_initializeState);

var _resetState = require('./resetState');

var _resetState2 = _interopRequireDefault(_resetState);

var _setErrors = require('./setErrors');

var _setErrors2 = _interopRequireDefault(_setErrors);

var _fieldValue = require('./fieldValue');

var _normalizeFields = require('./normalizeFields');

var _normalizeFields2 = _interopRequireDefault(_normalizeFields);

var _createInitialState = require('./createInitialState');

var _createInitialState2 = _interopRequireDefault(_createInitialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var globalErrorKey = exports.globalErrorKey = '_error';

var initialState = exports.initialState = (_initialState = {
  _active: undefined,
  _asyncValidating: false
}, _initialState[globalErrorKey] = undefined, _initialState._initialized = false, _initialState._submitting = false, _initialState._submitFailed = false, _initialState);

var behaviors = (_behaviors = {}, _behaviors[_actionTypes.ADD_ARRAY_VALUE] = function (state, _ref) {
  var path = _ref.path,
      index = _ref.index,
      value = _ref.value,
      fields = _ref.fields;

  var array = (0, _read2.default)(path, state);
  var stateCopy = _extends({}, state);
  var arrayCopy = array ? [].concat(array) : [];
  var newValue = value !== null && typeof value === 'object' ? (0, _initializeState2.default)(value, fields || Object.keys(value)) : (0, _fieldValue.makeFieldValue)({ value: value });
  if (index === undefined) {
    arrayCopy.push(newValue);
  } else {
    arrayCopy.splice(index, 0, newValue);
  }
  return (0, _write2.default)(path, arrayCopy, stateCopy);
}, _behaviors[_actionTypes.AUTOFILL] = function (state, _ref2) {
  var field = _ref2.field,
      value = _ref2.value;

  return (0, _write2.default)(field, function (previous) {
    var _previous$value$autof = _extends({}, previous, { value: value, autofilled: true }),
        asyncError = _previous$value$autof.asyncError,
        submitError = _previous$value$autof.submitError,
        result = _objectWithoutProperties(_previous$value$autof, ['asyncError', 'submitError']);

    return (0, _fieldValue.makeFieldValue)(result);
  }, state);
}, _behaviors[_actionTypes.BLUR] = function (state, _ref3) {
  var field = _ref3.field,
      value = _ref3.value,
      touch = _ref3.touch;

  var _active = state._active,
      stateCopy = _objectWithoutProperties(state, ['_active']);

  if (_active && _active !== field) {
    // remove _active from state
    stateCopy._active = _active;
  }
  return (0, _write2.default)(field, function (previous) {
    var result = _extends({}, previous);
    if (value !== undefined) {
      result.value = value;
    }
    if (touch) {
      result.touched = true;
    }
    return (0, _fieldValue.makeFieldValue)(result);
  }, stateCopy);
}, _behaviors[_actionTypes.CHANGE] = function (state, _ref4) {
  var field = _ref4.field,
      value = _ref4.value,
      touch = _ref4.touch;

  return (0, _write2.default)(field, function (previous) {
    var _previous$value = _extends({}, previous, { value: value }),
        asyncError = _previous$value.asyncError,
        submitError = _previous$value.submitError,
        autofilled = _previous$value.autofilled,
        result = _objectWithoutProperties(_previous$value, ['asyncError', 'submitError', 'autofilled']);

    if (touch) {
      result.touched = true;
    }
    return (0, _fieldValue.makeFieldValue)(result);
  }, state);
}, _behaviors[_actionTypes.DESTROY] = function () {
  return undefined;
}, _behaviors[_actionTypes.FOCUS] = function (state, _ref5) {
  var field = _ref5.field;

  var stateCopy = (0, _write2.default)(field, function (previous) {
    return (0, _fieldValue.makeFieldValue)(_extends({}, previous, { visited: true }));
  }, state);
  stateCopy._active = field;
  return stateCopy;
}, _behaviors[_actionTypes.INITIALIZE] = function (state, _ref6) {
  var data = _ref6.data,
      fields = _ref6.fields,
      overwriteValues = _ref6.overwriteValues;

  return (0, _createInitialState2.default)(data, fields, state, overwriteValues);
}, _behaviors[_actionTypes.REMOVE_ARRAY_VALUE] = function (state, _ref7) {
  var path = _ref7.path,
      indexOfValue = _ref7.index,
      predicate = _ref7.predicate;

  var array = (0, _read2.default)(path, state);
  var stateCopy = _extends({}, state);
  var arrayCopy = array ? [].concat(array) : [];
  var index = void 0;

  if (predicate) {
    index = arrayCopy.findIndex(predicate);
  } else {
    index = indexOfValue;
  }

  if (index === undefined) {
    arrayCopy.pop();
  } else if (isNaN(index)) {
    delete arrayCopy[index];
  } else {
    arrayCopy.splice(index, 1);
  }
  return (0, _write2.default)(path, arrayCopy, stateCopy);
}, _behaviors[_actionTypes.RESET] = function (state) {
  var _extends2;

  return _extends({}, (0, _resetState2.default)(state), (_extends2 = {
    _active: undefined,
    _asyncValidating: false
  }, _extends2[globalErrorKey] = undefined, _extends2._initialized = state._initialized, _extends2._submitting = false, _extends2._submitFailed = false, _extends2));
}, _behaviors[_actionTypes.START_ASYNC_VALIDATION] = function (state, _ref8) {
  var field = _ref8.field;

  return _extends({}, state, {
    _asyncValidating: field || true
  });
}, _behaviors[_actionTypes.START_SUBMIT] = function (state) {
  return _extends({}, state, {
    _submitting: true
  });
}, _behaviors[_actionTypes.STOP_ASYNC_VALIDATION] = function (state, _ref9) {
  var _extends3;

  var errors = _ref9.errors;

  return _extends({}, (0, _setErrors2.default)(state, errors, 'asyncError'), (_extends3 = {
    _asyncValidating: false
  }, _extends3[globalErrorKey] = errors && errors[globalErrorKey], _extends3));
}, _behaviors[_actionTypes.STOP_SUBMIT] = function (state, _ref10) {
  var _extends4;

  var errors = _ref10.errors;

  return _extends({}, (0, _setErrors2.default)(state, errors, 'submitError'), (_extends4 = {}, _extends4[globalErrorKey] = errors && errors[globalErrorKey], _extends4._submitting = false, _extends4._submitFailed = !!(errors && Object.keys(errors).length), _extends4));
}, _behaviors[_actionTypes.SUBMIT_FAILED] = function (state) {
  return _extends({}, state, {
    _submitFailed: true
  });
}, _behaviors[_actionTypes.SWAP_ARRAY_VALUES] = function (state, _ref11) {
  var path = _ref11.path,
      indexA = _ref11.indexA,
      indexB = _ref11.indexB;

  var array = (0, _read2.default)(path, state);
  var arrayLength = array.length;
  if (indexA === indexB || isNaN(indexA) || isNaN(indexB) || indexA >= arrayLength || indexB >= arrayLength) {
    return state; // do nothing
  }
  var stateCopy = _extends({}, state);
  var arrayCopy = [].concat(array);
  arrayCopy[indexA] = array[indexB];
  arrayCopy[indexB] = array[indexA];
  return (0, _write2.default)(path, arrayCopy, stateCopy);
}, _behaviors[_actionTypes.TOUCH] = function (state, _ref12) {
  var fields = _ref12.fields;

  return _extends({}, state, fields.reduce(function (accumulator, field) {
    return (0, _write2.default)(field, function (value) {
      return (0, _fieldValue.makeFieldValue)(_extends({}, value, { touched: true }));
    }, accumulator);
  }, state));
}, _behaviors[_actionTypes.UNTOUCH] = function (state, _ref13) {
  var fields = _ref13.fields;

  return _extends({}, state, fields.reduce(function (accumulator, field) {
    return (0, _write2.default)(field, function (value) {
      if (value) {
        var touched = value.touched,
            rest = _objectWithoutProperties(value, ['touched']);

        return (0, _fieldValue.makeFieldValue)(rest);
      }
      return (0, _fieldValue.makeFieldValue)(value);
    }, accumulator);
  }, state));
}, _behaviors);

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var behavior = behaviors[action.type];
  return behavior ? behavior(state, action) : state;
};

function formReducer() {
  var _extends10;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var form = action.form,
      key = action.key,
      rest = _objectWithoutProperties(action, ['form', 'key']); // eslint-disable-line no-redeclare


  if (!form) {
    return state;
  }
  if (key) {
    var _extends7, _extends8;

    if (action.type === _actionTypes.DESTROY) {
      var _extends6;

      return _extends({}, state, (_extends6 = {}, _extends6[form] = state[form] && Object.keys(state[form]).reduce(function (accumulator, stateKey) {
        var _extends5;

        return stateKey === key ? accumulator : _extends({}, accumulator, (_extends5 = {}, _extends5[stateKey] = state[form][stateKey], _extends5));
      }, {}), _extends6));
    }
    return _extends({}, state, (_extends8 = {}, _extends8[form] = _extends({}, state[form], (_extends7 = {}, _extends7[key] = reducer((state[form] || {})[key], rest), _extends7)), _extends8));
  }
  if (action.type === _actionTypes.DESTROY) {
    return Object.keys(state).reduce(function (accumulator, formName) {
      var _extends9;

      return formName === form ? accumulator : _extends({}, accumulator, (_extends9 = {}, _extends9[formName] = state[formName], _extends9));
    }, {});
  }
  return _extends({}, state, (_extends10 = {}, _extends10[form] = reducer(state[form], rest), _extends10));
}

/**
 * Adds additional functionality to the reducer
 */
function decorate(target) {
  target.plugin = function plugin(reducers) {
    var _this = this;

    // use 'function' keyword to enable 'this'
    return decorate(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var result = _this(state, action);
      return _extends({}, result, (0, _mapValues2.default)(reducers, function (pluginReducer, key) {
        return pluginReducer(result[key] || initialState, action);
      }));
    });
  };

  target.normalize = function normalize(normalizers) {
    var _this2 = this;

    // use 'function' keyword to enable 'this'
    return decorate(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var result = _this2(state, action);
      return _extends({}, result, (0, _mapValues2.default)(normalizers, function (formNormalizers, form) {
        var runNormalize = function runNormalize(previous, currentResult) {
          var previousValues = (0, _getValuesFromState2.default)(_extends({}, initialState, previous));
          var formResult = _extends({}, initialState, currentResult);
          var values = (0, _getValuesFromState2.default)(formResult);
          return (0, _normalizeFields2.default)(formNormalizers, formResult, previous, values, previousValues);
        };
        if (action.key) {
          var _extends11;

          return _extends({}, result[form], (_extends11 = {}, _extends11[action.key] = runNormalize(state[form][action.key], result[form][action.key]), _extends11));
        }
        return runNormalize(state[form], result[form]);
      }));
    });
  };

  return target;
}

exports.default = decorate(formReducer);