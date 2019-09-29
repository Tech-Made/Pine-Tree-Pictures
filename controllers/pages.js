const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/producer', (req, res) => {
    res.render('producer');
  });

module.exports = router;
