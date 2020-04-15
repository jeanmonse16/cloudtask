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
        },
        error: () => {
            swal.fire('Error','ocurrio un error al enviar los datos, por favor intenta de nuevo', 'error')
        }
    })
}


setTimeout(function(){
    window.open("../inicio/index.html");
    window.close();
},9000);