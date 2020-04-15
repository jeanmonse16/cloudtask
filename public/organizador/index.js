const Organizador = document.getElementById('organizador')

window.onload = () => {
    $.ajax(
        '../../Session.php',
        {
            success: async function(data) {
              console.log('AJAX call was successful!');
              if(data === '0'){
                  Organizador.style.display = 'none'
                  swal.fire('info', 'Debes iniciar sesión', 'info')
                  setTimeout(() => location.assign('../login'), 1000)
              }

              await TaskListData('../../Session.php')
              await EventListData('../../RandomRequest.php')
              TaskListBoxDo()
              EventListBoxDo()
            },
            error: function() {
              alert('There was some error performing the AJAX call!');
            }
         }
      )
}

//fetching de datos
const TaskListBox = document.getElementById('añadir')
const EventListBox = document.getElementById('añadirE')
const ModificarTaskBox = document.getElementById('modificandoTarea')
const ModificarTaskBoxButton = document.getElementById('modificarTareaExistente')
const ModificarEventBox = document.getElementById('modificandoEvento')
const ModificarEventBoxButton = document.getElementById('modificarEventoExistente')
let TaskData, EventData

let TaskToDelete = []


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
                console.log(EventData)
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
  let Parent = TaskListBox.getElementsByClassName('tareaExistentes')
  while(Parent.length !== 0){
    deletedBox = TaskListBox.lastChild
    TaskListBox.removeChild(deletedBox)
    console.log('borrado hijo:')
    delete deletedBox
   }

   var box, input0, input1, input2, input3, input4, input5
   for(var i = 0; i < TaskData.length; i++){
       box = document.createElement('div')
       box.setAttribute('class', 'tareaExistentes')
       box.setAttribute('id', 'tareaExistentes')

       input0 = document.createElement('input')
       input0.type = 'text'
       input0.value = TaskData[i].id
       input0.setAttribute('class', 'tareaNumero')
       box.appendChild(input0)

       input1 = document.createElement('input')
       input1.type = 'text'
       input1.value = TaskData[i].fecha_entrega
       input1.setAttribute('class', 'tareaFecha')
       box.appendChild(input1)

       input2 = document.createElement('input')
       input2.type = 'text'
       input2.value = TaskData[i].title
       input2.setAttribute('class', 'tareaNombre')
       box.appendChild(input2)

       input3 = document.createElement('input')
       input3.type = 'text'
       input3.value = TaskData[i].content
       input3.setAttribute('class', 'tareaDescripcion')
       box.appendChild(input3)

       input4 = document.createElement('input')
       input4.type = 'button'
       input4.value = 'Modificar'
       input4.className = 'boton'
       input4.setAttribute('name', TaskData[i].id)
       input4.addEventListener('click', (e) => {
           ModificarTaskBox.style.display="block"
           ModificarTaskBoxButton.setAttribute('name', e.target.name)
           onUpdateTask()
       })
       box.appendChild(input4)

       input5 = document.createElement('input')
       input5.type = 'button'
       input5.value = 'Eliminar'
       input5.className = 'boton'
       input5.setAttribute('id', TaskData[i].id)
       input5.addEventListener('click', (e) => {
         console.log(e.target.id)
         TaskRemover(e.target.id)})
       box.appendChild(input5)

       TaskListBox.appendChild(box)
   }
}

const EventListBoxDo = () => {
  let Parent = EventListBox.getElementsByClassName('eventoExistentes')
  console.log(Parent)
  while(Parent.length !== 0){
    deletedBox = EventListBox.lastChild
    EventListBox.removeChild(deletedBox)
    console.log('borrado hijo:')
    delete deletedBox
   }

   var box, input0, input1, input2, input3, input4, input5
   for(var i = 0; i < EventData.length; i++){
       box = document.createElement('div')
       box.setAttribute('class', 'eventoExistentes')
       box.setAttribute('id', 'eventoExistentes')

       input0 = document.createElement('input')
       input0.type = 'text'
       input0.value = EventData[i].id
       input0.setAttribute('class', 'eventoNumero')
       box.appendChild(input0)

       input1 = document.createElement('input')
       input1.type = 'text'
       input1.value = EventData[i].fecha_entrega
       input1.setAttribute('class', 'eventoFecha')
       box.appendChild(input1)

       input2 = document.createElement('input')
       input2.type = 'text'
       input2.value = EventData[i].title
       input2.setAttribute('class', 'eventoNombre')
       box.appendChild(input2)

       input3 = document.createElement('input')
       input3.type = 'text'
       input3.value = EventData[i].content
       input3.setAttribute('class', 'eventoDescripcion')
       box.appendChild(input3)

       input4 = document.createElement('input')
       input4.type = 'button'
       input4.value = 'Modificar'
       input4.className = 'boton'
       input4.setAttribute('name', EventData[i].id)
       input4.addEventListener('click', (e) => {
           ModificarEventBox.style.display="block"
           ModificarEventBoxButton.setAttribute('name', e.target.name)
           onUpdateEvent()
       })
       box.appendChild(input4)

       input5 = document.createElement('input')
       input5.type = 'button'
       input5.value = 'Eliminar'
       input5.className = 'boton'
       input5.setAttribute('id', EventData[i].id)
       input5.addEventListener('click', (e) => {
        console.log(e.target.id)
        EventRemover(e.target.id)})

       box.appendChild(input5)
       EventListBox.appendChild(box)
   }
}

//Eliminar tareas
const TaskRemover = (id) => {
  $.ajax({
    async: true,
    type: "POST",
    url: "../../Session.php",
    data: {
        removeTask: id
          },
    success: async function(data) {
            swal.fire('Información','Se ha eliminado la tarea', 'info')
            console.log(data)
            await TaskListData('../../Session.php')
            TaskListBoxDo()
    },
    error: () => {
        swal.fire('Error','ocurrio un error al enviar los datos, por favor intenta de nuevo', 'error')
    }
})
}

const EventRemover = (id) => {
  $.ajax({
    async: true,
    type: "POST",
    url: "../../Session.php",
    data: {
        removeEvent: id
          },
    success: async function(data) {
            swal.fire('Información','Se ha eliminado el evento', 'info')
            console.log(data)
            await EventListData('../../RandomRequest.php')
            EventListBoxDo()
    },
    error: () => {
        swal.fire('Error','ocurrio un error al enviar los datos, por favor intenta de nuevo', 'error')
    }
})
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
      async: true,
      type: "POST",
      url: "../../index.php",
      data: {
          task: DATA
            },
      success: async function(data) {
              onSuccess()
              console.log(data)
              await TaskListData('../../Session.php')
              TaskListBoxDo()
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
      async: true,
      type: "POST",
      url: "../../index.php",
      data: {
          event: DATA
            },
      success: async function(data) {
              onSuccess()
              console.log(data)
              await EventListData('../../RandomRequest.php')
              EventListBoxDo()
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


//Actualizar data

function ocultarModificarTarea(){
  document.getElementById("modificandoTarea").style.display="none";
}

function ocultarModificarEvento(){
  document.getElementById("modificandoEvento").style.display="none";
}

const updateTaskDate = document.getElementById('modificarFechaTarea')
const updateTaskTitle = document.getElementById('modificarNombreTarea')
const updateTaskDescription = document.getElementById('modificarDescripcionTarea')

const updateTaskInfo = (id) => {
  let textInputs = [updateTaskDate.value, updateTaskTitle.value, updateTaskDescription.value]
  for(var i = 0; i < textInputs.length; i++){
      let correctInput = textValidator(textInputs[i])
      if(!correctInput){
          return 0
      }
  }

  const correctDate = dateValidator(updateTaskDate)
  if(!correctDate){
    return 0
  }

  console.log('validación aprobada')
  
  const DATA = [updateTaskDate.value, updateTaskTitle.value, updateTaskDescription.value]
  DATA.push(id)
  console.log(DATA)
  
  function onSuccess() {
      swal.fire('Éxito', 'Se registro tu petición', 'success')
      }
  function onError(message){
      swal.fire('Error', message, 'error')
  }

  $.ajax({
      async: true,
      type: "POST",
      url: "../../index.php",
      data: {
          updateTask: DATA
            },
      success: async function(data) {
              onSuccess()
              console.log(data)
              await TaskListData('../../Session.php')
              TaskListBoxDo()
      },
      error: () => {
          onError('ocurrio un error al enviar los datos, por favor intenta de nuevo')
      }
  })
  console.log("datos enviados")
}

const onUpdateTask = () => ModificarTaskBoxButton.addEventListener('click', (e) => {
    updateTaskInfo(e.target.name)
    ocultarModificarTarea()
})

const updateEventDate = document.getElementById('modificarFechaEvento')
const updateEventTitle = document.getElementById('modificarNombreEvento')
const updateEventDescription = document.getElementById('modificarDescripcionEvento')


const updateEventInfo = (id) => {
  let textInputs = [updateEventDate.value, updateEventTitle.value, updateEventDescription.value]
  for(var i = 0; i < textInputs.length; i++){
      let correctInput = textValidator(textInputs[i])
      if(!correctInput){
          return 0
      }
  }

  const correctDate = dateValidator(updateEventDate)
  if(!correctDate){
    return 0
  }

  console.log('validación aprobada')
  
  const DATA = [updateEventDate.value, updateEventTitle.value, updateEventDescription.value]
  DATA.push(id)
  console.log(DATA)
  
  function onSuccess() {
      Swal.fire('Éxito', 'Se registro tu petición', 'success')
      }
  function onError(message){
      swal.fire('Error', message, 'error')
  }

  $.ajax({
      async: true,
      type: "POST",
      url: "../../index.php",
      data: {
          updateEvent: DATA
            },
      success: async function(data) {
              onSuccess()
              console.log(data)
              await EventListData('../../RandomRequest.php')
              EventListBoxDo()
      },
      error: () => {
          onError('ocurrio un error al enviar los datos, por favor intenta de nuevo')
      }
  })
  console.log("datos enviados")
}

const onUpdateEvent = () => ModificarEventBoxButton.addEventListener('click', (e) => {
    updateEventInfo(e.target.name)
    ocultarModificarEvento()
})