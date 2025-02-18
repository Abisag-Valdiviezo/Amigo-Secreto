// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === ""){
        alert('ERROR: POR FAVOR INSERTA UN NOMBRE')
        return;
    } else {
        amigos.push(nombreAmigo);
        console.log(nombreAmigo);
        console.log(amigos);
    return nombreAmigo;
   }
   
}
