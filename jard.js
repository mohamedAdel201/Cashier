let menue = document.querySelector(".menue");
let menueIcon = document.querySelector(".menueIco");

let dorg = document.querySelector(".jard-container #l1");
let coins = document.querySelector(".jard-container #l2");
let spends = document.querySelector(".jard-container #l3");
let recipts = document.querySelector(".jard-container #l4");
let returned = document.querySelector(".jard-container #l5");
let paper = document.querySelector(".jard-container #l6");
let button = document.querySelector(".j-button");
let result = document.querySelector(".jard-res span");

button.onclick = function () {
  let totalMoney =
    parseInt(dorg.value) +
    parseInt(coins.value) +
    parseInt(spends.value) +
    parseInt(recipts.value) +
    parseInt(returned.value);
  let diffrence = totalMoney - parseInt(paper.value);
  if (totalMoney > parseInt(paper.value)) {
    result.innerHTML = `${diffrence} زياده`;
  } else if (totalMoney < parseInt(paper.value)) {
    result.innerHTML = `${diffrence} عجز`;
  } else {
    result.innerHTML = `${diffrence} مظبوطه`;
  }
};

menueIcon.onclick = function () {
  menue.classList.add("open");
  document.body.classList.add("menu-open");
};

closeM.onclick = function () {
  menue.classList.remove("open");
  document.body.classList.remove("menu-open");
};
