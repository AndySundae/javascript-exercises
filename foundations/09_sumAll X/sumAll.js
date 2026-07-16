function sumAll(...numbers){
    numbers.sort((a,b) => a - b)
    let a = numbers[0]
    let b = numbers[1]
    let total = 0;
    if (a > -1 && 
        b > -1 && 
        Number.isInteger(a) && 
        Number.isInteger(b)){
      for (let i = a; i <= b; i++){
        total += i
    }
    return total
    } else return "ERROR" 
}

// use forEach() to check if is an non-negative integer

// if numberA > numberB, loop that sums every number between them


// Do not edit below this line
module.exports = sumAll;
