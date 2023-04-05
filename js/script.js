const switcherToggler = document.querySelector(".style-toggle");
const dayNight = document.querySelector(".day-night");
const nav = document.querySelectorAll(".nav li a");
const section = document.querySelectorAll(".section");

const asideBtn = () => {
  left.classList.toggle("open");
  navBarIcon.classList.toggle("open");
  section.forEach((set) => {
    set.classList.toggle("open");
  });
};

navBarIcon.addEventListener("click", asideBtn);

icons.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
});

let typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Software Engineer",
    "Frontend Developer",
    "Website Inventor",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
