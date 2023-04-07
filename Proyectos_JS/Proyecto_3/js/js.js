

var usuarioIngreso = document.getElementById("usuarioIngreso");
var passwordIngreso = document.getElementById("passwordIngreso");

var usuarioRegistro = document.getElementById("usuarioRegistro");
var selectRegistro = document.getElementById("selectRegistro");
var passwordRegistro = document.getElementById("passwordRegistro");

var contador = 0;

const container = document.querySelector(".signup");
const signUpButton = document.querySelector("#signUp");
const closeButton = document.querySelector("#close");

signUpButton.onclick = () => {
  container.classList.add("active");
};
//close cartcartIcon.onclick = () =>
closeButton.onclick = () => {
  container.classList.remove("active");
};


var usuarios = [
  ["camila", "1234", "Gerencia"],
  ["jose", "1234", "Contabilidad"],
  ["Diana", "1234", "Recursos"],  
  ["Miguel", "1234", "Sistemas"],
  ["Marcos", "1234", "Seguridad"],
  ["Valentina", "1234", "Fabricacion"],  
  ["Carlos", "1234", "Administracion"],
  ["Diego","1234", "Desarrollo"],
];


function validarUsuario() {
  var usuario = usuarioIngreso.value;
  var password = passwordIngreso.value;
 // verificamos que los dos campos hallan sido llenados
  var verificacion = verificarUsuario(usuario, password, true);

  if (usuario == "" || password == "") {
    alert("Todos los datos son obligatorios.");
  } else if (verificacion[0]) {
    document.getElementById("usuarioIngreso").value = "";
    document.getElementById("passwordIngreso").value = "";    
    
    var deparment =verificacion[1]
    console.log(deparment)
   switch(deparment) {
      case "Gerencia":
        // code block
        //console.log("Puedes acceder a: " +" cafeteria"+" oficina Principal");
        //document.getElementById("welcome").innerHTML = "Puedes acceder a: " +" cafeteria"+" oficina Principal";
        var accesslevels=`<p>Bienvenido(a)  ${usuario} podras acceder a:</p>
        <ol>
        <li>Tesoreria</li>
        <li>Oficina Administrativa</li>
        <li>Mantenimiento</li>
        <li>Dotacion</li>
        <li>Sistemas</li>
        <li>Salon</li>
        <li>patio</li>
        <li>Terraza</li>
        <li>Reparacion</li>
        <li>Distribucion</li>
        </ol>`;
        cartaccess = document.getElementById("welcome");
        cartaccess.innerHTML = accesslevels;
        break;
        case "Contabilidad":
          // code block
          //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
          var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
          <ol>
          <li>Cafeteria</li>
          <li>Oficina Administrativa</li>
          <li>Mantenimiento</li>
          <li>Dotacion</li>
          <li>Recursos humanos</li>
          <li>Salon</li>
          <li>patio</li>
          <li>Terraza</li>
          <li>Reparacion</li>
          <li>Distribucion</li>
          </ol>`;
          cartaccess = document.getElementById("welcome");
          cartaccess.innerHTML = accesslevels;
          break;
      case "Recursos":
        // code block
        //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
        var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
        <ol>
        <li>Cafeteria</li>
        <li>Oficina Administrativa</li>
        <li>Mantenimiento</li>
        <li>Dotacion</li>
        <li>Recursos humanos</li>
        <li>Salon</li>
        <li>patio</li>
        <li>Terraza</li>
        <li>Reparacion</li>
        <li>Distribucion</li>
        </ol>`;
        cartaccess = document.getElementById("welcome");
        cartaccess.innerHTML = accesslevels;
        break;
      case "Sistemas":
          // code block
          //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
          var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
          <ol>
          <li>Cafeteria</li>
          <li>Oficina Administrativa</li>
          <li>Mantenimiento</li>
          <li>Dotacion</li>
          <li>Sistemas</li>
          <li>Salon</li>
          <li>patio</li>
          <li>Terraza</li>
          <li>Reparacion</li>
          <li>Distribucion</li>
          </ol>`;
          cartaccess = document.getElementById("welcome");
          cartaccess.innerHTML = accesslevels;
          break;
        case "Seguridad":
            // code block
            //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
            var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
            <ol>
            <li>Cafeteria</li>
            <li>Oficina Administrativa</li>
            <li>Mantenimiento</li>
            <li>Dotacion</li>
            <li>Seguridad</li>
            <li>Salon</li>
            <li>patio</li>
            <li>Terraza</li>
            <li>Reparacion</li>
            <li>Distribucion</li>
            </ol>`;
            cartaccess = document.getElementById("welcome");
            cartaccess.innerHTML = accesslevels;
            break;
        case "Fabricacion":
              // code block
              //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
              var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
              <ol>
              <li>Cafeteria</li>
              <li>Oficina Administrativa</li>
              <li>Mantenimiento</li>
              <li>Dotacion</li>
              <li>Fabricacion</li>
              <li>Salon</li>
              <li>patio</li>
              <li>Terraza</li>
              <li>Reparacion</li>
              <li>Distribucion</li>
              </ol>`;
              cartaccess = document.getElementById("welcome");
              cartaccess.innerHTML = accesslevels;
              break;
        case "Administracion":
                // code block
                //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
                var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
                <ol>
                <li>Cafeteria</li>
                <li>Oficina Administrativa</li>
                <li>Tesoreria</li>
                <li>Dotacion</li>
                <li>Mantenimiento</li>
                <li>Salon</li>
                <li>patio</li>
                <li>Terraza</li>
                <li>Reparacion</li>
                <li>Distribucion</li>
                </ol>`;
                cartaccess = document.getElementById("welcome");
                cartaccess.innerHTML = accesslevels;
                break;
        case "Desarrollo":
                  // code block
                  //console.log("Puedes acceder a " +" Sala de reuniones"+" oficina Principal"+ " caja fuerte");
                  var accesslevels=`<p>Bienvenido(a)   ${usuario} podras acceder a:</p>
                  <ol>
                  <li>Cafeteria</li>
                  <li>Oficina Administrativa</li>
                  <li>Desarrollo</li>
                  <li>Dotacion</li>
                  <li>Mantenimiento</li>
                  <li>Salon</li>
                  <li>patio</li>
                  <li>Terraza</li>
                  <li>Reparacion</li>
                  <li>Distribucion</li>
                  </ol>`;
                  cartaccess = document.getElementById("welcome");
                  cartaccess.innerHTML = accesslevels;
                  break;

        // code block
    }


    contador = 0;
  } else {
    alert(
      "Por favor revise su nombre de usuario, contraseña y/o acceso. Tiene " +
        (4 - contador) +
        " intento(s)."
    );
    contador++;
    if (contador == 5) {
      alert(
        "Por su seguridad el ingreso se ha desabilitado. En 30 segundos se volverá a habilitar."
      );
      document.getElementById("botonIngresar").classList.add("desabilitar");
      setTimeout(() => {
        document
          .getElementById("botonIngresar")
          .classList.remove("desabilitar");
        contador = 0;
      }, 30000);
    }
  }
}

function verificarUsuario(usuario,  password, auxiliar) {
  var bandera = false;
  var resultado = [];
  if (auxiliar) {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i][0] == usuario.toString() &&  usuarios[i][1] == password.toString()) {
        bandera = true;
        resultado[0] = bandera;
        resultado[1] = usuarios[i][2];
      }
    }
    return resultado;
  } else {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i][0] == usuario.toString()) {
        bandera = true;
      }
    }
    return bandera;
  }
}

function crearUsuario() {
  var usuario = usuarioRegistro.value;
  var ingreso = selectRegistro.value;
  var password = passwordRegistro.value;
  var usuarioNuevo = [];

  var verificacion = verificarUsuario(usuario, password, false);

  if (usuario == "" || ingreso == "Seleccione la opción del acceso" || password == "") {
    alert(
      "Recuerde que todos los datos son obligatorios."
    );
  } else if (verificacion) {
    alert("Este usuario ya está creado. Intente con otro nombre.");
  } else {
    alert("Usuario Registrado con éxito");
    usuarioNuevo = [usuario, password, ingreso];
    usuarios.push(usuarioNuevo);
    document.getElementById("usuarioRegistro").value = "";
    document.getElementById("selectRegistro").value = "";
    document.getElementById("passwordRegistro").value = "";
  }
}
