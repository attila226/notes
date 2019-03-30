import React, {useState, useEffect} from 'react';
import Note from './Note';

const NoteList = props => {
    const [notes,
        setNotes] = useState([]);

    const titleStyle = {
        textAlign: 'center',
        maring: '5px'
    };

    useEffect(() => {
        loadNotes();
    }, [JSON.stringify(notes)]);

    const loadNotes = () => {
        const url = "//localhost:8080/api/notes";
        fetch(url).then(response => {
            response
                .json()
                .then(notes => setNotes(notes));
        });
    }

    const updateNote = (note, id) => {
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

    const addNote = (note) => {
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
                setNotes([notes, updatedNote]);
            });
    }

    return (
        <div>
            <h2 style={titleStyle}>Notes</h2>
            {notes.map((note) => {
                return (<Note key={note.id} save={updateNote} note={note} buttonText="Update"/>);
            })}
            <Note save={addNote} buttonText="Add"/>
        </div>
    )
}

export default NoteList;