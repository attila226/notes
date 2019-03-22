const express = require('express');
const app = express();
const apiRoutes = require('./api/routes');

app.listen(8080, () => {
    console.log('App running on port 8080');
});

app.use(express.json());

app.use(express.static('public'));

//API endpoints
app.use(apiRoutes);