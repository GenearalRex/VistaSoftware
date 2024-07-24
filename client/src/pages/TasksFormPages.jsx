import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createTask,
  deleteTasks,
  updateTasks,
  getTasks,
} from "../api/Tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Css/TasksFormPages.css";

export function TasksFormPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const MySwal = withReactContent(Swal);

  const [imageFileName, setImageFileName] = useState("Subir Imagen");
  const [videoFileName, setVideoFileName] = useState("Subir Video");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [fileVideo, setFileVideo] = useState(null);
  const [checkbox, setCheckbox] = useState("");
  const [fileImage, setFileImage] = useState(null);

  useEffect(() => {
    async function loadTasks() {
      if (params.id) {
        const {
          data: { title, description, git, archivo, video, checkbox },
        } = await getTasks(params.id);
        setValue("title", title);
        setValue("description", description);
        setValue("git", git);
        setValue("checkbox", checkbox);
        setCheckbox(checkbox);

        if (archivo) {
          const response = await fetch(archivo);
          const blob = await response.blob();
          const file = new File([blob], "imagen", { type: blob.type });
          setFileImage(file);
          setImageFileName("Imagen seleccionada");
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
        if (video) {
          const response = await fetch(video);
          const blob = await response.blob();
          const file = new File([blob], "video", { type: blob.type });
          setFileVideo(file);
          setVideoFileName("Video seleccionado");
          const reader = new FileReader();
          reader.onloadend = () => {
            setVideoPreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      } else {
        reset({
          title: "",
          description: "",
          git: "",
          checkbox: "",
        });
        setImageFileName("Subir Imagen");
        setVideoFileName("Subir Video");
        setImagePreview(null);
        setVideoPreview(null);
        setFileImage(null);
        setFileVideo(null);
        setCheckbox("");
      }
    }
    loadTasks();
  }, [params.id, setValue, reset]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFileImage(file);
    if (file) {
      setImageFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setFileVideo(file);
    if (file) {
      setVideoFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("git", data.git);
    formData.append("video", fileVideo);
    formData.append("archivo", fileImage);
    formData.append("checkbox", data.checkbox);

    if (params.id) {
      await updateTasks(params.id, formData);
      toast.success("Se ha modificado un proyecto");
      navigate("/tasks");
    } else {
      await createTask(formData);
      toast.success("Usted ha creado un nuevo proyecto");
      navigate("/tasks");
    }
  });

  const options = [
    { key: "integradores", value: "Integradores" },
    { key: "moviles", value: "Móviles" },
    //{ key: "global", value: "Global" },
    { key: "webs", value: "Webs" },
    //{ key: "proyectos", value: "Proyectos" },
  ];

  const handleDelete = async () => {
    const result = await MySwal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, elimínalo!",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await deleteTasks(params.id);
      toast.success("Usted ha eliminado un campo");
      navigate("/tasks");
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={onSubmit}
        className="form-content"
        encType="multipart/form-data"
      >
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("title", { required: true })}
          error={!!errors.title}
          helperText={errors.title ? "Este campo es requerido" : ""}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register("description", { required: true })}
          error={!!errors.description}
          helperText={errors.description ? "Este campo es requerido" : ""}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="GitHub"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("git", { required: true })}
          error={!!errors.git}
          helperText={errors.git ? "Este campo es requerido" : ""}
          InputLabelProps={{ shrink: true }}
        />
        <div className="mb-5 mt-5">
          <Button
            variant="contained"
            component="label"
            fullWidth
            className="upload-button"
            color="primary"
          >
            {imageFileName}
            <input
              type="file"
              hidden
              accept="image/*"
              {...register("file")}
              onChange={handleImageUpload}
            />
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            fullWidth
            className="upload-button"
            color="primary"
          >
            {videoFileName}
            <input
              type="file"
              hidden
              accept="video/*"
              {...register("video")}
              onChange={handleVideoUpload}
            />
          </Button>
        </div>

        <FormControl fullWidth margin="normal">
          <InputLabel shrink={true}>Categoría</InputLabel>
          <Select
            value={checkbox}
            label="Categoría"
            {...register("checkbox", { required: true })}
            onChange={(e) => setCheckbox(e.target.value)}
            error={!!errors.checkbox}
          >
            {options.map((option) => (
              <MenuItem key={option.key} value={option.key}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
          {errors.checkbox && <span>Este campo es requerido</span>}
        </FormControl>
        <div className="preview-container">
          {imagePreview && (
            <img
              id="imagenPreview"
              src={imagePreview}
              alt="Vista previa de la imagen"
              className="image-preview"
            />
          )}
          {videoPreview && (
            <video controls id="videoPreview" className="video-preview">
              <source src={videoPreview} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="buttons-container">
          <div className="mb-5 mt-5">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="save-button"
              color="success"
            >
              Guardar
            </Button>
          </div>
          {params.id && (
            <Button
              variant="contained"
              fullWidth
              className="delete-button"
              color="error"
              onClick={handleDelete}
            >
              Eliminar
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
