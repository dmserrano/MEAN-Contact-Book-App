'use strict';

const express = require('express');
const app = express();
const { json } = require('body-parser');
const { connect } = require('./db/database');
const port = process.env.PORT || 3000;
const routes = require('./routes/');
app.set('port', port);
/////////////////////////////////////////


/////////////////////////////////////////
//Middlewares
app.use(express.static('client'));
app.use(json());

//Routes
app.use(routes);
/////////////////////////////////////////


/////////////////////////////////////////
connect()
  .then(() => {
    app.listen(port, () => console.log(`Server listening on port ${port}`))
  });
/////////////////////////////////////////
