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

function grow(x) {
  let total = 1;

  for (let i = 0; i < x.length; i++) {
    total *= x[i];
  }
  return total;
}

console.log(grow([1, 2, 3]));
