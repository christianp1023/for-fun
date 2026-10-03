const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__link");

function setMenuOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((l) => l.classList.remove("is-active"));
    link.classList.add("is-active");
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenuOpen(false);
});

window.addEventListener(
  "scroll",
  () => nav.classList.toggle("is-scrolled", window.scrollY > 4),
  { passive: true }
);
