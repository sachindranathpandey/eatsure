let element = document.querySelector(".web-body");

darkmode = () => {
  element.classList.toggle("dark-mode");
};

$(window).on("load", function () {
  $("#myModal").modal("show");
});

const myModal = new bootstrap.Modal("#myModal");

$(document).ready(function () {
  $("#myModal").modal("show");
});
