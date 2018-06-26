const express = require('express');
const router = express.Router();
const burger = ('../models/burger.js');

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let handleBarObject = {
      burger: data
    };

    console.log(handleBarObject);
    res.render('index', handleBarObject);
  });

});

module.exports = router;