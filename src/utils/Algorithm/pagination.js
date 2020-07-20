
export default (InputArray,numberOfItemPerPage)=>{
  let copyArray =[...InputArray];
  let resultArray = [];
  while(copyArray.length>0){
    
    resultArray.push(copyArray.splice(0,numberOfItemPerPage));
  }
  return resultArray;
}