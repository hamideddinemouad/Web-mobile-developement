"use strict";

function repeat(string, x) {
  for (var i = 0; i < x; i++) {
    console.log(string);
  }
}

function titleCase(string) {
  var array = string.split('');

  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      array[i].toUpperCase(array[i]);
    }
  }
}

titleCase("hey");