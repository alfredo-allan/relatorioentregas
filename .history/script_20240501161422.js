const menuIcon = document.getElementById("menu-icon");
const menuOptions = document.getElementById("menu-options");

menuIcon.addEventListener("click", function () {
  if (menuOptions.style.display === "none") {
    menuOptions.style.display = "block";
  } else {
    menuOptions.style.display = "none";
  }
});

//input data pagina index e registro
document.getElementById("data").value = new Date().toISOString().slice(0, 10);
var currentDate = new Date().toISOString().slice(0, 10);
var formattedDate = currentDate.split("-").reverse().join("/");
document.getElementById("data").value = formattedDate;
  document
    .getElementById("data")
    .addEventListener("input", formatarData);
    function formatarData() {
      let inputData = document.getElementById("data-vencimento").value;

      let dataFormatada = inputData.replace(
        /^(\d{2})(\d{2})(\d{2})$/,
        "$1/$2/$3"
      );

      document.getElementById("data-vencimento").value = dataFormatada;
    }

