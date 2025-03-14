function dede(str){
    const arr = str.split("");
    let result = "";
    for(let i= arr.length-1; i >=0; i--){
        result += arr[i];
    }
    return result;
}

function outro(str){
    let result = "";
    if(!str || str.length < 2 || typeof str !== "string"){
        return str;
    }

    for (let i = (str.length - 1); i >= 0; i--) {
       result += str[i];         
    }
    return result;
}

// console.log(dede("ederson santos pereira rodrigues"));
// console.log(outro(1315656));

function mergeDede(arr1, arr2){
    const result = [];

    // comparar items no mesmo indice em cada array e popular primeiro o menor 

    return result;
}