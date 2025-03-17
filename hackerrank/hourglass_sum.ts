/*
    Find the greates sum within the given matrix, following the hourglass pattern:
    1 2 3
      4  
    5 6 7
    The above sum is 28. The function should verify all the hourglass pattern in the matrix and return only the greatest sum. 
 */
function hourglassSum(matrix: number[][]) {
    let result: number | null = null;
    // Utiliza for loops aninhados para iterar sobre a matriz
    // Inicia no índice 1 porque as bordas não podem formar um "hourglass"
    for(let row=1; row < matrix.length - 1; row++){
        for(let column=1; column < matrix[row].length - 1; column++){
            // Soma dos valores na linha anterior
            const previousRow = matrix[row-1][column-1] + matrix[row-1][column] + matrix[row-1][column+1];
            // Soma dos valores na linha seguinte
            const nextRow = matrix[row+1][column-1] + matrix[row+1][column] + matrix[row+1][column+1];
            // Soma do hourglass
            const sum = previousRow + matrix[row][column] + nextRow;
            // Se ainda não houver resultado ou se a soma for maior que o resultado anterior
            if(result === null || sum > result){
                // Atribui a soma dos valores ao resultado
                result = sum;
            }
        }
    }
    
    return result;
}

const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

const arr2 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

const arr3 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
];

console.log(hourglassSum(arr3));