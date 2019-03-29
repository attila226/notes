import React, {useState} from 'react';

const Note = (props) => {
    const [note,
        setNote] = useState({
        title: (props.note)
            ? props.note.title
            : '',
        text: (props.note)
            ? props.note.text
            : ''
    });

    const [errors,
        setErrors] = useState({titleError: '', noteError: ''});

    const validate = () => {
        let isValid = true;
        let titleError = '';
        let noteError = '';

        if (!note.title) {
            isValid = false;
            titleError = 'Title is required.';
        }

        if (!note.text) {
            isValid = false;
            noteError = 'Note text is required.';
        }

        if (titleError || noteError) {
            setErrors({titleError, noteError});
            return false;
        }

        return isValid;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const id = (props.note)
            ? props.note.id
            : null;

        const isValid = validate();

        if (isValid) {
            const isAdd = (!id);

            props.save(JSON.stringify(note), id);

            if (isAdd) {
                //Clear out the note, since it's the "Add" note
                setNote({title: '', text: ''});
            }

            setErrors({titleError: '', noteError: ''});
        }
    };

    const handleChange = event => {
        note[event.target.name] = event.target.value;

        setNote(note);
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        borderRadius: '12px',
        fontSize: '16px',
        width: '100px'
    };

    const textareaStyle = {
        width: '100%'
    };

    const errorStyle = {
        fontSize: 12,
        color: 'red'
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'auto 70% auto',
        justifyContent: 'center',
        columnGap: '15px'
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={gridContainer}>

                <input name="title" value={note.title} onChange={handleChange}/>

                <textarea
                    name="text"
                    style={textareaStyle}
                    value={note.text}
                    onChange={handleChange}/>

                <button type="submit" style={buttonStyle}>{props.buttonText}</button>

                <div style={errorStyle}>
                    {errors.titleError}
                </div>

                <div style={errorStyle}>
                    {errors.noteError}
                </div>

            </div>
        </form>
    );
}

export default Note;