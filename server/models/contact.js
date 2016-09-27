'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////


/////////////////////////////////////////
module.exports = mongoose.model('contact', {
  contact: String,
  address: String,
  phone: String,
  email: String
});
/////////////////////////////////////////
