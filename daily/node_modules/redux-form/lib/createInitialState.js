'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('./reducer');

var _initializeState = require('./initializeState');

var _initializeState2 = _interopRequireDefault(_initializeState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createInitialState = function createInitialState(data, fields, state) {
  var _extends2;

  var overwriteValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var markInitialized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  return _extends({}, (0, _initializeState2.default)(data, fields, state, overwriteValues), (_extends2 = {
    _initData: data,
    _asyncValidating: false,
    _active: undefined
  }, _extends2[_reducer.globalErrorKey] = undefined, _extends2._initialized = markInitialized, _extends2._submitting = false, _extends2._submitFailed = false, _extends2));
};

exports.default = createInitialState;