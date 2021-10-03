//! Реализация бургер-меню

const headerBlock = document.querySelector("body > .head-resort");
const burgerBtn = document.querySelector("#head > div.burger-resort");
const arrowBurger1 = document.querySelector("#head > div.burger.burger-resort > div > svg.arrow_resort1");
const arrowBurger2 = document.querySelector("#head > div.burger.burger-resort > div > svg.arrow_resort2");

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


//! скрипт галереи Жемчужина азова

let colectionImagePrewZgem = document.querySelectorAll("#relaxation > div.azov > div.zgemchugina.main_flex_column.flex__align-items_center > div.add.zgemchugina-add.main_flex_column > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrewZgem = document.querySelector("#relaxation > div.azov > div.zgemchugina.main_flex_column.flex__align-items_center > div.add.zgemchugina-add.main_flex_column > div > div.pr_gal > div.imag-preview");

imagePrewZgem.innerHTML = colectionImagePrewZgem[0].innerHTML;

for (let elemImagePrew of colectionImagePrewZgem) {
   elemImagePrew.onclick = function() {
      imagePrewZgem.innerHTML = elemImagePrew.innerHTML;
   }
}

//? скрипт галереи Галаиея

let colectionImagePrewGal = document.querySelectorAll("#relaxation > div.azov > div.galateya.main_flex_column.flex__align-items_center > div.add.galateya-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrewGal = document.querySelector("#relaxation > div.azov > div.galateya.main_flex_column.flex__align-items_center > div.add.galateya-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.imag-preview");

imagePrewGal.innerHTML = colectionImagePrewGal[0].innerHTML;

for (let elemImagePrew of colectionImagePrewGal) {
   elemImagePrew.onclick = function() {
      imagePrewGal.innerHTML = elemImagePrew.innerHTML;
   }
}

//! скрипт галереи Славутич

let colectionImagePrewSlav = document.querySelectorAll("#relaxation > div.azov > div.slavutich.main_flex_column.flex__align-items_center > div.add.slavutich-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrewSlav = document.querySelector("#relaxation > div.azov > div.slavutich.main_flex_column.flex__align-items_center > div.add.slavutich-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.imag-preview");

imagePrewSlav.innerHTML = colectionImagePrewSlav[0].innerHTML;

for (let elemImagePrew of colectionImagePrewSlav) {
   elemImagePrew.onclick = function() {
      imagePrewSlav.innerHTML = elemImagePrew.innerHTML;
   }
}


//? скрипт галереи Рута

let colectionImagePrewRuta = document.querySelectorAll("#relaxation > div.black > div.ruta.main_flex_column.flex__align-items_center > div.add.ruta-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrewRuta = document.querySelector("#relaxation > div.black > div.ruta.main_flex_column.flex__align-items_center > div.add.ruta-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.imag-preview");

imagePrewRuta.innerHTML = colectionImagePrewRuta[0].innerHTML;

for (let elemImagePrew of colectionImagePrewRuta) {
   elemImagePrew.onclick = function() {
      imagePrewRuta.innerHTML = elemImagePrew.innerHTML;
   }
}


//! скрипт галереи Одесскабель

let colectionImagePrewKab = document.querySelectorAll("#relaxation > div.black > div.odeskabel.main_flex_column.flex__align-items_center > div.add.odeskabel-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrewKab = document.querySelector("#relaxation > div.black > div.odeskabel.main_flex_column.flex__align-items_center > div.add.odeskabel-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.imag-preview");

imagePrewKab.innerHTML = colectionImagePrewKab[0].innerHTML;

for (let elemImagePrew of colectionImagePrewKab) {
   elemImagePrew.onclick = function() {
      imagePrewKab.innerHTML = elemImagePrew.innerHTML;
   }
}


//? скрипт галереи Трускавец - Шахтер

let colectionImagePrewTrus = document.querySelectorAll("#relaxation > div.truskavetc.main_flex_column.flex__align-items_center > div.add.truskavetc-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.pr_gal_images.main_flex.flex__jcontent_around > div");
let imagePrewTrus = document.querySelector("#relaxation > div.truskavetc.main_flex_column.flex__align-items_center > div.add.truskavetc-add.main_flex_column.flex__align-items_center > div > div.pr_gal > div.imag-preview");

imagePrewTrus.innerHTML = colectionImagePrewTrus[0].innerHTML;

for (let elemImagePrew of colectionImagePrewTrus) {
   elemImagePrew.onclick = function() {
      imagePrewTrus.innerHTML = elemImagePrew.innerHTML;
   }
}


//? скрипт открытие/скрытия блоков

 const btnZgemchugina = document.querySelector("#relaxation > div.azov > div.zgemchugina.main_flex_column.flex__align-items_center > button");
 const zgemchuginaAdd = document.querySelector("#relaxation > div.azov > div.zgemchugina.main_flex_column.flex__align-items_center > div.add.zgemchugina-add.main_flex_column");
 btnZgemchugina.onclick = function() {
    zgemchuginaAdd.classList.toggle('display-none')
    if (btnZgemchugina.textContent == 'Подробно') {
        btnZgemchugina.textContent = 'Скрыть'
    } else {
        btnZgemchugina.textContent = 'Подробно'
    }
 }

 const btnGalateya = document.querySelector("#relaxation > .azov > .galateya > button")
 const galateyaAdd = document.querySelector("#relaxation > .azov > .galateya > .galateya-add")
 btnGalateya.onclick = function() {
    galateyaAdd.classList.toggle('display-none')
    if (btnGalateya.textContent == 'Подробно') {
        btnGalateya.textContent = 'Скрыть'
    } else {
        btnGalateya.textContent = 'Подробно'
    }
 }

 const btnSlavutich = document.querySelector("#relaxation > .azov > .slavutich > button")
 const slavutichAdd = document.querySelector("#relaxation > .azov > .slavutich > .slavutich-add")
 btnSlavutich.onclick = function() {
    slavutichAdd.classList.toggle('display-none')
    if (btnSlavutich.textContent == 'Подробно') {
        btnSlavutich.textContent = 'Скрыть'
    } else {
        btnSlavutich.textContent = 'Подробно'
    }
 }
 const btnUgolek = document.querySelector("#relaxation > .azov > .ugolek > button")
 const ugolekAdd = document.querySelector("#relaxation > .azov > .ugolek > .ugolek-add")
 btnUgolek.onclick = function() {
    ugolekAdd.classList.toggle('display-none')
    if (btnUgolek.textContent == 'Подробно') {
        btnUgolek.textContent = 'Скрыть'
    } else {
        btnUgolek.textContent = 'Подробно'
    }
 }

 const btnShahter = document.querySelector("#relaxation > .azov > .shahter > button")
 const shahterAdd = document.querySelector("#relaxation > .azov > .shahter > .shahter-add")
 btnShahter.onclick = function() {
    shahterAdd.classList.toggle('display-none')
    if (btnShahter.textContent == 'Подробно') {
        btnShahter.textContent = 'Скрыть'
    } else {
        btnShahter.textContent = 'Подробно'
    }
 }

 const btnRuta = document.querySelector("#relaxation > .black > .ruta > button")
 const rutaAdd = document.querySelector("#relaxation > .black > .ruta > .ruta-add")
 btnRuta.onclick = function() {
    rutaAdd.classList.toggle('display-none')
    if (btnRuta.textContent == 'Подробно') {
        btnRuta.textContent = 'Скрыть'
    } else {
        btnRuta.textContent = 'Подробно'
    }
 }

 const btnOdeskabel = document.querySelector("#relaxation > .black > .odeskabel > button")
 const odeskabelAdd = document.querySelector("#relaxation > .black > .odeskabel > .odeskabel-add")
 btnOdeskabel.onclick = function() {
    odeskabelAdd.classList.toggle('display-none')
    if (btnOdeskabel.textContent == 'Подробно') {
        btnOdeskabel.textContent = 'Скрыть'
    } else {
        btnOdeskabel.textContent = 'Подробно'
    }
 }

 const btnPavlogradetc = document.querySelector("#relaxation > .samara > .pavlogradetc > button")
 const pavlogradetcAdd = document.querySelector("#relaxation > .samara > .pavlogradetc > .pavlogradetc-add")
 btnPavlogradetc.onclick = function() {
    pavlogradetcAdd.classList.toggle('display-none')
    if (btnPavlogradetc.textContent == 'Подробно') {
        btnPavlogradetc.textContent = 'Скрыть'
    } else {
        btnPavlogradetc.textContent = 'Подробно'
    }
 }

 const btnMarkova = document.querySelector("#relaxation > .samara > .markova > button")
 const markovaAdd = document.querySelector("#relaxation > .samara > .markova > .markova-add")
 btnMarkova.onclick = function() {
    markovaAdd.classList.toggle('display-none')
    if (btnMarkova.textContent == 'Подробно') {
        btnMarkova.textContent = 'Скрыть'
    } else {
        btnMarkova.textContent = 'Подробно'
    }
 }

 const btnProlisok = document.querySelector("#relaxation > .samara > .prolisok > button")
 const prolisokAdd = document.querySelector("#relaxation > .samara > .prolisok > .prolisok-add")
 btnProlisok.onclick = function() {
    prolisokAdd.classList.toggle('display-none')
    if (btnProlisok.textContent == 'Подробно') {
        btnProlisok.textContent = 'Скрыть'
    } else {
        btnProlisok.textContent = 'Подробно'
    }
 }

 const btnTruskavetc = document.querySelector("#relaxation > div.truskavetc.main_flex_column.flex__align-items_center > button");
 const truskavetcAdd = document.querySelector("#relaxation > div.truskavetc.main_flex_column.flex__align-items_center > div.add.truskavetc-add.main_flex_column.flex__align-items_center");
 btnTruskavetc.onclick = function() {
    truskavetcAdd.classList.toggle('display-none')
    if (btnTruskavetc.textContent == 'Подробно') {
        btnTruskavetc.textContent = 'Скрыть'
    } else {
        btnTruskavetc.textContent = 'Подробно'
    }
 }
