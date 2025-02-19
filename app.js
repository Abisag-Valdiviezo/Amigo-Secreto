// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === ""){
        alert('ERROR: POR FAVOR INSERTA UN NOMBRE');
        return;

    }  if (amigos.includes(nombreAmigo)) {
        alert('ERROR: ESTE NOMBRE YA FUE INSERTADO');
        return;

    } else {
        amigos.push(nombreAmigo);
       // console.log(nombreAmigo);
        //console.log(amigos); 

    limpiarCampo();
    actualizarLista();
        
    }  
    return;

}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ="";

    for(let i=0; i <amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

 }

 function sortearAmigo(){

    if(amigos.length === 0){
        alert('ERROR: NO HAY AMIGOS AMIGOS DISPONIBLES PARA SORTEAR');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    //console.log(amigoSorteado);
    let resultadoAmigo = document.getElementById('resultado');
    resultadoAmigo.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    let ocultarlista = document.getElementById('listaAmigos').style.display = "none";
 }

function limpiarCampo(){
    document.getElementById('amigo').value = '';
}