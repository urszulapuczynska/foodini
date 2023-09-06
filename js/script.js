//navigation open search bar
const navbarEl = document.querySelector(".navbar");
const btnSearchBar = document.querySelector(".loop-nav");

btnSearchBar.onclick = function () {
  navbarEl.classList.toggle("nav-open");
};

//navigation appear aside enable scrolling the page after clicking on 'eksploruj' button
const exploreBtn = document.querySelector(".header__container-button");
const headerSection = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === true) {
      exploreBtn.onclick = function () {
        document.body.classList.remove("overflow");
      };
    }

    if (ent.isIntersecting === false) {
      document.body.classList.add("open");
      document.body.classList.remove("overflow");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("open");
      navbarEl.classList.remove("nav-open");
    }
  },
  {
    root: null,
    treshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(headerSection);

//close open nav by click on a body
const inputEl = document.querySelector(".nav-input-search");
const btnEl = document.getElementById("button");

document.body.onclick = function (e) {
  if (!inputEl.contains(e.target) && !btnEl.contains(e.target)) {
    navbarEl.classList.remove("nav-open");
  }
};

//clearing the input after enter button is clicked
const enterBtnEl = document.querySelector(".enter-icon-input");

enterBtnEl.onclick = function () {
  inputEl.value = "";
};

// document.body.addEventListener("keyup", (key) => {
//   if (key.value === "Enter") {
//     enterBtnEl.add.click;
//   }
// });

enterBtnEl.addEventListener("click", (ev) => {});

document.addEventListener("keypress", (event) => {
  const keyValue = event.keyValue ? event.keyValue : event.which;

  if (keyValue === 13) {
    enterBtnEl.click();
  }
});
