function solution(cadena, m, n){
    let original = cadena;
    let turnos = 0;
    let actual = cadena;
    console.log(actual);
    while(true){
        let moveM = actual.slice(-m);
        actual = moveM + actual.slice(0, -m);
        console.log(actual);
        turnos++;

        if(actual == original){
            break;
        }

        let moveN = actual.slice(-n);
        actual = moveN + actual.slice(0, -n);
        console.log(actual);
        turnos++;

        if(actual == original){
            break;
        }
    }


    return turnos;
}


let cadena = "abcdef";
let m=2;
let n=3;
console.log(solution(cadena,m,n));