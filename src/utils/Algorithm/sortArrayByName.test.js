import sortArrayByName from "./sortArrayByName";

describe("Testing sortArrayByName function", () => {
  const testValidArray = [
    { randomProps: 2, name: "Jacky" },
    { randomProps: 2, name: "Jab" },
    { randomProps: 3, name: "Ttt" },
    { randomProps: "a", name: "Ttt a" },
  ];
  const testInValidArray = [
    { randomProps: 2, name: "jacky" },
    { randomProps: 2, name: "jac" },
    { randomProps: "a" },
  ];
  const resultForValidArray = [
    { randomProps: 2, name: "Jab" },
    { randomProps: 2, name: "Jacky" },
    { randomProps: 3, name: "Ttt" },
    { randomProps: "a", name: "Ttt a" },
  ];
  const resultForInValidArray =
    "no property of 'name' is found in each object";

  it("should return array of object that contains 'name' from latest to the earliest", () => {
    expect(sortArrayByName(testValidArray)).toStrictEqual(
      resultForValidArray
    );
  });
  it("should return error message when object in input array doesn't contain 'name' props", () => {
    expect(sortArrayByName(testInValidArray)).toBe(resultForInValidArray);
  });
  
});
