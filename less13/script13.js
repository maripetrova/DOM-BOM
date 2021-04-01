// document.getElementById("id") - получить узел элемента с соответствующим id
// document.getElementsByClassName("class") - получить HTML-коллекцию из тегов с соответствующем классом
// document.getElementsByTagName("img") - получить HTML-коллекцию из тегов с соответствующих тегов (узлов элемента)
// document.getElementsByName("name") - получить HTML-коллекцию из тегов с соответствующем атрибутов name


let btn = document.getElementById("knopka");
console.log(btn);
// let cards = btn.previousElementSibling.childNodes;
let cards = document.getElementsByClassName("item");
console.log(cards);

let blocks = document.getElementsByClassName("div");
console.log(blocks);

let btns = document.getElementsByClassName("button");
console.log(btns);

btn.onclick = function (event) {
    console.log(event);
}
btn.onmousedown = function (event) {
    console.log("Mouse down");
}
btn.onmouseup = function (event) {
    console.log("Mouse up");
}
btn.onmouseover = event => {
    event.target.style.background = "red";
}
btn.onmouseout = function (event) {
    this.style.background = null;
}
