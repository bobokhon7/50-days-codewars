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

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!";
//   } else if (p1 === "paper" && p2 === "rock") {
//     return "Player 1 won!";
//   } else if (p1 === "rock" && p2 === "scissors") {
//     return "Player 1 won!";
//   } else if (p1 === "scissors" && p2 === "rock") {
//     return "Player 2 won!";
//   } else if (p1 === "rock" && p2 === "paper") {
//     return "Player 2 won!";
//   } else if (p1 === "paper" && p2 === "scissors") {
//     return "Player 2 won!";
//   }
// };

// console.log(rps("paper", "paper"));

// function createPhoneNumber(numbers) {
//   let firstThreeNum = numbers.slice(0, 3).join("");
//   let secondThreeNum = numbers.slice(3, 6).join("");
//   let thirdFourNum = numbers.slice(6, 10).join("");

//   return `(${firstThreeNum}) ${secondThreeNum}-${thirdFourNum}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function persistence(num) {
//   if (num < 10) {
//     return num;
//   }

// function nines(n) {
//   let newArr = [];

//   let ninesFunc = [];

//   for (let i = 0; i <= n; i++) {
//     newArr.push(i);
//   }
//   let newFun = newArr.join("").split("").map(Number);
//   newFun.forEach((a) => {
//     if (a === 9) {
//       ninesFunc.push(a);
//     }
//   });

//   return ninesFunc.length;
// }

// console.log(nines(1000));

// function isPrime(num) {
//   // if (num < 2) return false;
//   const limit = Math.sqrt(num);
//   // for (let i = 2; i <= limit; ++i) {
//   //   if (num % i === 0) {
//   //     return false;
//   //   }
//   // }
//   return limit;
// }

// console.log(isPrime(25));

// function incrementString(strng) {
//   var _num = "";
//   var _alp = "";
//   let newZero = [];
//   let one = "1";

//   for (var i = 0; i < strng.length; i++) {
//     if (isNaN(strng[i])) {
//       _alp += strng[i];
//     } else {
//       _num += strng[i];
//     }
//   }

//   let pushZero = _num.split("").map(Number);
//   pushZero.map((a) => {
//     if (a === 0) {
//       newZero.push(a);
//     }
//   });

//   let checkZero = newZero.join("");

//   let convertNumber = Number(_num);
//   let addOne = ++convertNumber;
//   let convertToString = addOne.toString();

//   if (_num === "") {
//     return _alp + one;
//   } else {
//     return _alp + checkZero + convertToString;
//   }
// }
// console.log(incrementString("foobar000"));
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// console.log(solution("abc", "d"));

// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return numbers.filter((a, b) => b !== indexOfMin);
// }
// console.log(removeSmallest([2, 1, 3, 4, 1, 5]));

// function pipeFix(numbers) {
//   if (numbers.length === 1) {
//     return numbers;
//   } else {
//     let findLastDigit = numbers.pop();
//     let findFisrtDigit = numbers.shift();
//     let newArr = [];
//     for (let i = findFisrtDigit; i <= findLastDigit; i++) {
//       newArr.push(i);
//     }
//     return newArr;
//   }
// }

// console.log(pipeFix([2]));

// function hello(name) {
//   if (name.length === "") {
//     return "Hello, World!";
//   } else {
//     let makeLowerCase = name.toLowerCase();
//     let makeFirsrUpperCase =
//       makeLowerCase[0].toUpperCase() + makeLowerCase.slice(1);

//     return `Hello, ${makeFirsrUpperCase}!`;
//   }
// }

// console.log(hello("AAAAA"));
// write the function isAnagram
// var isAnagram = function (test, original) {
//   let firstWord = test.toLowerCase().split("").sort().join("");
//   let secondWord = original.toLowerCase().split("").sort().join("");
//   let compare = firstWord.localeCompare(secondWord);

//   if (compare === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isAnagram("Buckethead", "DeathCubeK"));

// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   let countSheep = [];
//   if (arrayOfSheep.length !== 0) {
//     arrayOfSheep.filter((item) => {
//       if (item === true) {
//         countSheep.push(item);
//       }
//     });
//     return countSheep.length;
//   }
// }

// console.log(
//   countSheeps([true, true, true, false, true, true, false, false, true, true])
// );

// function comp(array1, array2) {
//   let result = false;
//   if (array1 && array2) {
//     if (array1.length === 0 && array2.length === 0) {
//       result = true;
//     } else {
//       let newArr = [];
//       array1.map((a) => {
//         let newNum = a * a;
//         newArr.push(newNum);
//       });
//       let firstArr = newArr.sort((a, b) => a - b);
//       let secondArr = array2.sort((a, b) => a - b);
//       for (let i = 0; i < firstArr.length; i++) {
//         if (firstArr.indexOf(secondArr[i]) !== firstArr.indexOf(firstArr[i])) {
//           result = false;
//           break;
//         }
//         result = true;
//       }
//     }
//     return result;
//   }
// }

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );

// function comp(array1, array2) {
//   let result = false;

//   if (array1 && array2) {
//     if (array1.length === 0 && array2.length === 0) {
//       result = true;
//     } else {
//       const squareRoots = array2.map((num) => Math.sqrt(num));
//       array1.sort((a, b) => a - b);
//       squareRoots.sort((a, b) => a - b);
//       for (let i = 0; i < squareRoots.length; i++) {
//         if (array1.indexOf(squareRoots[i]) !== array1.indexOf(array1[i])) {
//           result = false;
//           break;
//         }
//         result = true;
//       }
//     }
//   }
//   return result;
// }

// const quarterOf = (month) => {
//   if (month < 4) {
//     return 1;
//   } else if (month >= 4 && month < 7) {
//     return 2;
//   } else if (month >= 7 && month < 10) {
//     return 3;
//   } else {
//     return 4;
//   }
// };

// console.log(quarterOf(3));

// function XO(str) {
//   let newXArr = [];
//   let newOArr = [];
//   let withoutXO = [];
//   let toArray = str.toLowerCase().split("");
//   toArray.filter((a) => {
//     if (a === "o") {
//       newOArr.push(a);
//     } else if (a === "x") {
//       newXArr.push(a);
//     } else {
//       withoutXO.push(a);
//     }
//   });
//   if (newOArr.length === newXArr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(XO("xwox"));
// function getGrade(s1, s2, s3) {
//   let sumGrade = (s1 + s2 + s3) / 3;

//   if (sumGrade >= 90 && sumGrade <= 100) {
//     return "A";
//   } else if (sumGrade >= 80 && sumGrade < 90) {
//     return "B";
//   } else if (sumGrade >= 70 && sumGrade < 80) {
//     return "C";
//   } else if (sumGrade >= 60 && sumGrade < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// console.log(getGrade(20, 60, 95));

// function order(words) {
//   return words;
// }
// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }
// console.log(order("is2 Thi1s T4est 3a"));
