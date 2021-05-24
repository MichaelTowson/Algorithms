//Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function nToLast(arr, n) {
    if(arr.length - n < 0) {
        return null
    }
    return arr[arr.length-n];
}


//TEST CASES
console.log(nToLast([5,2,3,6,4,9,7], 3)) //to return 4
console.log(nToLast([1,2], 3)) //to return null
console.log(nToLast([5,2,3,6,4,9,7], 4)) //to return 6
console.log(nToLast([5,2,3,6,4,9,7], 5)) //to return 3
console.log(nToLast([1,2,3,5,5,7,10], 1)) //to return 10