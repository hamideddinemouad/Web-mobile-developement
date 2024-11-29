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
  formationSection.innerHTML = "\n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd), "<div class=\"dot\">GK</div></div>\n\n            <div class=\"CBL\">").concat(fillpositionrand("CB", jsonArrayFttd), "<div class=\"dot\">CB</div></div>\n\n            <div class=\"CBR\">").concat(fillpositionrand("CB", jsonArrayFttd), "<div class=\"dot\">CB</div></div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd), " <div class=\"dot\">LB</div></div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd), "<div class=\"dot\">RB</div></div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">CM</div></div>\n\n            <div class=\"ML\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">CM</div></div>\n\n            <div class=\"MR\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">CM</div></div>\n\n            <div class=\"STM\">").concat(fillpositionrand("ST", jsonArrayFttd), "<div class=\"dot\">ST</div></div>\n\n            <div class=\"FWR\">").concat(fillpositionrand("RW", jsonArrayFttd), "<div class=\"dot\">RW</div></div>\n\n            <div class=\"FWL\">").concat(fillpositionrand("LW", jsonArrayFttd), "<div  id=\"").concat(player.name, "\"class=\"dot\">LW</div></div>\n            \n\n            ");
  mainHtml.appendChild(formationSection);
}

function fillpositionrand(posStr, jsonArrayFpr) {
  var player_found;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = jsonArrayFpr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _player = _step.value;

      if (_player.position === posStr) {
        player_found = _player;
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

  var playersBadge = "\n                <div id=\"".concat(player_found.name, "\" class=\"playerCard\">\n                <div class=\"rating\"> <span class=\"ratingnum\">").concat(player_found.rating, "</span> <span class=\"position\">").concat(player_found.position, "</span></div>\n                <div class=\"ppicture\"><img src=\"").concat(player_found.photo, "\" alt=\"\"></div>\n                <div class=\"pname\">").concat(player_found.name, "</div>\n                <div class=\"PAC\">PAC ").concat(player_found.pace, "</span></div>\n                <div class=\"SHO\">SHO ").concat(player_found.shooting, "</div>\n                <div class=\"PAS\">PAS ").concat(player_found.passing, "</div>\n                <div class=\"DRI\">DRI ").concat(player_found.dribbling, "</div>\n                <div class=\"DEF\">DEF ").concat(player_found.defending, "</div>\n                <div class=\"PHY\">PHY ").concat(player_found.physical, "</div>\n                <div class=\"logos\">\n                <div class=\"flag\"><img  src=\"").concat(player_found.flag, "\" alt=\"\"></div>\n                <div class=\"logo\"><img class=\"logo\" src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                <div class=\"club\"><img  src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                </div>\n            </div>\n            ");
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
      var _player2 = _step2.value;
      var playersBadge = document.createElement("div");
      playersBadge.classList.add(pos);
      playersBadge.innerHTML = "\n            <div \"class=\"playerCard\">\n            <div class=\"rating\"> <span class=\"ratingnum\">".concat(_player2.rating, "</span> <span class=\"position\">").concat(_player2.position, "</span></div>\n            <div class=\"ppicture\"><img src=\"").concat(_player2.photo, "\" alt=\"\"></div>\n            <div class=\"pname\">").concat(_player2.name, "</div>\n            <div class=\"PAC\">PAC ").concat(_player2.pace, "</span></div>\n            <div class=\"SHO\">SHO ").concat(_player2.shooting, "</div>\n            <div class=\"PAS\">PAS ").concat(_player2.passing, "</div>\n            <div class=\"DRI\">DRI ").concat(_player2.dribbling, "</div>\n            <div class=\"DEF\">DEF ").concat(_player2.defending, "</div>\n            <div class=\"PHY\">PHY ").concat(_player2.physical, "</div>\n            <div class=\"logos\">\n            <div class=\"flag\"><img  src=\"").concat(_player2.flag, "\" alt=\"\"></div>\n            <div class=\"logo\"><img class=\"logo\" src=\"").concat(_player2.logo, "\" alt=\"\"></div>\n            <div class=\"club\"><img  src=\"").concat(_player2.logo, "\" alt=\"\"></div>\n            </div>\n            </div>\n            <div id=\"").concat(_player2.name, "class=\"dot\">").concat(_player2.position, "</div>\n        "); // playerinmodal = querySelector(".modal ")

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

  setUpListeners(modal);
}

function findTextContentHtml(playerFtch) {
  console.log(playerFtch.id);
}

function setUpListeners(idSul) {
  //the dot clicked must give us the name of the players which is attached to it
  //why may i ask ?
  var dots = document.querySelectorAll(".modal .dot");
  dots = Array.from(dots);
  console.log(dots);
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop = function _loop() {
      var dot = _step3.value;
      dot.addEventListener("click", function () {
        console.log(dot.closest(".pname"));
      });
    };

    for (var _iterator3 = dots[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop();
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
} // let dotinmodal = document.querySelectorAll(".dotm");
// Array.from(dotinmodal).forEach(dot => 
// {
//     dot.addEventListener("click", () =>
//     {
//         // element.parentNode.removeChild(element);
//         let formationSection = document.querySelector(".formation");
//         let captured = document.querySelector(`.formation .${pos}`)
// //         // console.log("captured below")
//         // captured.parentNode.removeChild(captured);
// //         // console.log(captured);
//         captured.remove();
//         let modal = document.querySelector(".modal")
//         let cardInModal = document.querySelector(`.modal .${pos}`);
// //         console.log("cardinModal" +cardInModal);
// //         // console.log("cardinModal" + cardInModal);
//         formationSection.appendChild(cardInModal);
//         formationSection.style.display = "grid";
//         modal.style.display = "none";
//         dot.className = "dot"
//     })})
// }
//     let dot = document.querySelectorAll(".dot");
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
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = jsonArrSap[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _player3 = _step4.value;

      if (_player3.position === posStr) {
        arrplayers.push(_player3);
      }
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