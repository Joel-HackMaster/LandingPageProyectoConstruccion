import React, { useEffect, useState } from "react";
import BlogCard from "../../components/cardlist/blogcard";
import { ListaServicios } from "../../api/api_atrib";


export default function servicios() {
    const [ListServices, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Nuevo estado para controlar el "loading"

    useEffect(() => {
        const getServices = async () => {
            try {
              setIsLoading(true); // Activamos el loading cuando comienza la llamada
              const servicios = await ListaServicios();
              setServices(servicios.data.Servicios); 
              setIsLoading(false); // Desactivamos el loading cuando termina la llamada
            } catch (error) {
              console.error("Error al obtener los servicios: ", error);
              setIsLoading(false); // Aseguramos desactivar el loading incluso en caso de error
            }
          };
          getServices();
    }, [])
  return (
    <section id="1" aria-hidden="true" className="w-full p-5 h-auto section_image2">
        <div className="flex flex-col items-center h-auto p-4 gap-6">
            {isLoading ? (
                <div className="text-white text-xl">Cargando servicios...</div> // Mensaje de loading
            ) : (
                ListServices.map((serv, index) => (
                    <BlogCard
                        key={index}
                        image={serv.image}
                        author="Mario Quilla"
                        date={serv.category}
                        title={serv.name}
                        subtitle=""
                        content={serv.description}
                        tags={["Quilla Multiservicios"]}
                    />
                ))
            )}
        </div>
    </section>
  );
}
