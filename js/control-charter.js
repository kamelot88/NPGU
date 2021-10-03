
//! Реализация бургер-меню

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


//? Реализация информационного табло

const info = document.querySelector("#info");
const infoBox = document.querySelector("#info_box");
info.onclick = function () {
    infoBox.classList.toggle('open');
};

// Якоря_начало
const tag1 = document.querySelector("#filter > ul > li:nth-child(1) > a");
const tag2 = document.querySelector("#filter > ul > li:nth-child(2) > a");
const tag3 = document.querySelector("#filter > ul > li:nth-child(3) > a");
const tag4 = document.querySelector("#filter > ul > li:nth-child(4) > a");
const tag5 = document.querySelector("#filter > ul > li:nth-child(5) > a");
const tag6 = document.querySelector("#filter > ul > li:nth-child(6) > a");
const tag7 = document.querySelector("#filter > ul > li:nth-child(7) > a");
const tag8 = document.querySelector("#filter > ul > li:nth-child(8) > a");

//! Реализация кнопки scrollStart (возвращение на начало страницы)

const scrollStart = document.querySelector("#scroll-start")
scrollStart.style.display = 'none';

scrollStart.onclick = function() {
   window.scrollTo(0, 0)
}


window.onscroll = function () {
  if (window.pageYOffset >= "400") {
    scrollStart.style.display = 'block'
 } else {
    scrollStart.style.display = 'none'
 }
   let scrollTop = window.pageYOffset;
   if (scrollTop >= 0 && scrollTop < 688) {
    tag1.classList.add('scroll');
    tag2.classList.remove('scroll');
    tag3.classList.remove('scroll');
    tag4.classList.remove('scroll');
    tag5.classList.remove('scroll');
    tag6.classList.remove('scroll');
    tag7.classList.remove('scroll');
    tag8.classList.remove('scroll');
  }
  if (scrollTop >= 688 && scrollTop < 2156) {
    tag1.classList.remove('scroll');
    tag2.classList.add('scroll');
    tag3.classList.remove('scroll');
    tag4.classList.remove('scroll');
    tag5.classList.remove('scroll');
    tag6.classList.remove('scroll');
    tag7.classList.remove('scroll');
    tag8.classList.remove('scroll');
  }
  if (scrollTop >= 2156 && scrollTop < 2822) {
   tag1.classList.remove('scroll');
   tag2.classList.remove('scroll');
   tag3.classList.add('scroll');
   tag4.classList.remove('scroll');
   tag5.classList.remove('scroll');
   tag6.classList.remove('scroll');
   tag7.classList.remove('scroll');
   tag8.classList.remove('scroll');
  }
  if (scrollTop >= 2822 && scrollTop < 3711) {
   tag1.classList.remove('scroll');
   tag2.classList.remove('scroll');
   tag3.classList.remove('scroll');
   tag4.classList.add('scroll');
   tag5.classList.remove('scroll');
   tag6.classList.remove('scroll');
   tag7.classList.remove('scroll');
   tag8.classList.remove('scroll');
  }
  if (scrollTop >= 3711 && scrollTop < 4582) {
   tag1.classList.remove('scroll');
   tag2.classList.remove('scroll');
   tag3.classList.remove('scroll');
   tag4.classList.remove('scroll');
   tag5.classList.add('scroll');
   tag6.classList.remove('scroll');
   tag7.classList.remove('scroll');
   tag8.classList.remove('scroll');
}
  if (scrollTop >= 4582 && scrollTop < 11583) {
   tag1.classList.remove('scroll');
   tag2.classList.remove('scroll');
   tag3.classList.remove('scroll');
   tag4.classList.remove('scroll');
   tag5.classList.remove('scroll');
   tag6.classList.add('scroll');
   tag7.classList.remove('scroll');
   tag8.classList.remove('scroll');
}
  if (scrollTop >= 11583 && scrollTop < 15626) {
   tag1.classList.remove('scroll');
   tag2.classList.remove('scroll');
   tag3.classList.remove('scroll');
   tag4.classList.remove('scroll');
   tag5.classList.remove('scroll');
   tag6.classList.remove('scroll');
   tag7.classList.add('scroll');
   tag8.classList.remove('scroll');
}
  if (scrollTop >= 15626) {
   tag1.classList.remove('scroll');
   tag2.classList.remove('scroll');
   tag3.classList.remove('scroll');
   tag4.classList.remove('scroll');
   tag5.classList.remove('scroll');
   tag6.classList.remove('scroll');
   tag7.classList.remove('scroll');
   tag8.classList.add('scroll');
  }
};


// if (document.documentElement.clientWidth <= 767 && document.documentElement.clientWidth >= 375) {

//   window.onscroll = function () {
//     var scrollTop = window.pageYOffset;
//     if (scrollTop >= 0 && scrollTop < 294) {
//       services.classList.remove('red_text');
//       portfolio.classList.remove('red_text');
//       about.classList.remove('red_text');
//       contakt.classList.remove('red_text');
//       home.classList.add('red_text');
//     }
//     if (scrollTop >= 295 && scrollTop < 890) {
//       home.classList.remove('red_text');
//       portfolio.classList.remove('red_text');
//       about.classList.remove('red_text');
//       contakt.classList.remove('red_text');
//       services.classList.add('red_text');
//     }
//     if (scrollTop >= 891 && scrollTop < 1538) {
//       home.classList.remove('red_text');
//       services.classList.remove('red_text');
//       about.classList.remove('red_text');
//       contakt.classList.remove('red_text');
//       portfolio.classList.add('red_text');
//     }
//     if (scrollTop >= 1538 && scrollTop < 3147) {
//       home.classList.remove('red_text');
//       services.classList.remove('red_text');
//       portfolio.classList.remove('red_text');
//       contakt.classList.remove('red_text');
//       about.classList.add('red_text');
//     }
//     if (scrollTop >= 3147) {
//       home.classList.remove('red_text');
//       services.classList.remove('red_text');
//       portfolio.classList.remove('red_text');
//       about.classList.remove('red_text');
//       contakt.classList.add('red_text');
//     }
//   }
// }

