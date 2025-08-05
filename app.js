
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

/* Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía. */
function agregarAmigo() {
    const input =  document.getElementById("amigo");
    const nombre = input.value.trim();
    if(nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }else{
        amigos.push(nombre) 
        input.value = "";
        document.getElementById("resultado").innerHTML = "";
        mostrarAmigos();
    }
}

/* Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista. */
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    for(let i = 0; i < amigos.length; i++){
       const item = document.createElement("li");
       item.textContent = amigos[i];
       lista.appendChild(item);
    }
}

/* Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado. */

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    
    if(amigos.length === 0){
        alert("No puedes sortear un amigo secreto la lista todavia se encuentra vacia");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()* amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `El amigo secreto es ${nombreSorteado}`
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];

}