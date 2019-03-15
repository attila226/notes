class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            notes: []
        };
    }

    componentDidMount() {
        const url = "//localhost:8080/notes";
        const response = fetch(url).then(response => {
            response
                .json()
                .then(data => this.setState({notes: data}));
        });
    }

    updateNote(data, id) {
        const url = `//localhost:8080/notes/${id}`;

        fetch(url, {
            method: 'PUT',
            body: {
                ...data,
                id
            }
        }).then(response => console.log('saved'));
    }

    render() {
        return (
            <div>
                {this
                    .state
                    .notes
                    .map(note => (<Note key={note.id} save={this.updateNote} note={note}/>))}
            </div>
        );
    }
}