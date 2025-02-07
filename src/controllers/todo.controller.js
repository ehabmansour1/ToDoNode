const { request, response } = require("express");
const TodoService = require("../services/todo.service");

/**
 * Get all todos
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.getAllTodos = (req, res, next) => {
  try {
    const data = TodoService.getAllTodos();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

/**
 * Create a new todo
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.createTodo = (req, res, next) => {
  try {
    const created = TodoService.createTodo(req.body);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};

/**
 * Get a todo by ID
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.getTodoById = (req, res, next) => {
  try {
    const todo = TodoService.getById({ id: req.params.id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({
      code: 404,
      message: "Todo not found",
    });
  }
};

/**
 * Update a todo by ID
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.updateTodo = (req, res, next) => {
  try {
    const updatedTodo = TodoService.updateTodo({
      id: req.params.id,
      payload: req.body,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(404).json({
      code: 404,
      message: "Todo not found",
    });
  }
};

/**
 * Delete a todo by ID
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.deleteTodoById = (req, res, next) => {
  try {
    TodoService.deleteById({ id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({
      code: 404,
      message: "Todo not found",
    });
  }
};

/**
 * Delete all todos
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.deleteAllTodos = (req, res, next) => {
  try {
    TodoService.deleteAll();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
