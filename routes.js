const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use(cookieParser());
const {signin, signup} = require('./auth')
const {dashboard} = require('./dashboard')
const {contact_details} = require('./contact_details')
const {send_plan_query} = require('./plan')
  
router.get('/', (req, res) => {
    res.send('Hello');
});

router.get('/dashboard', dashboard)
router.post('/contact', contact_details);
router.post('/plan_query', send_plan_query);
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;

  