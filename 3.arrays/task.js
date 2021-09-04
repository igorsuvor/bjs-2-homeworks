// Задача № 1 
function compareArrays(arr1, arr2) {
  //let result = arr1.every((item, idx) => {
  return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]) 
  // });
  // return result;
}

// Задача № 2
function advancedFilter(arr) {
  return arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
 // return resultArr;
}
