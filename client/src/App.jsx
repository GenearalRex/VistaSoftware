import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { Alumns } from "./pages/Alumns";
import { TasksFormPages } from "./pages/TasksFormPages";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import SinIn from "./pages/login";

function App() {
  // useEffect(() => {
  //   // Redirigir automáticamente a la página de login al iniciar el proyecto
  //   if (window.location.pathname !== "/Login") {
  //     window.location.href = "/Login";
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <div className="contenedor mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="Alumns" />} />
          <Route path="/Alumns" element={<Alumns />} />
          <Route path="/Login" element={<SinIn />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks-create" element={<TasksFormPages />} />
          <Route path="/tasks/:id" element={<TasksFormPages />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
