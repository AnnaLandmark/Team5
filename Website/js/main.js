
let index = 1;

let pages = Array.from(document.getElementsByClassName("page"));

pages[index - 1].style.display = "block";

const carousel = (e) => {
let posX = e.clientX;
let viewportCenter = window.innerWidth / 2;
pages.forEach(page => page.style.display = "none");
if (posX > viewportCenter) {
index++;
if (index > pages.length) {
index = 1;
}
} else {
index--;
if (index < 1) {
index = pages.length;
}
}

pages[index - 1].style.display = "block";
}

document.addEventListener("click", carousel);