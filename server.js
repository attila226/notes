const express = require('express');
const app = express();
const apiRoutes = require('./api/routes');

app.listen(8080, () => {
    console.log('App running on port 8080');
});

app.use(express.json());

app.use(express.static('public'));

app.get('/note:id', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname})
});

//API endpoints
app.use(apiRoutes);