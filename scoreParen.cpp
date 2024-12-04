/*
    Given a array of Parens, return the score of the array
    Following the next rules:
        Substring s=() -> 1
        s1s2 -> 1+1 -> 2
        (s) -> 2*s
        Example:
        ((()())(()()))
        Score: 2(2(1+1)+2(1+1))= 16
*/

#include <iostream>
#include <string.h>
#include <stack>
using namespace std;
struct Paren{
    int posI;
    int posF;
    int puntaje;
};

int solution(char* string){

    stack<int> pila;
    stack<int> pilaAux;
    int aux;
    int sum = 0; 
    int puntaje=0;
    int tam=strlen(string);

    for(int i=0; i<tam; i++){
        char c = string[i];

        if (c == '('){
            pila.push(0);
        }
        if (c == ')'){
            aux = pila.top();
            if (aux == 0){
                pila.pop();
                pila.push(1);
            }
            if (aux != 0){
                sum=0;
                while(pila.top() != 0){
                    pilaAux.push(pila.top());
                    pila.pop();
                }
                while (!pilaAux.empty())
                {
                    sum+=pilaAux.top();
                    pilaAux.pop();
                }
                pila.pop();
                pila.push(sum*2);
                
            }
        }
    }

    while(!pila.empty())
    {
        puntaje+=pila.top();
        pila.pop();
    }

    return puntaje;
}

int main(){
    char s[]={'(','(','(',')','(',')',')','(','(',')',')','(',')',')'};
    int totalScore=solution(s);
    cout << "SCORE: "<< totalScore << endl;
    return 0;
}