import React, {useState} from 'react';
import Nav from './Nav';
import Note from './Note';

const Layout1 = (props) => {
    const [note,
        updateNote] = useState({title: '', text: ''});

    const gridContainer = {
        display: 'grid',
        gridGap: '5px',
        gridAutoRows: 'minmax(50px, auto)',
        gridAutoColumns: 'minmax(50px, 250px)',
        gridTemplateAreas:`
        "header header header header header"
        "nav main main main main"
        `
    }
    
    const headerArea = {
        gridArea: 'header',
        textAlign: 'center',
        padding: '5px 0',
        backgroundColor: '#e5e5e5'
    }

    const navArea = {
        gridArea: 'nav',
        backgroundColor: '#e5e5e5'
    }

    const mainArea = {
        gridArea: 'main'
    }

    const loadNote = (newNote) =>{
        updateNote(newNote);
    }

    return (
        <div style={gridContainer}>
            <div style={headerArea}>HEADER</div>
            <div style={navArea}><Nav loadNote={loadNote} notes={props.notes}/></div>
            <div style={mainArea}><Note note={note} buttonText="Save" /></div>
        </div>
    );
}

export default Layout1;