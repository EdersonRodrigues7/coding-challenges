function countdown(n){
    if(n<1) return []; // condição de parada
    const countArray = countdown(n-1); // chamada recursiva com alteração do índice
    countArray.unshift(n); // redução da array sob a qual se está iterando
    return countArray;
}

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
    if(endNum<startNum) return [];
    const rangeArray = rangeOfNumbers(startNum, (endNum - 1));
    rangeArray.push(endNum);
    return rangeArray;
};

// console.log(rangeOfNumbers(3, 10));

/*
Dada uma área retangular, encontrar o maior lado possível para que a área fique dividida em quadrados iguais.
Exemplo: Um retângulo de 50x25 pode ser dividido em 2 quadrados de 25 - é a maior divisão que mantém os quadrados todos iguais.
 */
function getLargerSquareFromRectangle(rectangle) {
    // Pega o maior e o menor lado
    const larger = rectangle[0] > rectangle[1] ? rectangle[0] : rectangle[1];
    const smaller = rectangle[0] < rectangle[1] ? rectangle[0] : rectangle[1];
    // Pega o resto da divisão entre eles (área a ser dividida)
    const rest = larger % smaller;
    console.log(`Maior: ${larger}, Menor: ${smaller}, Resto: ${rest}`);
    // Se o resto for zero, significa que a área retangular já está completamente quadriculada
    if(rest === 0) return smaller;
    // Chama a função com o "resto" sendo um dos lados
    return getLargerSquareFromRectangle([rest, smaller]);
}

console.log(getLargerSquareFromRectangle([100,200]));