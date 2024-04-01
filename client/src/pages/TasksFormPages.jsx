import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createTask,
  deleteTasks,
  updateTasks,
  getTasks,
} from "../api/Tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { GitHub } from "@mui/icons-material";

export function TasksFormPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTasks() {
      if (params.id) {
        const {
          data: { title, description, git, archivo, video },
        } = await getTasks(params.id);
        setValue("title", title);
        setValue("description", description);
        setValue("git", git);

        // Cargar imágenes y videos al editar
        const imgElement = document.querySelector("#imagenPreview");
        const videoElement = document.querySelector("#videoPreview");

        if (imgElement) {
          imgElement.src = archivo; // Ruta de la imagen
        }

        if (videoElement) {
          const sourceElement = videoElement.querySelector("source");
          sourceElement.src = video; // Ruta del video
          videoElement.load(); // Carga la nueva fuente de video
        }
      }
    }
    loadTasks();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("git", data.git);
    formData.append("video", data.video[0]);
    formData.append("archivo", data.file[0]);

    if (params.id) {
      await updateTasks(params.id, formData);
      toast.success("Se ha modificado un proyecto");
    } else {
      await createTask(formData);
      toast.success("Usted ha creado un nuevo proyecto");
    }

    navigate("/tasks");
  });

  return (
    <div className="max-w-xl mx-auto mt-8" style={{}}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
          className="bg-zinc-200 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>Este campo es requerido</span>}
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description", { required: true })}
          className="bg-zinc-200 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>Este campo es requerido</span>}
        <input
          type="link"
          placeholder="GitHub"
          {...register("git", { required: true })}
          className="bg-zinc-200 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>Este campo es requerido</span>}
      </form>
      {is_login ? (
        <>
          {" "}
          <label
            htmlFor="fileUpload"
            className="bg-blue-500 p-3 rounded-lg block w-full mt-3 cursor-pointer text-white"
          >
            Subir Imagen
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              {...register("file")}
            />
          </label>
          <label
            htmlFor="videoUpload"
            className="bg-blue-500 p-3 rounded-lg block w-full mt-3 cursor-pointer text-white"
          >
            Subir Video
            <input
              type="file"
              id="videoUpload"
              style={{ display: "none" }}
              {...register("video")}
            />
          </label>
          <button className="bg-green-500 p-3 rounded-lg block w-full mt-3">
            Guardar
          </button>
          {params.id && (
            <button
              className="bg-red-500 p-3 rounded-lg w-48 mt-3"
              onClick={async function () {
                const acceptado = window.confirm(
                  "¿Seguro que quieres eliminar este campo?"
                );
                if (acceptado) {
                  await deleteTasks(params.id);
                  toast.success("Usted ha eliminado un campo");
                  navigate("/tasks");
                }
              }}
            >
              Eliminar
            </button>
          )}
        </>
      ) : (
        <></>
      )}

      <center>
        <img
          id="imagenPreview"
          alt="Vista previa de la imagen"
          style={{ width: "200px", height: "200px" }}
        />
      </center>
      <video
        controls
        id="videoPreview"
        style={{ width: "800px", height: "300px" }}
      >
        <source type="video/mp4" />
      </video>
    </div>
  );
}
