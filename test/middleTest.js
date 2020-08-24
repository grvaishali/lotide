const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for middle([2, 3, 4, 5])", () => {
    assert.deepEqual(middle([2, 3, 4, 5]), [3, 4]);
  });

  it("returns [4] for middle(2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle([2, 3, 4, 5, 6]), [4]);
  });
});
