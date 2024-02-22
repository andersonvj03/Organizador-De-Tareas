var boton = document.getElementById("btn");

var registro = {
    materia: null,
    fecha: null,
    hora: null,
    tipo: null
}
function crearTarjetas(registro){
    var resultado = document.getElementById("resultado");
    var tarjeta = document.createElement("div");
    var materia = document.createElement("p");
    var fecha = document.createElement("p");
    var hora = document.createElement("p");
    var tipo = document.createElement("p");

    tarjeta.className = "tarjeta";
    materia.textContent ="Materia: "+registro.materia;
    fecha.textContent ="Fecha: "+registro.fecha;
    hora.textContent ="Hora: "+registro.hora;
    tipo.textContent ="Tipo: "+registro.tipo;
    tarjeta.appendChild(materia);
    tarjeta.appendChild(fecha);
    tarjeta.appendChild(hora);
    tarjeta.appendChild(tipo);
    resultado.appendChild(tarjeta);
    
}

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    var materia = document.getElementById("name").value;
    var fecha = document.getElementById("date").value;
    var hora = document.getElementById("time").value;
    var tipo = document.getElementById("tipoTarea").value;
   
    if(!materia || !fecha || !hora || !tipo){
        alert("Materia vacia");
        return;
    }else{
         
    registro.materia = materia;
    registro.fecha = fecha;
    registro.hora = hora;
    registro.tipo = tipo;
    crearTarjetas(registro)
    
}
   
    
})