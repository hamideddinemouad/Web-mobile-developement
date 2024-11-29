"use strict";

{
  /* <div class="dot">CDM</div> */
}

function insertDots() {
  var divs = document.querySelectorAll("section div"); // let dot = document.createElement('div');

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

function fourThreeThreeDefault(jsonArrayFttd) {
  var mainHtml = document.querySelector("main");
  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");
  formationSection.innerHTML = "\n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd), "<div class=\"dot\">GK</div></div>\n\n            <div class=\"CBL\">").concat(fillpositionrand("CB", jsonArrayFttd), "<div class=\"dot\">CB</div></div>\n\n            <div class=\"CBR\">").concat(fillpositionrand("CB", jsonArrayFttd), "<div class=\"dot\">CB</div></div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd), " <div class=\"dot\">LB</div></div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd), "<div class=\"dot\">RB</div></div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">CM</div></div>\n\n            <div class=\"ML\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">CM</div></div>\n\n            <div class=\"MR\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">CM</div></div>\n\n            <div class=\"STM\">").concat(fillpositionrand("ST", jsonArrayFttd), "<div class=\"dot\">ST</div></div>\n\n            <div class=\"FWR\">").concat(fillpositionrand("RW", jsonArrayFttd), "<div class=\"dot\">RW</div></div>\n\n            <div class=\"FWL\">").concat(fillpositionrand("LW", jsonArrayFttd), "<div class=\"dot\">LW</div></div>\n            \n\n            ");
  mainHtml.appendChild(formationSection);
}

function fillpositionrand(posStr, jsonArrayFpr) {
  var player_found;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = jsonArrayFpr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var player = _step.value;

      if (player.position === posStr) {
        player_found = player;
        break;
      }
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

  var playersBadge = "\n                <div class=\"playerCard\">\n                <div class=\"rating\"> <span class=\"ratingnum\">".concat(player_found.rating, "</span> <span class=\"position\">").concat(player_found.position, "</span></div>\n                <div class=\"ppicture\"><img src=\"").concat(player_found.photo, "\" alt=\"\"></div>\n                <div class=\"pname\">").concat(player_found.name, "</div>\n                <div class=\"PAC\">PAC ").concat(player_found.pace, "</span></div>\n                <div class=\"SHO\">SHO ").concat(player_found.shooting, "</div>\n                <div class=\"PAS\">PAS ").concat(player_found.passing, "</div>\n                <div class=\"DRI\">DRI ").concat(player_found.dribbling, "</div>\n                <div class=\"DEF\">DEF ").concat(player_found.defending, "</div>\n                <div class=\"PHY\">PHY ").concat(player_found.physical, "</div>\n                <div class=\"logos\">\n                <div class=\"flag\"><img  src=\"").concat(player_found.flag, "\" alt=\"\"></div>\n                <div class=\"logo\"><img class=\"logo\" src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                <div class=\"club\"><img  src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                </div>\n            </div>\n            ");
  return playersBadge;
}

function checkdot() {
  console.log(positionDot);
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
  var modal = document.querySelector(".modal");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrplayersRpm[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var player = _step2.value;
      var playersBadge = document.createElement("div");
      playersBadge.classList.add(pos);
      playersBadge.innerHTML = "\n            <div class=\"playerCard\">\n            <div class=\"rating\"> <span class=\"ratingnum\">".concat(player.rating, "</span> <span class=\"position\">").concat(player.position, "</span></div>\n            <div class=\"ppicture\"><img src=\"").concat(player.photo, "\" alt=\"\"></div>\n            <div class=\"pname\">").concat(player.name, "</div>\n            <div class=\"PAC\">PAC ").concat(player.pace, "</span></div>\n            <div class=\"SHO\">SHO ").concat(player.shooting, "</div>\n            <div class=\"PAS\">PAS ").concat(player.passing, "</div>\n            <div class=\"DRI\">DRI ").concat(player.dribbling, "</div>\n            <div class=\"DEF\">DEF ").concat(player.defending, "</div>\n            <div class=\"PHY\">PHY ").concat(player.physical, "</div>\n            <div class=\"logos\">\n            <div class=\"flag\"><img  src=\"").concat(player.flag, "\" alt=\"\"></div>\n            <div class=\"logo\"><img class=\"logo\" src=\"").concat(player.logo, "\" alt=\"\"></div>\n            <div class=\"club\"><img  src=\"").concat(player.logo, "\" alt=\"\"></div>\n            </div>\n            </div>\n            <div class=\"dotm\">").concat(player.position, "</div>\n        "); // playerinmodal = querySelector(".modal ")

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

  var dotinmodal = document.querySelectorAll(".dotm");
  Array.from(dotinmodal).forEach(function (dot) {
    dot.addEventListener("click", function () {
      // element.parentNode.removeChild(element);
      var formationSection = document.querySelector(".formation");
      var captured = document.querySelector(".formation .".concat(pos)); //         // console.log("captured below")
      // captured.parentNode.removeChild(captured);
      //         // console.log(captured);

      captured.remove();
      var modal = document.querySelector(".modal");
      var cardInModal = document.querySelector(".modal .".concat(pos)); //         console.log("cardinModal" +cardInModal);
      //         // console.log("cardinModal" + cardInModal);

      formationSection.appendChild(cardInModal);
      formationSection.style.display = "grid";
      modal.style.display = "none";
      dot.className = "dot";
    });
  });
} //     let dot = document.querySelectorAll(".dot");
//     Array.from(dot).forEach(doty => 
//         {
//             doty.addEventListener("click", ()=>
//             {
//                 let formationSection = document.querySelector(".formation")
//                 let modal = document.querySelector(".modal");
//                 formationSection.style.display = "none";
//                 modal.style.display = "flex";
//                 positionDot = doty.innerText;
//                 // console.log("doty parent" + doty.parentElement.className);
//                 renderPlayerModal(showAllPos(positionDot, arrplayersRpm), doty.parentElement.className);
//                 // showAllPos(positionDot, jsonArr);
//                 // console.log(positionDot);
//                 // console.log(formationSection);
//             })
//         }
//         )
// }
// )
//     })
// })}


function showAllPos(posStr, jsonArrSap) {
  var arrplayers = [];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = jsonArrSap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var player = _step3.value;

      if (player.position === posStr) {
        arrplayers.push(player);
      }
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

  return arrplayers;
}

function main() {
  var jsonArr, positionDot, dot;
  return regeneratorRuntime.async(function main$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Apicons());

        case 2:
          jsonArr = _context2.sent;
          fourThreeThreeDefault(jsonArr);
          dot = document.querySelectorAll(".dot");
          Array.from(dot).forEach(function (doty) {
            doty.addEventListener("click", function () {
              var formationSection = document.querySelector(".formation");
              var modal = document.querySelector(".modal");
              formationSection.style.display = "none";
              modal.style.display = "flex";
              positionDot = doty.innerText; // console.log("doty parent" + doty.parentElement.className);

              renderPlayerModal(showAllPos(positionDot, jsonArr), doty.parentElement.className); // showAllPos(positionDot, jsonArr);
              // console.log(positionDot);
              // console.log(formationSection);
            });
          }); // fillpositionrand("CB", jsonArray);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

main();