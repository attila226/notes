class Note extends React.Component {
    state = {
        title: (this.props.note)
            ? this.props.note.title
            : '',
        text: (this.props.note)
            ? this.props.note.text
            : '',
        titleError: '',
        noteError: ''
    };

    validate() {
        let isValid = true;
        let titleError = '';
        let noteError = '';

        if (!this.state.title) {
            isValid = false;
            titleError = 'Title is required.';
        }

        if (!this.state.text) {
            isValid = false;
            noteError = 'Note text is required.';
        }

        if (titleError || noteError) {
            this.setState({titleError, noteError});
            return false;
        }

        return isValid;
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = (this.props.note)
            ? this.props.note.id
            : null;

        const isValid = this.validate();

        if (isValid) {
            let note = {
                title: this.state.title,
                text: this.state.text
            }

            this
                .props
                .save(JSON.stringify(note), id);

            if (!id) {
                this.setState({title: '', text: '', titleError: '', noteError: ''});
            } else {
                this.setState({titleError: '', noteError: ''});
            }

        }
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        borderRadius: '12px',
        fontSize: '16px',
        width: '100px'
    };

    textareaStyle = {
        width: '100%'
    };

    errorStyle = {
        fontSize: 12,
        color: 'red'
    };

    gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'auto 70% auto',
        justifyContent: 'center',
        rowGap: '5px',
        columnGap: '15px'
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={this.gridContainer}>

                    <input name="title" value={this.state.title} onChange={this.handleChange}/>

                    <textarea
                        name="text"
                        style={this.textareaStyle}
                        value={this.state.text}
                        onChange={this.handleChange}/>

                    <button type="submit" style={this.buttonStyle}>{this.props.buttonText}</button>

                    <div style={this.errorStyle}>
                        {this.state.titleError}
                    </div>

                    <div style={this.errorStyle}>
                        {this.state.noteError}
                    </div>

                </div>
            </form>
        );
    }
}