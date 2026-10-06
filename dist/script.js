const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "Close" : "Menu";
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.textContent = "Menu";
    menuButton.setAttribute("aria-label", "Open menu");
  });
});