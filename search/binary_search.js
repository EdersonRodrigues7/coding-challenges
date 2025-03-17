function binarySearch(arr, target){
    // Array vazio ou com 1 item
    if(!arr.length) return null;
    if(arr.length === 1) 0;

    // Declara variáveis como "Ponteiros" do array, no início e no final
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        // Pega o índice médio da amostra analisada
        const mid = Math.round((left + right) / 2);
        // Verifica se encontrou o item nesse índice ou se é maior/menor
        // Atualiza os ponteiros de acordo
        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] > target){
            right = mid;
        } else {
            left = mid;
        }
    }

    return null;
}

const arr = [1,2,3,5,7,9,12,18,25,28,32,41,55,63,77,88,91,94,102];

console.log(binarySearch(arr, 25));