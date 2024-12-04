/* Given an array, 
the size of the array, 
and an integer X, 
calculate the smallest subarray whose sum is greater than X. */


function solution(arr, n, x) {
    let arrAux = arr;
    arrAux.sort((a, b) => b - a);
    let suma = 0;
    let contador = 0;
    for (let i = 0; i < arrAux.length; i++)
    {
        suma += arrAux[i];
        contador++;
        if (suma > x){
            break;
        }
    }

    return contador;
}



let arr = [1, 4, 45, 6, 10, 19];
let n = arr.length;
let x = 51;

console.log(solution(arr, n, x)); // Salida: 3