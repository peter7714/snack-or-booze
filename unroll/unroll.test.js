const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test('square can be unrolled', function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];

    const result = [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13]

    expect(unroll(square)).toEqual(result);
  })

  test('smaller sqaure can be unrolled', function() {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];

    const result = ['a', 'b', 'c', 'f', 'e', 'd', 'g', 'h', 'i'];

    expect(unroll(smallerSquare)).toEqual(result);
  })
});
