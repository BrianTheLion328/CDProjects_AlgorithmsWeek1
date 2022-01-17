// warmup

// return the average value of an array of unsorted numbers.

function arrayAverage(array){
    let sum = 0
    // if array is empty
    if (array[0] === null){
        return 0;
    }
    for (let i = 0; i < array.length; i++){
        sum = array[i] + sum;
    }
    return sum;
}

console.log("Array Averages: ", arrayAverage([1, 2, 3, 12, 6, 11, 5, 4, 0, 10, 7, 8, 9]))
console.log("averages: ", arrayAverage([]))
