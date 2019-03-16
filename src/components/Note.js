class Note extends React.Component {
    state = {
        title: (this.props.note)
            ? this.props.note.title
            : '',
        text: (this.props.note)
            ? this.props.note.text
            : ''
    };

    handleSubmit = event => {
        event.preventDefault();
        const id = (this.props.note)
            ? this.props.note.id
            : null;

        this
            .props
            .save(JSON.stringify(this.state), id);

        this.setState({title: '', text: ''});
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
        margin: "0 1rem",
        boxSizing: "border-box",
        width: "70%"
    };

    divStyle = {
        display: "flex",
        justifyContent: "center",
        margin: "5px"
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={this.divStyle}>
                    <input name="title" value={this.state.title} onChange={this.handleChange}/>
                    <textarea
                        name="text"
                        style={this.textareaStyle}
                        value={this.state.text}
                        onChange={this.handleChange}/>
                    <button type="submit" style={this.buttonStyle}>{this.props.buttonText}</button>
                </div>
            </form>
        );
    }
}