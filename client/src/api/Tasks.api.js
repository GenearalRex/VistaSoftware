import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/",
});


export const getAllTasks = () => tasksApi.get("/");
export const getTasks = (id) => tasksApi.get(`/${id}/`);
export const createTask = (task) => tasksApi.post("/", task);
export const deleteTasks = (id) => tasksApi.delete(`/${id}`);
export const updateTasks = (id, task) => tasksApi.put(`/${id}/`, task);
//export const login= ()=> loginApi.post("/")
