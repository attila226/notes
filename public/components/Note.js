var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Note = function (_React$Component) {
    _inherits(Note, _React$Component);

    function Note() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Note);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Note.__proto__ || Object.getPrototypeOf(Note)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            title: _this.props.note.title,
            text: _this.props.note.text
        }, _this.handleSubmit = function (event) {
            event.preventDefault();
            _this.props.save(JSON.stringify(_this.state), _this.props.note.id);
        }, _this.handleChange = function (event) {
            _this.setState(_defineProperty({}, event.target.name, event.target.value));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Note, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement("input", { name: "title", value: this.state.title, onChange: this.handleChange }),
                React.createElement("textarea", { name: "text", value: this.state.text, onChange: this.handleChange }),
                React.createElement(
                    "button",
                    { type: "submit" },
                    "save"
                )
            );
        }
    }]);

    return Note;
}(React.Component);