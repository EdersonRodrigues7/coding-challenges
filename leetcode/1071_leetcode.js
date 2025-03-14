/* 
A função tem como objetivo encontrar a maior substring comum que divide ambas as strings str1 e str2. 
Em outras palavras, ela busca a maior string que pode ser repetida para formar tanto str1 quanto str2. 
Se não houver tal substring, a função retorna uma string vazia.
*/
function gcd(_greater, _shorter){
    let greater = _greater;
    let shorter = _shorter;
    let gcd = greater;
    let rest = greater;

    while(rest > 0){
        rest = greater % shorter;
        greater = shorter;
        gcd = rest > 0 ? rest : shorter;
        shorter = rest;
    }

    return gcd;
}

function greatestCommonDivisorOfStrings(str1, str2){
    // Se a junção das strings não é igual, 
    // significa que elas não são formadas pelas mesmas substrings
    if(str1 + str2 !== str2 + str1) return "";
    
    const [greater, shorter] = str1.length >= str2.length ? [str1.length, str2.length] : [str2.length, str1.length];
    const gcd = gcd(greater, shorter);
    
    const result = str1.substring(0, gcd);
    console.log(result);
    return result;    
}

greatestCommonDivisorOfStrings("ABCABC", "ABC");
greatestCommonDivisorOfStrings("ABABAB", "ABAB");
greatestCommonDivisorOfStrings("LEET", "CODE");
greatestCommonDivisorOfStrings("ALGOALGOALGOALGOALGOALGOALGOALGO", "ALGOALGOALGOALGO");