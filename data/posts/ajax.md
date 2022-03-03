---
title: "Ajax"
date: "03 Mar, 2022"
excerpt: "Ajax is technique for creating better, faster and more interactive web applications"
cover_image: "/images/posts/ajax.webp"
category: ["Ajax", "Javascript"]
---

Ajax is a technique for creating better, faster, and more interactive web applications.

Suppose your daily use social media app. The full-page loads for the first time. Then you like someone's post So, post-like count data will be sent to the server and the page reloads again with new like data.
Which makes the user experience bad? Every time you update data or add data on any part of your page, your full page will reload. So, to solve this problem in a better, faster, and more interactive way, AJAX was introducted.

# What is AJAX?

AJAX stands for Asynchronous JavaScript And XML. It is not a programming language or tool, rather it is a technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and JavaScript.

# What AJAX can do?

- Update a web page without reloading the page
- Request data from a server - after the web page has loaded
- Receive data from a server - after the web page has loaded
- send data to a web server - in the background

Suppose you like any post this time. But the full page will not reload. Rather only like part will reload with new data. Everything will be processed in the background.

# How AJAX works?

![alt ajaxwork](/images/posts/ajaxwork.webp)

1. An Event occurs in page. (like click, load, scroll, etch)
2. The XML HttpRequest Object is created by JavaScript
3. The XML HttpRequest Object sends a request to web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

I hope this will help you to understand how AJAX work. If want to learn more about AJAX then visit [w3schools](https://www.w3schools.com/default.asp). Please share this post if you find it useful.