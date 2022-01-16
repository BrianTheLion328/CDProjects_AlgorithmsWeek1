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

function rotate(array, shiftByNum){
    // make a shortcut to speed up your solution. Instead of just rotating x-number of times (the shifyByNum),
    // divide the shiftByNum by the array.length and rotate a remaining number of times. So if your array is
    // 5 values long, and your shift number is 204, instead of rotating 204 times, just use the modelo (%) to
    // divide down into the lowest leftover number and rotate THAT many times. so if your shift number is 5, then
    // 204 % 5 will leave a remainder of 4, so then you just need to rotate 4 times.

     // NOTE: if the shiftbyNumber divided by the modelo = 0, just return array bc it will end up being the same.

    let rotateNumber = shiftByNum % array.length
    let firstIndex = array[0]
    // now rotate your array "rotateNumber" times.
    // if statement if rotateNumber is greater than 0.
    if (rotateNumber === 0){
        return array
    } else {
        for (let i = 0; i > array.length; i++){
            
        }
    }

}
