const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const routes = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, '../public/')));
app.use( bodyParser.json() );
app.use(routes);

const port = process.env.PORT || 8888;
app.listen(port);

module.exports = app;
console.log(`Listening on port ${port}`);
