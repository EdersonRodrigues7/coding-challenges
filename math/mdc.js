/**
 * Máximo divisor comum (Greatest Common Divisor)
 */
// Usando o while loop e operador módulo
function gcd(a,b){
    // Define o maior e o menor número inicial e as variáveis pertinentes
    let [greater, shorter] = a >= b ? [a,b] : [b,a];
    let gcd = greater;
    let rest = greater;

    // Dvidide o maior pelo menor até que o resto seja zero (algoritmo de euclides)
    while(rest > 0){
        rest = greater % shorter;
        greater = shorter;
        gcd = rest > 0 ? rest : shorter;
        shorter = rest;
    }

    // Retorna o mdc
    return gcd;
}

// Usando while loop e subtração
function euclid(a,b){
    // Subtrai o menor do maior número até que eles sejam iguais
    // Quando atingir a igualdade, significa que aquele número divide tanto A quanto B
    while(a !== b){
        if(a > b){
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
}

// Usando recursão
function mdc(a,b){
    // Caso base: resto zero
    if(b === 0) {
        return a;
    }
    // Chama a própria função, passando o resto da divisão no lugar de B e B no lugar de A
    return mdc(b, a%b);
}

console.log(gcd(7,49));
console.log(euclid(121,11));
console.log(mdc(8,140));