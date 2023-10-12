const { palindrome } = require("./index");

describe("If function exists ", () => {
  test("palindrome function exists", () => {
    expect(palindrome).toBeDefined();
  });
});

describe("If palindrome is working", () => {
  it("should work print true", () => {
    expect(palindrome("abba")).toEqual(true);
  });

  it("should work print false", () => {
    expect(palindrome("abcdefg")).toEqual(false);
  });

  it("should work print true", () => {
    expect(palindrome("racecar")).toEqual(true);
  });
});
