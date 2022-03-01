<div align="center">
  <img height="60" src="./assets/codewars_button_icon.png">
  <h1>30 Days Codewars</h1>

---

<span>Hello World! I love solving coding problems, especially on <a href="https://www.codewars.com/">codewars</a>. So, I decided to share my 30-days-of-solving-codewars-problems journey here. Have a look 👇</span>

<span>Everyday I will solve one question from codewars and share below. It will include the question, my answer and one or two best answers from codewars community.</span>

Btw, feel free to reach out to me! 🌐 <br />
<a href="https://twitter.com/Bobokhon7">Twitter</a> || <a href="https://www.linkedin.com/in/bobokhon/">LinkedIn</a> || <a href="https://dev.to/bobokhon7">Blog</a>

</div>

---

<details><summary><b>Day 0</b></summary>

#### Get the Middle Character?

> 7 kyu

###### Description:

> You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

```javascript
function getMiddle(s) {
  //Code goes here!
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
```

</details>

</details>

---

<details><summary><b>Day 1</b></summary>

#### Categorize New Member

> 7 kyu

###### Description:

> The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
> INPUT: Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
> OUTPUT: Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
> Example
> input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
> output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

```javascript
function openOrSenior(data) {
  // ...
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function openOrSenior(data) {
  let newArray = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      newArray.push("Senior");
    } else {
      newArray.push("Open");
    }
  }
  return newArray;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));
}
```

</details>

</details>

---

<details><summary><b>Day 2</b></summary>

#### Reversed sequence

> 8 kyu

###### Description:

> Build a function that returns an array of integers from n to 1 where n>0.
> Example : n=5 --> [5,4,3,2,1]

```javascript
const reverseSeq = (n) => {
  return [];
};
```

<details><summary><b>My Answer</b></summary>

```javascript
const reverseSeq = (n) => {
  let newVal = [];
  for (let i = 1; i <= n; i++) {
    newVal.push(i);
  }
  return newVal.reverse();
};
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
const reverseSeq = (n) => {
  const newArray = [];
  for (let i = n; i > 0; i--) {
    newArray.push(i);
  }
  return newArray;
};
```

</details>

</details>

---

<details><summary><b>Day 3</b></summary>

#### Century From Year

> 8 kyu

###### Description:

> Introduction
> The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 >up to and including the year 200, etc.
> Task
> Given a year, return the century it is in.
> Examples
> 1705 --> 18
> 1900 --> 19
> 1601 --> 17
> 2000 --> 20

```javascript
function century(year) {
  // Finish this :)
  return;
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function century(year) {
  let century = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 == 0) {
      century++;
    }
  }
  return century;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function century(year) {
  return Math.ceil(year / 100);
}
```

</details>

</details>

---

<details><summary><b>Day 4</b></summary>

#### Grasshopper - Summation

> 8 kyu

###### Description:

> Introduction
> Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
> Examples
> summation(8) -> 36
> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

```javascript
var summation = function (num) {
  ///
};
```

<details><summary><b>My Answer</b></summary>

```javascript
var summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
var summation = function (num) {
  return (num * (num + 1)) / 2;
};
```

</details>

</details>

---

<details><summary><b>Day 5</b></summary>

> 7 kyu

#### Descending Order

###### Description:

> Introduction
> Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
> Examples
> Input: 42145 Output: 54421
> Input: 123456789 Output: 987654321

```javascript
function descendingOrder(n) {
  ///
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function descendingOrder(n) {
  let reverseNum = n.toString().split("").sort().reverse();
  return Number(reverseNum.join(""));
}
```

</details>

<details><summary><b>Best Answer 1</b></summary>

```javascript
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
```

<details><summary><b>Best Answer 2</b></summary>

```javascript
function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );
}
```

</details>

</details>
</details>

---

<details><summary><b>Day 6</b></summary>

#### Basic Mathematical Operations

> 8 kyu

###### Description:

> Introduction
> Your task is to create a function that does four basic mathematical operations.
> The function should take three arguments - operation(string/char), value1(number), value2(number).
> The function should return result of numbers after applying the chosen operation.
> Examples
> ('+', 4, 7) --> 11
> ('-', 15, 18) --> -3
> ('\', 5, 5) --> 25
> ('/', 49, 7) --> 7

```javascript
function basicOp(operation, value1, value2) {
  // Code
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function basicOp(operation, value1, value2) {
  // Code
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}
```

</details>

</details>

---

<details><summary><b>Day 7 (1)</b></summary>

#### Is he gonna survive?

> 8 kyu

###### Description:

> Introduction
> A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

```javascript
function hero(bullets, dragons) {
  //Get Coding!
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function hero(bullets, dragons) {
  return dragons * 2 > bullets ? false : true;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
```

</details>

</details>

---

<details><summary><b>Day 7 (2)</b></summary>

#### Square Every Digit

> 7 kyu

###### Description:

> Introduction
> Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

> For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

> Note: The function accepts an integer and returns an integer

```javascript
function squareDigits(num) {
  return 0;
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function squareDigits(num) {
  let numArr = num
    .toString()
    .split("")
    .map((a) => a * a)
    .join("");
  return Number(numArr);
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function squareDigits(num) {
  let numArr = num
    .toString()
    .split("")
    .map((a) => a * a)
    .join("");
  return Number(numArr);
}
```

</details>

</details>

---

<details><summary><b>Day 8 (1)</b></summary>

#### Square Every Digit

> 8 kyu

###### Description:

> Introduction
> Write a function which calculates the average of the numbers in a given list.

> Note: Empty arrays should return 0.

```javascript
function find_average(array) {
  // your code here
  return 0;
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function find_average(array) {
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  if (array.length === 0) {
    return average;
  } else {
    return average / array.length;
  }
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function find_average(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}
```

</details>

</details>

---

<details><summary><b>Day 8 (2)</b></summary>

####Beginner - Reduce but Grow

> 8 kyu

###### Description:

> Introduction
> Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

```javascript
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
```

```javascript
function grow(x) {
  // your code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function grow(x) {
  let total = 1;

  for (let i = 0; i < x.length; i++) {
    total *= x[i];
  }
  return total;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
const grow = (x) => x.reduce((a, b) => a * b);
```

</details>

</details>

---

<details><summary><b>Day 8 (3)</b></summary>

####Find the unique number

> 6 kyu

###### Description:

> Introduction
> There is an array with some numbers. All numbers are equal except for one. Try to find it!:

```javascript
findUniq([1, 1, 1, 2, 1, 1]) === 2;
findUniq([0, 0, 0.55, 0, 0]) === 0.55;
```

```javascript
function findUniq(arr) {
  // do magic
}
```

<details><summary><b>My Answer 😂</b></summary>

```javascript
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
```

</details>

<details><summary><b>Best Answer ✔</b></summary>

```javascript
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
```

</details>

</details>

---

<details><summary><b>Day 9</b></summary>

#### Odd or Even?

> 7 kyu

###### Description:

> Introduction
> Given a list of integers, determine whether the sum of its elements is odd or even.

> Give your answer as a string matching "odd" or "even".

> If the input array is empty consider it as: [0] (array with a zero).

```javascript
Input: [0];
Output: "even";

Input: [0, 1, 4];
Output: "odd";

Input: [0, -1, -5];
Output: "even";
```

```javascript
function oddOrEven(array) {
  //code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function oddOrEven(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum % 2 === 0 ? "even" : "odd";
}
```

</details>

<details><summary><b>Best Answer ✔</b></summary>

```javascript
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
```

</details>

</details>

---

<details><summary><b>Day 10</b></summary>

#### Mexican Wave

> 7 kyu

###### Description:

> Introduction
> In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

> 1.  The input string will always be lower case but maybe empty.

> 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

```javascript
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```

```javascript
function wave(str) {
  // Code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}
```

</details>

<details><summary><b>Best Answer ✔</b></summary>

```javascript
function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
  });

  return result;
}
```

</details>

</details>

---

<details><summary><b>Day 11 (1)</b></summary>

#### Beginner Series #3 Sum of Numbers

> 7 kyu

###### Description:

> Introduction
> Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b

```javascript
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
```

```javascript
function getSum(a, b) {
  // Code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function GetSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  else return a + GetSum(a - 1, b);
}
```

</details>

</details>

---

<details><summary><b>Day 12</b></summary>

#### Who likes it?

> 6 kyu

###### Description:

> Introduction
> You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

> Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```javascript
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

```javascript
function likes(names) {
  // Code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function likes(names) {
  let newStr = "";

  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    newStr = `${names[0]} likes this`;
  } else if (names.length === 2) {
    newStr = `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    newStr = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    newStr = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

  return newStr;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}
```

</details>

</details>

---

<details><summary><b>Day 13</b></summary>

#### Who likes it?

> 6 kyu

###### Description:

> Introduction
> Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

```javascript
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```

```javascript
function solution(str) {}
```

<details><summary><b>My Answer🤔 </b></summary>

```javascript
function solution(str) {
  let arr = [];
  let newStr = "";
  if (str.length % 2 != 0) {
    str += "_";
  }
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (newStr.length === 2) {
      arr.push(newStr);
      newStr = "";
    }
  }
  return arr;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function solution(str) {
  let arr = [];
  let newStr = "";
  if (str.length % 2 != 0) {
    str += "_";
  }
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (newStr.length === 2) {
      arr.push(newStr);
      newStr = "";
    }
  }
  return arr;
}
```

</details>

</details>

---

<details><summary><b>Day 14</b></summary>

#### Shortest Word

> 7 kyu

###### Description:

> Introduction
> Simple, given a string of words, return the length of the shortest word(s).

> String will never be empty and you do not need to account for different data types.

```javascript
function findShort(s) {}
```

<details><summary><b>My Answer</b></summary>

```javascript
function findShort(s) {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr.sort((a, b) => a - b)[0];
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}
```

</details>

</details>

---

<details><summary><b>Day 15</b></summary>

#### If you can't sleep, just count sheep!!

> 7 kyu

###### Description:

> Introduction
> Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

```javascript
var countSheep = function (num) {
  //your code here
};
```

<details><summary><b>My Answer</b></summary>

```javascript
var countSheep = function (num) {
  let newArr = [];

  for (let i = 1; i <= num; i++) {
    newArr.push(i + " sheep...");
  }

  return newArr.join("");
};
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
```

</details>

</details>

---

<details><summary><b>Day 16</b></summary>

#### Sum of two lowest positive integers

> 7 kyu

###### Description:

> Introduction
> Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

```javascript
[10, 343445353, 3453445, 3453545353453] should return 3453455
```

```javascript
function sumTwoSmallestNumbers(numbers) {
  //code
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function sumTwoSmallestNumbers(numbers) {
  let newArr = numbers.sort((a, b) => a - b);
  return newArr[0] + newArr[1];
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
```

</details>

</details>

---

<details><summary><b>Day 17</b></summary>

#### Number of People in the Bus

> 7 kyu

###### Description:

> Introduction
> There is a bus moving in the city, and it takes and drop some people in each bus stop.

> You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

> Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

> Take a look on the test cases.

> Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

> The second value in the first integer array is 0, since the bus is empty in the first bus stop.

```javascript
var number = function (busStops) {
  // Good Luck!
};
```

<details><summary><b>My Answer</b></summary>

```javascript
var number = function (busStops) {
  let newArray = [];

  for (let i = 0; i < busStops.length; i++) {
    let calculate = busStops[i][0] - busStops[i][1];
    newArray.push(calculate);
  }
  return newArray.reduce((a, b) => a + b);
};
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
var number = function (busStops) {
  return busStops.map((x) => x[0] - x[1]).reduce((x, y) => x + y);
};
```

</details>

</details>

---

<details><summary><b>Day 18</b></summary>

#### Find the divisors!

> 7 kyu

###### Description:

> Introduction
> Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

```javascript
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
```

```javascript
function divisors(integer) {
  //code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function divisors(integer) {
  let newValue = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      newValue.push(i);
    }
  }

  return newValue.length === 0 ? `${integer} is prime` : newValue;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function divisors(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}
```

</details>

</details>

---
