

// Реализация информационного табло

const info = document.querySelector("#info");
const infoBox = document.querySelector("#info_box");
info.onclick = function () {
    infoBox.classList.toggle('open');
};




//! Реализация кнопки scrollStart (возвращение на начало страницы)

const scrollStart = document.querySelector("#scroll-start")
scrollStart.style.display = 'none';
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



//! Реализация бургер-меню
const burgerBtn = document.querySelector("body > header > .burger")
const headerBlock = document.querySelector("body > header");
const mainBlock = document.querySelector("body > main");

if (document.documentElement.clientWidth <= 767) {
   headerBlock.classList.add('display-none');
   mainBlock.style.paddingLeft = "0vw";
}
// } else {
//    headerBlock.classList.remove('display-none');
//    mainBlock.style.paddingLeft = "15vw";
// }


burgerBtn.onclick = function() {
   if(navBlock.style.display == "flex") {
       navBlock.style.display = 'none'
       burgerBtn.classList.remove('rotation');
       whiteFill.style.display = 'none';
   } else {
       navBlock.style.display = 'flex'
       whiteFill.style.display = 'block';
       burgerBtn.classList.add('rotation');
   } 
}

const whiteFill = document.querySelector("#white_fill");
whiteFill.onclick = function () {
   navBlock.style.display = 'none'
   whiteFill.style.display = 'none'
   burgerBtn.classList.remove('rotation');
}
