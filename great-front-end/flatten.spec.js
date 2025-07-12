import { assert } from "chai";
import flatten from "./flatten.js";

describe("flatten.js", () => {
  it("should not affect single-level arrays", () => {
    const result = flatten([1, 2, 3, 4]);
    assert.deepStrictEqual([1, 2, 3, 4], result);
  });

  it("should flatten inner arrays into a single level", () => {
    let result = flatten([1, 2, [3, 4]]);
    assert.deepStrictEqual([1, 2, 3, 4], result);

    result = flatten([
      [1, 2],
      [3, 4],
    ]);
    assert.deepStrictEqual([1, 2, 3, 4], result);
  });

  it("should flatten arrays recursively", () => {
    const result = flatten([1, [2, [3, [4, [5]]]]]);
    assert.deepStrictEqual([1, 2, 3, 4, 5], result);
  });

  it("should not affect single element arrays", () => {
    assert.deepStrictEqual([1], flatten([1]));
    assert.deepStrictEqual(["foo"], flatten(["foo"]));
    assert.deepStrictEqual([undefined], flatten([undefined]));
  });

  it("should not affect an empty array", () => {
    assert.deepStrictEqual([], flatten([]));
  });

  it("should flatten nested empty arrays into an empty array", () => {
    const result = flatten([[], [[]]]);
    assert.deepStrictEqual([], result);
  });

  it("should return value if not an array", () => {
    assert.deepStrictEqual(1, flatten(1));
    assert.deepStrictEqual("bar", flatten("bar"));
    assert.deepStrictEqual(undefined, flatten(undefined));
    assert.deepStrictEqual(null, flatten(null));
  });
});
