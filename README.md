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
