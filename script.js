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

// function pushFront(arr, val){
//   // insert value at the beginning of the array
//   // array size will change
//   let temp = arr[0]
//   for (let i = arr.length; i >= 0; i--){
//    arr[i] = arr[i - 1]
//   }
//   arr[0]= val
//   return arr
 
// }

// console.log(pushFront([1,2,3,4],3))


// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function


// function popFront(arr){
//   let firstVal = arr[0]
//   for (let i = 1; i < arr.length; i++){
//     // starting at i = 1 because we want to shift the values to the left by one. 
//     arr[i - 1] = arr[i]
//     // elements have been shifted to the left- now I want to chop off the duplicate at the end.
//   }
//   arr.length = arr.length - 1
//   console.log(arr)
//   return firstVal
// }


// console.log(popFront([1,3,5,6,2]))


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

// function insertAt(arr, idx, val){
//   // loop through my array until I find the given index and place my value in that index.
//   for (let i = arr.length; i >= idx; i--){
//     arr[i] = arr[i - 1]
//   }
//   // have my for loop going to the left because I want to create a an extra index to keep all values prior to insertion
//   arr[idx] = val
//   // return array
//   return arr
// }

// console.log(insertAt([1,2,4,3], 1, 43))

// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

// function removeAt(arr, idx){
//   // loop through array until you find the index given
//   arr.splice(idx, 1)
//   return arr
// }

// console.log(removeAt([1,3,4,2,4], 1))