const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",//ref to post model 
    },
    user:{
        type:String,
         required:true
    },
    body:{
        type:String,
         required:true
    }

})
module.exports= mongoose.model("Comment",commentSchema);