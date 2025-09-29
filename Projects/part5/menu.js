document.addEventListener("DOMContentLoaded", () => {
  const toggleNav = document.getElementById("toggle-nav");
  const navItems = document.getElementById("nav-items");

  if (toggleNav && navItems) {
    toggleNav.addEventListener("click", () => {
      navItems.classList.toggle("hide-small");
    });
  }
});
