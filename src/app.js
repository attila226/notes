import React, {useState, useEffect} from 'react';
import Layout1 from './components/Layout1';

const App = (props) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotes();
    }, [JSON.stringify(notes)]);

    const loadNotes = () => {
        const url = "//localhost:8080/api/notes";
        fetch(url)
            .then(response => response.json())
            .then(notes => setNotes(notes));
    }

    return (
        <Layout1 notes={notes}/>
    );
}

export default App;