const removeFromArray = function(array, ...delItem) {
      for (let i = array.length; i > -1; i--){
        for (let j = 0; j < delItem.length; j++){
          if (array[i] === delItem[j]){
          array.splice(i, 1)
          }
        }
      }
    return array
    }


console.log(removeFromArray([1,2,3,4], 1, 2)) 

// chequiar la shit de fin a inicio

// Do not edit below this line
module.exports = removeFromArray;

// create separate array with all the values i want to delete, compare it with the original array, return modified array