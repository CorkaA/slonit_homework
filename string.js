function firstLetterInUpperCase(str) {
    let first = str[0].toUpperCase();
    return first + str.slice(1);
}

function shorteningLongString(str, len) {
    const symb = ",.!?: ;";

    if (str.length > len) {
        let shortStr = str.slice(0, len);
        let lastIndex = -1;

        for (let i = 0; i < symb.length; i++) {
            let curIndex = shortStr.lastIndexOf(symb[i])
            if (curIndex > lastIndex) {
                lastIndex = curIndex;
            }
        }
        shortStr = str.slice(0, lastIndex);
        return shortStr + "...";
    }
    else {
        return str;
    }
}

function subStringSearch(str, subStr) {
    return (str.includes(subStr));
}



let strTest = "котики очень милые, особенно когда мурлыкают или лежат животиком вверх";
let subStrTest = "милые, особенно когда мурлыкают";
let normalLength = 30;

console.log("");
console.log("Строка с заглавной буквы:");
console.log(firstLetterInUpperCase(strTest));
console.log("");
console.log("Укорачивание длинной строки:");
console.log(shorteningLongString(strTest, normalLength));
console.log("");
console.log("Поиск подстроки в строке:");
console.log(subStringSearch(strTest, subStrTest));
console.log("");