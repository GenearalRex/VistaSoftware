import { useNavigate } from "react-router-dom";
import moment from "moment"; // Para formatear la fecha
import { useContext } from "react"; // No olvides importar useContext
import { AuthContext } from "../pages/AuthContext"; // Importa el contexto de autenticación

export function TasksCard({ tasks }) {
  const { isLoggedIn, roles, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (roles.includes("DOCENTES")) {
      navigate(`/tasks/` + tasks.id);
    }
  };

  return (
    <div className="max-w-sm m-2 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
      <div onClick={handleClick}>
        <div className="relative">
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full h-48 overflow-hidden">
              <video controls className="w-full h-full object-cover">
                <source src={tasks.video} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
            <div className="w-full h-48 overflow-hidden">
              <img
                src={tasks.archivo}
                alt="imagen de la tarea"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-bl-lg">
            {moment(tasks.created_at).format("DD MMM")}
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full uppercase">
              {tasks.checkbox}
            </span>
          </div>
          <h1 className="font-bold text-lg text-gray-900">{tasks.title}</h1>
          <p className="text-gray-600">{tasks.description}</p>
        </div>
        <div className="px-4 pb-4 text-center">
          <a href={tasks.git} className="text-blue-500 hover:underline">
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
