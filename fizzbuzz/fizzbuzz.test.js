const { fizzBuzz, fizzBuzz_v2 } = require("./index");

describe("If function exists ", () => {
  test("fizzBuzz function exists", () => {
    expect(fizzBuzz).toBeDefined();
  });

  test("fizzBuzz_v2 function exists ", () => {
    expect(fizzBuzz_v2).toBeDefined();
  });
});

describe("if fizzBuzz is working", () => {
  it("should work print Fizz with number 24", () => {
    expect(fizzBuzz(24)).toEqual("Fizz");
  });

  it("should work print Fizz with number 9", () => {
    expect(fizzBuzz(9)).toEqual("Fizz");
  });

  it("should work print Buzz with number 35", () => {
    expect(fizzBuzz(35)).toEqual("Buzz");
  });

  it("should work print FizzBuzz with number 15", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should work print Fizz with number 63", () => {
    expect(fizzBuzz(63)).toEqual("Fizz");
  });

  it("should not work print No Match with number 49", () => {
    expect(fizzBuzz(49)).toEqual("No match");
  });
});
