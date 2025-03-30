const express=require("express");
const router=express.Router();

const {createComment}=require("../controllers/commentController");
const {createPost,getAllPosts}=require("../controllers/PostController");

const {unlikePost,likePost}=require("../controllers/LikeController");

router.post("/posts/create",createPost);
router.get("/posts/get",getAllPosts);
router.post("/comments/comment",createComment);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

module.exports=router;

