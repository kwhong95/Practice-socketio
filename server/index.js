const app = require('express')()
const path = require('path');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const mongoose = require('mongoose');
const connect = mongoose.connect(config.mongoURL, {
  useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex: true, useFindAndModify: false,
})
.then(() => console.log('MongoDB Conntected!'))
.catch(err => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// to get json data
// support of app/json type post data
app.use(bodyParser.json());
app.use(cookieParser());