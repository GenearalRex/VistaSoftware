import { useEffect, useState } from "react";
import { getAllTasks } from "../api/Tasks.api";
import { TasksCard } from "./TasksCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadtasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadtasks();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "50px", // Ajusta este valor según el espacio que desees
        width: "100%",
      }}
    >
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            flex: "1 1 calc(16.66% - 10px)", // Se ajusta para que haya 6 elementos por fila, restando el gap
            maxWidth: "calc(16.66% - 10px)",
            boxSizing: "border-box",
          }}
        >
          <TasksCard tasks={task} />
        </div>
      ))}
    </div>
  );
}
