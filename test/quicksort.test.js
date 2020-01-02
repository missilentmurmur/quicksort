const chai = require('chai');
const quicksort = require('../src/quicksort');
const expect = chai.expect;


describe('Quick sort', () => {
  it('Empty is sorted', () => {
    expect(quicksort([])).deep.equals([]);
  });

  it('One element is sorted', () => {
    expect(quicksort([3])).deep.equals([3]);
  });

  it('Sorted is sorted', () => {
    expect(quicksort([1, 2, 3])).deep.equals([1, 2, 3]);
  });

  it('Two elements are sorted', () => {
    expect(quicksort([3, 1])).deep.equals([1, 3]);
  });

  it('Put pivot in the middle', () => {
    expect(quicksort([3, 5, 1])).deep.equals([1, 3, 5]);
  });

  it('Put pivot in the middle when smaller than last', () => {
    expect(quicksort([4, 1, 5])).deep.equals([1, 4, 5]);
  });

  it('Change comparison direction twice', () => {
    expect(quicksort([3, 4, 2, 1])).deep.equals([1, 2, 3, 4]);
  });

  it('Sort left of pivot', () => {
    expect(quicksort([3, 4, 1, 2, 5])).deep.equals([1, 2, 3, 4, 5]);
  });

  it('Complete sort', () => {
    expect(quicksort([3, 5, 1, 2, 4])).deep.equals([1, 2, 3, 4, 5]);
  });

  it('Sort in opposite direction', () => {
    expect(quicksort([5, 4, 3, 2, 1])).deep.equals([1, 2, 3, 4, 5]);
  });

  it('Sort a shit ton of numbers', () => {
    const actual = quicksort([
      14, 71, 48,  3,  8, 70, 90,  8, 90,  5, 47, 55,
      65, 15, 44, 68, 85, 31, 69, 84, 33,  3,  3, 44,
      28,  8, 16, 23, 19, 48, 87, 39,  8,  6, 67, 27,
       8, 39, 51,  7,  4, 24, 26, 81, 29, 29, 75, 48,
      41, 54, 68, 22, 97, 51, 43,  2, 46, 81, 18, 60,
      63,  9, 82, 93, 35, 34,  1, 63, 82, 40, 67,  0,
      13, 33, 33, 62,  8, 75,  9, 43, 37, 59, 31, 25,
      37,  1, 18, 34, 82,  4, 90, 17, 93, 74, 21,  0,
      61, 99, 93, 29
    ]);

    const expected = [
      0,  0,  1,  1,  2,  3,  3,  3,  4,  4,  5,  6,
      7,  8,  8,  8,  8,  8,  8,  9,  9, 13, 14, 15,
     16, 17, 18, 18, 19, 21, 22, 23, 24, 25, 26, 27,
     28, 29, 29, 29, 31, 31, 33, 33, 33, 34, 34, 35,
     37, 37, 39, 39, 40, 41, 43, 43, 44, 44, 46, 47,
     48, 48, 48, 51, 51, 54, 55, 59, 60, 61, 62, 63,
     63, 65, 67, 67, 68, 68, 69, 70, 71, 74, 75, 75,
     81, 81, 82, 82, 82, 84, 85, 87, 90, 90, 90, 93,
     93, 93, 97, 99
    ];
   
    expect(actual).deep.equals(expected);
  });
  
});
