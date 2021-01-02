$(function() {


    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("form__file-button");
    const customTxt = document.getElementById("file__custom-text");

    customBtn.addEventListener("click", function() {
        realFileBtn.click();
    });
    realFileBtn.addEventListener("change", function(){
        if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            customTxt.innerHTML = "Файл не найден";
        }
    });


    $('.review__inner').slick({
        arrows: false,
        dots: true,
        dotsClass: 'review__dots'
    });


    $('.header__button').on('click', function(){
        $('.header__menu').slideToggle();
      
    });





var mixer = mixitup('.menu__box',  {
    load: {
        filter: '.category-coffe'
    }
});


});

