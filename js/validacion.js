function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function showPasswordError() {
    document.getElementById("alert-password").classList.add("show");
}

function textoVacio() {
    if ($('#textoejemplo').val().length == 0) {
      alert('Ingresar texto');
      return false;
    }
  }
  
  function verificarcontrasena(){
    pwd1 = document.getElementById('password1');
    pwd2 = document.getElementById('password2');
    alert.pass = document.getElementById('password2');

     if (pwd1.value != pwd2.value){
        showPasswordError();
        return false;
    }
  }