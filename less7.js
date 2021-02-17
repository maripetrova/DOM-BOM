let words = ["Цикорий", "Колено", "Ананас", "Куст", "Микроб", "Печенье", "Мультиварка", "Аниме", "Сила", "Монитор", "Маска", "Енот", "Пальма", "Фрукты", "Семья", "Пес", "Ням-ням"]

const getNumber = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
const startGame = function() {
    console.log("Угадай слово");
    let n = getNumber(words.length);
    console.log(words[n]);
}
