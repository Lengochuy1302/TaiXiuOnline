'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPropTypes = function createPropTypes() {
  return {
    // State:
    active: _propTypes2.default.string, // currently active field
    asyncValidating: _propTypes2.default.bool.isRequired, // true if async validation is running
    autofilled: _propTypes2.default.bool, // true if set programmatically by autofill
    dirty: _propTypes2.default.bool.isRequired, // true if any values are different from initialValues
    error: _propTypes2.default.any, // form-wide error from '_error' key in validation result
    errors: _propTypes2.default.object, // a map of errors corresponding to structure of form data (result of validation)
    fields: _propTypes2.default.object.isRequired, // the map of fields
    formKey: _propTypes2.default.any, // the form key if one was provided (used when doing multirecord forms)
    invalid: _propTypes2.default.bool.isRequired, // true if there are any validation errors
    pristine: _propTypes2.default.bool.isRequired, // true if the values are the same as initialValues
    submitting: _propTypes2.default.bool.isRequired, // true if the form is in the process of being submitted
    submitFailed: _propTypes2.default.bool.isRequired, // true if the form was submitted and failed for any reason
    valid: _propTypes2.default.bool.isRequired, // true if there are no validation errors
    values: _propTypes2.default.object.isRequired, // the values of the form as they will be submitted

    // Actions:
    asyncValidate: _propTypes2.default.func.isRequired, // function to trigger async validation
    destroyForm: _propTypes2.default.func.isRequired, // action to destroy the form's data in Redux
    handleSubmit: _propTypes2.default.func.isRequired, // function to submit the form
    initializeForm: _propTypes2.default.func.isRequired, // action to initialize form data
    resetForm: _propTypes2.default.func.isRequired, // action to reset the form data to previously initialized values
    touch: _propTypes2.default.func.isRequired, // action to mark fields as touched
    touchAll: _propTypes2.default.func.isRequired, // action to mark ALL fields as touched
    untouch: _propTypes2.default.func.isRequired, // action to mark fields as untouched
    untouchAll: _propTypes2.default.func.isRequired // action to mark ALL fields as untouched
  };
};

exports.default = createPropTypes;