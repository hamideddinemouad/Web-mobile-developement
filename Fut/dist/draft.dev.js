"use strict";

function showAllPos(posStr, jsonArrSap) {
  var arrplayers = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = jsonArrSap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var player = _step.value;

      if (player.position === posStr && checkIfPlayerInFormation(player, jsonArrSap)) {
        arrplayers.push(player);
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

  return arrplayers;
}

function checkIfPlayerInFormation(player, array) {
  if (player in array) {
    console.log("player in array");
    return false;
  }

  console.log("not in arr");
  return true;
}