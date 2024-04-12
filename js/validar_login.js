const usuario = document.getElementById("inputUsuario");
const password = document.getElementById("inputPassword");
const form = document.getElementById("form");
var usuarioActivo;

form.addEventListener("submit",e=>{
    e.preventDefault();

    if(usuario.value =="admin" && password.value == "1234"){
        location.href="../mazo_de_cartas.html";
        localStorage.setItem("usuarioActivo", usuario.value);
    }else{
        alert("Datos inválidos, por favor inténtalo de nuevo.");
    }
});


