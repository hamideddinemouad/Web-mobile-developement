"use strict";

{
  /* <div class="dot">CDM</div> */
}

function insertDots() {
  var divs = document.querySelectorAll("section div"); // console.log(divs);
  // let dot = document.createElement('div');

  var dot = "<div class=\"dot\">CDM</div>";
  divs.forEach(function (div) {
    return div.innerHTML = dot + 1;
  });
} // insertDots();


function isFormation(formation) {
  if (!formation) {
    console.error("isFormation() !formation");
    return false;
  }

  if (typeof formation !== "string") {
    console.error("isFormation() formation !== string");
    return false;
  }

  if (formation.length !== 3) {
    console.error("isFormation() formation.length !== 3");
    return false;
  }

  var numbers = formation.split('').map(Number);
  var totalPlayers = numbers.reduce(function (x, y) {
    return x + y;
  }, 0);

  if (totalPlayers != 10) {
    console.error("invalidformation totalPlayers = ".concat(totalPlayers));
    return false;
  }

  return true;
}

function insertFormation(formation) {
  if (!isFormation(formation)) {
    console.error("insertFormation() isFormation() = false");
    return false;
  }
}

function fourThreeThree() {
  var mainHtml = document.querySelector("main"); // console.log(mainHtml);

  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");
  formationSection.innerHTML = " \n            <div class=\"GK\"><div class=\"dot\">GK</div></div>\n\n            <div class=\"CBL\"><div class=\"dot\">CBL</div></div>\n\n            <div class=\"CBR\"><div class=\"dot\">CBR</div></div>\n\n            <div class=\"LB\"> <div class=\"dot\">LB</div></div>\n\n            <div class=\"RB\"> <div class=\"dot\">RB</div></div>\n\n            <div class=\"MDF\"><div class=\"dot\">MDF</div></div>\n\n            <div class=\"ML\"><div class=\"dot\">ML</div></div>\n\n            <div class=\"MR\"><div class=\"dot\">MR</div></div>\n\n            <div class=\"STM\"><div class=\"dot\">STM</div></div>\n\n            <div class=\"FWR\"><div class=\"dot\">FWR</div></div>\n\n            <div class=\"FWL\"><div class=\"dot\">FWL</div></div> \n            ";
  mainHtml.appendChild(formationSection);
}

fourThreeThree();

function fourFourTwo() {} // divs.forEach(div => (div.innerHTML))
// function main()
// {
// }