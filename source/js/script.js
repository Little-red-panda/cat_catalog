let navButton = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav");

navButton.classList.remove("main-nav__toggle--nojs");

navButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    nav.classList.toggle("main-nav--closed");
});

navButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (navButton.classList.contains("main-nav__toggle--closed")) {
        navButton.classList.remove("main-nav__toggle--closed");
        navButton.classList.add("main-nav__toggle--opened");
    } else {
        navButton.classList.remove("main-nav__toggle--opened");
        navButton.classList.add("main-nav__toggle--closed");
    }
});



let scroll = document.querySelector(".scroll");

scroll.addEventListener("click", function() {
    window.scrollTo(pageXOffset, 0);
});

window.onscroll = (function() {
    if (pageYOffset > 250) {
        scroll.classList.remove("scroll--hidden");
    } else {
        scroll.classList.add("scroll--hidden");
    }
});


let submit = document.querySelector(".subscribe__form");
let email = document.querySelector(".subscribe__email");
let error = document.querySelector(".subscribe__error");

submit.addEventListener('submit', function(evt) {
    console.log('тык на кнопку');
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        email.classList.remove("subscribe__email--error");
        error.classList.remove("subscribe__error--show");

    } else {
        evt.preventDefault();
        email.classList.add("subscribe__email--error");
        error.classList.add("subscribe__error--show");
    };
});

submit.addEventListener("input", function() {
    email.classList.remove("subscribe__email--error");
    error.classList.remove("subscribe__error--show");
  
});
