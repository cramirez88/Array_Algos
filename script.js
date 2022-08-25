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

// // Validate subsequence
// function isValidSubsequence(arr, sub){
//   // look through sub to see values correspond to the order in original
//   let arrIdx = 0
//   let subIdx = 0
//   while (subIdx < sub.length && arrIdx < arr.length){
//     if (sub[subIdx] === arr[arrIdx]){
//       subIdx++
//       arrIdx++
//     }
//     return subIdx === sub.length
//   }
//   }


// console.log(isValidSubsequence([1,4,2,6,3,9], [1,4,3]))


// Sorted array squared

// function sortedSquaredArray(array) {
//   let sortedArr = array.sort()
//   newArr = []
//   for (let i = 0; i < sortedArr.length; i++){
//      newArr.push(sortedArr[i] * sortedArr[i])
//      newArr.sort((a,b) => a-b)
//   }
//   return newArr
// }

// console.log(sortedSquaredArray([1,5,2,6,3]))

// Tournament Winner Algo


// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().


// function reverseArray (arr){
//   let newArr = []
//   // reverse array
//   for (let i = arr.length - 1; i >= 0; i--){
//     newArr.push(arr[i])
//     console.log(newArr)
//   }
//   // move elements around and keep same length
// }

// reverseArray([1,3,5,2,4])

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr, val){
  // insert value at the beginning of the array
  // array size will change
  let temp = arr[0]
  for (let i = arr.length; i >= 0; i--){
   arr[i] = arr[i - 1]
  }
  arr[0]= val
  return arr
 
}

console.log(pushFront([1,2,3,4],3))
