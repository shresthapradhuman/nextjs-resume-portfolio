---
title: "What is SQL INJECTION "
date: "26 Jan, 2022"
excerpt: " SQL INJECTION is the web hacking technique by putting the malicious code in SQL statement via webpage input."
cover_image: "/images/posts/sqlinjection.webp"
---

#### WHAT IS SQL INJECTION?

![alt sqlinjection](/images/posts/sqlinjection.webp)

Let's assume that you have a helper Robot that takes instruction from you and goes to the shop and does the shopping for you. 

Suppose you gave instructions to Robot to go to the shop and get a toothbrush. But, someone overrides your instruction by his instruction to go to the shop and kill the shop owner. 

The reason this occurs is caused robot can't differentiate the data and instructions. 

So, SQL is the special language that helps us to communicate with our database what to do. In a similar way, we instruct Robots what to do.

Example:-
```
 SELECT * From User_Table WHERE usename=username AND password=password;
```
SQL INJECTION is the web hacking technique by putting the malicious code in SQL statement via webpage input.

Example:-

```
    SELECT * FROM User_Table WHERE username=username AND password=password OR 1=1--;
```

here [ -- ] comments the whole query and [1=1] which is always true.

This will let hackers get access to your website using SQL INJECTION. After a successful SQL INJECTION exploit, one can read, update, delete, and create data in your database.

### So, What are the preventions for this?

1. Input Validation
1. Parameterized the query
1. Store procedures
1. Escaping
1. Avoiding Administrative Privileges
1. Web Application Firewall

I hope this content helps you to understand the basics of SQL INJECTION.&nbsp;


