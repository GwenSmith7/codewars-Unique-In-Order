'use strict';

var uniqueInOrder = function (iterable) {
  const result = [];

  // check if this is an array and split values
  const input = Array.isArray(iterable) ? iterable : iterable.split('');

  // loop through array and compare values
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) continue;
    result.push(input[i]);
  }

  return result;
};
