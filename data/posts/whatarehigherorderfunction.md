---
title: "What are Higher-Order Functions in JavaScript?"
date: "6 May, 2022"
excerpt: "A higher order function is a function that takes in a function as an argument or returns a function."
cover_image: "/images/posts/higherorderfunctioninjavascript.webp"
category: ["JavaScript"]
---

# Higher-Order Functions

Higher-Order function is a function that accepts and returns another function. Usually when you hear the word functions you think of a regular function that takes an input, does some magic, and returns some value as output. For example,

```javascript
function sum_nums(x, y) {
  return x + y;
}

let results = sum_nums(11, 22);
console.log(results);
```

# Difference between normal function and a higher-order function

A Higher order function is a function that takes in a function as an argument or returns a function.

Here are some examples.

- map()
- forEach()
- reduce()
- filter()

Now all these higher order functions apply to arrays so we'll make a dummy array with some numbers to practise using those functions.

Our array will be let nums = [2, 4, 6, 8, 3, 5]

1. THE MAP() METHOD

   This method iterates over an array. Common use for this function is when we iterate over some response from an API and need to log or render the elements on our frontend.

```javascript
let newnums = nums.map((x) => x * 4);
console.log(newnums);
```

we don't need to return the function by default returns a value.

2. THE FOREACH() METHOD

As the name implies, this function also iterates over an array but the difference is that map() returns a new array meanwhile forEach() returns undefined.

```javascript
nums.forEach((x) => x * 4);
```

3. THE REDUCE() METHOD

This method takes a callback that takes two parameters, one that represents the element from the last iteration and the other is the current element of the iteration.

Use case is finding the sum of the array elements by adding the previous element to the current element like so:

```javascript
let result = nums.reduce((prev, curr) => prev + curr);
console.log(result);
```

4. THE FILTER() METHOD

We use this method to filter out desired elements as per a condition we specify, say you only want the odd numbers or even numbers or want numbers higher or lower than a specific value, if that's the case then this method is the right tool.

The method returns a new array and we're going to return in his example only the even numbers of our array so:

```javascript
let even_nums = nums.filter((el) => el % 2 === 0);
console.log(even_nums); // [2, 4, 6, 8]
```

# Why should I Use Them More?

They make your code look really cleaner and more readable than nested for loops and bunch of if statements, that's my only personel opinion on why I love those way more..
