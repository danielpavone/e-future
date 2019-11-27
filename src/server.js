const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3333;

const routes = require('./routes');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://hackathon:faladev10@ds015899.mlab.com:15899/hackathon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);