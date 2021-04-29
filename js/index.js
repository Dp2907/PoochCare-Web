window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  if (window.scrollY > 10) {
    navbarFixed.classList.add("header--sticky");
    //hoặc
    //navbarFixed.style.padding = "20px 15px";
  } else {
    navbarFixed.classList.remove("header--sticky");
    //hoặc
    //navbarFixed.style.padding = "25px 15px";
  }
};
