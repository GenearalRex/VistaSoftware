import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { Alumns } from "./pages/Alumns";
import { TasksFormPages } from "./pages/TasksFormPages";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/login";
import { Moviles } from "./pages/Moviles";
import { Integradores } from "./pages/Integradores";
import { Webs } from "./pages/Webs";
import { AuthProvider } from "./pages/AuthContext"; // Importa el proveedor de autenticación

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="contenedor mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="Alumns" />} />
            <Route path="/Moviles" element={<Moviles />} />
            <Route path="/Alumns" element={<Alumns />} />
            <Route path="/Webs" element={<Webs />} />
            <Route path="/Integradores" element={<Integradores />} />
            <Route path="/Login" element={<SignIn />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="tasks-create" element={<TasksFormPages />} />
            <Route path="/tasks/:id" element={<TasksFormPages />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
