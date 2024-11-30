"use strict";

{}
/* <div class="dot">CDM</div> */
// let arrayOfPlayerforFormation = [];
// insertDots();
// function playerInMatch(localFormationArray, playerName)
// {
//     localFormationArray.push(playerName);
//     return(localFormationArray);
// }

function checkIfPlayerInArray(localFormationArray, playerName) {
  // console.log(localFormationArray);
  if (localFormationArray.includes(playerName)) {
    return false;
  }

  return true;
}

function fourThreeThreeDefault(jsonArrayFttd) {
  var mainHtml = document.querySelector("main");
  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");
  var fttdPlayerArray = [];

  function playerInMatch(player) {
    fttdPlayerArray.push(player);
  }

  var func = playerInMatch;
  formationSection.innerHTML = "\n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func), "</div>\n            \n            <div class=\"CBL\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"CBR\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func), " </div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CM", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"ML\">").concat(fillpositionrand("CM", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"MR\">").concat(fillpositionrand("CM", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"STM\">").concat(fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"FWR\">").concat(fillpositionrand("RW", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n            <div class=\"FWL\">").concat(fillpositionrand("LW", jsonArrayFttd, fttdPlayerArray, func), "</div>\n\n\n            ");
  mainHtml.appendChild(formationSection);
  return fttdPlayerArray;
}

function fillpositionrand(posStr, jsonArrayFpr, alreadyInMatchArr, theFunc) {
  var player_found;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var player = _step.value;

      if (player.position === posStr && !alreadyInMatchArr.some(function (playInArr) {
        return playInArr.name === player.name;
      })) {
        player_found = player;
        theFunc(player_found);
        return "break";
      }
    };

    for (var _iterator = jsonArrayFpr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop();

      if (_ret === "break") break;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var playersBadge = "\n                <div id=\"".concat(player_found.name, "\" class=\"playerCard\">\n                <div class=\"rating\"> <span class=\"ratingnum\">").concat(player_found.rating, "</span> <span class=\"position\">").concat(player_found.position, "</span></div>\n                <div class=\"ppicture\"><img src=\"").concat(player_found.photo, "\" alt=\"\"></div>\n                <div class=\"pname\">").concat(player_found.name, "</div>\n                <div class=\"PAC\">PAC ").concat(player_found.pace, "</span></div>\n                <div class=\"SHO\">SHO ").concat(player_found.shooting, "</div>\n                <div class=\"PAS\">PAS ").concat(player_found.passing, "</div>\n                <div class=\"DRI\">DRI ").concat(player_found.dribbling, "</div>\n                <div class=\"DEF\">DEF ").concat(player_found.defending, "</div>\n                <div class=\"PHY\">PHY ").concat(player_found.physical, "</div>\n                <div class=\"logos\">\n                <div class=\"flag\"><img  src=\"").concat(player_found.flag, "\" alt=\"\"></div>\n                <div class=\"logo\"><img class=\"logo\" src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                <div class=\"club\"><img  src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                </div>\n            </div>\n            <div id=\"").concat(player_found.name, "-dot\" class=\"dot\">").concat(player_found.position, "</div>\n            ");
  return playersBadge;
}

function Apicons() {
  var fetched, converted;
  return regeneratorRuntime.async(function Apicons$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/players"));

        case 2:
          fetched = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(fetched.json());

        case 5:
          converted = _context.sent;
          return _context.abrupt("return", converted);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderPlayerModal(arrplayersRpm, pos) {
  var main = document.querySelector("main");
  var modal = document.createElement("div");
  modal.className = "modal";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrplayersRpm[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var player = _step2.value;
      var playersBadge = document.createElement("div");
      playersBadge.classList.add(pos);
      playersBadge.innerHTML = "\n            <div id=\"".concat(player.name, "\" class=\"playerCard\">\n            <div class=\"rating\"> <span class=\"ratingnum\">").concat(player.rating, "</span> <span class=\"position\">").concat(player.position, "</span></div>\n            <div class=\"ppicture\"><img src=\"").concat(player.photo, "\" alt=\"\"></div>\n            <div class=\"pname\">").concat(player.name, "</div>\n            <div class=\"PAC\">PAC ").concat(player.pace, "</span></div>\n            <div class=\"SHO\">SHO ").concat(player.shooting, "</div>\n            <div class=\"PAS\">PAS ").concat(player.passing, "</div>\n            <div class=\"DRI\">DRI ").concat(player.dribbling, "</div>\n            <div class=\"DEF\">DEF ").concat(player.defending, "</div>\n            <div class=\"PHY\">PHY ").concat(player.physical, "</div>\n            <div class=\"logos\">\n            <div class=\"flag\"><img  src=\"").concat(player.flag, "\" alt=\"\"></div>\n            <div class=\"logo\"><img class=\"logo\" src=\"").concat(player.logo, "\" alt=\"\"></div>\n            <div class=\"club\"><img  src=\"").concat(player.logo, "\" alt=\"\"></div>\n            </div>\n            </div>\n            <div id=\"").concat(player.name, "-dot\" class=\"dot\">").concat(player.position, "</div>\n        "); // playerinmodal = querySelector(".modal ")

      modal.appendChild(playersBadge);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  main.appendChild(modal);
  setUpListeners(pos, modal);
}

function setUpListeners(pos, formationArr) {
  var dots = document.querySelectorAll(".modal .dot");
  dots = Array.from(dots);

  function insidemodalevent(dot) {
    function outsidemodalevent(dot) {
      var formationSection = document.querySelector(".formation");
      formationSection.style.display = "none";
      positionDot = dot.innerText;
      renderPlayerModal(showAllPos(positionDot, jsonArr, fttdPlayerArray), dot.parentElement.className);
    }

    var formationSection = document.querySelector(".formation");
    var modal = document.querySelector(".modal");
    var playerInFormation = document.querySelector(".formation .".concat(pos));
    playerInFormation.remove();
    var formation = document.querySelector(".formation");
    formation.appendChild(dot.parentElement);
    console.log("modal is below");
    console.log(modal);
    modal.remove();
    formationSection.style.display = "grid";
    dot.removeEventListener("click", function () {
      return insidemodalevent();
    });
    dot.addEventListener("click", function () {
      return outsidemodalevent(dot);
    });
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop2 = function _loop2() {
      var dot = _step3.value;
      dot.addEventListener("click", function () {
        return insidemodalevent(dot);
      });
    };

    for (var _iterator3 = dots[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
} //     let formationSection = document.querySelector(".formation");
//     let modal = document.querySelector(".modal");
//     console.log(dot.id);
//     let playerInFormation = document.querySelector(`.formation .${pos}`);
//     playerInFormation.remove();
//     // let karim = document.querySelector('#Karim Benzema')
//     // console.log();
//     // let playerReplaceQ = document.querySelector(`#${playerReplace}`);
//     // console.log("player replace q" + playerReplaceQ);
//     // formationSection.appendChild(playerReplaceQ);
//     let formation = document.querySelector(`.formation`);
//     // console.log(dot);
//     formation.appendChild(dot.parentElement);
//     console.log("modal is below")
//     console.log(modal);
//     modal.remove();
//     formationSection.style.display = "grid";
//     dot.removeEventListener();
//     dot.addEventListener("click", ()=>
//         {
//             let formationSection = document.querySelector(".formation")
//             // let modal = document.querySelector(".modal");
//             formationSection.style.display = "none";
//             // modal.style.display = "flex";
//             positionDot = dot.innerText;
//             // console.log("doty parent" + doty.parentElement.className);
//             // console.log(doty.id);
//             // console.log(doty.parentElement.className);
//             // console.log("event 2 ran");
//             renderPlayerModal(showAllPos(positionDot, jsonArr, fttdPlayerArray), dot.parentElement.className);
//             // showAllPos(positionDot, jsonArr);
//             // console.log(positionDot);
//             // console.log(formationSection);
//         })
//     // modal.remove();
//     // console.log(playerInFormation);
//     // console.log(`.formation #${dot.id}`);
// })      


function showAllPos(posStr, jsonArrSap, fttdPlayerArray) {
  var arrplayers = [];
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    var _loop3 = function _loop3() {
      var player = _step4.value;

      if (player.position === posStr && !fttdPlayerArray.some(function (playerInArr) {
        return playerInArr.name === player.name;
      })) {
        arrplayers.push(player);
      }
    };

    for (var _iterator4 = jsonArrSap[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      _loop3();
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return arrplayers;
}

function main() {
  var jsonArr, positionDot, fttdPlayerArray, dot, test;
  return regeneratorRuntime.async(function main$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Apicons());

        case 2:
          jsonArr = _context2.sent;
          // genRandPlayers(jsonArr);
          fttdPlayerArray = fourThreeThreeDefault(jsonArr);
          dot = document.querySelectorAll(".dot");
          test = 0;
          Array.from(dot).forEach(function (doty) {
            doty.addEventListener("click", function () {
              var formationSection = document.querySelector(".formation"); // let modal = document.querySelector(".modal");

              formationSection.style.display = "none"; // modal.style.display = "flex";

              positionDot = doty.innerText; // console.log("doty parent" + doty.parentElement.className);
              // console.log(doty.id);
              // console.log(doty.parentElement.className);

              renderPlayerModal(showAllPos(positionDot, jsonArr, fttdPlayerArray), doty.parentElement.className); // showAllPos(positionDot, jsonArr);
              // console.log(positionDot);
              // console.log(formationSection);
            });
          }); // fillpositionrand("CB", jsonArray);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
} // the_f();


main();