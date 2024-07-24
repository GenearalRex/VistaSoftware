import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { AuthContext } from "../pages/AuthContext"; // Importa el contexto de autenticación
import imagen1 from "../pages/Imagenes/zyro-image.png"; // Asegúrate de que esta imagen tenga fondo transparente
import "./NavigationCss.css";

export function Navigation() {
  const { isLoggedIn, roles, signOut } = useContext(AuthContext);
  

  const renderLinks = () => {
    if (!isLoggedIn) {
      return (
        <>
          <Link to="/Integradores" className="nav-link">
            Integradores
          </Link>
          <Link to="/Moviles" className="nav-link">
            Móviles
          </Link>
          <Link to="/Webs" className="nav-link">
            Webs
          </Link>
        </>
      );
    } else if (roles.includes("DOCENTES")) {
      return (
        <>
          <Link to="/tasks" className="nav-link">
            Modificación de Proyectos
          </Link>
          <Link to="/tasks-create" className="nav-link">
            Crea Proyectos
          </Link>
        </>
      );
    } else if (roles.includes("ALUMNOS")) {
      return (
        <>
          <Link to="/Alumns" className="nav-link">
            Proyectos
          </Link>
          <Link to="/Integradores" className="nav-link">
            Integradores
          </Link>
          <Link to="/Moviles" className="nav-link">
            Móviles
          </Link>
          <Link to="/Webs" className="nav-link">
            Webs
          </Link>
        </>
      );
    }
  };

  return (
    <header className="navigation">
      <div className="logo-container">
        <a
          href="https://www.uptapachula.edu.mx/#:~:text=La%20Universidad%20Politécnica%20de%20Tapachula%20..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imagen1} alt="Logo" className="logo-image" />
        </a>
      </div>

      <nav className="nav-links">{renderLinks()}</nav>

      <div className="auth-buttons">
        {!isLoggedIn ? (
          <Link to="/Login" className="auth-link signup-button">
            Iniciar sesión
          </Link>
        ) : (
          <Link
            to="/Login"
            onClick={signOut}
            className="auth-link signup-button"
          >
            Cerrar sesión
          </Link>
        )}
      </div>
    </header>
  );
}
