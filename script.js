/*1. Siempre hambriente:
Escribe una función a la quese le asigne un arreglo, y cada vez 
que el valor sea "comida" debería mostrar "delicioso"en la consola. 
Si "comida" no estaba presente en el arreglo, que la consola registre 
"Tengo hambre" una vez.*/

function siempreHambriento(arr){
    let tengoHambre = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == "comida") {
            console.log("delicioso");
            tengoHambre++;
        }
    }
    if(tengoHambre == 0){
        console.log("Tengo hambre")
    }
}
siempreHambriento([1, 2, "comida", 3, true, 4, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);
siempreHambriento([4, 1, 5,"comida", 7, 2])

/*2. Filtro paso alto
Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.*/
function highPass(arr, cutoff) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));

//[6, 8, 10, 9]

/*3. Mejor que el promedio
Dado un arreglo de números, devuelve un recuento de cuántos de los números 
son mayores que el promedio.*/
function betterThanAverage(arr) {
    // calcular el promedio
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    // Contar cuántos valores son mayores que el promedio
    return count;
}
console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9]));
// 4 

/*4. Arreglo invertido
Escribe una función que invierta los valores de un arreglo y 
los devuelva.*/
function reverse(arr) {
    // tu código aquí
    let reversedArray = [];
    for(let i = arr.length -1; i >=0; i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

console.log(reverse(["a", "b", "c", "d", "e"]));
 // esperamos de vuelta ["e", "d", "c", "b", "a"]

/*Arreglo de Fibonacci
Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. 
Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. 
Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, 
si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.*/

function fibonacciArray(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        // Calcular el siguiente número de Fibonacci sumando los dos últimos números en el arreglo
        let nextFib = fibArr[i - 1] + fibArr[i - 2];
        // Agregar el siguiente número de Fibonacci al arreglo
        fibArr.push(nextFib);
    }
    return fibArr;
} 
console.log(fibonacciArray(10)); // Esto mostrará [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] en la consola
