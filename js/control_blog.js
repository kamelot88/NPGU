//! Реализация бургер-меню

const headerBlock2 = document.querySelector("body > .head-blog");
const burgerBtn2 = document.querySelector("#head > div.burger.burger-blog");
const arrowBurger1 = document.querySelector("#head > div.burger > div > svg.arrow_blog1");
const arrowBurger2 = document.querySelector("#head > div.burger > div > svg.arrow_blog2");

burgerBtn2.onclick = function(e) {
   if (headerBlock2.style.left != 0 + "vw") {
      headerBlock2.style.left = 0 + "vw";
      arrowBurger1.classList.add('rotate-arrow');
      arrowBurger2.classList.add('rotate-arrow');
   } else {
      headerBlock2.style.left = -65 + "vw";
      arrowBurger1.classList.remove('rotate-arrow');
      arrowBurger2.classList.remove('rotate-arrow');
   }
};