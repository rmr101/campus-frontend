import sortArrayByScore from "./sortArrayByScore";

describe("Testing sortArrayByDueDate function", () => {
  const testValidArray = [
    { randomProps: 2, score:10},
    { randomProps: 2, score:30},
    { randomProps: "a", score:99},
    { randomProps: 3, score:null},
  ];
  const testInValidArray = [
    { randomProps: 2, score:null},
    { randomProps: 2, score:10},
    { randomProps: "a"}
  ];
  const resultForValidArray = [
    { randomProps: "a", score:99},
    { randomProps: 2, score:30},
    { randomProps: 2, score:10},
    { randomProps: 3, score:null},
  ];
  const resultForInValidArray = "no property of 'score' is found in each object";

  it("should return array of object that contains score property from the highest to the lowest",()=>{
    expect(sortArrayByScore(testValidArray)).toStrictEqual(resultForValidArray);
  });
  it("should return error message of object that doesn't contain score property", () => {
    expect(sortArrayByScore(testInValidArray)).toBe(resultForInValidArray);
  });
  
});
