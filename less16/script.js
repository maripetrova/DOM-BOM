const images = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg"];

const showBox = function (img) {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.style.backgroundImage = `url(${img})`;
    let btn = document.createElement("div");
    btn.innerText = "x";
    box.appendChild(btn);
    btn.onclick = function () {
        box.remove()
    }
    document.body.appendChild(box)
}

window.onload = function () {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("data-src", images[i]);
        items[i].style.backgroundImage = `url(${images[i]})`;
        items[i].onclick = function (e) {
            showBox(e.target.getAttribute("data-src"))
        }
    }
}



