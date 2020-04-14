const button = document.getElementById('boton')
const NAME = document.getElementById('nombre')
const LASTNAME = document.getElementById('apellido')
const USERNAME = document.getElementById('username')
const EMAIL = document.getElementById('correo')
const PASSWORD = document.getElementById('contraseña')

//proceso de validacion

const textValidator = (element) => {
    if(element == null || element.length == 0 || /^\s+$/.test(element)){
        swal.fire("Error", "Debes ingresar un texto", "error")
        return 0
    }else{
        return 1
    }
}

const passwordValidator = (password) => {
    
	if(password.length >= 8){		
			var mayuscula = false;
			var minuscula = false;
			var numero = false;
			var caracter_raro = false;
				for(var i = 0; i<password.length;i++){
					if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
						mayuscula = true;
					}
					else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
						minuscula = true;
					}
					else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
						numero = true;
					}
					else{
						caracter_raro = true;
					}
				}
				if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true){
					return true;
				}
		}
	return false;
}

const sendData = () => {
    const DATA = [NAME.value, LASTNAME.value, USERNAME.value, EMAIL.value, PASSWORD.value]
    
    function onSuccess() {
        Swal.fire({
            title: '<strong>Se ha registrado<u> exitosamente</u></strong>',
            icon: 'success',
            html:
              `<h1> <b>${DATA[0]}</b> </h1></br>` +
              `bienvenido a CloudTask </br>` ,
    
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Genial!',
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
            data: DATA
              },
        success: function(data) {
            if(data === 'DB Query Failed'){
                onError('Ingresaste un nombre de usuario o correo ya registrado, por favor ingresa otro')
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

    let textInputs = [NAME.value, LASTNAME.value, USERNAME.value, EMAIL.value, PASSWORD.value]
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

    let correctPassword = passwordValidator(PASSWORD.value)
    if(!correctPassword){
        swal.fire('Error', "Debes ingresar una contraseña válida")
        return 0
    }

    sendData()
}

const onClick = () => button.addEventListener('click', validator)
onClick()