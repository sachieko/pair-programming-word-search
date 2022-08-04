const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present vertical or horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the horizontal word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the horizontal word is present and not the entire row", function() {
    const result = wordSearch([
      ['A', 'W', 'O', 'R', 'D', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'WORD');

    assert.isTrue(result);
  });
  // Vertical test
  it("should return true if the vertical word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'O', 'R', 'D', 'W', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'O', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'N', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'C', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'H', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'O', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'L', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'WONCHEOL');

    assert.isTrue(result);
  });
  it("should return false if the word search is empty", function() {
    const result = wordSearch([], 'CHELSEA');

    assert.isFalse(result);
  });
  it("should return false if the first row is empty", function() {
    const result = wordSearch([
      [],
      ['S', 'E', 'I', 'N', 'F', 'O', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'N', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'C', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'H', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'O', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'L', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CHELSEA');

    assert.isFalse(result);
  });
  it("should return true if the word is upside down", function() {
    const result = wordSearch([
      ['A', 'C', 'T', 'J', 'B', 'W', 'E', 'P'],
      ['SPp', 'O', 'I', 'N', 'F', 'O', 'L', 'D'],
      ['Y', 'K', 'C', 'F', 'Q', 'N', 'A', 'L'],
      ['H', 'E', 'J', 'T', 'E', 'C', 'R', 'G'],
      ['W', 'I', 'C', 'S', 'Y', 'H', 'R', 'L'],
      ['B', 'H', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'C', 'T', 'W', 'A', 'O', 'A', 'I'],
      ['O', 'A', 'C', 'A', 'K', 'L', 'A', 'S'],
      ['E', 'S', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SACHIEKO');

    assert.isTrue(result);
  });
  it("should return true if the word is backwards", function() {
    const result = wordSearch([
      ['A', 'C', 'T', 'J', 'B', 'W', 'E', 'P'],
      ['S', 'O', 'I', 'N', 'F', 'O', 'L', 'D'],
      ['Y', 'K', 'C', 'F', 'Q', 'N', 'A', 'L'],
      ['H', 'E', 'J', 'T', 'E', 'C', 'R', 'G'],
      ['W', 'I', 'C', 'S', 'Y', 'H', 'S', 'L'],
      ['B', 'H', 'R', 'E', 'N', 'E', 'C', 'B'],
      ['U', 'C', 'T', 'W', 'A', 'O', 'A', 'I'],
      ['O', 'A', 'H', 'C', 'A', 'E', 'P', 'S'],
      ['E', 'S', 'K', 'F', 'Q', 'U', 'P', 'L'],
    ], 'PEACH');

    assert.isTrue(result);
  });
});


