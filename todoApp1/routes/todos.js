const express=require("express");
const router=express.Router();

const createTodo =require("../controllers/createTodo.js");
const getTodo=require("../controllers/getTodo.js");
const getTodoById=require("../controllers/getTodo.js");
const updateTodo=require("../controllers/updateTodo.js");
const deleteTodo=require("../controllers/deleteTodo.js");

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodos/:id",updateTodo);
router.delete("/deleteTodos/:id",deleteTodo);

module.exports=router;