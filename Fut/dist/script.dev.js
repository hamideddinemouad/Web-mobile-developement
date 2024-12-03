"use strict";

function fourThreeThreeDefault(jsonArrayFttd) {
  var fttdPlayerArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // console.log("fttdplayerarray"+ fttdPlayerArray);
  var storedFormation = JSON.parse(localStorage.getItem("fourfourthree"));

  if (storedFormation) {
    fttdPlayerArray = storedFormation;
  }

  var mainHtml = document.querySelector("main");
  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");

  function playerInMatch(player, operation) {
    if (operation > 0) {
      // console.log("operation")
      fttdPlayerArray.push(player); // console.log(fttdPlayerArray);

      return;
    }

    fttdPlayerArray = fttdPlayerArray.filter(function (playerinarr) {
      return playerinarr !== player;
    });
  }

  var func = playerInMatch;
  var playerAddedArr = [];

  function playerAdded(player) {
    playerAddedArr.push(player);
  }

  var funcDupli = playerAdded;
  formationSection.innerHTML = "\n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n            \n            <div class=\"CBL\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"CBR\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), " </div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"ML\">").concat(fillpositionrand("CML", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"MR\">").concat(fillpositionrand("CMR", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"STM\">").concat(fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"FWR\">").concat(fillpositionrand("RW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"FWL\">").concat(fillpositionrand("LW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            ");
  localStorage.setItem("fourfourthree", JSON.stringify(fttdPlayerArray));
  mainHtml.appendChild(formationSection);
  var dot = document.querySelectorAll(".dot");
  Array.from(dot).forEach(function (doty) {
    doty.addEventListener("click", function () {
      //dot clicked -takes you to players - player clicked change it in the array of the formation
      //rerender the formation array again
      //show all players with that pos
      //pos clicked change it with formation
      //update formation
      //rerender it
      formationSection.style.display = "none";
      var positionDot = doty.innerText; // console.log(positionDot);

      renderPlayerModal(showAllPos(positionDot, jsonArrayFttd, fttdPlayerArray), doty.parentElement.className);
      var dotsInModal = document.querySelectorAll(".modal .dot");
      document.querySelector(".modal").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      Array.from(dotsInModal).forEach(function (dotyModal) {
        dotyModal.addEventListener("click", function () {
          // console.log("clicked");
          var playerNameInFormation = doty.id.replace("-dot", ""); // console.log(playerName);

          fttdPlayerArray = fttdPlayerArray.filter(function (obj) {
            return obj.name !== playerNameInFormation;
          });
          var PlayerNameInModal = dotyModal.id.replace("-dot", ""); // console.log(fttdPlayerArray);

          var objtofind = jsonArrayFttd.find(function (objJson) {
            return objJson.name === PlayerNameInModal;
          }); // console.log(objtofind);

          fttdPlayerArray.push(objtofind);
          document.querySelector(".modal").remove(); // console.log(fttdPlayerArray);

          formationSection.remove();
          localStorage.setItem("fourfourthree", JSON.stringify(fttdPlayerArray));
          fourThreeThreeDefault(jsonArrayFttd, fttdPlayerArray); // console.log(doty.id);
        });
      });
    });
  });
  return fttdPlayerArray;
}

function fillpositionrand(posStr, jsonArrayFpr, alreadyInMatchArr, theFunc, playersArrDup, funcDuplicate) {
  var player_found;
  var addedplayers = 0;

  if (alreadyInMatchArr.length !== 11) {
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
          theFunc(player_found, 1); // console.log("pushedplayer")
          // console.log(player_found);

          return "break";
        } // console.log("condition not met");

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
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop2 = function _loop2() {
        var player = _step2.value;

        // console.log(alreadyInMatchArr);
        // let  playerinmatch = document.querySelector(`.formation`)
        // console.log(playerinmatch);
        if (posStr === player.position && !playersArrDup.some(function (playerInArr) {
          return player.name === playerInArr.name;
        })) {
          // console.log("condition met")
          player_found = player;
          funcDuplicate(player_found);
          return "break";
        }
      };

      for (var _iterator2 = alreadyInMatchArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ret2 = _loop2();

        if (_ret2 === "break") break;
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
  }

  var playersBadge = "\n                <div id=\"".concat(player_found.name, "\" class=\"playerCard\">\n                <div class=\"rating\"> <span class=\"ratingnum\">").concat(player_found.rating, "</span> <span class=\"position\">").concat(player_found.position, "</span></div>\n                <div class=\"ppicture\"><img src=\"").concat(player_found.photo, "\" alt=\"\"></div>\n                <div class=\"pname\">").concat(player_found.name, "</div>\n                <div class=\"PAC\">PAC ").concat(player_found.pace, "</span></div>\n                <div class=\"SHO\">SHO ").concat(player_found.shooting, "</div>\n                <div class=\"PAS\">PAS ").concat(player_found.passing, "</div>\n                <div class=\"DRI\">DRI ").concat(player_found.dribbling, "</div>\n                <div class=\"DEF\">DEF ").concat(player_found.defending, "</div>\n                <div class=\"PHY\">PHY ").concat(player_found.physical, "</div>\n                <div class=\"logos\">\n                <div class=\"flag\"><img  src=\"").concat(player_found.flag, "\" alt=\"\"></div>\n                <div class=\"club\"><img  src=\"").concat(player_found.logo, "\" alt=\"\"></div>\n                </div>\n            </div>\n            <div id=\"").concat(player_found.name, "-dot\" class=\"dot\">").concat(player_found.position, "</div>\n            ");
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

function renderPlayerModal(arrplayersRpm, pos, jsonArr, fttdPlayerArray) {
  var main = document.querySelector("main");
  var modal = document.createElement("div");
  modal.className = "modal";
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arrplayersRpm[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var player = _step3.value;
      var playersBadge = document.createElement("div");
      playersBadge.classList.add(pos);
      playersBadge.innerHTML = "\n            <div id=\"".concat(player.name, "\" class=\"playerCard\">\n            <div class=\"rating\"> <span class=\"ratingnum\">").concat(player.rating, "</span> <span class=\"position\">").concat(player.position, "</span></div>\n            <div class=\"ppicture\"><img src=\"").concat(player.photo, "\" alt=\"\"></div>\n            <div class=\"pname\">").concat(player.name, "</div>\n            <div class=\"PAC\">PAC ").concat(player.pace, "</span></div>\n            <div class=\"SHO\">SHO ").concat(player.shooting, "</div>\n            <div class=\"PAS\">PAS ").concat(player.passing, "</div>\n            <div class=\"DRI\">DRI ").concat(player.dribbling, "</div>\n            <div class=\"DEF\">DEF ").concat(player.defending, "</div>\n            <div class=\"PHY\">PHY ").concat(player.physical, "</div>\n            <div class=\"logos\">\n            <div class=\"flag\"><img  src=\"").concat(player.flag, "\" alt=\"\"></div>\n            <div class=\"club\"><img  src=\"").concat(player.logo, "\" alt=\"\"></div>\n            </div>\n            </div>\n            <div id=\"").concat(player.name, "-dot\" class=\"dot\">").concat(player.position, "</div>\n        "); // playerinmodal = querySelector(".modal ")

      modal.appendChild(playersBadge);
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

  var quit = document.createElement("button");
  quit.className = "quit";
  quit.innerText = "BACK";
  quit.addEventListener("click", function () {
    modal.remove();
    document.querySelector(".formation").style.display = "grid";
  });
  modal.appendChild(quit);
  main.appendChild(modal);
}

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
        // console.log("ran");
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

function fourfourtwo(jsonArrayFttd) {
  var fttdPlayerArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // console.log("fttdplayerarray"+ fttdPlayerArray);
  var storedFormation = JSON.parse(localStorage.getItem("fourfourtwo"));

  if (storedFormation) {
    fttdPlayerArray = storedFormation;
  }

  var mainHtml = document.querySelector("main");
  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");

  function playerInMatch(player, operation) {
    if (operation > 0) {
      // console.log("operation")
      fttdPlayerArray.push(player); // console.log(fttdPlayerArray);

      return;
    }

    fttdPlayerArray = fttdPlayerArray.filter(function (playerinarr) {
      return playerinarr !== player;
    });
  }

  var func = playerInMatch;
  var playerAddedArr = [];

  function playerAdded(player) {
    playerAddedArr.push(player);
  }

  var funcDupli = playerAdded;
  formationSection.innerHTML = "\n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n            \n            <div class=\"CBL\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"CBR\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), " </div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"CMR\">").concat(fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"CML\">").concat(fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"ML\">").concat(fillpositionrand("CML", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"MR\">").concat(fillpositionrand("CMR", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"STM\">").concat(fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            ");
  localStorage.setItem("fourfourtwo", JSON.stringify(fttdPlayerArray));
  mainHtml.appendChild(formationSection);
  var dot = document.querySelectorAll(".dot");
  Array.from(dot).forEach(function (doty) {
    doty.addEventListener("click", function () {
      formationSection.style.display = "none";
      var panelMenu = document.querySelector(".control-panel"); // panelMenu.style.display = "none";

      var positionDot = doty.innerText; // console.log(positionDot);

      renderPlayerModal(showAllPos(positionDot, jsonArrayFttd, fttdPlayerArray), doty.parentElement.className);
      var dotsInModal = document.querySelectorAll(".modal .dot");
      document.querySelector(".modal").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      Array.from(dotsInModal).forEach(function (dotyModal) {
        dotyModal.addEventListener("click", function () {
          // console.log("clicked");
          var playerNameInFormation = doty.id.replace("-dot", ""); // console.log(playerName);

          fttdPlayerArray = fttdPlayerArray.filter(function (obj) {
            return obj.name !== playerNameInFormation;
          });
          var PlayerNameInModal = dotyModal.id.replace("-dot", ""); // console.log(fttdPlayerArray);

          var objtofind = jsonArrayFttd.find(function (objJson) {
            return objJson.name === PlayerNameInModal;
          }); // console.log(objtofind);

          fttdPlayerArray.push(objtofind);
          document.querySelector(".modal").remove(); // console.log(fttdPlayerArray);

          var panelMenu = document.querySelector(".control-panel");
          formationSection.remove();
          panelMenu.style.display = "block";
          localStorage.setItem("fourfourtwo", JSON.stringify(fttdPlayerArray));
          fourfourtwo(jsonArrayFttd, fttdPlayerArray); // console.log(doty.id);
        });
      });
    });
  });
  return fttdPlayerArray;
}

function threefourthree(jsonArrayFttd) {
  var fttdPlayerArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // console.log("fttdplayerarray"+ fttdPlayerArray);
  var storedFormation = JSON.parse(localStorage.getItem("threethreefour"));

  if (storedFormation) {
    fttdPlayerArray = storedFormation;
  }

  var mainHtml = document.querySelector("main");
  var formationSection = document.createElement("section");
  formationSection.classList.add("formation");

  function playerInMatch(player, operation) {
    if (operation > 0) {
      // console.log("operation")
      fttdPlayerArray.push(player); // console.log(fttdPlayerArray);

      return;
    }

    fttdPlayerArray = fttdPlayerArray.filter(function (playerinarr) {
      return playerinarr !== player;
    });
  }

  var func = playerInMatch;
  var playerAddedArr = [];

  function playerAdded(player) {
    playerAddedArr.push(player);
  }

  var funcDupli = playerAdded;
  formationSection.innerHTML = "\n            <div class=\"GK\">".concat(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n            \n            <div class=\"CBC\">").concat(fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"LB\">").concat(fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), " </div>\n\n            <div class=\"RB\"> ").concat(fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"MDF\">").concat(fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"CML\">").concat(fillpositionrand("CML", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"CMR\">").concat(fillpositionrand("CMR", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"STL\">").concat(fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"STR\">").concat(fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"FWR\">").concat(fillpositionrand("RW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            <div class=\"FWL\">").concat(fillpositionrand("LW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli), "</div>\n\n            ");
  localStorage.setItem("threethreefour", JSON.stringify(fttdPlayerArray));
  mainHtml.appendChild(formationSection);
  var dot = document.querySelectorAll(".dot");
  Array.from(dot).forEach(function (doty) {
    doty.addEventListener("click", function () {
      formationSection.style.display = "none";
      var panelMenu = document.querySelector(".control-panel"); // panelMenu.style.display = "none";

      var positionDot = doty.innerText; // console.log(positionDot);

      renderPlayerModal(showAllPos(positionDot, jsonArrayFttd, fttdPlayerArray), doty.parentElement.className);
      var dotsInModal = document.querySelectorAll(".modal .dot");
      document.querySelector(".modal").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      Array.from(dotsInModal).forEach(function (dotyModal) {
        dotyModal.addEventListener("click", function () {
          // console.log("clicked");
          var playerNameInFormation = doty.id.replace("-dot", ""); // console.log(playerName);

          fttdPlayerArray = fttdPlayerArray.filter(function (obj) {
            return obj.name !== playerNameInFormation;
          });
          var PlayerNameInModal = dotyModal.id.replace("-dot", ""); // console.log(fttdPlayerArray);

          var objtofind = jsonArrayFttd.find(function (objJson) {
            return objJson.name === PlayerNameInModal;
          }); // console.log(objtofind);

          fttdPlayerArray.push(objtofind);
          document.querySelector(".modal").remove(); // console.log(fttdPlayerArray);

          var panelMenu = document.querySelector(".control-panel");
          formationSection.remove();
          panelMenu.style.display = "block";
          localStorage.setItem("threethreefour", JSON.stringify(fttdPlayerArray));
          threefourthree(jsonArrayFttd, fttdPlayerArray); // console.log(doty.id);
        });
      });
    });
  });
  return fttdPlayerArray;
}

function main() {
  var jsonArr, database, fft, ftt, addpButton, tft;
  return regeneratorRuntime.async(function main$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          database = JSON.parse(localStorage.getItem("Database"));

          if (database) {
            _context2.next = 8;
            break;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(Apicons());

        case 4:
          jsonArr = _context2.sent;
          localStorage.setItem("Database", JSON.stringify(jsonArr));
          _context2.next = 9;
          break;

        case 8:
          jsonArr = database;

        case 9:
          // console.log(database);
          // fourThreeThreeDefault(jsonArr);
          fft = document.querySelector("#fft");
          fft.addEventListener("click", function () {
            var formationsection = document.querySelector(".formation");

            if (formationsection) {
              formationsection.remove();
            }

            fourfourtwo(jsonArr);
          });
          ftt = document.querySelector("#ftt");
          ftt.addEventListener("click", function () {
            var formationsection = document.querySelector(".formation");

            if (formationsection) {
              formationsection.remove();
            }

            fourThreeThreeDefault(jsonArr);
          });
          document.getElementById("the-form").addEventListener("submit", function (normalSub) {
            normalSub.preventDefault();
            var playerData = {
              name: document.querySelector("#player-name").value,
              position: document.querySelector("#player-position").value,
              club: document.querySelector("#player-club").value,
              nationality: document.querySelector("#player-nationality").value,
              rating: document.querySelector("#player-rating").value,
              pace: document.querySelector("#player-pace").value,
              dribbling: document.querySelector("#player-dribbling").value,
              shooting: document.querySelector("#player-shooting").value,
              passing: document.querySelector("#player-passing").value,
              defending: document.querySelector("#player-defending").value,
              physical: document.querySelector("#player-physical").value,
              photo: document.querySelector("#player-photo").value,
              flag: document.querySelector("#player-flag").value,
              logo: document.querySelector("#player-logo").value
            };
            database.push(playerData);
            localStorage.setItem("Database", JSON.stringify(database));
            alert("saved!");
          });
          addpButton = document.querySelector("#custom");
          addpButton.addEventListener("click", function () {
            document.querySelector("#the-form").scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            }); // document.querySelector(".control-panel").style.display = "none";
          });
          tft = document.querySelector("#tft");
          tft.addEventListener("click", function () {
            var formationsection = document.querySelector(".formation");

            if (formationsection) {
              formationsection.remove();
            }

            threefourthree(jsonArr);
          });

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  });
}

main();