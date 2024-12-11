
function pares (){
    for (let i = 1; i<= 100; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
pares();


function cuadrado (size){
    for (let i = 1; i<= size; i++){
        let line="";
        for (let j = 1; j<= size; j++){
            line += "*"
           }
           console.log (line)
}
}
cuadrado(5)




function cuadrado(size){
    for (let i = 1; i<= size; i++){
        let line="";
        for (let j = 1; j<= i; j++){
            line += "*"
           }
           console.log (line)
}
}
cuadrado(10)






function saludar(nombre) {
    alert ("hola" + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}
procesarEntradaUsuario(saludar)