---
title: "What is Promises?"
date: "23 Jan, 2022"
excerpt: "A promise is an object that returns a value which you hope to receive in the future"
cover_image: "/images/posts/promises.webp"
category: ["JavaScript"]
---

![alt Promise](/images/posts/promises.webp)
Suppose you have a plan to go to watch movies this afternoon. But you can't go to buy the ticket for that movie cause you have lots of work to be done.

So, you asked your friend to buy the ticket for you and inform you of the status of whether he bought it or not. So, you can decide on another plan if canceled.

In the meantime (Ticket Status = pending), you continue to finish your work. Even though you complete all other works, the plan's final status still depends on the status of ticket booking.

There are 2 possibilities you could expect.

1. Everything went well and your friend got the tickets. (Ticket Status = Resolved)

2. Theater got Housefull so, can't get tickets. (Ticket Status = Rejected)
   You wait for your friend's message. So, you can proceed further.

This is the exact same way promises work in Javascript.
A promise is an object that returns a value that you hope to receive in the future.
Example Code:-

```
var promise = new Promise(function(resolve, reject){
    /** Producing Code May take some time**/
         if(/* everything turned out fine /*){
              resolve("Let's go to watch the movie")
         } else {
               reject(Error("make other plan"))
         }
});

/** Consuming Code Must wait for a fulfilled Promise**/
promise.then(function(result)){
   console.log(result)
}, function(err){
   console.log(err)
}

```

Benefits of Promises:-

1. Better error handling
2. Better control flow of asynchromous logic
3. solves the problem of callback hell
4. Imporved readability

Thanks for reading this blog. And Promise me you will share this post your friends.
