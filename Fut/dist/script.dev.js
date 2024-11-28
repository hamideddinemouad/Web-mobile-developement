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

function fourThreeThreeDefault(jsonArrayFttd) {
  var mainHtml = document.querySelector("main"); // console.log(mainHtml);

  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");
  formationSection.innerHTML = " \n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd), "<div class=\"dot\">GK</div></div>\n\n            <div class=\"CBL\">").concat(fillpositionrand("CB", jsonArrayFttd), "<div class=\"dot\">CBL</div></div>\n\n            <div class=\"CBR\">").concat(fillpositionrand("CB", jsonArrayFttd), "<div class=\"dot\">CBR</div></div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd), " <div class=\"dot\">LB</div></div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd), "<div class=\"dot\">RB</div></div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">MDF</div></div>\n\n            <div class=\"ML\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">ML</div></div>\n\n            <div class=\"MR\">").concat(fillpositionrand("CM", jsonArrayFttd), "<div class=\"dot\">MR</div></div>\n\n            <div class=\"STM\">").concat(fillpositionrand("ST", jsonArrayFttd), "<div class=\"dot\">STM</div></div>\n\n            <div class=\"FWR\">").concat(fillpositionrand("RW", jsonArrayFttd), "<div class=\"dot\">FWR</div></div>\n\n            <div class=\"FWL\">").concat(fillpositionrand("LW", jsonArrayFttd), "<div class=\"dot\">FWL</div></div> \n            ");
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
        console.log(player_found);
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

  console.log("from fillpositionrand() player_found =" + player_found);
  var playersBadge = "\n                <div class=\"playerCard\">\n                <div class=\"rating\"> <span class=\"ratingnum\">".concat(player_found.rating, "</span> <span class=\"position\">").concat(player_found.position, "</span></div>\n                <div class=\"ppicture\"><img src=\"").concat(player_found.photo, "\" alt=\"\"></div>\n                <div class=\"pname\">").concat(player_found.name, "</div>\n                <div class=\"PAC\">PAC ").concat(player_found.pace, "</span></div>\n                <div class=\"SHO\">SHO ").concat(player_found.shooting, "</div>\n                <div class=\"PAS\">PAS ").concat(player_found.passing, "</div>\n                <div class=\"DRI\">DRI ").concat(player_found.dribbling, "</div>\n                <div class=\"DEF\">DEF ").concat(player_found.defending, "</div>\n                <div class=\"PHY\">PHY ").concat(player_found.physical, "</div>\n                <div class=\"logos\">\n                <div class=\"flag\"><img  src=\"").concat(player_found.flag, "\" alt=\"\"></div>\n                <div class=\"logo\"><img class=\"logo\" src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                <div class=\"club\"><img  src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                </div>\n            </div>\n            ");
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

function main() {
  var jsonArr;
  return regeneratorRuntime.async(function main$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Apicons());

        case 2:
          jsonArr = _context2.sent;
          console.log(jsonArr);
          fourThreeThreeDefault(jsonArr); // fillpositionrand("CB", jsonArray);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

main();