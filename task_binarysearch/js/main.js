"use strict";

var array = [-5, -2, 2, 3, 5, 7, 8, 10, 12, 15, 30, 40, 90, 120];
var value = 90;
var timers = {};
var BINARY_SEARCH = "binarySearch";
var BINARY_SEARCH_RECURS = "binarySearchRecursion";
binarySearch = timingDecorator(binarySearch, BINARY_SEARCH);
binarySearchRecursion = timingDecorator(binarySearchRecursion, BINARY_SEARCH_RECURS);
logBinarySearch(array, value, binarySearch(array, value), BINARY_SEARCH,
        timers[BINARY_SEARCH]);
logBinarySearch(array, value, binarySearchRecursion(array, value), BINARY_SEARCH_RECURS,
        timers[BINARY_SEARCH_RECURS]);

function binarySearch(array, value) {
  var index = -1;
  var low = 0, high = array.length, middle;
  while (low < high) {
    middle = low + (high - low >> 1);
    if (value === array[middle]) {
      index = middle;
      break;
    } else {
      if (value < array[middle]) {
        high = middle;
      } else {
        low = middle + 1;
      }
    }
  }
  return index;
}

function binarySearchRecursion(array, value) {
  var index = -1;
  var low = arguments[2] || 0;
  var high = arguments[3] || array.length;
  var middle = low + (high - low >> 1);
  if (value === array[middle]) {
    return index = middle;
  } else {
    if (value < array[middle]) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  if (low >= high) {
    return index;
  } else {
    return binarySearchRecursion(array, value, low, high);
  }
}

function timingDecorator(func, timer) {
  return function () {
    var start = performance.now();
    var result = func.apply(this, arguments);
    if (!timers[timer]) {
      timers[timer] = 0;
    }
    timers[timer] += performance.now() - start;
    return result;
  }
}

function logBinarySearch(array, value, result, funcName, timer) {
  console.log(array, "value: " + value + " - index: " +
          result + ", " + funcName + ", time: " + timer + "ms");
}
