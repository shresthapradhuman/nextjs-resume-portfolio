---
title: "Making API Calls with Axios: Step-by-Step Tutorial"
date: "7 Apr, 2023"
excerpt: "Axios is powerful and easy-to-use tool for managing HTTP requests in your web app."
cover_image: "/images/posts/axios-thumbnail.png"
category: ["Axios", "JavaScript"]
---

In this tutorial, we will explore how to make API calls with Axios, a popular JavaScript library for handling HTTP requests. We will cover the basics of sending requests, handling responses, and troubleshooting common issues.

![profile card](/images/posts/axios.png)

## Prerequisites

Before we get started, make sure you have the following:

* Basic knowledge of JavaScript
* Node.js installed on your system
* A code editor like Visual Studio Code or Sublime Text

## Getting Started

To get started, we need to install Axios. Open a terminal and run the following command:

```javascript
npm install axios
```

This will install Axios and its dependencies.

Once you've installed Axios, you can include it in your HTML or JavaScript code.
Here's an example of how to include Axios in your code:

```javascript
/** inside html */

<script src='https://unpkg.com/axios/dist/axios.min.js'></script>

/** using a module bundler */

import axios from 'axios';
```

## Basic Request ['GET', 'POST', 'PUT', 'DELETE']

Here's an example of how to make a request with Axios using async/await. Where async is used to create an asynchronous function and wait for the response from the API before logging the data to the console.

```javascript
/** GET Request */

const fetch = async()=>{
  try{
    const response = await axios.get('https://example.com/data');
    console.log(response.data)
  }catch(error){
    console.error(error)
  }
}
```

Here get request is made to fetch data from server.

```javascript
/** POST Request */

const sendData = async()=>{
  try{
    const response = await axios.post('https://example.com/login', {
      email: 'test@example.com',
      password: 'password'
    });
    console.log(response.data)
  }catch(error){
    console.error(error)
  }
}
```

Here post request is made to send email and password data to server. Which will send the response if the request is successful .

```javascript
/** PUT Request */

const updateData = async()=>{
  try{
    const response = await axios.put('https://example.com/user/420', {
      name: 'John Smith',
      email: 'jsmith@example.com',
    });
    console.log(response.data)
  }catch(error){
    console.error(error)
  }
}
```

Here put request is made to send email and name data to server for update to request user id '420'.

```javascript
/** PUT Request */

const deleteData = async()=>{
  try{
    const response = await axios.delete('https://example.com/user/420');
    console.log(response.data)
  }catch(error){
    console.error(error)
  }
}
```

Here delete request is made to delete data from server of request user id '420'.

## Handling Errors

Above I told about different basic request methods. Here I will tell how to handle the error when request fails.

```javascript
const fetchData = async()=>{
  try{
    const response = await axios.get('http://example.com/data');
    console.log(response.data);
  }catch(error){
    if(error.response.status === 404){
      console.error('Data not found');
    }else{
       console.error(error)
    }
  }
}
```

Here we checking the error response status code to log custom error message to console.

## Conclusion

In this tutorial, we covered the basics of making API calls with Axios. We learned how to send GET, POST, PUT, and DELETE requests, handle responses, and troubleshoot common issues. With Axios, it is easy to manage your web application's HTTP communication needs.
