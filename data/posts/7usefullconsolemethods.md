---
title: "7 Useful Console Methods"
date: "19 Jul, 2022"
excerpt: "Here, I will explain 7 console methods that will be useful while working with console."
cover_image: "/images/posts/7usefulconsolemethods.webp"
category: ["JavaScript"]
---

In JavaScript, we mostly use the console for logging our results to check whether our code is running well or not. But there are lots of things we can do in our console.
So, Today I will explain to you 7 console methods that are very useful while working with a console.

1. Console.Clear()

   This command helps us to clear all our previous console statements. Great for keeping console clean and organized, Helpful for debugging purposes.

   ```JavaScript
   console.clear();
   ```

2. Console.info()

   This command is used to print an informational message that contains the string or message we pass into the method.

   ```JavaScript
   console.info('This is an info message');
   ```

3. Console.warn()

   This method is similar to info but we used it to display a warning message to the console which can be identified by the yellow text color.

   ```JavaScript
   console.warn('This is an warning message');
   ```

4. Console.error()

   This method is used to print the error message with red text styling applied.

   ```JavaScript
   console.error('This is an error message');
   ```

5. Console.Group and Console.GroupEnd()

   This method is used to group console statements while printing them into the console. We will write the console statements to be displayed between console.group() and console.groupEnd().
   Great way to provide structure to our console output while debugging.

   ```JavaScript
   console.group();
   console.log('This is an  message 1');
   console.log('This is an  message 2');
   console.groupEnd();
   ```

6. Console.time() and Console.timeEnd()

   This method can be used as timer to our console. console.time() starts the timer and console.timeEnd() ends the timer. Here, result will be the difference between the console.time() and the console.timeEnd().

7. Console.Table()

   This method allows us to display the table in our console. It takes array data and displays the tables with the array data in the console.

   ```javascript
   const randomArr = [[1, 2, 3, 4]];
   console.table(randomArr);
   ```

Thank you for reading this article till end. I hope this was helpful and if you like it then please share with your friends.
