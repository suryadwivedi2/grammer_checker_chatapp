const express=require('express');
const bodyparser=require('body-parser');
const helmet=require('helmet');
const cors=require('cors');
const mongoose=require('mongoose');

////////////////////////////////////////////

const app=express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());


/////routes////////////////////////
const userrouter=require('./routes/user');
const msgrouter=require('./routes/messages');


//////////////////////
app.use('/chatapp',userrouter)
app.use('/message',msgrouter);





mongoose.connect('mongodb+srv://bcae208924402018:Surya%402001@cluster0.ieth7oj.mongodb.net/chatapp?retryWrites=true&w=majority')
    .then(result => {
        console.log("Connected!");
        app.listen(4000);
    })
    .catch(err => console.log(err));
