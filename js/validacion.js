function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
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

<<<<<<< HEAD
    if (!contra1 || !contra2 || !email|| !nombre || !apellido || contra1 !== contra2 || contra1.lenght < 6){
        showAlertError();
    }

    else {

        showAlertSuccess()

    }
=======
    if (!contra1 || !contra2 || !email|| !nombre || !apellido || !terminos || contra1 !== contra2 || contra1.lenght < 6){


    if (contra1 !== contra2 && contra1.lenght < 6 ) {
        showAlertError();
    }

>>>>>>> 8a72e268ffed214e74a2694f0d1b63c0ac98ada8
}