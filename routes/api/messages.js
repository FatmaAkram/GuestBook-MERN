const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("messages route");
});

module.exports = router;
