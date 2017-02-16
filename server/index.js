const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = module.exports = express();

app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json({limit: '50mb'}));

// mongoose.connect(config.mongo);
// mongoose.connection.once('open',() => console.log('Connected to Mongo'));

app.listen(3000, function(){
  console.log('listening on port 3000');
});
