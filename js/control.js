

// Реализация информационного табло

const info = document.querySelector("#info");
const infoBox = document.querySelector("#info_box");
info.onclick = function () {
    infoBox.classList.toggle('open');
};




//! Реализация кнопки scrollStart (возвращение на начало страницы)

const scrollStart = document.querySelector("#scroll-start")

window.onscroll = function() {
   if (window.pageYOffset >= "400") {
       scrollStart.style.display = 'block'
    } else {
       scrollStart.style.display = 'none'
    }
}
scrollStart.onclick = function() {
   window.scrollTo(0, 0)
}


