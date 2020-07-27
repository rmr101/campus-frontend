import debounce from "./debounce";

describe("Testing debounce function", () => {

  it("should only increase testNumber 1 within specified time zone", () => {
    let testNumber = 0;
    let testIncrease = () => {
      testNumber++;
    }; 
    const debounceTestIncrease = debounce(testIncrease,500);
    debounceTestIncrease();
    debounceTestIncrease();
    debounceTestIncrease();
    debounceTestIncrease();
    setTimeout(()=> expect(testNumber).toBe(1),600)
  
  });

   it("should increase testNumber outside of specified time", () => {
    let testNumber = 0;
    let testIncrease = () => {
      testNumber++;
    }; 
    const debounceTestIncrease = debounce(testIncrease, 500);
    debounceTestIncrease();
    setTimeout(()=>{
      debounceTestIncrease();
      expect(testNumber).toBe(2);
    },600)
    
   });
});
