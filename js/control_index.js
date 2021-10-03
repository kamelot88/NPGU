

///! скрипт галереи шахтуров

let colectionImagePrew = document.querySelectorAll("body > main > div > div > div.right_info > div.pr_gal > div.pr_gal_images.main_flex > div");
let imagePrew = document.querySelector("body > main > div > div > div.right_info > div.pr_gal > div.imag-preview");

imagePrew.innerHTML = colectionImagePrew[0].innerHTML;

for (let elemImagePrew of colectionImagePrew) {
   elemImagePrew.onclick = function() {
      imagePrew.innerHTML = elemImagePrew.innerHTML;
   }
}