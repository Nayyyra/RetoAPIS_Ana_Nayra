fetch("https://randomuser.me/api/?results=10")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos) {
    console.log(datos);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });