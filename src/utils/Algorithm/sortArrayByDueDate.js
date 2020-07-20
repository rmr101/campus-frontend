// return from the Latest to the earliest;

const dueDateSort=(a,b)=>(a.dueDate < b.dueDate ? 1: -1);

const checkArrayHasDueDate = (array)=>{
  let hasDue = true;
  array.forEach (obj => hasDue = obj.hasOwnProperty("dueDate"));
  return hasDue;
}
export default (array)=>{
  return checkArrayHasDueDate(array) ? array.sort(dueDateSort) : "no property of 'dueDate' is found in each object" ;
}
