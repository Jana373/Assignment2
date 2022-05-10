var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');


var app = express();

const add_route = require('./route/add');
const get_route = require('./route/get');
const delete_route = require('./route/delete')

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/MSME');

// on connection
mongoose.connection.on('connected', () => {
    console.log('mongoDB connected at port 27017')
})

// on connection error
mongoose.connection.on('error', () => {
    console.log(err);
})
const PORT = 3000;
//adding middleware - cors
// req res exhange between 2 domains localhost 3000 and localhost 27017
// use cors before each request sent to the server 
app.use(cors());

// body parser important for post requests
app.use(bodyparser.json());


// route ending with/ will be directed to route file 
app.use('/add', add_route)
app.use('/get', get_route)
app.use('/delete', delete_route)

app.listen(PORT, () => {
    console.log('Server has been started at port: ' + PORT);
})

app.get('/', (req, res) => {
    res.send("test11")
})


