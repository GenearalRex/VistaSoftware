import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//importar imagenes
import imagen1 from "./Imagenes/logo uptap hd.jpg";
import imagen2 from "./Imagenes/logo IS hd.jpg";
import imagen3 from "./Imagenes/5 sin título_20231014160106.png";
import imagen4 from "./Imagenes/jeff-meigs-rDAUjyCT3hY-unsplash.jpg";
import { getAllTasks } from "../api/Tasks.api";
import { TasksCard } from "../components/TasksCard";

export function Alumns() {
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
    // Agrega más alumnos aquí
  ];

  const carouselOptions = {
    infiniteLoop: true, // Carrusel infinito
    autoPlay: true, // Reproducción automática
    interval: 2000, // Intervalo en milisegundos (5 segundos)
  };
  const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        async function loadtasks(){
            const res = await getAllTasks()
            setTasks(res.data);
        }
        loadtasks();

    },[]);

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

        <div className="grid grid-cols-3 gap-2">
          {tasks.map((tasks) => (
            <TasksCard key={tasks.id} tasks={tasks} />
          ))}
        </div>
      </center>
    </div>
  );
}
