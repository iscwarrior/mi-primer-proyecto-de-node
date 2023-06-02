  /**
   * Ejercicio:
   * Pastel
   * 1 - Leer la receta
   * 2 - Conseguir los ingredientes
   * 3 - Preparacion de la masa
   * 4 - Hornear el pastel
   * 5 - Decorar el pastel
   */
  
  const pastel = {
    leerReceta: false,
    getIngredientes: false,
    prepararMasa: false,
    hornearPastel: false,
    decorarPastel: false
  }

  const readReceta = (pastel, receta) =>{
    let error = null;
    setTimeout (()=> {
        pastel.leerReceta = true;
        if(!pastel.leerReceta) {
            error =" Se necesita leer la receta";
        }
        console.log("ya se leyo la receta");
        receta(error, pastel)
    },2000)
  }

  const obtenerIngredientes = (leerReceta) =>{
    let error = null;
    setTimeout (()=> {
        leerReceta.getIngredientes = true;
        if(!leerReceta.getIngredientes) {
            error =" Se necesita obtener los ingredientes";
        }
    },2000)
  }

