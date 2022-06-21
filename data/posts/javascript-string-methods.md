---
title: "Javascript String Methods"
date: "21 Jun, 2022"
excerpt: "In this article, I will show you some string methods that help you work with strings."
cover_image: "/images/posts/javascriptstringmethod.webp"
category: ["JavaScript"]
---

Hello Friends,

In this forum, I will share some string methods that help you work with strings.
Often we need to manipulate strings to display the desired result. So, this is a very important skill for the frontend developer.

1. length

   The length returns the length of a string.

   ```javascript
   let myName = "Shrestha";
   const length = myName.length;
   console.log(length);
   // Expected Output 8
   ```

2. indexof()

   The indexof() returns the position of the first occurrence of a value in a string. In case of the not found method returns -1. The method is case-sensitive.

   ```javascript
   let aboutme = "I am a React Developer";
   console.log(aboutme.indexof('React');
   // Expected Output 7
   ```

3. lastindexof()

   The method returns the index (position) of the last occurrence of a specific value in a string. In case of the not found method returns -1. The method is also case-sensitive.

   ```javascript
   let aboutme = "I am a React Developer";
   console.log(aboutme.lastindexof("ac", 14));
   // Expected result 9
   ```

4. search()

   This method matches a string against a regular expression and returns the index(position) of the first match. This method is also case-sensitive and returns -1 if no match was found.

   ```javascript
   let aboutme = "I am a React Developer";
   console.log(aboutme.search('React');
   // Expected result is 7
   ```

5. slice()

   This method helps to extract a part of the string into a new string without changing the original string. It takes two parameters. the first parameter is starting point or position, the second parameter is the ending point or position.

   ```javascript
   let aboutme = "I am a React Developer";
   console.log(aboutme.slice(0, 12));
   // Expected result is "I am a React"
   ```

6. substring()

   This method is similar to slice. But negative index value is ignored.

   ```javascript
   let aboutme = "I am a React Developer";
   console.log(aboutme.substring(6, -12));
   // Expected result is "I am a"
   ```

7. substr()

   This method is also similar to slice. But the second parameter specifies the length of the extracted string.

   ```javascript
   let aboutme = "I am a React Developer";
   console.log(aboutme.substring(6, 12));
   // Expected result is "React Devel"
   ```

8. charAt()

   This method returns the character at a specific index in the string, if it's available.

   ```javascript
   let string = "Javascript";
   console.log(string.charAt(4));
   // Expected result is "s"
   ```

9. charCodeAt()

   This method returns the Unicode value of the character at a specific index in the string if it's available.

   ```javascript
   let string = "Javascript";
   console.log(string.charCodeAt(4));
   // Expected result is "115"
   ```

10. toUpperCase()

    This method converts all string characters to upper case.

    ```javascript
    let name = "shrestha";
    console.log(name.toUpperCase());
    // Expected result is "SHRESTHA"
    ```

11. toLowerCase()

    This method converts all string characters to lower case.

    ```javascript
    let name = "SHRESTHA";
    console.log(name.toLowerCase());
    // Expected result is "shrestha"
    ```

12. concat()

    This method is used to join two strings together into a single string.

    ```javascript
    let firstname = "john";
    let secondname = "doe";
    console.log(firstname.concat(secondname));
    // Expected result is "johndoe"
    ```

13. replace()

    This method is used to replace the match and return the newly replaced string.

    ```javascript
    let name = "john doe";
    console.log(name.replace("john", "smith"));
    // Expected result is "smith doe"
    ```

14. trim()

    This method is used to remove the whitespace from either side of a string.

    ```javascript
    let name = "    shrestha    ";
    console.log(name.trim());
    // Expected result is "shrestha"
    ```

15. split()

    This method is used to convert a string to an array.

    ```javascript
    let fruit = "apple, mango, orange";
    console.log(fruit.split(","));
    // Expected result is ["apple", "mango", "orange"]
    ```

Thank You for reading the article. Do like, save and share this article if you found this helpful.