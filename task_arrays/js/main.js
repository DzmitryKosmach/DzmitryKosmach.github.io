"use strict";

var values = [[4], 0, undefined, 2, [36, "hg"], "2", null, false, null, 8, "rt"];

values.forEach(logIsArray);
var arrayRange = range(1, 10, 2);
logConsole(arrayRange);
logConsole(values, compactFor);
logConsole(values, compactFilter);
logConsole(arrayRange, sumFor);
logConsole(arrayRange, sumReduce);
logConsole(values, unique);
logConsole(values, last);
excludeLast(arrayRange, 2);
logConsole(arrayRange);

function logIsArray(value) {
  console.log(value, ': ' + isArrayClass(value) + ' : ' + isArrayConstructor(value) + ' : ' +
          isArrayInstanceof(value));
}

function logConsole(value, func) {
  if (func) {
    console.log(func.name + ":", func(value));
  } else {
    console.log(value);
  }
}

function isArrayClass(arg) {
  if (!isObject(arg)) {
    return false;
  }
  return {}.toString.call(arg).slice(8, -1) === 'Array';
}

function isArrayConstructor(arg) {
  if (!isObject(arg)) {
    return false;
  }
  return arg.constructor.name === 'Array';
}

function isArrayInstanceof(arg) {
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

function compactFor(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}

function compactFilter(array) {
  var compactArray = array.filter(function (item) {
    return !!item;
  });
  return compactArray;
}

function sumFor(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

function sumReduce(array) {
  return array.reduce(function (sum, current) {
    return sum + current;
  });
}

function unique(array) {
  var uniqueArray = [];
  array.forEach(function () {
    var index = arguments[1];
    if (uniqueArray.every(function (item) {
      return !(item === array[index]);
    })) {
      uniqueArray.push(array[index]);
    }
  });
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