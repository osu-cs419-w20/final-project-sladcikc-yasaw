var express = require('express');
require('dotenv').config()
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
const port = 8080;
const apiKey = process.env.APIKEY
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/api/getUserInfo', (req, res) => {
    var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+apiKey+'&steamids=76561198013760344';
    request(url, function(err, response, body){
        if(!err && response.statusCode < 400){
            console.log(body);
            res.send(body);
        }
    })
});

app.listen(port, () => 
    console.log('Express server is running on localhost:8080')
    );