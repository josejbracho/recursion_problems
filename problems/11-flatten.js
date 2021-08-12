/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array) {
  let newArray = [];

  array.forEach((contents) => {
    if (Array.isArray(contents)) {
      newArray.push(...flatten(contents));
    } else {
      newArray.push(contents);
    }
  });

  return newArray;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
