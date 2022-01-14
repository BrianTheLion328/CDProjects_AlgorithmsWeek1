// Reverse

/* Given an array, reverse the order of values in-place. The reverse array should have the same
length. Working in-place means you cannot have another array to push into. Move the values in the
array you are given. Do not use built-in array methods like splice() pop() push() etc. */

function reverseArray(array) {
    // Loop through the array - divied by half so you dont re-reverse the array back to the original array.
    for (var i = 0; i < array.length / 2; i++) {
        // Swap values
        var tempVariable = array[i];
        // temp = the value of where the index is right now
        array[i] = array[array.length - 1 - i];
        // now whereever we are, we are saying that index will have its value changed
        // to the value that is located at array.length (4) minus 1 (so now 3), minus the index value.
        array[array.length - 1 - i] = tempVariable;
        // now we are saying the index where the array.length minus 1 minus index will now be
        // changed so that its value is whatever the tempVariable currently is.
    }
    return array;
}

sampleArray = [1,2,3,4];
sampleArray2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

reverseArray(sampleArray)
reverseArray(sampleArray2)

console.log(sampleArray)
console.log(sampleArray2)


// Rotate


