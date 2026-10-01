// Conectar js con el div del html para mostrar la información
var contenedor = document.getElementById("contenedor_users");

fetch("https://randomuser.me/api/?results=10  ") // Con results=x mostramos el nº de resultados que queremos
  .then(function(respuesta) {
    return respuesta.json();
  })
   .then(function(datos) {
    // Limpiamos el contenedor por si tiene texto previo
    contenedor.innerHTML = "";

    // Accedemos al array results y lo recorremos
    datos.results.forEach(function(usuario) {
      // Extraemos los datos exactos que queremos y los guardamos en variables
      var genero = usuario.gender;
      var nombreCompleto = usuario.name.first + " " + usuario.name.last;
      var pais = usuario.location.country;
      var email = usuario.email;
      var telefono = usuario.phone; // Usar usuario.cell si queremos sacar el móvil
      var foto = usuario.picture.large; // URL foto

    // Creamos la estructura con la que mostraremos la info en el html
      var estructuraTarjeta = `
          <div class="tarjeta-usuario">
              <img src="${foto}" alt="Foto de ${nombreCompleto}">
              <p class="nombre">${nombreCompleto}</p>
              <p><strong>Género:</strong> ${genero}</p>
              <p><strong>País:</strong> ${pais}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
          </div>
        `;
    // Inyectamos la tarjeta con los datos dentro del html
      contenedor.innerHTML += estructuraTarjeta;
    });
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

  // Sacar género, nombre, email y teléfono

  // Mostramos los datos por consola
  /*
      console.log("Género: " + genero);
      console.log("Nombre Completo: " + nombreCompleto);
      console.log("País: " + pais);
      console.log("Email: " + email);
      console.log("Teléfono: " + telefono);
      console.log("Foto URL: " + foto);
      console.log("---------------------------------------");*/