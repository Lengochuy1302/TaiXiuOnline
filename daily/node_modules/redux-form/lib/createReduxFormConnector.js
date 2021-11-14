'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noGetters = require('react-lazy-cache/noGetters');

var _noGetters2 = _interopRequireDefault(_noGetters);

var _getDisplayName = require('./getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _createHigherOrderComponent = require('./createHigherOrderComponent');

var _createHigherOrderComponent2 = _interopRequireDefault(_createHigherOrderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component tracks props that affect how the form is mounted to the store. Normally these should not change,
 * but if they do, the connected components below it need to be redefined.
 */
var createReduxFormConnector = function createReduxFormConnector(isReactNative, React, connect) {
  return function (WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
    var Component = React.Component;

    var _ref = options || {},
        _ref$withRef = _ref.withRef,
        withRef = _ref$withRef === undefined ? false : _ref$withRef;

    var ReduxFormConnector = function (_Component) {
      _inherits(ReduxFormConnector, _Component);

      function ReduxFormConnector(props) {
        _classCallCheck(this, ReduxFormConnector);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.cache = new _noGetters2.default(_this, {
          ReduxForm: {
            params: [
            // props that effect how redux-form connects to the redux store
            'reduxMountPoint', 'form', 'formKey', 'getFormState'],
            fn: (0, _createHigherOrderComponent2.default)(props, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options)
          }
        });
        return _this;
      }

      ReduxFormConnector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.cache.componentWillReceiveProps(nextProps);
      };

      ReduxFormConnector.prototype.render = function render() {
        var ReduxForm = this.cache.get('ReduxForm');
        // remove some redux-form config-only props

        var _props = this.props,
            reduxMountPoint = _props.reduxMountPoint,
            destroyOnUnmount = _props.destroyOnUnmount,
            form = _props.form,
            getFormState = _props.getFormState,
            touchOnBlur = _props.touchOnBlur,
            touchOnChange = _props.touchOnChange,
            passableProps = _objectWithoutProperties(_props, ['reduxMountPoint', 'destroyOnUnmount', 'form', 'getFormState', 'touchOnBlur', 'touchOnChange']); // eslint-disable-line no-redeclare


        if (withRef) {
          return React.createElement(ReduxForm, _extends({}, passableProps, { ref: 'wrappedInstance' }));
        }
        return React.createElement(ReduxForm, passableProps);
      };

      return ReduxFormConnector;
    }(Component);

    ReduxFormConnector.displayName = 'ReduxFormConnector(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
    ReduxFormConnector.WrappedComponent = WrappedComponent;
    ReduxFormConnector.propTypes = {
      destroyOnUnmount: _propTypes2.default.bool,
      reduxMountPoint: _propTypes2.default.string,
      form: _propTypes2.default.string.isRequired,
      formKey: _propTypes2.default.string,
      getFormState: _propTypes2.default.func,
      touchOnBlur: _propTypes2.default.bool,
      touchOnChange: _propTypes2.default.bool
    };
    ReduxFormConnector.defaultProps = {
      reduxMountPoint: 'form',
      getFormState: function getFormState(state, reduxMountPoint) {
        return state[reduxMountPoint];
      }
    };
    return ReduxFormConnector;
  };
};

exports.default = createReduxFormConnector;