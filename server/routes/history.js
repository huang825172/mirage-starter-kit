const express = require('express');
const path = require('path');
const router = express.Router();

/* Falls on home page. */
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;
