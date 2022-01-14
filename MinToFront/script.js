/* Given an array of values, move the lowest element to the arrays front, shifting backward
any elements previously ahead of it. Do not otherwise change the order.
Given [4,2,1,3,5] change it to [1,4,2,3,5] and return it. Do not use built-in
array methods such as shift, unshift, pop, push, etc.  */

/*
1) Find the smallest element
    -Set a minimum variable, min index
    -Loop throught the array, update min if current element is smaller and keep track of index
2) Shift all elements left of the smallest to the right
3) array[0] = min
*/

function minToFront(array) {
    let minIndex = 0;
    let minElement = array[minIndex];

    for (let i = 0; i < array.length; i++) {
        if (minElement > array[i]) {  // starting at array[0], if the current index has a value smaller than the minElement then reassign it
            minIndex = i;
            minElement = array[minIndex]
        }
    }
    // shift everyhting left of minElement to the right
    for (let index2 = minIndex; index2 > 0; index2--) {
        array[index2] = array[index2 - 1];
    }
    // now put the min element to the front of the array
    array[0] = minElement

    return array;
}

console.log(minToFront([4,2,1,3,5]))


// copied this from Sal's demonstration in an attempt to try to understand what he did, why
// he did it and remember how to solve similar problems in the future. This is not my work, this is Sal's solution.
