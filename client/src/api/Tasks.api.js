import axios from "axios";

// Configuración del API de tareas
const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/", // Asegúrate de que esta URL es correcta
});

export const getAllTasks = (params = {}) => tasksApi.get("/", { params });
export const getTasks = (id) => tasksApi.get(`/${id}/`);
export const createTask = (task) => tasksApi.post("/", task);
export const deleteTasks = (id) => tasksApi.delete(`/${id}/`);
export const updateTasks = (id, task) => tasksApi.put(`/${id}/`, task);
