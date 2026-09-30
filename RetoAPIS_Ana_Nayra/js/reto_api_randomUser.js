/*Imagina que eres un desarrollador de juegos Pokemon.
Necesitas sacar información de las APIs anteriores y mostrarlas.
Abre una de las APIs anteriores y observa cómo está organizada la información, y qué información se muestra.
Piensa en qué información quieres mostrar, y que tenga sentido (por ejemplo, nombre de todos los pokemon y su fuerza).
Implementa el código necesario para hacer lo que has pensado en el punto anterior.
Muéstralo de la forma que desees.
👉 +2 puntos adicionales ➡ Si muestras la información en una página .html usando funciones del DOM.*/




fetch("https://opentdb.com/api_config.php")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos) {
    console.log(datos);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });