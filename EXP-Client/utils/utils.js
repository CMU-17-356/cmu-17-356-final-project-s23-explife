import axios from 'axios'

let instance = axios.create({
  baseURL: "https://explife-backend.fly.dev/"
});

/* **************
 List helpers
*************** */
export function getAllTodos() {
  return instance.get("/lists")
};

export function getTodo(id) {
  return instance.get("/lists/" + id)
};

export function createTodo(todo) {
  return instance.post("/lists", todo)
};

export function updateTodo(id, todo) {
  return instance.post("/lists/" + id, todo)
};

export function deleteTodo(id) {
  return instance.delete("/lists/" + id)
};
