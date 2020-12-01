const express = require('express');
const router = express.Router();

const db = require('../db')

/* GET db auth status. */
router.get('/', async function(req, res, next) {
  try {
    await db.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    res.send('Unable to connect to the database:' + error);
  }
});

module.exports = router;
