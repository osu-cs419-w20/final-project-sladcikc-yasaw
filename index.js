var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(port, () => 
    console.log('Express server is running on localhost:8080')
    );