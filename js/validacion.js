
                                //---Success Functions---//
function showAlertSuccess() {
    if (document.getElementById("alert-danger").classList.contains("show"))
        removeAlertError();
    if (document.getElementById("alert-espacios").classList.contains("show"))
        removeAlertEspacios();    
    document.getElementById("alert-success").classList.add("show");
    setTimeout(removeAlertSuccess, 5000);
}

function removeAlertSuccess() {
    document.getElementById("alert-success").classList.remove("show");
}


                                //---Error Functions---//
function showAlertError() {
    if (document.getElementById("alert-success").classList.contains("show"))
        removeAlertSuccess();
    if (document.getElementById("alert-espacios").classList.contains("show"))
        removeAlertEspacios();    
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(removeAlertError, 5000);
}

function removeAlertError() {
    document.getElementById("alert-danger").classList.remove("show");
}


                               //---Warning Functions---//
function showAlertWarning() {
    if (document.getElementById("alert-success").classList.contains("show"))
        removeAlertSuccess();
    else if (document.getElementById("alert-danger").classList.contains("show"))
        removeAlertError();
    document.getElementById("alert-espacios").classList.add("show");
    setTimeout(removeAlertEspacios, 5000);
}

function removeAlertEspacios() {
    document.getElementById("alert-espacios").classList.remove("show");
}


                                    //---Check---//
function check() {
    const contra1 = document.getElementById('password1').value
    const contra2 = document.getElementById('password2').value
    const email = document.getElementById('email').value
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('nombre').value
    const terminos = document.getElementById("terminos").checked;
    const noValido = / /;

    if (!nombre  || !apellido || !email || !contra1 || !contra2  || !terminos 
        || contra1 !== contra2 
        || contra1.length < 6){
        showAlertError();
    }
    else if (noValido.test(contra1) || noValido.test(contra2))
        showAlertWarning();
    else
        showAlertSuccess();
}
