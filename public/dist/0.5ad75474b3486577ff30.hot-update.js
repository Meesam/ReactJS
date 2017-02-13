webpackHotUpdate(0,{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmployeeList = function (_React$Component) {
  _inherits(EmployeeList, _React$Component);

  function EmployeeList(props) {
    _classCallCheck(this, EmployeeList);

    var _this = _possibleConstructorReturn(this, (EmployeeList.__proto__ || Object.getPrototypeOf(EmployeeList)).call(this, props));

    console.log(props.list);
    _this.state = { empList: props.list };
    return _this;
  }

  _createClass(EmployeeList, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "table",
          { className: "table table-bordered" },
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "th",
                null,
                "Name"
              ),
              _react2.default.createElement(
                "th",
                null,
                "Gender"
              ),
              _react2.default.createElement(
                "th",
                null,
                "Address"
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            this.state.empList.map(function (item, index) {
              return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  null,
                  item.email
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  item.gender
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  item.address
                )
              );
            })
          )
        )
      );
    }
  }]);

  return EmployeeList;
}(_react2.default.Component);

exports.default = EmployeeList;

/***/ })

})