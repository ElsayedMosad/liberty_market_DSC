// Header Scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});
// Genral functions
function removeClass(ArrayOfElements, classTargetToRemove, newIndexForClass) {
  ArrayOfElements.forEach((element, index) => {
    if (element.classList.contains(classTargetToRemove)) {
      element.classList.remove(classTargetToRemove);
    }
    if (index === newIndexForClass) {
      element.classList.add(classTargetToRemove);
    }
  });
}

// Menu
const menuLinks = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  menuLinks.classList.toggle("play-menu");
  toggle.classList.toggle("play-toggle");
});

// Add active class to current page

let pageNames = [
  "/index.html",
  "/explore.html",
  "/details.html",
  "/author.html",
  "/create.html",
];
const linkPages = document.querySelectorAll(".menu .link");
removeClass(linkPages, "active", pageNames.indexOf(window.location.pathname));

const btns = document.querySelectorAll(".market-btn");
const marketItem = document.querySelectorAll(".market-item");

btns.forEach((e, i) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    removeClass(btns, "active", i);

    const filter = e.target.dataset.filter;
    marketItem.forEach((product) => {
      if (filter === "All-Items") {
        product.style.display = "flex";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "flex";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
});
