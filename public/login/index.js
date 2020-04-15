const button = document.getElementById('boton')
const EMAIL = document.getElementById('correo')
const PASSWORD = document.getElementById('contraseña')

const textValidator = (element) => {
    if(element == null || element.length == 0 || /^\s+$/.test(element)){
        swal.fire("Error", "Debes ingresar un texto", "error")
        return 0
    }else{
        return 1
    }
}

const sendData = () => {
    const DATA = [EMAIL.value, PASSWORD.value]
    
    function onSuccess() {
        Swal.fire({
            title: '<strong><u> Bienvenido a CloudTask</u></strong>',
            icon: 'success',
            html:
              `<h1> <b>Le deseamos la mejor experiencia posible</b> </h1></br>` ,
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '<a class="fa fa-thumbs-up" href="../organizador/index.html"></i> Genial!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down">OK</i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })
        }
    function onError(message){
        swal.fire('Error', message, 'error')
    }

    $.ajax({
        async: false,
        type: "POST",
        url: "../../index.php",
        data: {
            login: DATA
              },
        success: function(data) {
            if(data === 'DB Query Failed'){
                onError('Credenciales invalidas, por favor intentalo de nuevo')
            }else{
                onSuccess()
                setTimeout(() => location.assign('../organizador/'), 1500)
            }
                console.log(data);
        },
        error: () => {
            onError('ocurrio un error al enviar los datos, por favor intenta de nuevo')
        }
    })
    console.log("datos enviados")
}

const validator = () => {

    let textInputs = [EMAIL.value, PASSWORD.value]
    for(var i = 0; i < textInputs.length; i++){
        let correctInput = textValidator(textInputs[i])
        if(!correctInput){
            return 0
        }
    }

    if (!EMAIL.value.includes('@') && !EMAIL.value.includes('.com')) {
        swal.fire('Error', "Debes ingresar un email válido")
        return 0
    } 

    sendData()
}

const onClick = () => button.addEventListener('click', validator)
onClick()