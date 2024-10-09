import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons/faWhatsappSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef,useState } from "react";

export default function () {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true); // Activa la animación cuando el componente es visible
            }
          });
        },
        { threshold: 0.1 } // Inicia la animación cuando el 10% del componente es visible
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);

  return (
    <section id="1" aria-hidden="true" className="w-full h-auto bg-black">
      <div ref={containerRef}  className="flex flex-col md:flex-row items-center md:items-start p-5 gap-6">
        {/* Columna de la imagen */}
        <div
          className={`w-full md:w-1/2 transition-transform duration-1000 ease-out transform ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2FMario.jpg?alt=media&token=6db19043-19b9-4110-ab40-1d48466ee9ef"
            alt="Maestro Mario"
            className="w-full h-auto object-cover shadow-lg rounded-lg"
          />
        </div>

        {/* Columna del texto */}
        <div
          className={`w-full h-96 flex gap-8 items-center justify-center md:w-1/2 transition-transform duration-1000 ease-out transform ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
            <div className="flex flex-col h-64 justify-center items-center">
                <p className="italic text-base leading-relaxed text-white">
                "¡Hola! Soy el Maestro Mario Quilla"
                </p>
                <p className="italic text-base leading-relaxed text-white">
                "Llevo más de 30 años trabajando en el mundo de la construcción y la albañilería. 
                He pasado por todo tipo de proyectos, desde pequeñas remodelaciones hasta grandes obras, 
                y lo que más disfruto es ver cómo los sueños de mis clientes se hacen realidad.
                <br></br><br></br>
                Si tienes alguna duda sobre los servicios que ofrezco o necesitas orientación para tu proyecto, 
                no dudes en escribirme." 
                </p>
                <div className="mt-4 flex justify-end">
                    <a href="https://wa.me/51994745930?text=Hola%20Maestro%20Mario%2C%20tengo%20una%20consulta." target="_blank" className="flex items-center px-2 py-1 text-3xl text-center text-green-500 hover:text-green-700 rounded-full ring-2 ring-green-500/10 hover:ring-green-700/20">
                        <FontAwesomeIcon icon={faWhatsappSquare}/>
                        <span className="pl-2 text-base">Contacto</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
