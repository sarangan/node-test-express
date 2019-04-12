const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("please wash your hands after using toilet");
});

router.get('/:id', (req,res) =>{

  res.json({
    id: req.params.id,
    message: 'got param'
  })
});

// router.all('/', (req,res) =>{
//   res.json({
//     body: req.body
//   });
// });

router.post('/', (req,res) =>{
  res.json({
    body: req.body
  });
});

module.exports = router;
