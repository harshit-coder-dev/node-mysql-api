const express = require('express');
const bodyParser = require('body-parser');

const postRoute = require('./routes/post');

const app = express();

app.use(bodyParser.json());

app.use("/posts",postRoute);



module.exports= app;