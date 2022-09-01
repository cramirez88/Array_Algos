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
//   // loop through array until you match the index given
//   for (let i = idx; i < arr.length; i++){
//     arr[i] = arr[i + 1]
//   }
//   arr.length = arr.length - 1
//   return arr
//   // if you find the index given remove it from the array
//   // print array 
//   // return deleted index value
// }

// console.log(removeAt([1,4,2,3,2], 2))


// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// function minToFront(arr){
//   let minVal = arr[0]
//   let minIndex = 0
//   // loop through array to find the lowest value
//   for (let i = 1; i < arr.length; i++){
//     if (arr[i] < minVal){
//       minVal = arr[i]
//       // console.log(minVal)
//       minIndex = i
//     }
//   }
//   // when you find the lowest value, move it to the front
//   // Once I find the lowest value, I want to rearrange the array, so that the minValue goes to the front of the array and all other elements shift to the right
//   for (let i = minIndex; i > 0; i--){
//     let temp = arr[i]
//     // console.log(temp)
//     arr[i] = arr[i - 1]
//     arr[i - 1] = temp
    
//   }
 
//   // the elements that were originally in front of the lowest value, need to be shifted to the right one
//   return arr
// }

// console.log(minToFront([2,4,6,3,1]))


// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]


// function swapPairs(arr){
//   // loop through array and swap succesive pairs with one another
//   for (let i = 0; i < arr.length; i+=2){
//     if(arr.length - 1 % 2 !== 0){
//       console.log(arr[arr.length] = arr[arr.length - 1])
//     }
//     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//     arr.length = arr.length - 1
//   }
//   return arr
//   // if array has an odd number of elements, maintain the last element as is
// }
// console.log(swapPairs([1,3,2,56, 45, 98,4]))


// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]


// function removeDuplicates(arr){
//   // given a sorted array (all duplicate values will be coupled together) delete the duplicated values
//   // loop through array -> find a way to keep track of the repeated values -> if you encounter a duplicate remove it
//   let individualValues = []
//   for ( let i = 0; i < arr.length; i++){
//     if (arr[i + 1] != arr[i]){
//       individualValues.push(arr[i])
//     }
//   }
//   return individualValues
// }

// console.log(removeDuplicates([1,2,3,3,4,4,5,6,7,7,]))

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().


// function reverseArray(arr){
  
//   for (let i = 0; i < arr.length/2; i++){
//     let temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp
//   }
//   return arr
// }

// console.log(reverseArray([1,2,3,4,5,6]))


// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


// var removeDuplicates = function(nums) {
//   //     loop through nums array and look for duplicates
//       let duplicates = 0
//       for (let i = 0; i < nums.length; i++){
//           if (nums[i] === nums[i + 1]){
//               duplicates++
//           }else {
//               nums[i - duplicates] = nums[i]
//           }
           
//       }
//        return nums.length = nums.length - duplicates
//   };


//   console.log(removeDuplicates([1,1,1,1,1,1,3,4,2,5]))


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// var runningSum = function(nums) {
//   //     loop through nums array
//       for (let i = 1; i < nums.length; i++){
//           nums[i] = nums[i - 1] + nums[i] 
//       }
//       return nums
//   };

//   console.log(runningSum([1,2,3,4]))

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


// var pivotIndex = function(nums) {
//   let totalSum = 0
//   let leftSum = 0
//   for (let i = 0; i < nums.length; i++){
//       totalSum += nums[i]
//   }
   
//   for (let j = 0; j < nums.length; j++){
      
//       if (leftSum === totalSum - nums[j] - leftSum){
          
//           return j
//       } else {
//           leftSum += nums[j]
//       }
     
//   }
//    return -1
  
// };

// console.log(pivotIndex([1,7,3,6,5,6]))


// FRONTS 
// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLLNode {
  constructor(data){
    this.data = data
    this.next = null
  }
  
}

class SLL {
  constructor(){
    this.head = null
  }
  addFront(val){
    let newNode = new SLLNode(val)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }
}
let newLinkedList = new SLL()
console.log(newLinkedList.addFront(18))











