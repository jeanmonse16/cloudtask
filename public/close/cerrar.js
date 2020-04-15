window.onload = () => {
    $.ajax({
        async: true,
        type: "POST",
        url: "../../Session.php",
        data: {
            closeSession: 'close'
              },
        success: function(data) {
            console.log('hola' + data)
            Cerrar()
        },
        error: () => {
            swal.fire('Error','ocurrio un error al enviar los datos, por favor intenta de nuevo', 'error')
        }
    })
}


const Cerrar = () => {
    return setTimeout(function () {
        location.assign("../inicio/index.php");
    }, 9000);
};