const { Todos } = require("../models/todo.model");

// create
function createTodo({ newTodo }) {
  const { id, ...todo } = newTodo;
  Todos[id] = {
    ...todo,
  };

  return {
    id,
    ...todo,
  };
}

// update
function updateTodo({ id, payload }) {
  const { description, status } = payload;
  const todo = Todos[id];
  if (todo) {
    todo.description = description;
    todo.status = status;
    todo.updated_at = new Date(Date.now());
    return todo;
  } else {
    throw new Error("Not found!");
  }
}

// get all
function getAllTodos() {
  const todosToReturn = [];
  for (const id in Todos) {
    todosToReturn.push({
      id: id,
      description: Todos[id].description,
      status: Todos[id].status,
      created_at: Todos[id].created_at,
      updated_at: Todos[id].updated_at,
    });
  }
  return todosToReturn;
}

// get by id
function getById({ id }) {
  if (Todos[id]) {
    return {
      id,
      description: Todos[id].description,
      status: Todos[id].status,
      created_at: Todos[id].created_at,
      updated_at: Todos[id].updated_at,
    };
  } else {
    throw new Error("Not found");
  }
}

// delete by id

function deleteById({ id }) {
  delete Todos[id];
}

// delete all

function deleteAll() {
  Todos = {};
}

const TodoRepo = {
  createTodo,
  updateTodo,
  getAllTodos,
  getById,
  deleteById,
  deleteAll,
};

module.exports = TodoRepo;
