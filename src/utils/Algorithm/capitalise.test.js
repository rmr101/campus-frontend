import capitalise from "./capitalise";

describe("Testing capitalise function", () => {
  const testWordOne = "";
  const testWordTwo = "heLlo woRld ! a";
  const testWordThree = "heLw";
  const testWordOneResult = "";
  const testWordTwoResult = "Hello World ! A";
  const testWordThreeResult = "Helw";


  it("should return corresponding result", () => {
    expect(capitalise(testWordOne)).toBe(testWordOneResult);
    expect(capitalise(testWordTwo)).toBe(testWordTwoResult);
    expect(capitalise(testWordThree)).toBe(testWordThreeResult);
  });
});
