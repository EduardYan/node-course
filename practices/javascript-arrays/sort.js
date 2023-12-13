import students from "./students.js";

// const result = students.sort(function (first, second) {
//   if(first.age > second.age) {
//     return 1
//   } else {
//     return -1
//   }
// })
// console.log(result)


//using ternary operator
// const result = students.sort((first, second) => first.age > second.age ? 1 : -1);

//rest the values
const result = students.sort((first, second) => first.age - second.age)
console.log(result)


const numbers = [10, 30, 10000, 100]
// console.log(numbers.sort())
console.log(numbers.sort((a, b) => a - b))