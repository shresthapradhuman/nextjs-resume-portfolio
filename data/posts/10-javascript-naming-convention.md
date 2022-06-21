---
title: "10 JavaScript Naming Conventions"
date: "17 Feb, 2022"
excerpt: "Every JavaScript Developer Must Know Naming Convention. So, today I will discuss 10 JavaScript naming convention best practices one should follow in his/her project."
cover_image: "/images/posts/jsnamingconventions.webp"
category: ["JavaScript"]
---

# Every JavaScript Developer Must Know Naming Convention.

Standard naming conventions increase the readability of your code, make it easier to understand for others who use it or read it. Nowadays, many developers don't know how to use naming conventions correctly.

So, today I will discuss 10 JavaScript naming convention best practices one should follow in his/her project.

1. Variable Naming Conventions

   Variables are case-sensitive, lower and upper case are distinct.
   Also, give a meaningful name for the variable which can be understandable later. Recently camel case naming style is the very popular amount the developer. It will ensure that multiple variables are not the same name. For example to store dog names we can declare 'dogName' instead of 'name', cause it is more meaningful.

   ```js
   /* Good */
   var dogName = "puppy";
   /* Bad */
   var name = "puppy"; // only name is not meainingful.
   ```

2. Booleans Naming Conventions

   Booleans data are used to confirm any data. So, while naming the booleans use is or has as prefixes. For example, to check if a dog has an owner.

   ```js
   /* bad */
   var owner = true;
   /* good */
   var hasOwner = true;
   ```

3. Functions Naming Conventions

   Functions are also case-sensitive like variables. So, use camel case naming style, and meaningful descriptive nouns and verbs as prefixes. For example, function to retrieve name, the function should be getName.

   ```js
   /* bad */
   function name(dogName, ownerName) {
     return `${dogName} ${ownerName}`;
   }
   /* good */
   function getName(dogName, ownerName) {
     return `${dogName} ${ownerName}`;
   }
   ```

4. Constant Naming Conventions

   Uppercase is used to declare the constant variables cause they are nonchanging variables. the constant variable is also case-sensitive. So, if the variable contains multiple words then we should use '_' after each word like 'UPPER_SNAKE_CASE'. Also, constant should be declared at the start of your file, method, or class.

   ```js
   /*bad */
   const leg = 4;
   /* good */
   const LEG = 4;
   /* contains multiple words */
   const DAYS_UNTIL_TOMORROW = 1;
   ```

5. Classes Naming Conventions

   Classes are pretty similar to function. So, use descriptive and meaningful titles. But we would use 'Pascal Case' for declaring names.

   ```js
   /* bad */
   class dogCartoon {
     constructor(dogName, ownerName) {
       this.dogName = dogName;
       this.ownerName = ownerName;
     }
   }
   var cartoon = new dogCartoon("Scooby-Doo", "Shaggy");
   
   /* good */
   class DogCartoon {
     constructor(dogName, ownerName) {
       this.dogName = dogName;
       this.ownerName = ownerName;
     }
   }
   var cartoon = new DogCartoon("Scooby-Doo", "Shaggy");
   ```

6. Components Naming Conventions

   Frameworks like React use components that are used in the DOM. Naming them is similar to classes using 'Pascal Case'. 
   ```js
   /* bad */
   function dogCartoon(roles) {
     return (
       <div>
         <span> Dog Name: {roles.dogName} </span>
         <span> Owner Name: {roles.ownerName} </span>
       </div>
     );
   }
   /* good */
   function DogCartoon(roles) {
     return (
       <div>
         <span> Dog Name: {roles.dogName} </span>
         <span> Owner Name: {roles.ownerName} </span>
       </div>
     );
   }
   ```
   The initial letter should be written in uppercase, so that component stands out from native HTML components when we use them.
   ```js
   <div>
     <DogCartoon roles={{ dogName: "Scooby-Doo", ownerName: "Shaggy" }} />
   </div>
   ```
7. Method Naming Conventions

   The structure of function and method is pretty similar in JavaScript. So, the same naming convention can be used. We should use the camel case style and descriptive nouns and verbs as prefixes.

   ```js
   class DogCartoon {
     constructor(dogName, ownerName) {
       this.dogName = dogName;
       this.ownerName = ownerName;
     }
     getName() {
       return `${this.dogName} ${this.ownerName}`;
     }
   }
   var cartoon = new DogCartoon("Scooby-Doo", "Shaggy");
   console.log(cartoon.getName());
   // "Scooby-Doo Shaggy"
   ```

8. Denoting Private Functions Naming Conventions

   Underscores are used to define variables, functions, and methods in other languages like MYSQL, and PHP. But in JavaScript, it is used to denote the private variables or functions.

   ```js
   class DogCartoon {
     constructor(dogName, ownerName) {
       this.dogName = dogName;
       this.ownerName = ownerName;
       this.name = _toonName(dogName, ownerName);
     }
     _toonName(dogName, ownerName) {
       return `${dogName} ${ownerName}`;
     }
   }

   var cartoon = new DodCartoon('Scooby-Doo', 'Shaggy');

   // good
   var name = cartoon.name;
   console.log(name);
   // "Scooby-Doo Shaggy"

   // bad
   name =cartoon._toonName(cartoon.dogName, cartoon.ownerName);
   console.log(name);
   // "Scooby-Doo Shaggy"

   ```

9. Global Variables Naming Convention
   
   For naming global variables in JavaScript, there is no specific rule. camel case for mutable global variables and uppercase for immutable global variables is suggested for use.

10. File Names Naming Convention

    There are some web servers which are case-sensitive and some which are not. So, It is recommended to use lowercase for filenames. 

# Conclusion

In this forum, I shared 10 JavaScript naming conventions to improve our coding skills. As developers, we should always follow the best practices, since this will increase readability and understandable code for you and others.

I hope these suggestions will help us improve our coding skills. Thank you for reading and please share if you like it. Cause I believe in knowledge sharing.
