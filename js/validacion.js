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
    
    let contra1 = getElementById(password1).value

    let contra2 = getElementById(password2).value

    if (contra1 !== contra2 && contra1.lenght < 6 ) {
        showAlertError();
    }

}