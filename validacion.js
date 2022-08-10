function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded',()=>{
    const boton = document.querySelector('#regBtn');
    
    boton.addEventListener('click', (event) => {
      console.log('click')
     event.preventDefault();
    const passwordInput1 = document.querySelector(' #password1');
    const passwordInput2 = document.querySelector('#password2');
    const checkbox = document.querySelector ('#terminos');
    const inputs = document.getElementsByClassName('form-control')
    
    console.log (inputs)
    
    if (!checkbox.checked|| Array.from(inputs).some (input =>{ return input.value ==''})){
        console.log('check')
       showAlertError()
    }else if ( passwordInput1.value.length >= 6 && passwordInput1.value == passwordInput2.value){
    console.log('pass')
    showAlertSuccess()
    }else{
      showAlertError()
    }
  })
  })
