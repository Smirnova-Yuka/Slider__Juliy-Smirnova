//переменная для смещения слайдера от левого края
let offset = 0;

//переменные для ленты картинок
const sliderLine = document.querySelector(".pr__slider__line");

//переменные для кнопок Вперёд и Назад
const sliderNext = document.querySelector("#slider__next");
const sliderPrevious = document.querySelector("#slider__previous");
console.log(sliderNext);

//добавляем слушателя на кнопку ВПЕРЁД - действие при нажатии: сдвиг на 679
sliderNext.addEventListener('click', function(){
    offset = offset + 679;
    //чтобы после последней картинки появлялась первая, 1358 - это длина двух картинок слайдера
    if (offset > 1358) {
        offset = 0;
    }
    //сдвигаем ленту картинок на offset - добавляем стиль, меняем позицию
    sliderLine.style.left = -offset + 'px';
    buttonActive ();

})

//добавляем слушателя на кнопку НАЗАД - действие при нажатии: сдвиг на -679
sliderPrevious.addEventListener('click', function(){
    offset = offset - 679;
    //чтобы после последней картинки появлялась первая, 1358 - это длина двух картинок слайдера
    if (offset < 0) {
        offset = 1358;
    }
    //сдвигаем ленту картинок на offset - добавляем стиль, меняем позицию
    sliderLine.style.left = -offset + 'px';
    buttonActive ();
})

const buttonDote1 = document.querySelector('#dote-1');
const buttonDote2 = document.querySelector('#dote-2');
const buttonDote3 = document.querySelector('#dote-3');

const buttonSlider1 = document.querySelector('#Rostov-Admiral');
const buttonSlider2 = document.querySelector('#Sochi-Thieves');
const buttonSlider3 = document.querySelector('#Rostov-Patriotic');

console.log(buttonSlider1);

buttonSlider1.classList.add("pr__navigation__item__active");
buttonDote1.classList.add("dote-acnive");

//переключение картинок с помощью точек
buttonDote1.addEventListener('click', clickButton1);
buttonDote2.addEventListener('click', clickButton2);
buttonDote3.addEventListener('click', clickButton3);

//переключение картинок с помощью верхнего меню
buttonSlider1.addEventListener('click', clickButton1);
buttonSlider2.addEventListener('click', clickButton2);
buttonSlider3.addEventListener('click', clickButton3);

function clickButton1 (){
    offset = 0;
    sliderLine.style.left = -offset + 'px';
    buttonDote1.classList.add("dote-acnive");
    buttonDote2.classList.remove("dote-acnive");
    buttonDote3.classList.remove("dote-acnive");

    buttonSlider1.classList.add("pr__navigation__item__active");
    buttonSlider2.classList.remove("pr__navigation__item__active");
    buttonSlider3.classList.remove("pr__navigation__item__active");
}

function clickButton2 (){
    offset = 679;
    sliderLine.style.left = -offset + 'px';
    buttonDote2.classList.add("dote-acnive");
    buttonDote1.classList.remove("dote-acnive");
    buttonDote3.classList.remove("dote-acnive");

    buttonSlider2.classList.add("pr__navigation__item__active");
    buttonSlider1.classList.remove("pr__navigation__item__active");
    buttonSlider3.classList.remove("pr__navigation__item__active");

}

function clickButton3 (){
    offset = 1358;
    sliderLine.style.left = -offset + 'px';
    buttonDote3.classList.add("dote-acnive");
    buttonDote2.classList.remove("dote-acnive");
    buttonDote1.classList.remove("dote-acnive");

    buttonSlider3.classList.add("pr__navigation__item__active");
    buttonSlider1.classList.remove("pr__navigation__item__active");
    buttonSlider2.classList.remove("pr__navigation__item__active");
}





function buttonActive (){
    if (offset === 0){
        buttonDote1.classList.add("dote-acnive");
        buttonDote2.classList.remove("dote-acnive");
        buttonDote3.classList.remove("dote-acnive");

        buttonSlider1.classList.add("pr__navigation__item__active");
        buttonSlider2.classList.remove("pr__navigation__item__active");
        buttonSlider3.classList.remove("pr__navigation__item__active");

    }else if (offset === 679){
        buttonDote2.classList.add("dote-acnive");
        buttonDote1.classList.remove("dote-acnive");
        buttonDote3.classList.remove("dote-acnive");

        buttonSlider2.classList.add("pr__navigation__item__active");
        buttonSlider1.classList.remove("pr__navigation__item__active");
        buttonSlider3.classList.remove("pr__navigation__item__active");
    }else {
        buttonDote3.classList.add("dote-acnive");
        buttonDote2.classList.remove("dote-acnive");
        buttonDote1.classList.remove("dote-acnive");

        buttonSlider3.classList.add("pr__navigation__item__active");
        buttonSlider1.classList.remove("pr__navigation__item__active");
        buttonSlider2.classList.remove("pr__navigation__item__active");
    }
}