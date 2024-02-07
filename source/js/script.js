let navButton = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav");

navButton.classList.remove("main-nav__toggle--nojs");
nav.classList.toggle("main-nav--closed");

navButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("main-nav--closed");
});

navButton.addEventListener("click", function (evt) {
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

scroll.addEventListener("click", function () {
  window.scrollTo(pageXOffset, 0);
});

window.onscroll = function () {
  if (pageYOffset > 250) {
    scroll.classList.remove("scroll--hidden");
  } else {
    scroll.classList.add("scroll--hidden");
  }
};

let submit = document.querySelector(".subscribe__form");
let email = document.querySelector(".subscribe__email");
let error = document.querySelector(".subscribe__error");

submit.addEventListener("submit", function (evt) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    email.classList.remove("subscribe__email--error");
    error.classList.remove("subscribe__error--show");
  } else {
    evt.preventDefault();
    email.classList.add("subscribe__email--error");
    error.classList.add("subscribe__error--show");
  }
});

submit.addEventListener("input", function () {
  email.classList.remove("subscribe__email--error");
  error.classList.remove("subscribe__error--show");
});

let like = document.querySelectorAll(".catalog__like");
let notice = document.querySelectorAll(".catalog__notice");

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    if (like[i].classList.contains("catalog__like--active")) {
      like[i].classList.remove("catalog__like--active");
      like[i].classList.remove("catalog__like--notice");
    } else {
      like[i].classList.add("catalog__like--active");
      like[i].classList.add("catalog__like--notice");
    }
  });
}

let catalog = document.querySelector(".catalog__list");
let items = document.querySelectorAll(".catalog__item");
let sortPrice = document.querySelector(".sort__button--price");
let sortAge = document.querySelector(".sort__button--age");
let cats = [];

for (let i = 0; i < items.length; i++) {
  cats.push(items[i]);
}

sortPrice.addEventListener("click", function () {
  sortPrice.classList.toggle("sort__button--price-asc");

  if (sortPrice.classList.contains("sort__button--price-asc")) {
    for (let i = 0; i < cats.length; i++) {
      for (let j = i; j < cats.length; j++) {
        if (
          cats[i].getAttribute("data-price") >
          cats[j].getAttribute("data-price")
        ) {
          let swap = cats[i];
          cats[i] = cats[j];
          cats[j] = swap;
        }
      }
    }

    catalog.innerHTML = "";
    for (let i = 0; i < cats.length; i++) {
      catalog.appendChild(cats[i]);
    }
  } else {
    for (let i = 0; i < cats.length; i++) {
      for (let j = i; j < cats.length; j++) {
        if (
          cats[i].getAttribute("data-price") <
          cats[j].getAttribute("data-price")
        ) {
          let swap = cats[i];
          cats[i] = cats[j];
          cats[j] = swap;
        }
      }
    }

    catalog.innerHTML = "";
    for (let i = 0; i < cats.length; i++) {
      catalog.appendChild(cats[i]);
    }
  }
  for (let i = 0; i < like.length; i++) {
    if (like[i].classList.contains("catalog__like--notice")) {
      like[i].classList.remove("catalog__like--notice");
    } else {
    }
  }
});

sortAge.addEventListener("click", function () {
  sortAge.classList.toggle("sort__button--age-asc");

  if (sortAge.classList.contains("sort__button--age-asc")) {
    for (let i = 0; i < cats.length; i++) {
      for (let j = i; j < cats.length; j++) {
        if (
          cats[i].getAttribute("data-age") > cats[j].getAttribute("data-age")
        ) {
          let swap = cats[i];
          cats[i] = cats[j];
          cats[j] = swap;
        }
      }
    }

    catalog.innerHTML = "";
    for (let i = 0; i < cats.length; i++) {
      catalog.appendChild(cats[i]);
    }
  } else {
    for (let i = 0; i < cats.length; i++) {
      for (let j = i; j < cats.length; j++) {
        if (
          cats[i].getAttribute("data-age") < cats[j].getAttribute("data-age")
        ) {
          let swap = cats[i];
          cats[i] = cats[j];
          cats[j] = swap;
        }
      }
    }
    catalog.innerHTML = "";
    for (let i = 0; i < cats.length; i++) {
      catalog.appendChild(cats[i]);
    }
  }
  for (let i = 0; i < like.length; i++) {
    if (like[i].classList.contains("catalog__like--notice")) {
      like[i].classList.remove("catalog__like--notice");
    } else {
    }
  }
});
