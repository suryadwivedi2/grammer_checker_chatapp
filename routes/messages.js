const express=require('express');

const msgcontroller=require('../controller/mainchat');
const router=express.Router();
const Authorization=require('../middleware/auth');


router.post('/add-msg',Authorization.authenticate,msgcontroller.addmsg);
router.get('/get-msg',msgcontroller.getmsg);



module.exports=router;