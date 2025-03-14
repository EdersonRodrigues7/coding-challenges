Number.prototype.reverse = function(){
    const minRange = 2**31 * -1;
    const maxRange = 2**31 -1;
    const base = 10; // 10 because the numerical base is ten
    let currentNumber = this; //123 -> 12 -> 1
    let acc = 0; // 0 -> 3 -> 32
    
    while(true){
        const rest = currentNumber % base; // -> 3 -> 2 -> 1 O módulo (%) representa o resto da divisão entre os números passados
        const division = Math.trunc(currentNumber / base); // -> 12.3||12 -> 1.2||1 -> 0.1||0
        acc = (acc*base) + rest; // 3 -> 32 -> 321 Aqui fazemos uma multiplicação para colocar o número na sua casa decimal adequada
        currentNumber = division; // 12 -> 1 -> 0
        
        if(acc >= maxRange || acc < minRange) return 0;
        if(currentNumber === 0) return acc;
    }
}

var reverse = function(x) {
    return x.reverse();
};

console.log(reverse(123456789));