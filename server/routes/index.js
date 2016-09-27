'use strict';

const { Router } = require('express');
const router = Router();
/////////////////////////////////////////


/////////////////////////////////////////
//Routes
router.get('/', (req, res) => {
  res.json({message: 'Hello'});
});
/////////////////////////////////////////


module.exports = router;
