const bodyParser = require('body-parser');
const express = require('express');

const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;