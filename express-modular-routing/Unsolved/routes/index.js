const express = require('express');
const app = express();

const tipRoutes = require('./tips.js');
const feedbackRoutes = require('./feedback.js');
//import our routes ^

app.use('/tips', tipRoutes);
app.use('/feedback', feedbackRoutes);


module.exports = app;