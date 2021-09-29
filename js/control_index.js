
//! скрипт галереи

let colectionImagePrewGaler = document.querySelectorAll("body > main > div > div > div.right_info > div.pr_gal > div.pr_gal_images.main_flex > div");
let imagePrewGaler = document.querySelector("body > main > div > div > div.right_info > div.pr_gal > div.imag-preview");

imagePrewGaler.innerHTML = colectionImagePrewGaler[0].innerHTML;

for (let elemImagePrew of colectionImagePrewGaler) {
   elemImagePrew.onclick = function() {
      imagePrewGaler.innerHTML = elemImagePrew.innerHTML;
   }
}


//  const btnTruskavetc = document.querySelector("#relaxation > div.truskavetc.main_flex_column.flex__align-items_center > button");
//  const truskavetcAdd = document.querySelector("#relaxation > div.truskavetc.main_flex_column.flex__align-items_center > div.add.truskavetc-add.main_flex_column.flex__align-items_center");
//  btnTruskavetc.onclick = function() {
//     truskavetcAdd.classList.toggle('display-none')
//     if (btnTruskavetc.textContent == 'Подробно') {
//         btnTruskavetc.textContent = 'Скрыть'
//     } else {
//         btnTruskavetc.textContent = 'Подробно'
//     }
//  }
