/*
function nya() {
    "use strict" // строгий режим
    const a = "Hello A";
    let b = "Hello B";
    var c = "Hello C"; //Свойство глобольного объекта
    d = "Hello D"; //Свойство глобольного объекта
    var c = "Hello Petya!"; // переопределить можно
    let b = "Hello Mad World!" // переопределить нельзя
    a = "Pep"
    console.log(a,b,c,d);
}
nya();
*/

const getNumber = function (ma = 100, mi = 0) {
    return Math.floor(Math.random() * (ma - mi + 1) + mi)
}
const tbl = document.body.firstElementChild.nextElementSibling.firstElementChild;
console.log(tbl);
let n = 5;
const addCell = function () {
    if (tbl.childNodes.length) {
        let row = tbl.lastElementChild;
        if (row.childNodes.length < n) {
            row.innerHTML += `<td>${getNumber(100, 0)}</td>`
        } else {
            tbl.innerHTML += `<tr><td>${getNumber(100, 0)}</td></tr>`
        }
    } else {
        tbl.innerHTML = `<tr><td>${getNumber(100, 0)}</td></tr>`
    }
}

