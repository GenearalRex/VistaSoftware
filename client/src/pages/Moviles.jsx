import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Importar imágenes
import imagen1 from "./Imagenes/logo uptap hd.jpg";
import imagen2 from "./Imagenes/logo IS hd.jpg";
import imagen3 from "./Imagenes/5 sin título_20231014160106.png";
import imagen4 from "./Imagenes/Moviles.png";
import { getAllTasks } from "../api/Tasks.api";
import { TasksCard } from "../components/TasksCard";

export function Moviles() {
  const alumns = [
    {
      name: "La Universidad Politécnica de Tapachula tiene como compromiso conducirse con una administración eficiente y eficaz que apoye el desarrollo académico, promoviendo una vinculación estrecha con la sociedad, diseñando y operando un modelo educativo centrado en competencias y en un aprendizaje continuo centrado en el estudiante, además de impulsar la integración de las áreas del conocimiento y la calidad de los programas académicos y de todos los servicios universitarios.",
      image: imagen1,
    },
    {
      name: "Esta carrera está basada en competencias enfocadas a formar Ingenieros con un perfil completo y actualizado en Tecnologías de la Información para el desarrollo de Software de calidad mundial, con la finalidad de comercializar a nivel nacional e internacional y que, además, sean capaces de desempeñarse en cualquiera de los roles involucrados en un proceso de software.",
      image: imagen2,
    },
    {
      name: "",
      image: imagen3,
    },
    {
      name: "",
      image: imagen4,
    },
  ];

  const carouselOptions = {
    infiniteLoop: true, // Carrusel infinito
    autoPlay: true, // Reproducción automática
    interval: 2000, // Intervalo en milisegundos (2 segundos)
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks({ checkbox: "moviles" });
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <center>
        <Carousel {...carouselOptions}>
          {alumns.map((alumno, index) => (
            <div key={index}>
              <img src={alumno.image} alt={alumno.name} />
              <p>{alumno.name}</p>
            </div>
          ))}
        </Carousel>
      </center>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px", // Ajusta este valor según el espacio que desees
          width: "100%",
        }}
      >
        {tasks.map((task) => (
          <TasksCard key={task.id} tasks={task} />
        ))}
      </div>
    </div>
  );
}
