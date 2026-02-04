const menuItems = document.querySelectorAll("#menu li");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove active class
    menuItems.forEach(i => i.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    // Add active class
    item.classList.add("active");
    const sectionId = item.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");
  });
});
