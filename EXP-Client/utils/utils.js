import axios from 'axios'

let instance = axios.create({
  baseURL: "https://explife-backend.fly.dev"
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
  return instance.put("/lists/" + id, {items: todo})
};

export function deleteTodo(id) {
  return instance.delete("/lists/" + id)
};

/* **************
 User helpers
 *************** */

export function getAllUsers() {
  return instance.get("/users")
};

export function getUser(id) {
  return instance.get("/users/" + id)
};


/* **************
 Function helpers
*************** */
export function sameDay(first, second) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};
