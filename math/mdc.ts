/**
 * Máximo divisor comum (Greatest Common Divisor)
 */
class MDC {
    public static calculate(a: number, b: number): number
    {
        // B monitora o resto da divisão e, enquanto for diferente de zero, A recebe o valor anterior de B
        while(b !==0){
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    public static calculateRecursive(a: number, b: number): number
    {
        // Caso base: resto zero
        if(b === 0) {
            return a;
        }
        // Chama a própria função, passando o resto da divisão no lugar de B e B no lugar de A
        return this.calculateRecursive(b, a%b);
    }

    public static calculateMultiple(nums: number[]): number
    {
        if(nums.length <= 0) return 0;
        if(nums.length === 1) return nums[0];
        
        let result = nums[0];

        for(let i=1; i < nums.length; i++){
            result = this.calculate(result, nums[i]);
            if(result === 1){
                return result;
            }
        }

        return result;
    }
}

export default MDC;

/**
Outras abordagens

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
 */