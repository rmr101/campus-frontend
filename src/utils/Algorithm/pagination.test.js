import pagination from './pagination';


describe("Testing pagination function",()=>{

  const testArray = [1,3,5,"3",5,6,"sd",2,6,8]
  const resultForThreePerPage = [[1,3,5],["3",5,6],["sd",2,6],[8]]
  const resultForFivePerPage = [[1, 3, 5, "3", 5], [6,"sd", 2, 6,8]];

  it("should return array length of three, when asked for three items per page.",()=>{
    expect(pagination(testArray,3).length).toBe(4);
  })
  it("should exact result to be expected when asked for three items per page.", () => {
    expect(pagination(testArray, 3)).toStrictEqual(resultForThreePerPage);
  });
  it("should return array length of two, when asked for five items per page.", () => {
    expect(pagination(testArray, 5).length).toBe(2);
  });
  it("should exact result to be expected when asked for five items per page.", () => {
    expect(pagination(testArray, 5)).toStrictEqual(resultForFivePerPage);
  });

})