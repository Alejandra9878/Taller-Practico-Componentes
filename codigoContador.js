

//   En caso de que no conozcas js. este metodo  es una funcion
//   recibe un valor y retorna un objeto con una propiedad valor que tiene el valor recibido
 
function valorInicial(valorInicial) {
    return { valor: valorInicial };
}


// Funciones para incrementar y decrementar los contadores
function incrementarContador(contador) {
    contador.valor++;
    console.log('Contador:', contador.valor);
}

function decrementarContador(contador) {
    contador.valor--;
    console.log('Contador:', contador.valor);
}

// Llamadas de ejemplo para los métodos con objetos contadores
let contador1 = valorInicial(2)
let contador2 = valorInicial(0)


incrementarContador(contador1); // Contador: 3
decrementarContador(contador1); // Contador: 2
incrementarContador(contador2); // Contador: 1
incrementarContador(contador2); // Contador: 2
decrementarContador(contador2); // Contador: 1

//Este codigo es sencillo. Se definen dos contadores como objetos con una propiedad valor. 
//Se definen dos funciones incrementarContador y decrementarContador que reciben un contador y modifican su propiedad valor. 
//Se hacen llamadas de ejemplo a estos métodos con los contadores definidos. 
//Al ejecutar el código se obtiene la salida esperada.

//Adicionalmente podriamos tener ambos contadores en un solo arreglo
let contadores = [{ valor: 0 }, { valor: 0 }];

//asi la unica diferencia es que tendriamos que acceder a los contadores con indices. 
incrementarContador(contadores[0]); // Contador: 1
decrementarContador(contadores[0]); // Contador: 0
incrementarContador(contadores[1]); // Contador: 1
incrementarContador(contadores[1]); // Contador: 2
decrementarContador(contadores[1]); // Contador: 1
//El resultado es el mismo que en el caso anterior.
//En este caso, se definen los contadores como elementos de un arreglo.