import axios from 'axios'

let instance = axios.create({
  baseURL: "https://explife-backend.fly.dev/"
});

/* **************
 List helpers
*************** */
export function getAllTasks() {
  return instance.get("/lists")
};

export function getTask(id) {
  return instance.get("/lists/" + id)
};

export function createTask(task) {
  return instance.post("/lists", task)
};

export function updateTask(id, task) {
  return instance.post("/lists/" + id, task)
};

export function deleteTask(id) {
  return instance.delete("/lists/" + id)
};
