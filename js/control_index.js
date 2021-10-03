

//! Реализация бургер-меню

const headerBlock = document.querySelector("body > .head-index");
const burgerBtn = document.querySelector("#head > div.burger-index");
const arrowBurger1 = document.querySelector("#head > div.burger.main_flex_column.flex__jcontent_center > div > svg.arrow_index1");
const arrowBurger2 = document.querySelector("#head > div.burger.main_flex_column.flex__jcontent_center > div > svg.arrow_index2");

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


///! скрипт галереи шахтёров

let colectionImagePrew = document.querySelectorAll("body > main > div > div > div.right_info > div.pr_gal > div.pr_gal_images.main_flex > div");
let imagePrew = document.querySelector("body > main > div > div > div.right_info > div.pr_gal > div.imag-preview");

imagePrew.innerHTML = colectionImagePrew[0].innerHTML;

for (let elemImagePrew of colectionImagePrew) {
   elemImagePrew.onclick = function() {
      imagePrew.innerHTML = elemImagePrew.innerHTML;
   }
}