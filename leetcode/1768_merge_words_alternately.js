/*
* A função deve mesclar as palavras de maneira alternada
 */
var mergeWordsAlternately = function(word1, word2) {
    // Early return em caso de ambas palavras vazias
    if(!word1 && !word2) return "";

    // Define índice para a iteração e seu limite, definido pela maior palavra
    let result = "";
    const limit = word2.length >= word1.length ? word2.length : word1.length;
    let index = 0;

    while(index < limit){
        // Só adiciona a letra se existir algo no índice
        result+= word1[index]??"";
        result+=word2[index]??"";
        index++;
    }
    
    console.log(result);
    return result;
}

const word1 = "ab";
const word2 = "pqrs";

mergeWordsAlternately(word1, word2);
mergeWordsAlternately("","");