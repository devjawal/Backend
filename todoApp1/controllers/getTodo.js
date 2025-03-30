const Todo=require("../models/Todo.js");

const getTodo = async (req,res)=>{
     try{
        const todo=await Todo.find({});//All Todo schema objects
        res.status(200).json({
            success:true,
            data:todo,
            message:"All todo fetched"
        })
     }
     catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            data:"Internal server error (getTodo)",
            message:"Internal error getTodo"
        })
     }
}

const getTodoById=async (req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Nod data found with given id"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo with id: ${id} fetched`

        })

    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            data:"Internal server error (getTodoById)",
            message:"Internal error getTodoById"
        })
    }
}
module.exports = getTodo; 
module.exports = getTodoById;
