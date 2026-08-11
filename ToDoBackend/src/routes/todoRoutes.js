import express from "express";
import { getTodos, addTodos, deleteTodo, updateTodo } from "../controller/todoController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();


router.use(requireAuth);
router.get("/", getTodos)
router.post("/add", addTodos)
router.delete("/delete/:id", deleteTodo);
router.put("/update/:id", updateTodo);

export {router};