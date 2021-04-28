const fruits = ["Apple", "Melon", "Orange", "Appricot"];

let list = document.createElement("ul");
fruits.forEach(f => {
    const item = document.createElement("li");
    item.innerText = f;
    list.appendChild(item)
});
document.body .appendChild(list);

const inp = document.body.firstElementChild;
const inp2 = inp.nextElementSibling;

const addFr = () => {
    const item = document.createElement("li");
    item.innerText = inp.value;
    let position =  +inp2.value ? +inp2.value - 1 : +inp2.value
    // list.appendChild(item);
    list.insertBefore(item, list.childNodes[position].nextElementSibling);
    inp.value = "";
    inp2.value = "";
}
