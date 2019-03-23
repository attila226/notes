const express = require('express');
const app = express();
const cors = require('cors');
const apiRoutes = require('./api/routes');

app.listen(8080, () => {
    console.log('App running on port 8080');
});

app.use(express.json());
app.use(express.static('public'));
app.use(cors())

//API endpoints
app.use(apiRoutes);