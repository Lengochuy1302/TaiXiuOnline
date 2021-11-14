'use strict';

exports.__esModule = true;

exports.default = function (value) {
  var getType = {};
  return value && getType.toString.call(value) === '[object Function]';
};