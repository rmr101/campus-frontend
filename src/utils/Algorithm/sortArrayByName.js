// return from the Alphabetical order.

const nameSort = (a, b) => (a.name > b.name ? 1 : -1);

const checkArrayHasName = (array)=>{
  let hasName = true;
  array.forEach((obj) => (hasName = obj.hasOwnProperty("name")));
  return hasName;
}
export default (array)=>{
  return checkArrayHasName(array)
    ? array.sort(nameSort)
    : "no property of 'name' is found in each object";
}
