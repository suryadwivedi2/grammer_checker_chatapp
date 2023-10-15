const User=require('../models/user');
const jwt=require('jsonwebtoken');



exports.authenticate=(req,res,next)=>{
    const token=req.header('Authorization');
    const user=jwt.verify(token,'63761322346352645343213');

    User.findById(user.userId)
        .then((user)=>{
            req.user=user;
            next();
        }).catch((err)=>{
            return res.status(400).json({err});
        })
}