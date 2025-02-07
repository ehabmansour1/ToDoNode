const TodoRepo = require("../repos/todo.repo.js");
const { TODO_STATUS } = require("../enums/todo.enums");

// create
function createTodo({ description }) {
  if (!description) {
    throw new Error("Description is required");
  }

  const newTodo = {
    id: Date.now(),
    description,
    status: TODO_STATUS.INITIALIZED,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  };

  const createdTodo = TodoRepo.createTodo({
    newTodo,
  });
  return createdTodo;
}

// update
function updateTodo({ id, payload }) {
  if (!id || !payload) {
    throw new Error("ID and payload are required");
  }

  const { description, status } = payload;
  if (!description || !status) {
    throw new Error("Description and status are required");
  }

  const updatedTodo = TodoRepo.updateTodo({
    id,
    payload: { description, status },
  });
  return updatedTodo;
}

// get all
function getAllTodos() {
  try {
    const todos = TodoRepo.getAllTodos();
    return todos;
  } catch (error) {
    throw error; // cascading errors to the top layer
  }
}

// get by id
function getById({ id }) {
  if (!id) {
    throw new Error("ID is required");
  }

  const todo = TodoRepo.getById({ id });
  if (todo) {
    return todo;
  } else {
    throw new Error("Not found");
  }
}

// delete by id
function deleteById({ id }) {
  if (!id) {
    throw new Error("ID is required");
  }

  TodoRepo.deleteById({ id });
}

// delete all
function deleteAll() {
  TodoRepo.deleteAll();
}

module.exports = {
  createTodo,
  updateTodo,
  getAllTodos,
  getById,
  deleteById,
  deleteAll,
};
