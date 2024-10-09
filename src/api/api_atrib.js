export const ListaServicios = async () => {
    try {
      // Intenta cerrar sesión en el backend
      let response = await fetch("https://web-production-28f99.up.railway.app/api/servicios/", {
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