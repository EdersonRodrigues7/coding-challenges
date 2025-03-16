/**
 * Dado o array ordenado e sem repetições "nums" encontrar os dois números que, multiplicados, resultam em "x" 
 * e cuja soma entre eles dê o menor valor possível
 */
function findShortestMultipliers(nums,x){
    if(nums.length <= 1) return [0,0];
    
    const verified = new Map();

    for(let i = 0; i < nums.length; i++){
        // Obtém o multiplicador desejado para resultar em X
        const target = x / nums[i];
        // Se já existir no Map, significa que temos os 2 números que resultam em X e a função pode retornar
        if(verified.has(target)){
            return [target, nums[i]];
        }
        // Armazena o número atual como chave e o multiplicador desejado como valor
        verified.set(nums[i], target);
    }

    return [0,0];
}

const product = 90;
const arr = [1,3,6,9,15,18,30,90];
console.log(findShortestMultipliers(arr, product));

module.exports = {findShortestMultipliers};