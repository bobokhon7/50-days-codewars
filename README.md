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

>8 kyu

###### Description:

> Build a function that returns an array of integers from n to 1 where n>0.

>Example : n=5 --> [5,4,3,2,1]

```javascript
const reverseSeq = n => {
  return [];
};
```

<details><summary><b>My Answer</b></summary>

```javascript
const reverseSeq = n => {
    let newVal = [];

    for(let i=1; i<=n; i++){
        newVal.push(i)
    }
    return newVal.reverse()
};
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
const reverseSeq = n => {
    const newArray = [];
    for( let i = n; i>0; i--){
    newArray.push(i)};
    return  newArray;
  };
```

</details>

</details>

---
<details><summary><b>Day 3</b></summary>

#### Century From Year

>8 kyu

###### Description:

> Introduction
>The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 >up to and including the year 200, etc.

>Task
>Given a year, return the century it is in.

>Examples
>1705 --> 18
>1900 --> 19
>1601 --> 17
>2000 --> 20

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

    for(let i = 0; i < year; i++) {
      if(i % 100 == 0) {
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
    return Math.ceil((year)/100)
  }
```

</details>

</details>

---
