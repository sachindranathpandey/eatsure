let element = document.querySelector(".web-body");

darkmode = () => {
  element.classList.toggle("dark-mode");
};

$(document).ready(function () {
  $("#myModal").modal("show");
});

const btnclose = document.querySelector(".close");
const hidemodal = document.querySelector(".modal-section");

// btnclose.addEventListener("click", function () {
//   hidemodal.classList.add("hide");
//   removeDummy();
// });

function removeDummy() {
  var elem = document.getElementById("dummy");
  elem.parentNode.removeChild(elem);
  return false;
}
