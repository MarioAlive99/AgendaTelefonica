const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');

router.get('/',(req,res)=>{
    //res.send('APLICACION WEB');
    res.render('index');
});

router.post('/crud',function(req,res){
    const task = new Task(req.body);
    res.send('recibido');
    console.log(new Task());
    console.log(req.body);
});
module.exports = router;