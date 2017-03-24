"use strict";

var values = [[1, "rt"], [2, true], [3, false], [4, {}], [5, 3], [6, "4"], [7], []];

values.forEach(autoCalc);

function autoCalc(pair) {
  var x = pair[0];
  var y = pair[1];
  logAction(x, y, add);
  logAction(x, y, sub);
  logAction(x, y, multiply);
  logAction(x, y, divide);
  logAction(x, y, divideInteger);
  console.log('\n');
}

function logAction(x, y, func) {
  console.log(x + ' (' + func.name + ') ' + y + ' = ' + func(x, y));
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function divideInteger(x, y) {
  return (x - x % y) / y;
}
