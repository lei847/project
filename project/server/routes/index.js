var express = require('express');
var router = express.Router();
let {People} = require('../module/model')
/* GET home page. */
router.get('/user',(req,res)=>{
  
})
router.post('/people',async(req,res)=>{
  await People.create(req.body)
  res.send({
    code:200,
    msg:'success'
  })
})

module.exports = router;
