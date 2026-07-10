const repeatString = function(string, reps) {
    if (reps < 0){return "ERROR"}
    let i = 0; 
    let concat = "";
    while (i < reps){
        concat = concat.concat(string)
        i++
      }
      return concat
};

// for every loop concatenate string to new variable


// Do not edit below this line
module.exports = repeatString;
