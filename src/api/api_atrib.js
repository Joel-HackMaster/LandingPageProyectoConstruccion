export const ListaServicios = async () => {
    try {
      // Intenta cerrar sesión en el backend
      let response = await fetch("http://127.0.0.1:8000/api/servicios/", {
        method: "GET",
      });
  
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("No se pudieron obtener los servicios");
      }
    } catch (error) {
      console.error("Error al obtener la lista de servicios:", error);
    }
  };