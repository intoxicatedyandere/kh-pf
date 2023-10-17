// Load Node modules
var express = require('express');
var path = require('path')
const port = '8080'

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));

app.set('view engine', 'ejs');
// Port website will run on
app.listen(port);
//routes
app.get('/', function (req, res) {
    res.render('pages/portfolio');
});
