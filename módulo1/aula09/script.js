const callCallback = (value, callback) => {
    return callback(value)
}

const triple = number => number * 3
  
console.log(callCallback(33, triple))
