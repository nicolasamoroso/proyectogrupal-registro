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
    
    let contra1 = document.getElementById(password1).value

    let contra2 = document.getElementById(password2).value

    let email = document.getElementById(email).value

    let nombre = document.getElementById(nombre).value

    if (contra1 !== null && email !== null && nombre !== null ){

        if ( contra1 !== contra2 && contra1.lenght < 6 ) {
            showAlertError();
        }


    }


}