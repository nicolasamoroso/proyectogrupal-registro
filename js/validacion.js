function showAlertSuccess() {
    if (document.getElementById("alert-danger").classList.contains("show"))
        removeAlertError();
    document.getElementById("alert-success").classList.add("show");
    setTimeout(removeAlertSuccess, 5000);
}

function showAlertError() {
    if (document.getElementById("alert-success").classList.contains("show"))
        removeAlertSuccess();
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(removeAlertError, 5000);
}

function removeAlertError() {
    document.getElementById("alert-danger").classList.remove("show");
}

function removeAlertSuccess() {
    document.getElementById("alert-success").classList.remove("show");
}

function check() {
    const contra1 = document.getElementById('password1').value
    const contra2 = document.getElementById('password2').value
    const email = document.getElementById('email').value
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('nombre').value
    const terminos = document.getElementById("terminos").checked;


    if (!nombre || !apellido || !email|| !contra1 || !contra2 || !terminos || contra1 !== contra2 || contra1.length < 6){
        showAlertError();
    }else{
        showAlertSuccess();
    }

    const noValido = / /;
    if (!nombre  || !apellido || !email || !contra1 || !contra2  || !terminos 
        || contra1 !== contra2 
        || contra1.length < 6
        || noValido.test(contra1) || noValido.test(contra2)){
        showAlertError();
    }


}
