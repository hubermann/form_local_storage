window.onload = init;

function init() {
    //formulario
    var button = document.getElementById("procesar");
    button.onclick = saveInfo;
                
    
}
function addTodoToDOM(value) {

    var datos = document.getElementById("datos");
    var todo = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "todo");
    span.innerHTML = value;
    todo.appendChild(span);
    datos.appendChild(todo);
    return false;
    
}
function saveInfo() {

    var fecha = new Date();
    var marca_vehiculo = document.getElementById("marca_vehiculo").value;
    var modelo_vehiculo = document.getElementById("modelo_vehiculo").value;
    var marca_neumatico = document.getElementById("marca_neumatico").value;
    var modelo_neumatico = document.getElementById("modelo_neumatico").value;
    var estado_neumatico = document.getElementById("estado_neumatico").value;
  
    var nuevo_dato = {'marca_vehiculo': marca_vehiculo, 'modelo_vehiculo': modelo_vehiculo, 'marca_neumatico': marca_neumatico, 'modelo_neumatico': modelo_neumatico, 'estado_neumatico': estado_neumatico, "fecha": fecha };

    
    if(modelo_vehiculo.length ===0){
        notificar("error", "Debe ingresar un modelo de vehiculo");
    }
    else if(marca_neumatico.length ===0){
        notificar("error", "Debe ingresar una marca de neumaticos");
    }
    else{
        var key = "datos_"+localStorage.length;
        localStorage.setItem(key, JSON.stringify(nuevo_dato));
        
        notificar('success', "Guardado!");
        document.getElementById("marca_vehiculo").value="";
        document.getElementById("modelo_vehiculo").value="";
        document.getElementById("marca_neumatico").value="";
        document.getElementById("modelo_neumatico").value="";
        document.getElementById("estado_neumatico").value="";
    }
    
}
function notificar(tipo, mensaje) {

    var div_mensaje = document.getElementById("mensaje");
    var mensajes = document.getElementById("mensajes");
    mensajes.setAttribute("class", tipo);
    mensajes.innerHTML = mensaje;
    
    clearNotificacion();
}
function clearNotificacion(){

    setTimeout(function(){mensajes.innerHTML ="";mensajes.setAttribute("class", "");},3000);
}