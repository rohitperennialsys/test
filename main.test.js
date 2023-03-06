const main = require('./main');

describe("Calculator tests", () => {
  test('test result with [9,2,5,4]', () => {
    expect(main([[9, 2, 5, 4]])).toBe("1");
  });

  test('test result with [10,1,9,5]', () => {
    expect(main([[10, 1, 9, 5]])).toBe("0");
  });

  test('test result with [[6,11,9,5]]', () => {
    expect(main([[6, 11, 9, 5]])).toBe("1");
  });

  test('test result with [[6,11,9,5]]', () => {
    expect(main([[6, 9, 9, 5]])).toBe("0");
  });

  test('test result with [10,1,9,5] and [9,2,5,4]', () => {
    expect(main([[10, 1, 9, 5], [9, 2, 5, 4]])).toBe("0 1");
  });

  test('test result with [4, 9, 10, 2]', () => {
    expect(main([[4, 9, 10, 2]])).toBe("1");
  });

  test('test result with [3, 12, 9, 1]', () => {
    expect(main([[3, 12, 9, 1]])).toBe("1");
  });

  test('test result with [[4, 9, 10, 2], [3, 12, 9, 1]]', () => {
    expect(main([[3, 12, 9, 1], [4, 9, 10, 2]])).toBe("1 1");
  });

  test('test result with [[6,11,9,3]]', () => {
    expect(main([[6, 11, 9, 3]])).toBe("0");
  });

  test('test result with [[6,11,9,3], [3, 12, 9, 1],[4, 9, 10, 2],[6,9,9,5]]', () => {
    expect(main([[6, 11, 9, 3], [3, 12, 9, 1], [4, 9, 10, 2], [6, 9, 9, 5]])).toBe("0 1 1 0");
  });
})