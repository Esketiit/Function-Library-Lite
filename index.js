//Osgood, Brian, Joey

// Question 1
function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        const element = arr[i]
        callback(element)
    }
}

arr = [7, 3, 5, 4, 7]
// let func = function (num) {
//     console.log(num + 1)
// }

// myEach(arr, func)
// console.log(arr)

//Question 2
function myMap(arr, callback){
    let array = []
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i]
        array.push(callback(element))
    }
    return array
}


// arr2 = myMap(arr, func)
// console.log(arr)
// console.log(arr2)

// console.log(arr2.map(func))

//Question 3
function myFilter(arr, callback){
    let array = [];

    for(let i = 0; i < arr.length; i++){
        const element = arr[i]
        if (callback(element)) {
            array.push(element)
        }
    }

    return array
}


let isEven = function (num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

// console.log(myFilter(arr, isEven))
// console.log(arr.filter(isEven))

//Question 4
function myFind(arr, callback){
    let found = false
    for(let i = 0; i < arr.length; i++){
        const element = arr[i]
        if (callback(element) && found === false) {
            found = true
            return element
        }
    }
}

console.log(arr.find(isEven))
console.log(myFind(arr, isEven))

//Bonus
function myReduce(arr, callback, num = 0){
    let sum = 0;

    for(let i = num; i < arr.length; i++){
        const element = arr[i]
        sum += element
    }
    return sum
}

console.log(myReduce(arr, isEven))
