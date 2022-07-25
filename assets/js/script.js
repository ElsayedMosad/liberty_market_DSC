const menuLinks = document.querySelector(".menu")
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", () => {
  menuLinks.classList.toggle("play-menu")
  toggle.classList.toggle("play-toggle")
})