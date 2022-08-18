// Two number sum

function twoNumberSum(arr, targetSum){
  // Loop through array to find if TWO integers add to target sum
    for (let i = 0; i < arr.length; i++){
      let numOne = arr[i]
      for (let x = i + 1; x < arr.length; x++){
        let numTwo = arr[x]
        if (numOne + numTwo === targetSum){
          return [numOne, numTwo]
        }
      }
    }
    return []
  // if two integers add to target sum, return them in array if not return empty array
}


console.log(twoNumberSum([1,3,5,2,4], 4 ))