var mergeAlternately = function(word1, word2) {
    let result = "";
    const limit = word2.length >= word1.length ? word2.length : word1.length;
    let index = 0;
    while(index < limit){
        result+= word1[index]??"";
        result+=word2[index]??"";
        index++;
    }
    console.log(result);
    return result;
}

const word1 = "ab";
const word2 = "pqrs";

mergeAlternately(word1, word2);