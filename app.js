// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// connect to mongo database
mongoose.connect('mongodb://localhost:27017/contactlist',{ useNewUrlParser: true, useUnifiedTopology: true });

// on connection
mongoose.connection.on('connection', () => {
    console.log('connection established at mongoose')
})

mongoose.connection.on('error',(err) => {
    if(err){
        console.log('Erro in connection: ' + err);
    }
})

// port
const port = 3000;

// adding middleware cors
app.use(cors());

// adding body bodyParser
app.use(bodyParser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')))

// adding middleware
app.use('/api', route);




// testing server
app.get('/', (req, res) => {
    res.send('foobar');
})

app.listen(port, () => {
    console.log('server started at : ' + port)
})