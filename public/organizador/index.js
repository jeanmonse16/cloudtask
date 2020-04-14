const Organizador = document.getElementById('organizador')

window.onload = () => {
    $.ajax(
        '../../Session.php',
        {
            success: async function(data) {
              console.log('AJAX call was successful!', data);
              if(data === '0'){
                  Organizador.style.display = 'none'
                  swal.fire('info', 'Debes iniciar sesión', 'info')
                  setTimeout(() => location.assign('../login'), 1000)
              }

              await TaskListData('../../Session.php')
              await EventListData('../../Session.php')
              TaskListBoxDo()
            },
            error: function() {
              alert('There was some error performing the AJAX call!');
            }
         }
      )
}

//fetching de datos
const TaskListBox = document.getElementById('añadir')
let TaskData, EventData

const TaskListData = (url) => {
    return new Promise((resolve, rejected) => {
        $.ajax(
            url,
            {
                success: async function(data) {
                  console.log('AJAX call was successful!');
                  TaskData = $.parseJSON(data)
                  resolve(data)
                  console.log(TaskData)
                },
                error: function() {
                  alert('There was some error performing the AJAX call!');
                  rejected('There was some error performing the AJAX call!')
                }
            }
        )
    
    })
}

const EventListData = (url) => {
  return new Promise((resolve, rejected) => {
      $.ajax(
          url,
          {
              success: async function(data) {
                console.log('AJAX call was successful!');
                EventData = $.parseJSON(data)
                resolve(data)
                console.log(TaskData)
              },
              error: function() {
                alert('There was some error performing the AJAX call!');
                rejected('There was some error performing the AJAX call!')
              }
          }
      )
  
  })
}


const TaskListBoxDo = () => {
   for(var i = 0; i < TaskData.length; i++){
       box = document.createElement('div')
       input1 = document.createElement('input')
       input1.type = 'text'
       input1.value = TaskData[i].fecha_entrega
       box.appendChild(input1)
       input2 = document.createElement('input')
       input2.type = 'text'
       input2.value = TaskData[i].title
       box.appendChild(input2)
       input3 = document.createElement('input')
       input3.type = 'text'
       input3.value = TaskData[i].content
       box.appendChild(input3)
       input4 = document.createElement('input')
       input4.type = 'button'
       input4.value = 'Modificar'
       input4.class = 'boton'
       box.appendChild(input4)
       input5 = document.createElement('input')
       input5.type = 'button'
       input5.value = 'Eliminar'
       input5.class = 'boton'
       box.appendChild(input5)
       TaskListBox.appendChild(box)
   }
}


//tasks section
const TASKDATE = document.getElementById('fechaTarea')
const TASKTITLE = document.getElementById('nombreTarea')
const TASKDESCRIPTION = document.getElementById('descripcionTarea')
const TASKBUTTON = document.getElementById('agregarTarea')

//events section

const EVENTDATE = document.getElementById('fechaEvento')
const EVENTTITLE = document.getElementById('nombreEvento')
const EVENTDESCRIPTION = document.getElementById('descripcionEvento')
const EVENTBUTTON = document.getElementById('agregarEvento')

//validación

const textValidator = (element) => {
  if(element == null || element.length == 0 || /^\s+$/.test(element)){
      swal.fire("Error", "Debes ingresar un texto", "error")
      return 0
  }else{
      return 1
  }
}

const dateValidator = (date) => {
    AÑO = '', MES = '', DIA = ''

    if(date.value.length !== 10){
      swal.fire('Error', 'ingrese una fecha válida', 'error')
      return 0
    }

    for(var i = 0; i < date.value.length; i++){
        console.log(i + ':' + date.value.charAt(i))
        if(i === 4 && date.value.charAt(i) !== '-'){
            swal.fire('Error', 'El formato de fecha válido es AAAA-MM-DD', 'error')
            return 0
        }
        if(i === 7 && date.value.charAt(i) !== '-'){
          swal.fire('Error', 'El formato de fecha válido es AAAA-MM-DD', 'error')
          return 0
        }
        
        if(i < 4){
            AÑO += date.value.charAt(i)

        }
        if(i > 4 && i < 7){
            MES += date.value.charAt(i)
        }
        
        if(i > 7){
            DIA += date.value.charAt(i)
        }
    }

    parseInt(AÑO)
    var año_actual = new Date().getFullYear()
    console.log(año_actual + ': ' + AÑO)
    if(AÑO < año_actual){
        swal.fire('Error', 'Ingresa un año válido', 'error')
        delete AÑO
        return 0
    }

    parseInt(MES)
    if(MES < 0 || MES > 13){
        swal.fire('Error', 'Ingresa un mes válido', 'error')
        delete MES
        return 0
    }
    

    parseInt(DIA)
    if(DIA < 0 || DIA > 32){
      swal.fire('Error', 'Ingresa un día válido', 'error')
      delete DIA
      return 0
    }

    return 1
}

const sendTaskData = () => {
  const DATA = [TASKDATE.value, TASKTITLE.value, TASKDESCRIPTION.value]
  
  function onSuccess() {
      Swal.fire('Éxito', 'Se registro tu petición', 'success')
      }
  function onError(message){
      swal.fire('Error', message, 'error')
  }

  $.ajax({
      async: false,
      type: "POST",
      url: "../../index.php",
      data: {
          task: DATA
            },
      success: function(data) {
              onSuccess()
              console.log(data)
      },
      error: () => {
          onError('ocurrio un error al enviar los datos, por favor intenta de nuevo')
      }
  })
  console.log("datos enviados")
}

const sendEventData = () => {
  const DATA = [EVENTDATE.value, EVENTTITLE.value, EVENTDESCRIPTION.value]
  
  function onSuccess() {
      Swal.fire('Éxito', 'Se registro tu petición', 'success')
      }
  function onError(message){
      swal.fire('Error', message, 'error')
  }

  $.ajax({
      async: false,
      type: "POST",
      url: "../../index.php",
      data: {
          event: DATA
            },
      success: function(data) {
              onSuccess()
              console.log(data)
      },
      error: () => {
          onError('ocurrio un error al enviar los datos, por favor intenta de nuevo')
      }
  })
  console.log("datos enviados")
}

const Taskvalidator = () => {

  let textInputs = [TASKDATE.value, TASKTITLE.value, TASKDESCRIPTION.value]
  for(var i = 0; i < textInputs.length; i++){
      let correctInput = textValidator(textInputs[i])
      if(!correctInput){
          return 0
      }
  }

  const correctDate = dateValidator(TASKDATE)
  if(!correctDate){
    return 0
  }

  console.log('validación aprobada')
  
  sendTaskData()
}

const Eventvalidator = () => {

  let textInputs = [EVENTDATE.value, EVENTTITLE.value, EVENTDESCRIPTION.value]
  for(var i = 0; i < textInputs.length; i++){
      let correctInput = textValidator(textInputs[i])
      if(!correctInput){
          return 0
      }
  }

  const correctDate = dateValidator(EVENTDATE)
  if(!correctDate){
    return 0
  }

  console.log('validación aprobada')
  
  sendEventData()
}

//enviar datos de las nuevas tareas

const TASKClick = () => TASKBUTTON.addEventListener('click', Taskvalidator)
const EVENTClick = () => EVENTBUTTON.addEventListener('click', Eventvalidator)

TASKClick()
EVENTClick()