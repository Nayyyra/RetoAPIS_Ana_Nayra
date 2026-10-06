var contenedor = document.getElementById("detalle-usuario");
// Leemos el texto guardado
var datosGuardados = localStorage.getItem("usuarioSeleccionado");

if (!datosGuardados) {
  window.location.href = "index.html";
} else {
 // Lo convertimos de nuevo a objeto JS
  var usuario = JSON.parse(datosGuardados);

  var foto = usuario.picture.large;
  var nombreCompleto = usuario.name.first + " " + usuario.name.last;
  var genero = usuario.gender;
  var edad = usuario.dob.age;
  var email = usuario.email;
  var telefono = usuario.phone;
  var movil = usuario.cell;
  var ciudad = usuario.location.city;
  var pais = usuario.location.country;


var estructuraTarjeta = `
          <div class="tarjeta-usuario">
              <img src="${foto}" alt="Foto de ${nombreCompleto}">
              <p class="nombre">${nombreCompleto}</p>
              <p><strong>Género:</strong> ${genero}</p>
              <p><strong>Edad:</strong> ${edad}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
              <p><strong>Móvil:</strong> ${movil}</p>
              <p><strong>Ciudad:</strong> ${ciudad}</p>
              <p><strong>País:</strong> ${pais}</p>
          </div>
        `;

  contenedor.innerHTML = estructuraTarjeta;

};



console.log("Datos recuperados en la página de detalle:", usuario);
  