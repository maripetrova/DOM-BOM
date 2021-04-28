/*
*   .querySelector - Получить первый подходящий тег с соответствующим css - селектором
*   .querySelectorAll - Получить список(NoList) тегов с соответствующим css - селектором
* */

const spec = document.querySelector("[data-bg]");
/*
*   .getAttribute("attr") - получить значение преденного атрибута
*   .setAttribute("attr", "val") - добавить элементу атрибут (1 аргумент) и значение атрибута (2 аргумент)
* */
spec.style.background = spec.getAttribute("data-bg");

const container = document.querySelector(".box");
const items = document.querySelectorAll(".pic-item");

items.forEach(item =>item.setAttribute("data-bg", getRGB(50)));
items.forEach(item => {
    item.style.background = item.getAttribute("data-bg");
    item.onclick = e => {
        container.style.background = item.getAttribute("data-bg")
    }
});
container.style.background = items[0].getAttribute("data-bg");



