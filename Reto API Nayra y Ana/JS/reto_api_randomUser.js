// Conectar JS con el contenedor principal
const contenedor = document.getElementById("contenedor_users");
let usuariosActuales = [];

function obtenerUsuarios(numero) {
  fetch("https://randomuser.me/api/?results=" + numero)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      // 1. Vaciamos el contenedor antes de añadir los nuevos
      contenedor.innerHTML = "";
      usuariosActuales = datos.results;

      // 2. Usamos un fragmento para no saturar el navegador
      const fragmento = document.createDocumentFragment();

      // 3. Recorremos los datos creando elementos reales del DOM
      datos.results.forEach(function(usuario, indice) {
        // Creamos la tarjeta contenedora
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-usuario");
        tarjeta.dataset.indice = indice;

        // Imagen
        const imagen = document.createElement("img");
        imagen.src = usuario.picture.large;
        imagen.alt = `Foto de ${usuario.name.first} ${usuario.name.last}`;

        // Nombre
        const nombre = document.createElement("p");
        nombre.classList.add("nombre");
        nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;

        // Género
        const genero = document.createElement("p");
        genero.innerHTML = `<strong>Género:</strong> ${usuario.gender}`;

        // País
        const pais = document.createElement("p");
        pais.innerHTML = `<strong>País:</strong> ${usuario.location.country}`;

        // Email
        const email = document.createElement("p");
        email.innerHTML = `<strong>Email:</strong> ${usuario.email}`;

        // Teléfono
        const telefono = document.createElement("p");
        telefono.innerHTML = `<strong>Teléfono:</strong> ${usuario.phone}`;

        // Añadimos todos los elementos dentro de la tarjeta
        tarjeta.append(imagen, nombre, genero, pais, email, telefono);

        // Añadimos la tarjeta al fragmento
        fragmento.appendChild(tarjeta);
      });

      // 4. Inyectamos todo de un solo golpe al DOM
      contenedor.appendChild(fragmento);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
}

// Botón para obtener 10 usuarios
document.getElementById("diez").addEventListener("click", function() {
  obtenerUsuarios(10);
});

// Botón para obtener 30 usuarios
document.getElementById("treinta").addEventListener("click", function() {
  obtenerUsuarios(30);
});

// Botón para obtener 50 usuarios
document.getElementById("cincuenta").addEventListener("click", function() {
  obtenerUsuarios(50);
});

// Al recargar la página o al abrirla y no haber pulsado ningún botón, mostrar 5 usuarios
obtenerUsuarios(5);

contenedor.addEventListener("click", function(evento) {
  // Buscamos si el clic ocurrió dentro de una tarjeta
  var tarjeta = evento.target.closest(".tarjeta-usuario");

  // Si no se hizo clic en una tarjeta, no hacemos nada
  if (!tarjeta) return;

  // Sacamos el número que guardamos en data-indice
  var indice = tarjeta.dataset.indice;

  // Obtenemos el usuario de la lista usando ese índice
  var usuarioSeleccionado = usuariosActuales[indice];

  // Guardamos el objeto convertido a texto,  usamos JSON.stringify porque localStorage solo acepta texto plano, no objetos nativos
  localStorage.setItem("usuarioSeleccionado", JSON.stringify(usuarioSeleccionado));

  // Navegamos a la nueva página
  window.location.href = "PAGES/detalle.html";
});