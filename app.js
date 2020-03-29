require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();
let port = process.env.PORT || 3000;

const routes = require('./routes');

server.use(bodyParser.json());
server.use(cors());
server.use('/', routes);

// 404 Route
server.use((req, res) => {
    res.status(404).send('not found');
});

var uri = 'mongodb+srv://root:covidRelief@cluster0-7s0bx.mongodb.net/test?retryWrites=true&w=majority'

const client = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // replicaSet: 'rs0'
})
mongoose.set('useFindAndModify', false); 
mongoose.set('debug', true)

// mongoose.set('debug', true);
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', async function () {
    console.log('Db is Successfully Connected')
    server.listen(port, function () {
        console.log('EDb connected successfully && Server started at port '+ port);
    })
});