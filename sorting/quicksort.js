// Função auxiliar para retornar números menores que a referência
function lowerNumbers(arr, pivot){
    const result = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i] < pivot){
            result.push(arr[i]);
        }
    }
    return result;
}

// Função auxiliar para retornar números maiores que a referência
function higherNumbers(arr, pivot){
    const result = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i] > pivot){
            result.push(arr[i]);
        }
    }
    return result;
}

// Ordenação utilizando recursão e um item do array como base a cada segmentação(particionamento)
function quicksort(arr){
    // Caso base
    if(arr.length <= 1) return arr;
    // Definição do item de referência
    const pivotIndex = Math.round(arr.length/2);
    const pivot = arr[pivotIndex];
    // Separação de números menores e maiores que a referência
    const left = lowerNumbers(arr, pivot);
    const right = higherNumbers(arr, pivot);
    // Chamada recursiva para ordenar cada segmentação
    return quicksort(left).concat([pivot]).concat(quicksort(right));
}

const items = [3,8,1,2,14,9,7,25,6,17];
console.log(quicksort(items));