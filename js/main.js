"use strict";

var values = [[4], 0, undefined, 2, [36, "hg"], "2", null, false, null, 8, "rt"];

values.forEach(logIsArray);
var arrayRange = range(1, 10, 2);
logConsole(arrayRange);
logConsole(values, compact_v1);
logConsole(values, compact_v2);
logConsole(arrayRange, sum_v1);
logConsole(arrayRange, sum_v2);
logConsole(values, unique);
logConsole(values, last);
excludeLast(arrayRange, 2);
logConsole(arrayRange);

function logIsArray(obj) {
  console.log(obj, ': ' + isArray_v1(obj) + ' : ' + isArray_v2(obj) + ' : ' +
          isArray_v3(obj));
}

function logConsole(value, func) {
  if (func) {
    console.log(func.name + ":", func(value));
  } else {
    console.log(value);
  }
}

function isArray_v1(arg) {
  if (!isObject(arg)) {
    return false;
  }
  return {}.toString.call(arg).slice(8, -1) === 'Array';
}

function isArray_v2(arg) {
  if (!isObject(arg)) {
    return false;
  }
  return arg.constructor.name === 'Array';
}

function isArray_v3(arg) {
  if (!isObject(arg)) {
    return false;
  }
  return arg instanceof Array;
}

function isObject(arg) {
  if (arg === null) {
    return false;
  }
  return typeof arg === 'object';
}

function range() {
  var stepValue = (arguments[2] || 1);
  var endValue;
  var startValue = 0;
  var array = [];
  if (arguments[1]) {
    endValue = arguments[1];
    startValue = arguments[0];
  } else {
    endValue = arguments[0];
  }
  for (var i = startValue; i < endValue; i += stepValue) {
    array.push(i);
  }
  return array;
}

function compact_v1(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}

function compact_v2(array) {
  var compactArray = array.filter(function (item) {
    return !!item;
  });
  return compactArray;
}

function sum_v1(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

function sum_v2(array) {
  return array.reduce(function (sum, current) {
    return sum + current;
  });
}

function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.every(function (item) {
      return !(item === array[i]);
    })) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

function last(array) {
  return array[array.length - 1];
}

function excludeLast(array, exclude = 1) {
  if (exclude > 0) {
    array.length -= exclude;
  }
}