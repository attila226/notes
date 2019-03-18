const express = require('express');
const app = express();
const noteApi = require('./api/note');

app.listen(8080, () => {
    console.log('App running on port 8080');
});

app.use(express.json());

app.use(express.static('public'));

app.get('/note:id', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname})
});

//End points
app.get('/api/notes', (req, res) => {
    const notes = noteApi.getAll();

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notes));
});

app.get('/api/notes/:id', (req, res) => {
    const note = noteApi.get(req.params.id);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(note));
});

app.post('/api/notes', (req, res) => {
    const note = req.body;
    const updateNote = noteApi.add(note);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(updateNote));
});

app.put('/api/notes/:id', (req, res) => {
    const note = req.body;

    noteApi.update(req.params.id, note);
    res.statusCode = 204;
    res.send();
});