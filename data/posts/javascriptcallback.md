---
title: "JavaScript Callback Function Explained for Beginners"
date: "1 May, 2022"
excerpt: "A Javascript callback is an anonymous function that's executed when a certain event occurs(such as the user clicking on an element, receiving an HTTP request, etc)."
cover_image: "/images/posts/javascriptcallbacks.webp"
category: ["JavaScript"]
---

Today I will tell you about JavaScript callback functions with the help of examples.

### What is CallBack Function ?

Callback function is a block of code that performs a certain task when called. For example,

```javascript
// function
function sum(a, b) {
  return a + b;
}

sum(5, 6);
```

In the above code, a value is provided as an argument to the sum() function.
In JavaScript, you can pass function as an argument to a another function.
This function passed as an argument inside of another function is called a callback function. For example,

```javascript
//function
function calc(a, b, func) {
  console.log(`${a} , ${b}`);
  return func(a, b);
}
// callback function
function sum(a, b) {
  return a + b;
}
// passing function as an argument
calc(4, 5, sum);

// output will be
// 4 , 5
// 9
```

Here while calling the calc() function, three arguments are passed. The sum() function is a callback function.

### Benefit of using Callback Function

- Enhance customer experience
- Abandoned call rate is improved
- Can respond smoothly to a large number of inquiries
- Increase the motivation of support personnel

Hope, this post will help you to understand the basic of Javascript Callbacks. Please Share If you like this post.
