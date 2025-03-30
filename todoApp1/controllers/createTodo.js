const Todo=require("../models/Todo.js");

const createTodo = async(req,res)=>{
     try{
        const {title,description}=req.body;
        const response= await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created"
        });
     }
     catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:"Internal error"
        });
     }
}
module.exports = createTodo; 
