const Post=require("../models/postModel");
const Comment=require("../models/commentModel");
 
exports.createComment=async (req,res)=>{
    try{
        const {post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        })
        const savedComment=await comment.save();

        //new comment is added to post comment array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true});
        
        res.json({
            post:updatedPost

        });
    }
    catch(e){
        return res.status(500).json({
            error:"Error while creating comment"
        })
    }
}