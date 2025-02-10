/* Замыкание - способ, с помощью которого функция может запоминать 
лексическую область и иметь доступ к переменным из функции, 
которая уже выполнилась */

function createLogger() {
    let logArray = [];

    return {
        log: function(message) {logArray.push(message);},

        getLogs: function() {
            for (let i = 0; i < logArray.length; i++) {
                console.log(logArray[i]);
            }
        },
    }
}

const logger = createLogger();
logger.log("Какое-то сообщение.");
logger.log("Ещё одно сообщение.");
logger.log("Тоже сообщение.");

console.log("Лог сообщений:");
logger.getLogs();

