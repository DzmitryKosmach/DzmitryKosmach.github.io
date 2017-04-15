"use strict";

var values = [[4], 0, undefined, 2, [36, "hg"], "2", null, false, null, 8, "rt"];

values.forEach(logIsArray);
var arrayRange = range(1, 10, 2);
logConsole(arrayRange);
logConsole(values, compactFor);
logConsole(values, compactFilter);
logConsole(arrayRange, sumFor);
logConsole(arrayRange, sumReduce);
logConsole(values);
logConsole(values, unique);
logConsole(values, last);
logConsole(excludeLast(arrayRange, 2));

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

function range(firstValue, secondValue, stepArray = 1) {
  var startValue = !secondValue ? 0 : firstValue ? firstValue : 0;
  var lengthArray = 0;
  var delta = (secondValue || firstValue) - startValue;
  var resultArray = [];
  if ((delta > 0 && stepArray > 0) || (delta < 0 && stepArray < 0)) {
    lengthArray = Math.abs(delta / stepArray);
  }
  for (var i = 0; i < lengthArray; i++) {
    resultArray.push(startValue);
    startValue += stepArray;
  }
  return resultArray;
}

function compactFor(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}

function compactFilter(array) {
  var compactArray = array.filter(function (item) {
    return item;
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
  array.forEach(function (value, index) {
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
    return array.slice(0, array.length - exclude);
  }
  return array.slice();
}
