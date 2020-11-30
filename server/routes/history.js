const express = require('express');
const router = express.Router();

/* Falls on home page. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Mirage' });
});

module.exports = router;
