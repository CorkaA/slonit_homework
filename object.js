function sumOfNumFields(object) {
    let sumNum = 0;
    for (key in object) {
        if (typeof(object[key]) === "number") { 
            sumNum += object[key];
        }
    }
    return sumNum;
}

function namesOfNumFields(object) {
    let namesNum = [];
    for (key in object) {
        if (typeof(object[key]) === "number") { 
            namesNum.push(key);
        }
    }
    return namesNum.sort((a, b) => object[b] - object[a]);
}


let testObject = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

console.log("");
console.log("Сумма числовых полей объекта:");
console.log(sumOfNumFields(testObject));
console.log("");
console.log("Названия числовых полей объекта в порядке убывания:");
console.log(namesOfNumFields(testObject));
console.log("");