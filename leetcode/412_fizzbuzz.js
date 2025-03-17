/*
* 
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 */
function fizzBuzz(n){
    const result = [];
    
    for(let i=1; i <= n; i++){
        // Verifica a divisibilidade por 3 e por 5
        const divisibleBy3 = i % 3 === 0;
        const divisibleBy5 = i % 5 === 0;
        
        // Atribui o valor no array de acordo com as regras
        if(divisibleBy3){
            divisibleBy5 ? result.push("FizzBuzz") : result.push("Fizz");
            continue;
        }

        divisibleBy5 ? result.push("Buzz") : result.push(i.toString());       
    }

    return result;
}

console.log(fizzBuzz(15));