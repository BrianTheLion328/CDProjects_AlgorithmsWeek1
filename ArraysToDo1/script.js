// Push Front

function pushToFront(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i];
    }
    array[0] = value;
    return array
}

console.log(pushToFront([4, 12, 20, 1, 18], 5))
console.log(pushToFront([1], 9))

const myArray = [1, 2, 3, 4, 5, 6]
console.log(pushToFront(myArray, 0))

console.log(myArray)

// Pop Front

function popFront(arr) {
    var firstValue = arr[0]; // The value we will return
    // Loop through the array - starting at index 1
    for (var i = 1; i < arr.length; i++) {
        // i = 1: arr[0] = arr[1] -> arr[i-1] = arr[i]
        arr[i-1] = arr[i];
    }
    arr.pop(); // Remove the last value
    return firstValue;
}
testArray = [4, 9, 2, 5, 1, 8];
console.log("TEST POP FRONT: ", popFront(testArray))
console.log(testArray)

// Insert At

// given an array, index, and value (array, index, value) insert the value into the
// given index without built in array methods.
// for example: ([3, 8, 0, 2], 1, 6)
// in the above example you want to add the value of 6 into
// the array where the index value is, in this case 1, so
// the current value of array[1] is 8, insert the 6 there so that
// array[1] = 6, then move the values after that down 1 each. So
// now 8 is at array[2]
const sampleArray = [13, 20, 67, 45, 10]

function insertAt(array, index, value) {
    // in the array locate where the given index is
    for (let i = array.length - 1; i >= index; i--) {
        // start backwards and loop through each element and change the value
        // to the value of the one before it until you reach the index
        // when you reach the index, assign it the value of "value"
        array[i + 1] = array[i]
    }
    array[index] = value;
    return array  // for console logging purposes
}

console.log("INSERT AT: ", insertAt(sampleArray, 1, 17))
console.log("INSERT AT part 2: ", insertAt([25, 14, 7, 99, 50, 2, 13, 41, 66], 4, 75))


// BONUS CHALLENGES


// REMOVE AT
// Given an array and a array index, remove and return the value at that given index
// then pop the final value off the array
function removeAt(array, index){
    //create variable that we can return equal to the value at the index we are looking for
    valueWeAreLookingFor = array[index];
    // create a loop that begins on spot after the index given and begin pushing values up from there,
    // getting rid of the value at the given index in the process
    for (let i = index + 1; i <= array.length; i++){
        array[i - 1] = array[i]
    }
    // pop the final value so we dont have 2 repeat values at the end after moving them all up one spot.
    array.pop()

    return valueWeAreLookingFor
}
removeAtTestArray = [89, 7, 0, 22, 50, 43, 21]
console.log("REMOVE AT: ", removeAt(removeAtTestArray, 4))
console.log(removeAtTestArray)


const randomNumber = Math.ceil(Math.random() * 10)
console.log("RANDOM NUMBER: ", randomNumber)
