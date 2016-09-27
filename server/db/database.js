'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////

/////////////////////////////////////////
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/contactapp';
//Set promise library
mongoose.Promise = Promise;
//Export database connection
module.exports.connect = () => mongoose.connect(MONGODB_URL);
/////////////////////////////////////////
