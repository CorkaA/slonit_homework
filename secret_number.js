function getRandomNum(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function findSecretNum(minNum, maxNum, secretNum) {   
    let possibleNum = Math.floor((maxNum + minNum) / 2); 
    while (secretNum != possibleNum) {
        possibleNum = Math.floor((maxNum + minNum) / 2);
        console.log("Компьютер 2: Пробую число " + possibleNum + ".");

        if (possibleNum > secretNum) {
            console.log("Компьютер 1: Меньше!");
            console.log("");
            maxNum = possibleNum - 1;
        }
        else if (possibleNum < secretNum) {
            console.log("Компьютер 1: Больше!");
            console.log("");
            minNum = possibleNum + 1;
        }        
    }    
    console.log("Компьютер 1: Угадал!");      
    console.log("");
    console.log("Игра окончена.");   
}

const minNum = 1;
const maxNum = 100;
const secretNum = getRandomNum(minNum, maxNum);

console.log("");
console.log("Два компьютера играют друг с другом:");
console.log("Компьютер 1 загадал число: " + secretNum + ".");
console.log("Компьютер 2 пробует угадать.");
console.log("");

findSecretNum(minNum, maxNum, secretNum);





