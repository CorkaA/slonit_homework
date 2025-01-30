function mySlice(arr, start = 0, end = arr.length) {
    let resultArray = [];

    for (let index = start; index < end; index++) {
        resultArray.push(arr[index]);
    }

    return resultArray;
}

function myIndexOf(arr, item, from) {
    for (let index = from; index < arr.length; index++) {
        if (arr[index] === item) {
            return index;
        }
    }
    return -1;
}

function myIncludes(arr, item, from) {
    for (let index = from; index < arr.length; index++) {
        if (arr[index] === item) {
            return true;
        }
    }
    return false;
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let start = 2; end = 7;
let item = 8; from = 2;

console.log("");
console.log("Тестирование методов масcива.");
console.log("");

console.log("slice()");
console.log("Мой метод:");
console.log(mySlice(testArray, start, end));
console.log("Готовый метод:");
console.log(testArray.slice(start, end));
console.log("");

console.log("indexOf()");
console.log("Мой метод:");
console.log(myIndexOf(testArray, item, from));
console.log("Готовый метод:");
console.log(testArray.indexOf(item, from));
console.log("");

console.log("includes()");
console.log("Мой метод:");
console.log(myIncludes(testArray, item, from));
console.log("Готовый метод:");
console.log(testArray.includes(item, from));
console.log("");