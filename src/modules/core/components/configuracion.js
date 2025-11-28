export const obtenerFechaActual = () => {
    const ahora = new Date();
  
    return (
      `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(
        ahora.getDate()
      ).padStart(2, '0')} ` +
      `${String(ahora.getHours()).padStart(2, '0')}:${String(
        ahora.getMinutes()
      ).padStart(2, '0')}:${String(ahora.getSeconds()).padStart(2, '0')}`
    );
  };