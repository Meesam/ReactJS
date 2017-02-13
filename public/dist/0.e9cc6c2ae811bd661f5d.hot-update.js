webpackHotUpdate(0,{

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(55);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _employeeList = __webpack_require__(207);

var _employeeList2 = _interopRequireDefault(_employeeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Employee = function (_React$Component) {
  _inherits(Employee, _React$Component);

  function Employee(props) {
    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, props));

    _this.state = { email: '', password: '', gender: '', address: '', genderData: [], empList: [] };
    return _this;
  }

  _createClass(Employee, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var genData = [{ Id: 1, Name: 'Male' }, { Id: 2, Name: 'Female' }];
      this.setState({ genderData: genData });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handelSubmit',
    value: function handelSubmit(event) {
      event.preventDefault();
      var submitOption = {
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        address: this.state.address
      };
      var emplist = emplist.push(submitOption);
      this.setState({ empList: emplist });
    }
  }, {
    key: 'render',
    value: function render() {
      var cOptions = this.state.genderData.map(function (item, index) {
        return _react2.default.createElement(
          'option',
          { key: item.Id, value: item.Name },
          item.Name
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.handelSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'exampleInputEmail1' },
              'Email address'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'email', className: 'form-control', value: this.state.email, onChange: this.handleChange.bind(this), 'aria-describedby': 'emailHelp', placeholder: 'Enter email' }),
            _react2.default.createElement(
              'small',
              { id: 'emailHelp', className: 'form-text text-muted' },
              'We\'ll never share your email with anyone else.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'exampleInputPassword1' },
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password', name: 'password', className: 'form-control', value: this.state.password, onChange: this.handleChange.bind(this), placeholder: 'Password' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'exampleSelect1' },
              'Gender'
            ),
            _react2.default.createElement(
              'select',
              { name: 'gender', className: 'form-control', value: this.state.gender, onChange: this.handleChange.bind(this) },
              cOptions
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'exampleTextarea' },
              'Address'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'address', value: this.state.address, onChange: this.handleChange.bind(this), rows: '3' })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary' },
            'Submit'
          )
        ),
        _react2.default.createElement(_employeeList2.default, { list: this.state.empList })
      );
    }
  }]);

  return Employee;
}(_react2.default.Component);

exports.default = Employee;

/***/ })

})