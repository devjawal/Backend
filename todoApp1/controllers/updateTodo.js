const Todo=require("../models/Todo.js");

const updateTodo = async(req,res)=>{
     try{
        const {id}=req.params;
        const {title,description}=req.body;

        const todo=await Todo.findByIdAndUpdate(
            id,
            {title,description,updatedAt:Date.now()},
            { new: true }
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo with id: ${id} updated`

        })
     }
     catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            data:"Internal server error (update)",
            message:"Internal error (update)"
        });
     }
}
module.exports = updateTodo; 
