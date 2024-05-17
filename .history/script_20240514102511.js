const menuIcon = document.getElementById("menu-icon");
const menuOptions = document.getElementById("menu-options");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", function () {
  if (menuOptions.style.display === "none") {
    menuOptions.style.display = "block";
  } else {
    menuOptions.style.display = "none";
  }
});

closeIcon.addEventListener("click", function () {
  menuOptions.style.display = "none";
});

// Restante do seu código...
