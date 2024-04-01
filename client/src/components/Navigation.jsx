import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import imagen1 from "../pages/Imagenes/zyro-image.png";
import MenuIcon from "@mui/icons-material/Menu";

export function Navigation() {
  const is_login = JSON.parse(localStorage.getItem("is_login"));

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const signout = () => {
    setIsMenuOpen(false);
    localStorage.removeItem("is_login");
    isAlumnsPage = true;
  };

  var isAlumnsPage = true;
  if (is_login) {
    isAlumnsPage = false;
  }

  return (
    <div
      style={{
        padding: isSmallScreen ? "10px" : "20px",
        position: "relative",
        background: "linear-gradient(135deg, green 50%, purple 50%)",
        minHeight: "15vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Botón de menú */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "999",
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Contenido del menú */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "10px",
            zIndex: "998",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          {!isAlumnsPage ? (
            <>
              <button
                className="bg-purple-500 px-4 py-1 rounded-lg"
                style={{ margin: "5px" }}
              >
                <Link to="/tasks" onClick={closeMenu}>
                  Proyectos
                </Link>
              </button>
              <button
                className="bg-green-500 px-4 py-1 rounded-lg"
                style={{ margin: "5px" }}
              >
                <Link to="/tasks-create" onClick={closeMenu}>
                  Administrador de Proyectos
                </Link>
              </button>
              <button
                className="bg-green-500 px-4 py-1 rounded-lg"
                style={{ margin: "5px" }}
              >
                <Link to="/Login" onClick={signout}>
                  Cerrar sesion
                </Link>
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                className="bg-green-500 px-4 py-1 rounded-lg"
                style={{ margin: "5px" }}
              >
                <Link to="/Alumns" onClick={closeMenu}>
                  Vista Alumnos
                </Link>
              </button>
              <button
                className="bg-green-500 px-4 py-1 rounded-lg"
                style={{ margin: "5px" }}
              >
                <Link to="/Login" onClick={closeMenu}>
                  Inicia Sesión
                </Link>
              </button>
            </>
          )}
        </div>
      )}

      {/* Botón adicional */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      >
        <a
          href="https://www.uptapachula.edu.mx/#:~:text=La%20Universidad%20Politécnica%20de%20Tapachula%20..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "purple",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={imagen1}
              alt="Botón"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </button>
        </a>
      </div>
    </div>
  );
}
