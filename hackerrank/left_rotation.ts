/* 
 * Rotate the given array to the left by N indexes (rotation). 
 * The item tha reaches the left border should reapper at the end of the array
 * Receiving the array [1,2,3,4,5] and the rotation 2 should return [3,4,5,1,2]
*/
function rotateLeft(arr: number[], rotation: number): number[]
{
    const length = arr.length;
    
    // Edge cases
    if(length === 0 || length === rotation) return arr;

    // Make sure that N is within the array length
    rotation = rotation % length;
    if(rotation === 0) return arr;

    // Slice the array to get the first part (from rotation index to the end) and the remaining elements
    let start = arr.slice(rotation);
    let end = arr.slice(0, rotation);

    return [...start, ...end];
}

function rotateLeftInPlace(arr: number[], rotation: number): number[]
{
    // Remove the rotated items from the start
    const removed = arr.splice(0,rotation);

    // Add the rotated items to the end
    arr.push(...removed);

    return arr;
}