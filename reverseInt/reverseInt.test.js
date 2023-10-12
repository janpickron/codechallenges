const { reverseInt } = require("./index");

describe("If function exists ", () => {
  test("reverseInt function exists", () => {
    expect(reverseInt).toBeDefined();
  });
});

describe("If reverseInt is working", () => {
  it("should work print 51", () => {
    expect(reverseInt(15)).toEqual(51);
  });

  it("should work print 189", () => {
    expect(reverseInt(981)).toEqual(189);
  });

  it("should work print 5", () => {
    expect(reverseInt(500)).toEqual(5);
  });

  it("should work print 5", () => {
    expect(reverseInt(500)).toEqual(5);
  });

  it("should work print -51", () => {
    expect(reverseInt(-15)).toEqual(-51);
  });

  it("should work print -9", () => {
    expect(reverseInt(-90)).toEqual(-9);
  });
});
