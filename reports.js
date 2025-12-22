let menueIcon = document.querySelector(".menueIco");
let menue = document.querySelector(".menue");

let amana = document.querySelector(".box-container .box .amana");
let bayet = document.querySelector(".box-container .box .bayet");
let total = document.querySelector(".box-container .box .total");
let safy = document.querySelector(".box-container .box .safy");
let round = document.querySelector(".box-container .box .round");
let sahar = document.querySelector(".box-container .box .sahar");

amana.innerHTML = localStorage.getItem("amana");
bayet.innerHTML = localStorage.getItem("bayet");
total.innerHTML = localStorage.getItem("totalSales");
safy.innerHTML = localStorage.getItem("netSales");
round.innerHTML = localStorage.getItem("round");
sahar.innerHTML = localStorage.getItem("sahar");

menueIcon.onclick = function () {
  menue.classList.add("open");
  document.body.classList.add("menu-open");
};

closeM.onclick = function () {
  menue.classList.remove("open");
  document.body.classList.remove("menu-open");
};
