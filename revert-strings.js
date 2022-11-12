/*
CODING CHALLENGE: Revert string with special characters
Input: A random string formed by alphanumeric and special characters
Output: The modified input string, reverting only the alphanumeric characters, but keeping the special characters indexes
*/

// Setup: Input example and RegEx validation
// const inputString = prompt("Enter the test string:");
const reg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
const reg2 = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

// Auxiliar function to get each special char and its index
const getSpecialCharsIndex = function(str){
    let foundIndexes = [];
    for(let i=0; i<reg2.length; i++){
        if(str.indexOf(reg2[i]) > -1){
            foundIndexes.push({char: reg2[i], position: str.indexOf(reg2[i])});
        }
    }
    let sortedArray = foundIndexes.sort(function(x, y){return x.position - y.position});
    return sortedArray;
}

// Auxiliar function to revert the string (can be done by using Array.revert too)
const revertString = function(str){
    let reverted = '';
    for(let i=(str.length - 1); i>=0; i--){
        reverted += str[i];
    }
    return reverted;
}

// Main function that receives the input and modifies the string
const revertWithSpecialChars = function(input){
    console.log(`Input String: ${input}`);
    // Filter special chars and their indexes
    const indexes = getSpecialCharsIndex(input);
    console.table(indexes);
    // Remove special chars
    const cleanInput = input.replaceAll(reg, '');

    // Reverts the input string and turn it into an Array
    let revertedString = revertString(cleanInput);
    let revertedArray = revertedString.split('');

    // Iterates through each special char and puts into the reverted array
    for(let i=0; i<indexes.length; i++){
        revertedArray.splice(indexes[i].position, 0, indexes[i].char);
    }

    // Transform the array back into a string without blank spaces
    const result = revertedArray.join('').replaceAll(' ', '');

    console.log(`Final String: ${result}`);
}

/* 
 RESULTS
 cF#4k@grf+65 -> 56#fr@gk4+Fc
 Jh3d#4k&@lop+65%3 -> 356p#ol&@k4d+3h%J
 LM3*bW@ouY$HG -> GHY*uo@Wb3$ML
*/

module.exports = { revertWithSpecialChars };