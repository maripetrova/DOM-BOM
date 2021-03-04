let words = ["Цикорий", "Колено", "Ананас", "Куст", "Микроб", "Печенье", "Мультиварка", "Аниме", "Сила", "Монитор", "Маска", "Енот", "Пальма", "Фрукты", "Семья", "Пес", "Ням-ням"]

const getNumber = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
let hidden = "", space = "";
const startGame = function() {
    console.log("Угадай слово");
    let n = getNumber(words.length);
    console.log(words[n]);
    hidden = words[n];
    space = "";
    for (let i = 0; i < hidden.length; i++) {
        space += "- ";
    }
    console.log(hidden, space);
    document.write(space + "<br><button onclick=\"tryGuess();\">Попробовать</button>");
    document.close();
}
let tryGuess = function () {
    let letter = prompt("Введи букву");
    let test = "";
    for (let i = 0; i < hidden.length; i++) {
        if (letter.toLocaleLowerCase() === hidden[i].toLocaleLowerCase()) {
            test += letter;
        } else {
            test += space[i];
        }
    }
    space = test;
    if (space.toLocaleLowerCase() === hidden.toLocaleLowerCase()) {
        document.write("Ура! Это было слово " + hidden + "<br><button onclick=\"startGame();\">Начать новую игру</button>");
        document.close();
    } else {
        document.write(space + "<br><button onclick=\"tryGuess();\">Угадать букву</button>");
        document.close();
    }
}
