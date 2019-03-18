class NoteList extends React.Component {
    state = {
        notes: [],
        highlightedNote: ''
    };

    constructor(props) {
        super(props);

        this.addNote = this
            .addNote
            .bind(this);
    }

    componentDidMount() {
        const pathName = window.location.pathname;

        if (pathName.includes('/note')) {
            let highlightedNote = pathName.split('/note')[1];

            this.setState({highlightedNote});
        }

        const url = "//localhost:8080/api/notes";
        const response = fetch(url).then(response => {
            response
                .json()
                .then(notes => this.setState({notes}));
        });
    }

    updateNote(note, id) {
        const url = `//localhost:8080/api/notes/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: note
        }).then(response => {
            console.log('Updated')
        });
    }

    addNote(note) {
        const url = `//localhost:8080/api/notes`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: note
        }).then(response => {
            response
                .json()
                .then(updatedNote => {
                    this.setState({
                        notes: [
                            ...this.state.notes,
                            updatedNote
                        ]
                    }, () => console.log('Added', updatedNote));
                });
        });
    }

    titleStyle = {
        textAlign: 'center',
        maring: '5px'
    }

    buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        borderRadius: '12px',
        fontSize: '16px'
    };

    render() {
        return (
            <div>
                <h2 style={this.titleStyle}>Notes</h2>
                {this
                    .state
                    .notes
                    .map((note) => {
                        let noteStyle = {};
                        if (note.id === this.state.highlightedNote) {
                            noteStyle.backgroundColor = 'whitesmoke';
                        }

                        return (
                            <div key={note.id} style={noteStyle}><Note save={this.updateNote} note={note} buttonText="Update"/></div>
                        );

                    })}

                <Note save={this.addNote} buttonText="Add"/>
            </div>
        );
    }
}