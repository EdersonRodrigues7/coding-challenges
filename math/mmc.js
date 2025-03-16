const prime = require('./prime_number');
function mmc(a,b){
    let result = null;
    let multiplier = 1;

    while(result === null){
        if(a*multiplier === b*multiplier){
            result = a*multiplier;
        }
        multiplier++;
    }

    return result;
}

// a * b / mdc(a,b);