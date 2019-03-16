class NoteList extends React.Component {
    state = {
        notes: []
    };

    componentDidMount() {
        const url = "//localhost:8080/notes";
        const response = fetch(url).then(response => {
            response
                .json()
                .then(notes => this.setState({notes}));
        });
    }

    updateNote(note, id) {
        const url = `//localhost:8080/notes/${id}`;

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
        const url = `//localhost:8080/notes`;

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
                    console.log('Added', updatedNote, this.state);
                    /*
                    this.setState([
                        ...this.state.notes,
                        updatedNote
                    ]);
                    */
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
                    .map(note => (<Note key={note.id} save={this.updateNote} note={note} buttonText="Update"/>))}

                <Note save={this.addNote} buttonText="Add"/>

            </div>
        );
    }
}