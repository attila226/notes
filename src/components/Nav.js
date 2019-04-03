import React from 'react';

const Nav = props => {

    const loadNote = note => {
        props.loadNote(note);
    }

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        borderRadius: '12px',
        fontSize: '16px',
        width: '100px'
    };

    return (
        <div>
            {props.notes &&  props.notes.map((note) => {
                return (<div onClick={() => loadNote(note)} key={note.id}>{note.title}</div>);
            })}
            <button onClick={() => loadNote({title: '', text: ''})} style={buttonStyle}>Add New</button>
        </div>
    )
}

export default Nav;