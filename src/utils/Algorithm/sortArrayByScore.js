// return array from the Highest score to the Lowest score;

const scoreSort = (a, b) => (a.score < b.score ? 1 : -1);

const checkArrayHasScore = (array) => {
  let hasScore = true;
  array.forEach((obj) => (hasScore = obj.hasOwnProperty("score")));
  return hasScore;
};
export default (array)=>{
  return checkArrayHasScore(array)
    ? array.sort(scoreSort)
    : "no property of 'score' is found in each object";
}
