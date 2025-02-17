import express from "express";
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from "../controller/ToDocontroller.js";

const router = express.Router();

router.get("/todo", getTodos);
router.get("/todo/:id", getTodoById);
router.post("/todo", createTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
