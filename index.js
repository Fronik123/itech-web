const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header__link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//burger menu
const burgerMenu = document.querySelector(".burger__menu");
const headerMenu = document.querySelector(".header__menu");

burgerMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    headerMenu.classList.remove("active");
  });
});
