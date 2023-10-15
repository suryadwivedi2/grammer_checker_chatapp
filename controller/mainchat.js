const Msg=require('../models/message')

exports.addmsg=async (req,res,next)=>{
try{
const msg=req.body.message;
const username=req.user.name;

await Msg.create({message:msg,username:username})
res.status(200).json({"message":"successfully created"})
}catch(err){
res.status(201).json(err)
}
}



exports.getmsg=async (req,res,next)=>{
   try{
       const mgses=await Msg.find();
       res.status(200).json({mgses});
   }catch(err){
    res.status(201).json(err)
   }

}