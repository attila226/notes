var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoteList = function (_React$Component) {
    _inherits(NoteList, _React$Component);

    function NoteList(props) {
        _classCallCheck(this, NoteList);

        var _this = _possibleConstructorReturn(this, (NoteList.__proto__ || Object.getPrototypeOf(NoteList)).call(this, props));

        _this.state = {
            loading: true,
            notes: []
        };
        return _this;
    }

    _createClass(NoteList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var url = "//localhost:8080/notes";
            var response = fetch(url).then(function (response) {
                response.json().then(function (data) {
                    return _this2.setState({ notes: data });
                });
            });
        }
    }, {
        key: 'updateNote',
        value: function updateNote(data, id) {
            var url = '//localhost:8080/notes/' + id;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            }).then(function (response) {
                return console.log('saved');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                this.state.notes.map(function (note) {
                    return React.createElement(Note, { key: note.id, save: _this3.updateNote, note: note });
                })
            );
        }
    }]);

    return NoteList;
}(React.Component);