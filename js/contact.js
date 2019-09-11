// PopUp
const btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
   
    

function abrirVentana(){
    overlay.classList.add('active');
    popup.classList.add('active');
};

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});



















// VALIDACIONES
function limit(element)
{
    var max_chars = 20

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
function limit_tel(element)
{
    var max_chars = 10

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

function validateForm()
{

    let nombre = document.myForm.fnombre;
    let correo = document.myForm.fcorreo;
    let rb = document.myForm.fradio;
    let telefono = document.myForm.ftelefono;
    let comentario = document.myForm.fcomentario;
    
    
    if(nombre.value.length < 2){
        alert('El nombre ingresado es muy corto.')
        return false;
    }
    else if (nombre.value.length > 20) {
        alert('El nombre ingresado es demasiado largo.')
        return false;
    }
    else if(correo.value.length < 5){
        console.log("Correo no valido.")
        return false;
    }
    else if(!isNaN(telefono)){
        alert('Este teléfono no es un número.')
        return  false;
    }
    else if (telefono.value.length < 10 ) {
        alert('El teléfono ingresado es muy corto.')
        return false;
    }
    else if(comentario.value.length < 5){
        alert("Comentario muy corto.")
        return false;
    }
    else if(rb.value.length = 0){
        alert("Seleccione un Tipo de persona.")
        return false;
    }

    /* Poblado de datos */

    const popUpPharp = document.querySelectorAll('.contenedor_datos p')

    popUpPharp[0].innerHTML=`<b>Nombre: </b> ${nombre.value}`
    popUpPharp[1].innerHTML=`<b>Correo: </b>${correo.value}`
    popUpPharp[2].innerHTML=`<b>Tipo persona: </b>${rb.value}`
    popUpPharp[3].innerHTML=`<b>Teléfono: </b>${telefono.value}`
    popUpPharp[4].innerHTML=`<b>Comentario: </b>${comentario.value}`

    abrirVentana();
    return false;
}