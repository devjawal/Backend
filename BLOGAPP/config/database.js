const mongoose=require("mongoose");
require("dotenv").config();

const connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        
    })
    .then(console.log("DB Connected"))
    .catch((e)=>{
        console.log(e);
        console.log("DB not connected");
        process.exit(1);
    })
}
module.exports=connect;