//! Реализация бургер-меню

const headerBlock = document.querySelector("body > .head-blog");
const burgerBtn = document.querySelector("#head > div.burger-blog");
const arrowBurger1 = document.querySelector("#head > div.burger > div > svg.arrow_blog1");
const arrowBurger2 = document.querySelector("#head > div.burger > div > svg.arrow_blog2");

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
};