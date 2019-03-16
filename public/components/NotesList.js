var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoteList = function (_React$Component) {
    _inherits(NoteList, _React$Component);

    function NoteList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NoteList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoteList.__proto__ || Object.getPrototypeOf(NoteList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            notes: []
        }, _this.titleStyle = {
            textAlign: 'center',
            maring: '5px'
        }, _this.buttonStyle = {
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            borderRadius: '12px',
            fontSize: '16px'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NoteList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var url = "//localhost:8080/notes";
            var response = fetch(url).then(function (response) {
                response.json().then(function (notes) {
                    return _this2.setState({ notes: notes });
                });
            });
        }
    }, {
        key: 'updateNote',
        value: function updateNote(note, id) {
            var url = '//localhost:8080/notes/' + id;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: note
            }).then(function (response) {
                console.log('Updated');
            });
        }
    }, {
        key: 'addNote',
        value: function addNote(note) {
            var _this3 = this;

            var url = '//localhost:8080/notes';

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: note
            }).then(function (response) {
                response.json().then(function (updatedNote) {
                    console.log('Added', updatedNote, _this3.state);
                    /*
                    this.setState([
                        ...this.state.notes,
                        updatedNote
                    ]);
                    */
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    { style: this.titleStyle },
                    'Notes'
                ),
                this.state.notes.map(function (note) {
                    return React.createElement(Note, { key: note.id, save: _this4.updateNote, note: note, buttonText: 'Update' });
                }),
                React.createElement(Note, { save: this.addNote, buttonText: 'Add' })
            );
        }
    }]);

    return NoteList;
}(React.Component);