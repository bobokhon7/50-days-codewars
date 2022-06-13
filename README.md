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
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
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
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
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
    newStr = `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`;
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
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}
```

</details>

</details>

---

<details><summary><b>Day 19 (1)</b></summary>

#### Does my number look big in this?

> 6 kyu

###### Description:

> Introduction
> A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

> For example, take 153 (3 digits), which is narcisstic:

```javascript
   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

> and 1652 (4 digits), which isn't:

```javascript
       1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

> The Challenge:

> Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

> Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

```javascript
function narcissistic(value) {
  // Code me to return true or false
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function narcissistic(value) {
  let newValue = value.toString().split("").map(Number);
  let newArr = [];

  for (let i = 0; i < newValue.length; i++) {
    newArr.push(Math.pow(newValue[i], newValue.length));
  }

  let sumArr = newArr.reduce((a, b) => a + b);
  return sumArr === value ? true : false;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}
```

</details>

</details>

---

<details><summary><b>Day 19 (2)</b></summary>

#### Abbreviate a Two Word Name

> 8 kyu

###### Description:

> Introduction
> Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

> The output should be two capital letters with a dot separating them.

> It should look like this:

> For example, take 153 (3 digits), which is narcisstic:

```javascript
  Sam Harris => S.H

patrick feeney => P.F
```

```javascript
function abbrevName(name) {
  // code away
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function abbrevName(name) {
  let newVar = name.split(" ");
  if (newVar.length > 1) {
    return `${newVar[0][0].toUpperCase()}.${newVar[1][0].toUpperCase()}`;
  } else {
    return name.toUpperCase();
  }
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
```

</details>

</details>

---

<details><summary><b>Day 20 (1)</b></summary>

#### Difference of Volumes of Cuboids

> 8 kyu

###### Description:

> Introduction
> In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

> For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

> Your function will be tested with pre-made examples as well as random ones.

```javascript
function findDifference(a, b) {
  //loading...
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function findDifference(a, b) {
  let new1 = a.reduce((a, b) => a * b);
  let new2 = b.reduce((a, b) => a * b);

  if (new1 > new2) {
    return new1 - new2;
  } else {
    return new2 - new1;
  }
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function find_difference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}
```

</details>

</details>

---

<details><summary><b>Day 20 (2)</b></summary>

#### Find Maximum and Minimum Values of a List

> 8 kyu

###### Description:

> Introduction
> Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

> Examples (Input -> Output)

```javascript
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
```

```javascript
var min = function (list) {
  return list[0];
};

var max = function (list) {
  return list[0];
};
```

<details><summary><b>My Answer</b></summary>

```javascript
var min = function (list) {
  return list.sort((a, b) => a - b)[0];
};

var max = function (list) {
  return list.sort((a, b) => a - b)[list.length - 1];
};
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
```

</details>

</details>

---

<details><summary><b>Day 20 (3)</b></summary>

#### Don't give me five!

> 7 kyu

###### Description:

> Introduction
> In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

> Examples (Input -> Output)

```javascript
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12  -> min = 5, max = 5
```

> The result may contain fives. ;-)
> The start number will always be smaller than the end number. Both numbers can be also negative!

> I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

> Have fun coding it and please don't forget to vote and rank this kata! :-)

> I have also created other katas. Take a look if you enjoyed this kata!

```javascript
function dontGiveMeFive(start, end) {
  return 0;
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function dontGiveMeFive(start, end) {
  let newArr = [];

  for (let i = start; i <= end; i++) {
    newArr.push(`${i}`);
  }

  return newArr.length - newArr.filter((element) => element.includes(5)).length;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}
```

</details>

</details>

---

<details><summary><b>Day 21 (1)</b></summary>

#### Third Angle of a Triangle

> 8 kyu

###### Description:

> Introduction
> You are given two interior angles (in degrees) of a triangle.

> Write a function to return the 3rd.

> Note: only positive integers will be tested.

```javascript
function otherAngle(a, b) {
  //cocde
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function otherAngle(a, b) {
  return 180 - (a + b);
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
const otherAngle = (a, b) => 180 - a - b;
```

</details>

</details>

---

<details><summary><b>Day 21 (2)</b></summary>

#### Sum of the first nth term of Series

> 7 kyu

###### Description:

> Introduction
> Your task is to write a function which returns the sum of following series upto nth term(parameter).

> Examples (Input -> Output)

```javascript
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
```

> Rules:
> You need to round the answer to 2 decimal places and return it as String.

> If the given value is 0 then it should return 0.00

> You will only be given Natural Numbers as arguments.

```javascript
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
```

```javascript
function SeriesSum(n) {
  // Happy Coding ^_^
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function SeriesSum(n) {
  let result = 0;
  let addThree = 1;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result = 1;
    } else {
      addThree += 3;
      result = result + 1 / addThree;
    }
  }

  return result.toFixed(2);
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }
  return s.toFixed(2);
}
```

</details>

</details>

---

<details><summary><b>Day 22</b></summary>

#### How good are you really?

> 8 kyu

###### Description:

> There was a test in your class and you passed it. Congratulations!
> But you're an ambitious person. You want to know if you're better than the average student in your class.

> You receive an array with your peers' test scores. Now calculate the average and compare your score!

> Return True if you're better, else False!

> Note:
> Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

```javascript
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a, b) => a + b) / classPoints.length;

  if (yourPoints > sum) {
    return true;
  } else {
    return false;
  }
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }
  return s.toFixed(2);
}
```

</details>

</details>

---

<details><summary><b>Day 23</b></summary>

#### The highest profit wins!

> 7 kyu

###### Description:

> Story
> Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

> Task
> Write a function that returns both the minimum and maximum number of the given list/array.

```javascript
minMax([1, 2, 3, 4, 5]) == [1, 5];
minMax([2334454, 5]) == [5, 2334454];
minMax([1]) == [1, 1];
```

```javascript
function minMax(arr) {
  return [0, 0]; // fix me!
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function minMax(arr) {
  if (arr.length > 2) {
    let newArr = [];
    let newVal = arr.sort((a, b) => a - b);
    newArr.push(newVal[0]);
    newArr.push(newVal[newVal.length - 1]);
    return newArr;
  } else if (arr.length > 1) {
    return arr.sort((a, b) => a - b);
  } else if (arr.length > 0) {
    let newVal1 = arr;
    let num = arr[0];
    newVal1.push(num);
    return newVal1;
  }
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
```

</details>

</details>

---

<details><summary><b>Day 24</b></summary>

#### Sum of Minimums!

> 7 kyu

###### Description:

> Given a 2D ( nested ) list ( array, vector, .. ) of size m \* n, your task is to find the sum of the minimum values in each row.

> For Example:

```javascript
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
```

> So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

> Note: You will always be given a non-empty list containing positive values.

```javascript
function sumOfMinimums(arr) {
  // your code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function sumOfMinimums(arr) {
  let newArr = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr += Math.min(...arr[i]);
  }
  return newArr;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}
```

</details>

</details>

---

<details><summary><b>Day 25</b></summary>

#### Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

> 7 kyu

###### Description:

> You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

> Your task is to return the number of JavaScript developers coming from Europe.

> For example, given the following list:

```javascript
var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];
```

> your function should return number 1.

> If, there are no JavaScript developers from Europe then your function should return 0.

> Notes:

> The format of the strings will always be Europe and JavaScript.
> All data will always be valid and uniform as in the example above.

```javascript
function countDevelopers(list) {
  // your awesome code here :)
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function countDevelopers(list) {
  let newArr = [];
  list.map((a) => {
    if (a.continent == "Europe" && a.language == "JavaScript") {
      newArr.push(a);
    }
  });

  return newArr.length === 0 ? 0 : newArr.length;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function countDevelopers(list) {
  return list.filter(
    (x) => x.continent == "Europe" && x.language == "JavaScript"
  ).length;
}
```

</details>

</details>

---

<details><summary><b>Day 26</b></summary>

#### Is n divisible by x and y?

> 8 kyu

###### Description:

> Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

> For example, given the following list:

```javascript
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
```

```javascript
function isDivisible(n, x, y) {}
```

<details><summary><b>My Answer</b></summary>

```javascript
function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
```

</details>

</details>

---

<details><summary><b>Day 27</b></summary>

#### Sum of all arguments

> 7 kyu

###### Description:

> Write a function that finds the sum of all its arguments.

> For example, given the following list:

```javascript
sum(1, 2, 3); // => 6
sum(8, 2); // => 10
sum(1, 2, 3, 4, 5); // => 15
```

```javascript
function sum() {
  //code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function sum(...val) {
  return val.reduce((a, b) => a + b);
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
```

</details>

</details>

---

<details><summary><b>Day 28</b></summary>

#### Four/Seven

> 7 kyu

###### Description:

> Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

> There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

> Good Luck!

```javascript
function fourSeven(n) {
  // Your Code Here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function fourSeven(n) {
  while (n === 7) {
    return 4;
  }
  while (n === 4) {
    return 7;
  }
  return 0;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function fourSeven(n) {
  // Your Code Here
  let results = {
    7: 4,
    4: 7,
  };
  return results[n] || 0;
}
```

</details>

</details>

---

<details><summary><b>Day 29</b></summary>

#### USD => CNY

> 8 kyu

###### Description:

> Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

> Examples (Input -> Output)

```javascript
* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'
```

> The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

```javascript
function usdcny(usd) {}
```

<details><summary><b>My Answer</b></summary>

```javascript
function usdcny(usd) {
  let newVal = usd * 6.75;
  return `${newVal.toFixed(2)} Chinese Yuan`;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}
```

</details>

</details>

---

<details><summary><b>Day 30</b></summary>

#### Moves in squared strings (I)

> 7 kyu

###### Description:

> his kata is the first of a sequence of four about "Squared Strings".

> You are given a string of n lines, each substring being n characters long: For example:

> s = "abcd\nefgh\nijkl\nmnop"

> We will study some transformations of this square of strings.

> Vertical mirror: vert_mirror (or vertMirror or vert-mirror)

```javascript
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
```

> Horizontal mirror: hor_mirror (or horMirror or hor-mirror)

```javascript
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

```

```javascript
vertical mirror   |horizontal mirror
abcd --> dcba     |abcd --> mnop
efgh     hgfe     |efgh     ijkl
ijkl     lkji     |ijkl     efgh
mnop     ponm     |mnop     abcd

```

> Task:
> Write these two functions
> and

> high-order function oper(fct, s) where

> fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

```javascript
function vertMirror(strng) {
  // Your code
}
function horMirror(strng) {
  // Your code
}
function oper(fct, s) {
  // Your code
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function vertMirror(strng) {
  return strng
    .split("\n")
    .map((item) => item.split("").reverse().join("").split(" "))
    .join("\n");
}
function horMirror(strng) {
  let reverse = strng.split("\n").reverse().join("\n");
  return reverse;
}
function oper(fct, s) {
  return fct(s);
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function vertMirror(strng) {
  return strng
    .split("\n")
    .map((part) => part.split("").reverse().join(""))
    .join("\n");
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  return fct(s);
}
```

</details>

</details>

---

<details><summary><b>Day 31</b></summary>

#### Even and Odd !

> 7 kyu

###### Description:

> Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

```javascript
* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'
```

> The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

```javascript
input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
```

> 0 is considered as an even number.

> In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.

```javascript
function evenAndOdd(num) {
  // your code here
  return [0, 0];
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function evenAndOdd(num) {
  let odd = [];
  let even = [];

  let numArr = num.toString().split("").map(Number);

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      even.push(numArr[i]);
    } else {
      odd.push(numArr[i]);
    }
  }
  let newVal1 = Number(odd.join(""));
  let newVal2 = Number(even.join(""));

  return [newVal2, newVal1];
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function evenAndOdd(n) {
  const f = (n, x) => +[...(n + "")].filter((e) => e % 2 === x).join``;
  return [f(n, 0), f(n, 1)];
}
```

</details>

</details>

---

<details><summary><b>Day 32</b></summary>

#### Semi-Optional

> 8 kyu

###### Description:

> We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

> The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

```javascript
function wrap(value) {
  return;
  {
    value: value;
  }
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function wrap(value) {
  return { value: value };
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function wrap(value) {
  return {
    value: value,
  };
}
```

</details>

</details>

---

<details><summary><b>Day 33</b></summary>

#### Find The Parity Outlier

> 6 kyu

###### Description:

> You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

```javascript
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

```javascript
function findOutlier(integers) {
  //your code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function findOutlier(integers) {
  let arr1 = [];
  let arr2 = [];

  integers.map((val) => {
    if (val % 2 === 0) {
      arr1.push(val);
    } else {
      arr2.push(val);
    }
  });
  return arr1.length > arr2.length ? arr2[0] : arr1[0];
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
```

</details>

</details>

---

<details><summary><b>Day 34</b></summary>

#### List Filtering

> 7 kyu

###### Description:

> In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

```javascript
filter_list([1, 2, "a", "b"]) == [1, 2];
filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];
```

```javascript
function filter_list(l) {
  // Return a new array with the strings filtered out
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function filter_list(l) {
  return l.filter((val) => {
    return typeof val !== "string";
  });
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}
```

</details>

</details>

---

<details><summary><b>Day 35(1)</b></summary>

#### Responsible Drinking

> 7 kyu

###### Description:

> Welcome to the Codewars Bar!
> Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

> Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

```javascript
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks

```

```javascript
function hydrate(s) {
  // your code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function hydrate(s) {
  let newVal = s
    .split(" ")
    .filter((val) => {
      return val.length === 1;
    })
    .map(Number)
    .reduce((a, b) => a + b);

  return newVal === 1
    ? `${newVal} glass of water`
    : `${newVal} glasses of water`;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water`: '1 glass of water'

```

</details>

</details>

---

<details><summary><b>Day 35(2)</b></summary>

#### Detect Pangram

> 6 kyu

###### Description:

> A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

> Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

```javascript
function isPangam(str) {
  // your code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function isPangram(str) {
  var regex = /([a-z])(?!.*\1)/gi;
  return str.match(regex).length === 26 ? true : false;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}
```

</details>

</details>

---

<details><summary><b>Day 36</b></summary>

#### Convert string to camel case

> 6 kyu

###### Description:

> Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

```javascript
function toCamelCase(str) {}
```

<details><summary><b>My Answer 😅</b></summary>

```javascript
// My answer almost is right but I could not finish all test (failed 😇)
function toCamelCase(str) {
  let newVal = str
    .replace(/[_-]/g, " ")
    .split(" ")
    .map((val) => {
      if (val[0] === toUpperCase()) {
      }
      return val[0].toUpperCase() + val.slice(1);
    });

  return str === "" ? "" : newVal.join("");
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
```

</details>

</details>

---

<details><summary><b>Day 37</b></summary>

#### CSpacify

> 7 kyu

###### Description:

> Modify the spacify function so that it returns the given string with spaces inserted between each character.

```javascript
function spacify(str) {
  // return
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function spacify(str) {
  let val = str.split("").join(' )

  return val;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function spacify(str) {
  return str.split("").join(" ");
}
```

</details>

</details>

---

<details><summary><b>Day 38</b></summary>

#### Thinkful - List and Loop Drills: Lists of lists

> 7 kyu

###### Description:

> You have a two-dimensional list in the following format:

```javascript
data = [
  [2, 5],
  [3, 4],
  [8, 7],
];
```

> Each sub-list contains two items, and each item in the sub-lists is an integer.

> Write a function process_data()/processData() that processes each sub-list like so:

```javascript
[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
```

> and then returns the product of all the processed sub-lists: -3 _ -1 _ 1 --> 3.

> For input, you can trust that neither the main list nor the sublists will be empty.

```javascript
function processData(data) {
  //your code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function processData(data) {
  let newArr = [];

  data.map((val) => {
    let value1 = val.reduce((a, b) => a - b);
    newArr.push(value1);
  });
  return newArr.reduce((a, b) => a * b);
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function processData(data) {
  return data.reduce((acc, cur) => acc * (cur[0] - cur[1]), 1);
}
```

</details>

</details>

---

<details><summary><b>Day 39</b></summary>

#### Rock Paper Scissors!

> 8 kyu

###### Description:

> You have a two-dimensional list in the following format:

```javascript
data = [
  [2, 5],
  [3, 4],
  [8, 7],
];
```

> Let's play! You have to return which player won! In case of a draw return Draw!.

> Examples:

```javascript
rps("scissors", "paper"); // Player 1 won!
rps("scissors", "rock"); // Player 2 won!
rps("paper", "paper"); // Draw!
```

```javascript
const rps = (p1, p2) => {};
```

<details><summary><b>My Answer </b></summary>

```javascript
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  }
};
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
```

</details>
</details>

---

<details><summary><b>Day 40</b></summary>

#### Create Phone Number

> 6 kyu

###### Description:

> Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

```javascript
function createPhoneNumber(numbers) {
  //////code
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function createPhoneNumber(numbers) {
  let firstThreeNum = numbers.slice(0, 3).join("");
  let secondThreeNum = numbers.slice(3, 6).join("");
  let thirdFourNum = numbers.slice(6, 10).join("");

  return `(${firstThreeNum}) ${secondThreeNum}-${thirdFourNum}`;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
```

</details>

</details>

---

<details><summary><b>Day 41</b></summary>

#### Is a number prime?

> 6 kyu

###### Description:

> Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

> Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

> Requirements
> You can assume you will be given an integer input.
> You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
> NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31
> ( similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
> Example

```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

```javascript
function isPrime(num) {}
```

<details><summary><b>My Answer </b></summary>

```javascript
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```

</details>

</details>

---

<details><summary><b>Day 42</b></summary>

#### String ends with?

> 7 kyu

###### Description:

> Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

> Examples:

```javascript
solution("abc", "bc"); // returns true
solution("abc", "d"); // returns false
```

```javascript
function solution(str, ending) {
  // TODO: complete
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function solution(str, ending) {
  return str.endsWith(ending);
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function solution(str, ending) {
  return str.substr(-ending.length) == ending;
}
```

</details>

</details>

---

<details><summary><b>Day 43</b></summary>

#### Remove the minimum

> 7 kyu

###### Description:

> Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

> Don't change the order of the elements that are left.

> Examples:

```javascript
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
```

```javascript
function removeSmallest(numbers) {
  throw "TODO: removeSmallest";
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers)); //// find index of first min number
  return numbers.filter((a, b) => b !== indexOfMin); ///then filter and remove from array first min numnber
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((a, b) => b !== indexOfMin);
}
```

</details>

</details>

---

<details><summary><b>Day 44</b></summary>

#### Hello, Name or World!

> 8 kyu

###### Description:

> Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

> Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

> Examples:

```javascript
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given
  or `name` = ""        => return "Hello, World!"
```

```javascript
function hello(name) {
  return "";
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return "Hello, World!";
  } else {
    let makeLowerCase = name.toLowerCase();
    let makeFirsrUpperCase =
      makeLowerCase[0].toUpperCase() + makeLowerCase.slice(1);

    return `Hello, ${makeFirsrUpperCase}!`;
  }
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
const hello = (s) =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`;
```

</details>

</details>

---

<details><summary><b>Day 45</b></summary>

#### Lario and Muigi Pipe Problem

> 8 kyu

###### Description:

> Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the
> maximum value (both included).

> Examples:

```javascript
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
```

```javascript
function pipeFix(numbers) {
  ///// code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function pipeFix(numbers) {
  if (numbers.length === 1) {
    return numbers;
  } else {
    let findLastDigit = numbers.pop();
    let findFisrtDigit = numbers.shift();
    let newArr = [];
    for (let i = findFisrtDigit; i <= findLastDigit; i++) {
      newArr.push(i);
    }
    return newArr;
  }
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function pipeFix(numbers) {
  var first = numbers[0];
  var last = numbers[numbers.length - 1];

  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
```

</details>

</details>

---

<details><summary><b>Day 46</b></summary>

#### Anagram Detection

> 7 kyu

###### Description:

> Note: anagrams are case insensitive

> Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
> Examples:

```javascript
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
```

```javascript
// write the function isAnagram
var isAnagram = function (test, original) {};
```

<details><summary><b>My Answer </b></summary>

```javascript
function pipeFix(numbers) {
var isAnagram = function (test, original) {
  let firstWord = test.toLowerCase().split("").sort().join("");
  let secondWord = original.toLowerCase().split("").sort().join("");
  let compare = firstWord.localeCompare(secondWord);

  if (compare === 0) {
    return true;
  } else {
    return false;
  }
};

```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
// write the function isAnagram
var isAnagram = function (test, original) {
  var t = test.toLowerCase().split("").sort().join("");
  var o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false;
};
```

</details>

</details>

---

<details><summary><b>Day 47</b></summary>

#### Are they the "same"?

> 6 kyu

###### Description:

> Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the
> same > multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the
> elements >
> in a squared, regardless of the order.

> Examples:

```javascript
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
///
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
```

```javascript
function comp(array1, array2) {
  //your code here
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function comp(array1, array2) {
  let result = false;

  if (array1 && array2) {
    if (array1.length === 0 && array2.length === 0) {
      result = true;
    } else {
      const squareRoots = array2.map((num) => Math.sqrt(num));
      array1.sort((a, b) => a - b);
      squareRoots.sort((a, b) => a - b);
      for (let i = 0; i < squareRoots.length; i++) {
        if (array1.indexOf(squareRoots[i]) !== array1.indexOf(array1[i])) {
          result = false;
          break;
        }
        result = true;
      }
    }
  }
  return result;
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
```

</details>

</details>

---

<details><summary><b>Day 48</b></summary>

#### Your order, please

> 6 kyu

###### Description:

> Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word
> should have in the > result.

> Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

> If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

> Examples:

```javascript
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

```javascript
function order(words) {
  // ...
}
```

<details><summary><b>My Answer </b></summary>

```javascript
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
```

</details>

<details><summary><b>Best Answer </b></summary>

```javascript
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
```

</details>

</details>
