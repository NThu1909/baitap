//BAI TAP 1
// const arrayDuplicate = [1, 2, 3, 1, 2, 3, 7, 8, 9, 10, 11, 15, 3, 8, 9];
// const removeDuplicates = arrayDuplicate.filter(
//   (arr, index) => arrayDuplicate.indexOf(arr) === index
// );
// console.log("NewArr:" + removeDuplicates);
// Cách 2
// const wayReduce = arrayDuplicate.reduce((prev, cur) => {
//   return prev.includes(cur) ? prev : [...prev, cur];
// }, []);

// console.log("WayReduce:" + wayReduce);

//BAI TAP 2
//Cách 1
// const fizzBuzz = () => {
//   for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//       document.write("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//       document.write("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//       document.write("Buzz");
//     } else {
//       console.log(i);
//       document.write(i);
//     }
//   }
// };
// fizzBuzz();

//Cách 2

// const FizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);
//   }
// };
// FizzBuzz();

// BAI TAP 3
// const string1 = "LISTEN";
// const string2 = "swim";
// const stringHomophone = () => {
//   const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase();
//   const sortedStr1 = cleanString(string1).split("").sort().join("");

//   const sortedStr2 = cleanString(string2).split("").sort().join("");
//   return sortedStr1 === sortedStr2;
//   0;
// };
// console.log(stringHomophone());

//BAI TAP 4
// const arrCuted = [1, 2, 3, 4, 5, 6, 8];
// const divisionArr = (arr, j) => {
//   const miniArr = [];
//   for (let i = 0; i < arr.length; i = i + j) {
//     miniArr.push(arr.slice(i, i + j));
//   }
//   return miniArr;
// };
// console.log(divisionArr(arrCuted, 2));

//BAI TAP 5
// const arrEx5 = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   [1, 2, 3, 4, 5, 6, 7],
//   [1, 2, 3, 4, 5, 6],
// ];
// const func = (arr) => {
//   let arrResult = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       arrResult = [...arrResult, ...arr[i]];
//     } else {
//       arrResult.push(arr[i]);
//     }
//   }
//   return arrResult;
// };
// console.log(func(arrEx5));

//arrResult.concat(func(arr[i]));
//BAI TAP 6

// const binarySearch = () => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const target = -3;
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//       console.log("left" + left);
//     } else {
//       right = mid - 1;
//       console.log("right" + right);
//     }
//   }
//   return -1;
// };
// console.log(binarySearch());

//BAI TAP 7
// const stringLetters = "xin Chao MOI Nguoi";
// const capitalizationFirstLetter = () => {
//   return stringLetters
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// };
// console.log(capitalizationFirstLetter());

//BAI TAP 8
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [1, 5, 3, 9, 4, 5, 6, 7, 8, 9, 10];

// const setArr = new Set(arr2);
// console.log("newset" + setArr);
// const result = arr1.filter((item) => setArr.has(item));

// console.log("result: " + result);

//BAI TAP 9

// const compareNUmbers = (a, b) => {
//   return a - b;
// };
// console.log(arrMess.sort(compareNUmbers));

//2

// const compareNumbers = () => {
//   const arrMess = [1, 2, 3, 4, 6, 7, 8, 9, 10, 5, 9];
//   for (let i = 0; i < arrMess.length - 1; i++) {
//     for (let j = i + 1; j < arrMess.length; j++) {
//       if (arrMess[j] < arrMess[i]) {
//         const item = arrMess[i];
//         arrMess[i] = arrMess[j];
//         arrMess[j] = item;
//       }
//     }
//   }
//   console.log(arrMess);
// };
// compareNumbers();

//BAI 10
// const arrEx = [1, 2, 3, 4, 6, 7, 8, 9, 10, 5, 9, 9, 0, 10];

// const newObj = new Set(arrEx);
// console.log(newObj);

// const fnc = () => {
//   const newArr = [];
//   newObj.forEach((item) => {
//     newArr.push(item);
//   });
//   console.log(newArr);
// };
// fnc();

// BÀI TẬP 11
// const sumNumbers = (n) => {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sumNumbers(n - 1);
//   }
// };
// console.log(sumNumbers(8));

//BÀI TẬP 12

// const factorialNumber = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return (n = n * factorialNumber(n - 1));
//   }
// };
// console.log(factorialNumber(4));

//BÀI TẬP 13

const fibonacci = (n) => {
  if (n === 1 || n === 0) {
    return n;
  } else {
    return (n = fibonacci(n - 1) + fibonacci(n - 2));
  }
};
console.log(fibonacci(6));
