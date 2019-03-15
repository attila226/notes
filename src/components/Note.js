class Note extends React.Component {
    state = {
        title: this.props.note.title,
        text: this.props.note.text
    };

    handleSubmit = event => {
        event.preventDefault();
        this
            .props
            .save(JSON.stringify(this.state), this.props.note.id);
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title" value={this.state.title} onChange={this.handleChange}/>
                <textarea name="text" value={this.state.text} onChange={this.handleChange}/>
                <button type="submit">save</button>
            </form>
        );
    }
}