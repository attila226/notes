import React from 'react';
import Note from './Note';

class NoteList extends React.Component {
    state = {
        notes: []
    };

    titleStyle = {
        textAlign: 'center',
        maring: '5px'
    };

    constructor(props) {
        super(props);

        this.addNote = this
            .addNote
            .bind(this);
    }

    componentDidMount() {
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
            })
            .then(response => response.json())
            .then(updatedNote => {
                this.setState({
                    notes: [
                        ...this.state.notes,
                        updatedNote
                    ]
                }, () => console.log('Added', updatedNote));
            });
    }

    render() {
        return (
            <div>
                <h2 style={this.titleStyle}>Notes</h2>
                {this
                    .state
                    .notes
                    .map((note) => {
                        return (<Note key={note.id} save={this.updateNote} note={note} buttonText="Update"/>);

                    })}

                <Note save={this.addNote} buttonText="Add"/>
            </div>
        );
    }
}

export default NoteList;