const router = require("express").Router();
const {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodoById,
  deleteAllTodos,
} = require("../controllers/todo.controller");

router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.get("/todos/:id", getTodoById);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodoById);
router.delete("/todos", deleteAllTodos);

module.exports = router;
