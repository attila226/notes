const express = require('express');
const app = express();
const noteApi = require('./api/note');

app.use(express.json());

app.listen(8080, () => {
    console.log('App running on port 8080');
});

app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname})
});

//End points
app.get('/notes', (req, res) => {
    const notes = noteApi.getAll();

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notes));
});

app.get('/notes/:id', (req, res) => {
    const note = noteApi.get(req.params.id);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(note));
});

app.post('/notes/', (req, res) => {
    res.send('Add note');
});

app.put('/notes/:id', (req, res) => {
    const note = req.body;

    noteApi.update(req.params.id, note);
    res.statusCode = 204;
    res.send();
});

//TODO: Make this more dyanmic
app.get('/app.js', (req, res) => {
    res.sendFile('public/app.js', {root: __dirname})
});

app.get('/Note.js', (req, res) => {
    res.sendFile('public/components/Note.js', {root: __dirname})
});

app.get('/NotesList.js', (req, res) => {
    res.sendFile('public/components/NotesList.js', {root: __dirname})
});
//END TODO