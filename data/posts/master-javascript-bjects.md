---
title: "Basic Of JavaScript Objects"
date: "20 Apr, 2022"
excerpt: "Object is the collection of data stored under the same variable/name in the form of name-value pairs."
cover_image: "/images/posts/basicofjavascriptobject.webp"
category: ["Javascript"]
---

# Object Overview

Object is the collection of data stored under the same variable/name in the form of name-value pairs.

Data could be of any type.

syntax:

create a simple variable with any name and assign it all the values you want, in the form of name:value pairs, separated by commas under the currly brackets.

```javascript
let car = {
    name: "audi",
    model: "2000"
    price: "50 lakh"
}
```

let me explain you more. Here car has property and it's value. like name is the car's property and audi is the value for car's property name.

There is also another way to create an object by using "**new keyword**".

syntax:

```javascript
let car = new Object();
car.name = "audi";
car.model = "2222";
car.price = "50 Million";
```

In this method, you add the properties after creating the object.

# Accessing

To access the object properties, we will code like this:
```javascript
objectName.property
```
OR
```javascript
objectName["property"]
```
You can use any syntax to access the object's properly but the 1st one is the more common one.

# Adding New Properties

You can add new properties to an existing object by simply giving it a value.
```javascript
objectName.property = value;
```
Example:

```javascript
car.color = "black";
```

#Object Method

An object method is property containing a function.

```javascript
const anyObject = {
  property: function () {
    console.log("hello");
  },
};
```

And you can access the object method like this.
```javascript
objectName.property()
```

#Convert Object into Array

You can convert an object into an array by using Object.values()

```javascript
const car = {
    name: "audi",
    price: "1 million"
}

const carArray = Object.values(car);
```

carArray is now a JavaScript array ready to be displayed.

```javascript
console.log(carArray);
```

So, this much is for today. I hope this post help you to understand the Javascript Object. Thank you for reading this post.