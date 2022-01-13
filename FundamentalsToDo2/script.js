// Countdown

function countDown(number) {
    let array = []

    for (let i = number; i > 0; i--) {
        array.push(i)
    }
    console.log("How long is this array? :", array.length)
    return array
}

console.log(countDown(9))

// Print and Return

function printAndReturn(array) {
    console.log(array[0])
    return array[1]
}
console.log(printAndReturn([3, 28]))

// First Plus Length

function firstPlusLength(array) {
   if (typeof array[0] != "number") {
       return "This is not a number"
   } else {
       sum = array[0] + array.length
       return sum
   }
}
console.log("Correct", firstPlusLength([6, 10, 5, 7, 2]))
console.log("If first value is Boolean: ", firstPlusLength([false, 7, 8, 3, 0]))
console.log("If first value is string: ", firstPlusLength(["Brian", 5, 9, 33]))

// 
