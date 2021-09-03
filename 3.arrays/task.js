// Задача № 1 
function compareArrays(arr1, arr2) {
  let result = arr1.every((item, idx) => {
    return item === arr2[idx] && arr1.length === arr2.length
  });
  return result;
}

// Задача № 2
function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);

  return resultArr;
}
