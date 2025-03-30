const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        
    })
    .then(()=>{
        console.log("DB connected");
    })
    .catch((error)=>{
        console.log("Error connecting DB");
        console.log(error);
        process.exit(1);
    });
}
module.exports=dbConnect;