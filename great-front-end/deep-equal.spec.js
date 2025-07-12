import { assert } from "chai";
import deepEqual from "./deep-equal.js";

describe("deep-equal", () => {
  describe("simple types equality", () => {
    it("should return true when two strings are input", () => {
      assert.isTrue(deepEqual("foo", "foo"));
    });

    it("should return true when two numbers are input", () => {
      assert.isTrue(deepEqual(42, 42));
    });

    it("should return true when null or undefined are input", () => {
      assert.isTrue(deepEqual(undefined, undefined));
      assert.isTrue(deepEqual(null, null));
    });
  });

  describe("simple types inequality", () => {
    it("should return false when two strings are input", () => {
      assert.isFalse(deepEqual("foo", "bar"));
    });

    it("should return false when two numbers are input", () => {
      assert.isFalse(deepEqual(42, 54));
    });

    it("should return false when null or undefined are input", () => {
      assert.isFalse(deepEqual(undefined, "bar"));
      assert.isFalse(deepEqual(null, undefined));
      assert.isFalse(deepEqual(42, null));
    });
  });

  describe("array equality", () => {
    it("should return true when two arrays with the same simple values are input", () => {
      assert.isTrue(deepEqual([1, 2, 3], [1, 2, 3]));
    });

    it("should return true when two arrays that contain undefined or null are input", () => {
      assert.isTrue(deepEqual([42, "bar", null, undefined], [42, "bar", null, undefined]));
    });

    it("should return true when two arrays that contain objects with the same keys and values", () => {
      assert.isTrue(deepEqual([{ id: 1 }], [{ id: 1 }]));
    });

    it("should return true when two arrays are nested", () => {
      assert.isTrue(deepEqual([1, [2, 3], [4, [5, 6]]], [1, [2, 3], [4, [5, 6]]]));
    });
  });

  describe("object equality", () => {
    it("should return true when two objects with single level keys are input", () => {
      const now = new Date();
      assert.isTrue(deepEqual({ foo: "bar" }, { foo: "bar" }));
      assert.isTrue(deepEqual({ foo: "bar", age: 13, lastUpdated: now }, { foo: "bar", age: 13, lastUpdated: now }));
    });
    it("should return true when two objects that contain objects are input", () => {
      assert.isTrue(
        deepEqual(
          { foo: "bar", address: { street: "Hendrix Street", suburb: "Seattle" } },
          { foo: "bar", address: { street: "Hendrix Street", suburb: "Seattle" } }
        )
      );

      assert.isTrue(
        deepEqual(
          { age: 42, profile: { name: "Hendrix", address: { locality: "Seattle" } } },
          { age: 42, profile: { name: "Hendrix", address: { locality: "Seattle" } } }
        )
      );
    });
  });

  describe("array inequality", () => {
    it("should return false when two arrays with the different simple values are input", () => {
      assert.isFalse(deepEqual([1, 2, 3], [1, 2, 4]));
      assert.isFalse(deepEqual(["apples", "oranges", "bananas"], ["oranges", "bananas", "grapes"]));
    });

    it("should return false when two arrays that contain undefined or null are input", () => {
      assert.isFalse(deepEqual(["apples", 2, null], ["apples", 2, undefined]));
    });

    it("should return false when two arrays that contain objects with different keys and values", () => {
      assert.isFalse(deepEqual([{ id: 3 }], [{ id: 2 }]));
    });
  });

  describe("object inequality", () => {
    it("should return false when two objects with single level keys are input", () => {
      assert.isFalse(deepEqual({ foo: "bar", age: 42 }, { foo: "gat", age: 42 }));
    });
    it("should return false when two objects that contain objects are input", () => {
      assert.isFalse(deepEqual([{ id: 1, profile: { name: "Hendrix" } }], [{ id: 1, profile: { name: "Idris" } }]));
    });
  });

  describe("different input types", () => {
    it("should return false when two different input types are input", () => {
      assert.isFalse(deepEqual("foo", 42));
      assert.isFalse(deepEqual("8", 8));
      assert.isFalse(deepEqual({ foo: 1 }, null));
      assert.isFalse(deepEqual(undefined, [1, 2]));
    });
  });
});
