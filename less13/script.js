// document.getElementById("id") - получить узел элемента с соответствующим id
// document.getElementsByClassName("class") - получить HTML-коллекцию из тегов с соответствующем классом
// document.getElementsByTagName("img") - получить HTML-коллекцию из тегов с соответствующих тегов (узлов элемента)
// document.getElementsByName("name") - получить HTML-коллекцию из тегов с соответствующем атрибутов name

// let btn = document.getElementById("knopka");
// console.log(btn);
// // let cards = btn.previousElementSibling.childNodes;
// let cards = document.getElementsByClassName("item");
// console.log(cards);
//
// let blocks = document.getElementsByClassName("div");
// console.log(blocks);
//
// let btns = document.getElementsByClassName("button");
// console.log(btns);
//
// btn.onclick = function (event) {
//     console.log(event);
// }
// btn.onmousedown = function (event) {
//     console.log("Mouse down");
// }
// btn.onmouseup = function (event) {
//     console.log("Mouse up");
// }
// btn.onmouseover = event => {
//     event.target.style.background = "red";
// }
// btn.onmouseout = function (event) {
//     this.style.background = null;
// }

let slots = ["7", "7", "7"];
const CNT = 3;

const updateSlots = function () {
    for (let i = 0; i < CNT; i++) {
        slots[i] = getNumber(10);
    }
}
const setValues = function() {
    const items = document.getElementsByClassName("item");
    if (slots.length === CNT) {
        slots.forEach((n, index) => {
            items[index].innerText = n;
        })
    }
}
const startGame = function () {
        const block = document.createElement("div");
        block.className = "container";
        document.body.appendChild(block);
        for (let i = 0; i < CNT; i++) {
            const item = document.createElement("div")
            item.className = "item";
            block.appendChild(item);
        }
        setValues();
        const push = document.createElement("button");
        push.className = "btn";
        push.innerText = "PUSH";
        document.body.appendChild(push);
        push.onclick = function (e) {
            updateSlots();
            setValues();
        }
}
/*
    * 1) Проверка на кол-во совпадений
    * 2) Есть изначальный счет - 1000
    *   Есть ставка (input), который запускает игру если не превышет суммы счета, иначе - окно с ошибкой
    *   В зависимости от 1 пенкта меняется счет
    * 3)Кнопка - начать с начала
    * 4) Вести статистику счета
* */
