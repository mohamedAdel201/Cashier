let sales = document.querySelector("#l1");
let extraSales = document.querySelector("#l2");
let round = document.querySelector("#l3");
let expenses = document.querySelector("#l4");
let employeesNumber = document.querySelector("#l5");
let result = document.querySelector(".result .final-result");
let button = document.querySelector(".button");
let menueIcon = document.querySelector(".menueIco");
let menue = document.querySelector(".menue");
let closeM = document.querySelector(".close");
let managerOne = document.querySelector(".second-result .one span");
let managerTwo = document.querySelector(".second-result .two span");
let managerThree = document.querySelector(".second-result .three span");

button.onclick = () => {
  let totalSales = parseInt(sales.value || 0) + parseInt(extraSales.value || 0);
  let netSales = totalSales - parseInt(round.value || 0);
  let employeeRatio = netSales * 0.08;
  let netEmployeeRatio = employeeRatio - parseInt(expenses.value || 0);
  let salary_of_each_employee =
    netEmployeeRatio / parseFloat(employeesNumber.value || 1);
  console.log(parseFloat(employeesNumber.value || 1));
  result.innerHTML = `${Math.round(salary_of_each_employee)} جنيه`;
  managerOne.innerHTML =
    Math.round(salary_of_each_employee) +
    Math.round(salary_of_each_employee * 0.4);
  managerTwo.innerHTML =
    Math.round(salary_of_each_employee) +
    Math.round(salary_of_each_employee * 0.3);
  managerThree.innerHTML =
    Math.round(salary_of_each_employee) +
    Math.round(salary_of_each_employee * 0.05);
  //set data in local storage
  localStorage.setItem("amana", sales.value);
  localStorage.setItem("bayet", extraSales.value);
  localStorage.setItem("totalSales", totalSales);
  localStorage.setItem("netSales", netSales);
  localStorage.setItem("round", round.value);
  localStorage.setItem("sahar", employeeRatio);
  // window.location.href = "reports.html";

  console.log(`${salary_of_each_employee} جنيه`);
};

menueIcon.onclick = function () {
  menue.classList.add("open");
  document.body.classList.add("menu-open");
};

closeM.onclick = function () {
  menue.classList.remove("open");
  document.body.classList.remove("menu-open");
};


