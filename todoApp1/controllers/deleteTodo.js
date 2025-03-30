const Todo=require("../models/Todo.js");

const deleteTodo = async(req,res)=>{
     try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:`todo with id: ${id} deleted`

        })
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
module.exports = deleteTodo; 
