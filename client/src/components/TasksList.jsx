import { useEffect, useState } from "react";
import { getAllTasks } from "../api/Tasks.api";
import { TasksCard } from "./TasksCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function loadtasks() {
      const res = await getAllTasks();
      // console.log(res);
      setTasks(res.data);
    }
    loadtasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((tasks) => (
        <TasksCard key={tasks.id} tasks={tasks} />
      ))}
    </div>
  );
}
