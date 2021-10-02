

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


// if (document.documentElement.clientWidth <= 767) {
//    headerBlock.classList.add('display-none');
//    mainBlock.style.paddingLeft = "0vw";
// }
// } else {
//    headerBlock.classList.remove('display-none');
//    mainBlock.style.paddingLeft = "15vw";
// }


// burgerBtn.onclick = function() {
//    if(navBlock.style.display == "flex") {
//        navBlock.style.display = 'none'
//        burgerBtn.classList.remove('rotation');
//        whiteFill.style.display = 'none';
//    } else {
//        navBlock.style.display = 'flex'
//        whiteFill.style.display = 'block';
//        burgerBtn.classList.add('rotation');
//    }
// }

// const whiteFill = document.querySelector("#white_fill");
// whiteFill.onclick = function () {
//    navBlock.style.display = 'none'
//    whiteFill.style.display = 'none'
//    burgerBtn.classList.remove('rotation');
// }

const headerBlock = document.querySelector("#head");
const burgerBtn = document.querySelector("#head > div.burger");
const arrowBurger1 = document.querySelector("#head > div.burger.main_flex_column.flex__jcontent_center > div > svg:nth-child(1)");
const arrowBurger2 = document.querySelector("#head > div.burger.main_flex_column.flex__jcontent_center > div > svg:nth-child(3)");

burgerBtn.onclick = function(e) {
   if (headerBlock.style.left != 0 + "vw") {
      headerBlock.style.left = 0 + "vw";
      arrowBurger1.classList.add('rotate-arrow');
      arrowBurger2.classList.add('rotate-arrow');
   } else {
      headerBlock.style.left = -65 + "vw";
      arrowBurger1.classList.remove('rotate-arrow');
      arrowBurger2.classList.remove('rotate-arrow');
   }
   
  
}
