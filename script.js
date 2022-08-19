// Two number sum

// function twoNumberSum(arr, targetSum){
//   // Loop through array to find if TWO integers add to target sum
//     for (let i = 0; i < arr.length; i++){
//       let numOne = arr[i]
//       for (let x = i + 1; x < arr.length; x++){
//         let numTwo = arr[x]
//         if (numOne + numTwo === targetSum){
//           return [numOne, numTwo]
//         }
//       }
//     }
//     return []
//   // if two integers add to target sum, return them in array if not return empty array
// }


// console.log(twoNumberSum([1,3,5,2,4], 4 ))

// Validate subsequence
function isValidSubsequence(arr, sub){
  // look through sub to see values correspond to the order in original
  let arrIdx = 0
  let subIdx = 0
  while (subIdx < sub.length && arrIdx < arr.length){
    if (sub[subIdx] === arr[arrIdx]){
      subIdx++
      arrIdx++
    }
    return subIdx === sub.length
  }
  }


console.log(isValidSubsequence([1,4,2,6,3,9], [1,4,3]))