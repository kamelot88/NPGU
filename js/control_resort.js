


let colectionImagePrew = document.querySelectorAll("#relaxation > div.azov.display-none > div.zgemchugina.main_flex_column.flex__align-items_center > div.add.zgemchugina-add.display-none.main_flex_column > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrew = document.querySelector("#relaxation > div.azov.display-none > div.zgemchugina.main_flex_column.flex__align-items_center > div.add.zgemchugina-add.display-none.main_flex_column > div > div.pr_gal > div.imag-preview");

imagePrew.innerHTML = colectionImagePrew[0].innerHTML;

for (let elemImagePrew of colectionImagePrew) {
   elemImagePrew.onclick = function() {
      imagePrew.innerHTML = elemImagePrew.innerHTML;
      elemImagePrew.classList.remove('border-prew');
      elemImagePrew.classList.add('border-prew');
      
   }
}

