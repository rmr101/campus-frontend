import sortArrayByDueDate from "./sortArrayByDueDate";

describe("Testing sortArrayByDueDate function", () => {
  const testValidArray = [
    { randomProps: 2, dueDate: "2020-07-18" },
    { randomProps: 2, dueDate: "2020-07-17" },
    { randomProps: "a", dueDate: "2020-08-20" },
    { randomProps: 3, dueDate: "2020-08-19" },
  ];
  const testInValidArray = [
    { randomProps: 2, dueDate: "2020-07-18" },
    { randomProps: 2, dueDate: "2020-07-17" },
    { randomProps: "a"}
  ];
  const resultForValidArray = [
    { randomProps: "a", dueDate: "2020-08-20" },
    { randomProps: 3, dueDate: "2020-08-19" },
    { randomProps: 2, dueDate: "2020-07-18" },
    { randomProps: 2, dueDate: "2020-07-17" },
  ];
  const resultForInValidArray =
    "no property of 'dueDate' is found in each object";

  it("should return array of object that contains 'dueDate' from latest to the earliest", () => {
    expect(sortArrayByDueDate(testValidArray)).toStrictEqual(
      resultForValidArray
    );
  });
  it("should return error message when object in input array doesn't contain 'dueDate' props", () => {
    expect(sortArrayByDueDate(testInValidArray)).toBe(resultForInValidArray);
  });
  
});
