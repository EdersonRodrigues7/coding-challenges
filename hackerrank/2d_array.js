function hourglassSum(arr) {
    let result = null;
    
    for(let i=1; i < arr.length - 1; i++){
        for(let j=1; j < arr[i].length - 1; j++){
            const previousLine = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1];
            const nextLine = arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            const sum = previousLine + arr[i][j] + nextLine;
            if(result === null || sum > result){
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