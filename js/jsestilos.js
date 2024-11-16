function cambiarColor(id, cambio){
    document.getElementById(id).style.background=cambio;
}

function cambiarLetra(id, cambio){
    document.getElementById(id).style.fontFamily=cambio;
}

function sumar(){
    document.getElementById('resultado').innerHTML=parseInt(document.getElementById('numero1').value)+parseInt(document.getElementById('numero2').value);
}

function agregarElemento(){
    document.getElementById('idmenu').innerHTML +='<li>Nueva Numero</li>';
}

function ocultarBoton(){
    document.getElementById('button').style.display='none';
}

function background(id, cambio){
    document.getElementById(id).style.background=cambio;
}