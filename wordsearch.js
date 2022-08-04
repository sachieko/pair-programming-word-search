const lotide = require('@sachieko/lotide');
const wordSearch = (letters, word) => {
  if (letters.length === 0 || letters[0].length === 0) {
    return false;
  }
  // All the elements in the array, and joining them. Joins horizontal rows only
  const horizontalJoin = letters.map(ls => ls.join(''));
  const reverseHorizontal = horizontalJoin.map(ls => lotide.reverse(ls));
  // Checking for the horizontal word below -- V
  for (const l of horizontalJoin) if (l.includes(word)) return true;
  for (const l of reverseHorizontal) if (l.includes(word)) return true;
  // Checking for horizontal ^
  const transpose = function(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let row = [];
      for (const element of matrix) {
        row.push(element[i]);
      }
      result.push(row);
    }
    return result;
  };
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const reverseVertical = verticalJoin.map(ls => lotide.reverse(ls));
  // Checking for vertical --v
  for (const l of verticalJoin) if (l.includes(word)) return true;
  for (const l of reverseVertical) if (l.includes(word)) return true;
  // Checking for vertical word --^
  return false;
};

module.exports = wordSearch;

