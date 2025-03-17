/*
There are n kids with candies. You are given an integer array candies, where each candies[i] 
represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/
var getLargerNumber = function(arr){
    return arr.reduce((acc, current) => current >= acc ? current : acc, 0);
}

var kidsWithCandies = function(candies, extraCandies) {
    const result = [];

    // Verifica qual é maior número de doces
    const reference = getLargerNumber(candies);

    // Adiciona ao resultado somente se a quantidade atual + o bônus é >= à referência
    for(let j=0; j < candies.length; j++){
        result.push(candies[j] + extraCandies >= reference);
    }
    
    console.log(result);
    return result;
}

kidsWithCandies([2,3,6,1,3], 3);
// console.log(getLargerNumber([2,3,5,1,12,3]));