//array para almacenar los nombres ingresados
let amigos=[];

//Función para agregar amigos a la lista
function agregarAmigo() {
    //Captura el nombre ingresado por el usuario
    let nombreAmigo = document.getElementById('amigo').value;

    //Valida el campo vacio
    if (nombreAmigo === ""){
        alert('ERROR: POR FAVOR INSERTA UN NOMBRE');
        return;

    // Valida que no de dupliquen los nombres ingresados
    }  if (amigos.includes(nombreAmigo)) {
        alert('ERROR: ESTE NOMBRE YA FUE INSERTADO');
        return;

    // Se agrega el array al arreglo que almacena los nombres
    } else {
        amigos.push(nombreAmigo);

    limpiarCampo();
    actualizarLista();
        
    }  
    return;

}

//Función que actualiza la lista de amigos
function actualizarLista(){
    //Obtiene el elemento de la lista de amigos
    let lista = document.getElementById('listaAmigos');
    //limpia la lista existente
    lista.innerHTML ="";

    //Recorre el array con un bucle y crea elemento de lista <li> para cada titulo
    for(let i=0; i <amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

 }

 //Funcín para sortear al amigo secreto
 function sortearAmigo(){

    //Valida que haya amigos en la lista para sortear
    if(amigos.length === 0){
        alert('ERROR: NO HAY AMIGOS AMIGOS DISPONIBLES PARA SORTEAR');
        return;
    }

    //Genera indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    //Obtiene el nombre del amigo secreto
    let amigoSorteado = amigos[indiceAleatorio];
    //Muestra el resultado del amigo secreto
    let resultadoAmigo = document.getElementById('resultado');
    resultadoAmigo.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    //Oculta la lista al dar el resultado del amigo secreto
    let ocultarlista = document.getElementById('listaAmigos').style.display = "none";
 }

 // Función que limpia el campo de entrada despues de agregar un nombre
function limpiarCampo(){
    document.getElementById('amigo').value = '';
}