//day 0
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// console.log(getMiddle("VaLUEE"));

//day1
// function openOrSenior(data) {
//   let newArray = [];

//   for (var i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] >= 7) {
//       newArray.push("Senior");
//     } else {
//       newArray.push("Opener");
//     }
//   }
//   return newArray;
// }

// console.log(
//   openOrSenior([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 9],
//   ])
// );

// function basicOp(operation, value1, value2) {
//   // Code
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }
// console.log(basicOp("+", 4, 7));

// function find_average(array) {
//   let average = 0;

//   for (let i = 0; i < array.length; i++) {
//     average += array[i];
//   }
//   if (array.length === 0) {
//     return average;
//   } else {
//     return average / array.length;
//   }
// }

// console.log(find_average([]));

// function grow(x) {
//   let total = 1;

//   for (let i = 0; i < x.length; i++) {
//     total *= x[i];
//   }
//   return total;
// }

// console.log(grow([1, 2, 3]));

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }

// console.log(findUniq([2, 2, 3, 2, 3]));

// function oddOrEven(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum % 2 === 0 ? "even" : "odd";
// }
// console.log(oddOrEven([1, 2, 2]));

// function wave(str) {
//   let newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let copy = str.split("");
//     if (copy[i] !== " ") {
//       copy[i] = copy[i].toUpperCase();
//       newArr.push(copy.join(""));
//     }
//   }
//   return newArr;
// }

// console.log(wave("hello"));

// Sum Numbers
// function sum(numbers) {
//   "use strict";
//   return numbers === 0 ? 0 : numbers.reduce((a, b) => a + b);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));

// function towerBuilder(nFloors) {
//   return nFloors;
// }
// console.log(towerBuilder(3));

// function getSum(a, b) {
//   let sum = 0;

//   if (a === b) {
//     return a;
//   } else if (a > b) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//   } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSum(1, 0));

// function findOdd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const count = arr.filter((value) => value === arr[i]).length;
//     // if (count % 2 == 1) {
//     //   return arr[i];
//     // }
//     // console.log(count);
//     return count;
//   }
//   // return -1;
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function setAlarm(employed, vacation){
// if(employed ===true && vacation === false){
//   return true
// }else{
//   return false
// }
// }

// console.log(setAlarm(false,false));

// function getDivisorsCnt(n){
//   // todo
//   let arr = [];
//   let newArr = []
//   for(let i=1; i<=n;  i++){
//     arr.push(i)
//   }
//    arr.filter((a) => {
//     if(n%a===0){
//       newArr.push(a)
//     }
//   })
//   return newArr.length
// }

// console.log(getDivisorsCnt(5))

// function noSpace(x){
// let newStr = x.split(' ').join('')
// return newStr

// console.log(noSpace('wfwufy wiufgwif uwfgiw;oad ufwu'))

// function lovefunc(flower1, flower2){
//   if(flower1% 2 !== 0 && flower2 % 2 === 0){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(lovefunc(0,0))

// function digital_root(n) {
//   let newVal = n
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((a, b) => a + b)
//   if (n < 10) {
//     return n;

//   } else {

//       return  newVal
//   }

// }

// console.log(digital_root(245));

// function sumOfMinimums(arr) {
//   let newArr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // newArr += Math.min(...arr[i]);
//     console.log(Math.min(...arr[i]));
//   }
//   return newArr;
// }

// console.log(
//   sumOfMinimums([
//     [7, 9, 8, 6, 2],
//     [6, 3, 5, 4, 3],
//     [5, 8, 7, 4, 5],
//   ])
// );

// function findUniq(num) {
//   let val = num[0];
//   let sort1 = [];
//   let sort2 = [];
//   num.filter((a) => {
//     if (a === val) {
//       sort1.push(a);
//     } else {
//       sort2.push(a);
//     }
//   });

//   if (sort1.length > sort2.length) {
//     return sort2[0];
//   } else {
//     return sort1[0];
//   }
// }

// console.log(findUniq([3, 1, 1]));

// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return l * w;
//   } else {
//     return (l + w) * 2;
//   }
// };

// console.log(areaOrPerimeter(3, 3));

// function countDevelopers(list) {
//   let newArr = [];
//   list.map((a) => {
//     if (a.continent == "Europe" && a.language == "JavaScript") {
//       newArr.push(a);
//     }
//   });

//   return newArr.length === 0 ? 0 : newArr.length;
// }

// console.log(
//   countDevelopers([
//     { firstName: "Noah", lastName: "M.", country: "Switzerland", continent: "Europe", age: 19, language: "JavaScript" },
//     { firstName: "Maia", lastName: "S.", country: "Tahiti", continent: "Oceania", age: 28, language: "JavaScript" },
//     { firstName: "Shufen", lastName: "L.", country: "Taiwan", continent: "Asia", age: 35, language: "HTML" },
//     { firstName: "Sumayah", lastName: "M.", country: "Tajikistan", continent: "Asia", age: 30, language: "CSS" },
//   ])
// );

// function isDivisible(n, x, y) {
//   let newVal = n % x;
//   return newVal === y ? true : false;
// }

// console.log(isDivisible(48, 3, 4));

// function sum(...val) {
//   return val.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3));

// function fourSeven(n) {
//   while (n === 7) {
//     return 4;
//   }
//   while (n === 4) {
//     return 7;
//   }
//   return 0;
// }

// console.log(fourSeven(3));

// function usdcny(usd) {
//   let newVal = usd * 6.75;
//   return `${newVal.toFixed(2)} Chinese Yuan`;
// }

// console.log(usdcny(15));

// function vertMirror(strng) {
//   return strng.split("").reverse().join("").split("").reverse();
// }
// function horMirror(strng) {
//   return strng.split("").reverse().join("");
// }
// function oper(fct, s) {
//   // Your code
// }

// console.log(vertMirror("abcd\nefgh\nijkl\nmnop"));

// function evenAndOdd(num) {
//   let odd = [];
//   let even = [];

//   let numArr = num.toString().split("").map(Number);

//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] % 2 === 0) {
//       even.push(numArr[i]);
//     } else {
//       odd.push(numArr[i]);
//     }
//   }
//   let newVal1 = Number(odd.join(""));
//   let newVal2 = Number(even.join(""));

//   return [newVal2, newVal1];
// }

// console.log(evenAndOdd(1260453));

// function unusedDigits(val) {
//   let numArr = val
//     .join("")
//     .split("")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let newArr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   let newVal = newArr1.filter((obj) => {
//     return numArr.indexOf(obj) == -1;
//   });
//   return `${newVal.join("")}`;
// }

// console.log(unusedDigits([2015, 8, 26]));

// function filter_list(l) {
//   return l.filter((val) => {
//     return typeof val !== "string";
//   });
// }

// console.log(filter_list([1, 2, "1", "123", 123]));

// function hydrate(s) {
//   let newVal = s
//     .split(" ")
//     .filter((val) => {
//       return val.length === 1;
//     })
//     .map(Number)
//     .reduce((a, b) => a + b);

//   return newVal === 1
//     ? `${newVal} glass of water`
//     : `${newVal} glasses of water`;
// }

// console.log(hydrate("1 shot"));

// function isPangram(str) {
//   var regex = /([a-z])(?!.*\1)/gi;
//   return str.match(regex).length === 26 ? true : false;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// function toCamelCase(str) {
//   let newVal = str
//     .replace(/[_-]/g, " ")
//     .split(" ")
//     .map((val) => {
//       if (val[0] === toUpperCase()){

//       } return val[0].toUpperCase() + val.slice(1);
//     });

//   return str === "" ? "" : newVal.join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));

// function spacify(str) {
//   let val = str.split("");

//   return val;
// }

// console.log(spacify("hell why"));

// function processData(data) {
//   let newArr = [];

//   data.map((val) => {
//     let value1 = val.reduce((a, b) => a - b);
//     newArr.push(value1);
//   });
//   return newArr.reduce((a, b) => a * b);
// }

// console.log(
//   processData([
//     [2, 5],
//     [3, 4],
//     [8, 7],
//   ])
// );
