const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use(cookieParser());
const {signin, signup} = require('./auth')
const {dashboard} = require('./dashboard')
  
router.get('/', (req, res) => {
    res.send('Hello');
});

router.get('/dashboard', dashboard)
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;

  