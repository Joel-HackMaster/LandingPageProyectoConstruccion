import React, { useEffect,useRef } from 'react'
import './dashboard.css'

export default function dashboard() {

  const imageRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Añadir la clase 'show' cuando las imágenes están en la vista
          } else {
            entry.target.classList.remove('show'); // Remover la clase si salen de la vista
          }
        });
      },
      {
        threshold: 0.1, // El umbral determina cuánto del elemento debe estar en la vista para activar la animación
      }
    );

    imageRef.current.forEach((img) => {
      if (img) {
        observer.observe(img); // Observar cada imagen
      }
    });

    return () => {
      if (imageRef.current) {
        imageRef.current.forEach((img) => {
          if (img) {
            observer.unobserve(img); // Desobservar solo si la referencia es válida
          }
        });
      }
    };
  }, []);

  return (
    <section id='1' aria-hidden="true" className="relative w-full p-5 h-auto section_image">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="z-10 w-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Galeria de fotos
            </h1>
            <p className="mt-4 text-xl text-white">
              Ofrecemos servicios variados en el rubro de construccion.
            </p>
          </div>
          <div className='z-10 w-full h-auto flex justify-center items-center sm:py-5'>
                  <div className="grid grid-cols-1 items-center justify-center lg:flex lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 mt-6 lg:grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 image-container" ref={(el) => (imageRef.current[0] = el)}>
                        <img
                          alt="image1"
                          src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2Fimg2.jpg?alt=media&token=3256ac54-4af8-414a-aa6c-57e2a9cf7ad8"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg image-container" ref={(el) => (imageRef.current[1] = el)}>
                        <img
                          alt="image2"
                          src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2Fimg1.jpg?alt=media&token=450c12ea-d107-4c38-b6ba-b13175369429"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 mt-6 lg:grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg image-container" ref={(el) => (imageRef.current[2] = el)}>
                        <img
                          alt="image3"
                          src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2FEstructuras.jpg?alt=media&token=b197e5bf-d44e-47a4-8bb9-bb23503ed278"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg image-container" ref={(el) => (imageRef.current[3] = el)}>
                        <img
                          alt="image4"
                          src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2FElectricidad1.jpg?alt=media&token=bc55438c-b6e5-45f5-add2-8f48ee13f41a"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg image-container" ref={(el) => (imageRef.current[4] = el)}>
                        <img
                          alt="image5"
                          src="https://firebasestorage.googleapis.com/v0/b/web-maestro-89bf9.appspot.com/o/obra6.jpg?alt=media&token=c69141e5-f703-4f3a-b6bc-81fcdf3cd996"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 mt-6 lg:grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg image-container" ref={(el) => (imageRef.current[5] = el)}>
                        <img
                          alt="image6"
                          src="https://firebasestorage.googleapis.com/v0/b/web-maestro-89bf9.appspot.com/o/obra2.jpg?alt=media&token=90ed065c-8fda-4074-a4e4-991c790ffbca"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg image-container" ref={(el) => (imageRef.current[6] = el)}>
                        <img
                          alt="image7"
                          src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2FEnchapado1.jpg?alt=media&token=44be777b-efb6-444c-98e9-4d2b56232658"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
          </div>
        </div>
    </section>
  )
}