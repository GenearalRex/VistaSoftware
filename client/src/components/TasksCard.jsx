import { useNavigate } from "react-router-dom";

export function TasksCard({ tasks }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-600 mx-100 mt-10 text-center">
      <div
        className="bg-white-100 p-3 hover:bg-purple-700 hover:scale-10 cursor-pointer"
        onClick={() => {
          navigate(`/tasks/` + tasks.id);
        }}
      >
        <h1 className="font-bold uppercase">{tasks.title}</h1>
        <p className="text-slate-900">{tasks.description}</p>
      



        <div className="w-full overflow-hidden">
          <img
            src={tasks.archivo}
            alt="imagen de la tarea"
            className="w-80 h-60 mx-auto"
          />
        </div>

        <div className="w-full overflow-hidden">
          <video controls className="w-80 h-60 mx-auto">
            <source src={tasks.video} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </div>
  );
}
