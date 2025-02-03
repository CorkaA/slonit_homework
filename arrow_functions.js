const myFilter = (array, callback) => {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNum = myFilter(testArray, num => num % 2 === 0);
const numAreLarger = myFilter(testArray, num => num > 3);

console.log("");
console.log("Исходный массив:");
console.log(testArray);
console.log("");
console.log("Фильтрация чётных чисел в массиве:");
console.log(evenNum); // [2, 4]
console.log("");
console.log("Фильтрация чисел больше 3:");
console.log(numAreLarger); // [4, 5]
console.log("");




  
  

