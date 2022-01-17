// Reverse

/* Given an array, reverse the order of values in-place. The reverse array should have the same
length. Working in-place means you cannot have another array to push into. Move the values in the
array you are given. Do not use built-in array methods like splice() pop() push() etc. */

function reverseArray(array) {
    // Loop through the array - divided by half so you dont re-reverse the array back to the original array.
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

    // let rotateNumber = shiftByNum % array.length
    // let firstIndex = array[0]
    // // now rotate your array "rotateNumber" times.
    // // if statement if rotateNumber is greater than 0.
    // if (rotateNumber === 0){
    //     return array
    // } else {
    //     for (let i = 0; i > array.length; i++){
    //     }
    // }

    var newValue = shiftByNum % array.length

    if (newValue > 0) {
        for (var j = newValue; j > 0; j--) {
            var temp = array[0];
            var temp2 = array[0];

            for (var i = 0; i < array.length - 1; i++) {
                temp = array[i + 1];
                array[i + 1] = temp2;
                temp2 = temp;
            }
            array[0] = temp2
        }
        return array;
    } else if (newValue === 0){
        return array
    } else {
        for (var k = newValue; k < 0; k++) {
            var negTempVar = array[array.length - 1];
            var negTempVar2 = array[array.length - 1];

            for (var x = array.length - 1; x > 0; x--) {
                negTempVar = array[x - 1];
                array[x - 1] = negTempVar2;
                negTempVar2 = negTempVar;
            }
            array[array.length - 1] = negTempVar2;
        }
        return array
    }
}

console.log("POSITIVE NUMBER ROTATE: ", rotate( [1, 2, 3, 4, 5], 1) )
console.log("WHEN SHIFT COUNT IS ZERO: ", rotate( [1, 2, 3, 4, 5], 0))
console.log("NEGATIVE NUMBER ROTATE: ", rotate( [1, 2, 3, 4, 5], -1) )

// [ 1, 2, 3, 4, 5]

// i = 0
// temp = 2
// array = [1, 1, 3, 4, 5]
// temp2 = 2

// i = 1
// temp = 3
// array = [1, 1, 2, 4, 5]
// temp2 = 3

// i = 2
// temp = 4
// array = [1, 1, 2, 3, 5]
// temp2 = 4

// i = 3
// temp = 5
// array = [1, 1, 2, 3, 4]
// temp2 = 5

// after line 60
// array = [5, 1, 2, 3, 4]

// FILTER RANGE

// Given an array and MIN and MAX values, retain only the
// array values between MIN and MAX. Work in-place, return
// the array you are given, with values in their original
// order. No built-in array functions.

function filterRange(array, min, max) {
    let indexCounter = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] >= min && array[i] <= max) {
            temp = array[indexCounter]
            array[indexCounter] = array[i]
            array[i] = temp
            indexCounter++
        }
    }
    array.length = indexCounter;
    return array
}
console.log("FILTER RANGE: ", filterRange( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4, 11) );


// CONCAT

/*  create an empty array to put the concated array into
    create a variable that will be your pointer going over each index
    create a while loop that as long as one array has values will keep looping
    as long as that array hasnt ended, keep looping and putting its values into the new array
    do the same for the second array, but make sure that it begins where the first array stopped
    increase your pointer by 1 each time, then return the new array that has been injected with
    the concated values.
*/

function concat(array1, array2){
    newArray = []
    let pointer = 0;
    while (pointer < array1.length || pointer < array2.length){
        if (array1[pointer] != null) {
            newArray[pointer] = array1[pointer]
        }
        if (array2[pointer] != null) {
            newArray[pointer + array1.length] = array2[pointer]
        }
        pointer++
    }
    return newArray;
}
console.log("CONCAT EXAMPLE: ", concat([1, 2, 3, 4], [5, 6, 7, 8]))
