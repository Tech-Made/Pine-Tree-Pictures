const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

// router.get('/director', (req, res) => {
//   res.render('director');
// });

// router.get('/producer', (req, res) => {
//   res.render('producer');
// });

// router.get('/editor', (req, res) => {
//   res.render('editor');
// });

// router.get('/photographer', (req, res) => {
//   res.render('photographer');
// });

router.get('/contact', (req, res) => {
  res.render('contact');
});


module.exports = router;
