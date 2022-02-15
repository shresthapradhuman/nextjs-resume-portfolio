---
title: "7 JavaScript One-Liners"
date: "15 Feb, 2022"
excerpt: "JavaScript is the backbone of Web Development. So, today I will share 7 One-Liners of JavaScript."
cover_image: "/images/posts/7javascriptoneliner.webp"
category: ["Javascript"]
---

## As Everyone know that JavaScript is the backbone of Web Development. <br> So, today I will share 7 One-Liners of JavaScript. 

1. Shuffle Array

    Very usefull snippet to shuffle array. 
    ```
     const shuffleArray = (arr) => arr.sort(()=> Math.random()- 0.5);
     // Testing
     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     console.log(shuffleArray(arr));
     ```
2. Copy to Clipboard
   
   is used to copy text to clipboard.
   ```
    const copyToClipboard = (text) => navigator.clipboard ? .writeText && navigator.clipboard.writeText(text);

    // Testing
    copyToClipboard("Hello World!");
    ```
3. Unique Elements
   
   is used to get the unique elements from an array using the Set. JavaScript use Set for implementation of Hash List.
   ```
    const getUnique = (arr) => [...new Set(arr)];
    //Testing
    const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5]
    console.log(getUnique(arr));

4. Detect Dark Mode
   
   is used to switch app to dark mode if the user has it's enabled in their device. media queris are utilized for making the task.

   ```
    const isDarkMode = () => 
      window.matchMedia && 
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Testing
    console.log(isDarkMode());
    ```
5. Scroll To Top
   
   is used to scrollIntoView mdethod.Add behaviour: "smooth for a smooth scrolling animation.

   ```
    const scrollToTop = (element) => element.scrollIntoView({ behaviour: "smooth", block: "start" });
    ```
6. Scroll To Bottom
   
   is used same as scorllToTop method, this method can be eassily implemented using the scrollIntoView method, only by switching the block value to end.

   ```
    const scrollToBottom = (element) => element.scrollIntoView({behaviour: "smooth", block: "end" });
    ```

7. Generate Random Color
   
   is used to generate the color randomly. 

   ```
    const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
    ```
Want to see what I am working on? check out my [Github]("https://github.com/shresthapradhuman")