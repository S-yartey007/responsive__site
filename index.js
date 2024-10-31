const nav_toggle = document.querySelector(".nav__toggle");
const nav = document.querySelectorAll(".nav__list");

nav_toggle.addEventListener("click", () => {
  nav.forEach((nav_list) => {
    nav_list.classList.toggle("nav__visible");
  });
});
