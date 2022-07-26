// Header Scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});


// Menu
const menuLinks = document.querySelector(".menu")
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", () => {
  menuLinks.classList.toggle("play-menu")
  toggle.classList.toggle("play-toggle")
})