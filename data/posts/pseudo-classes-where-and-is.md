---
title: "PSEUDO-CLASSES Cleaner CSS with :where() and :is()"
date: "22 Jun, 2022"
excerpt: "Pseudo Classes Cleaner CSS with :where() and :is()"
cover_image: "/images/posts/psuedoclassess.webp"
category: ["CSS"]
---

Hello Friends!
have you ever heard about :where() and :is() pseudo-classes?
If you haven't then don't feel bad. They were recently introduced to most browsers.

So, today's topic is about this newly introduced feature for vanilla CSS.

1. :IS()

   Sometimes you want to apply the same styling code for multiple elements in your HTML document.

   So, until now we use to write like this.

   ```CSS
   .main h1,
   .main h2,
   .main h3 {
    line-height:1.2
   }
   .nav li,
   .nav p{
    padding:5px 10px
   }
   ```

   But, using :is() we can write quick, and clean CSS code.

   ```CSS
   .main :is(h1, h2, h3){
       line-height: 1.2;
   }
   .nav :is(li, p){
       padding: 5px 10px;
   }
   ```

   With this, we are saving many lines of code. It's Similar to how nesting works with preprocessors such as SCSS.

   pseudo-class function : is() takes the selector list and selects any element that can be selected by one of the selectors in that list.

2. : WHERE()

   Just like : is() , : where() takes the selector list as its argument and selects any element that can be selected by one of the selectors in that list.

   ```CSS
   <!-- before -->

   .main h1,
   .main h2,
   .main h3 {
   line-height:1.2
   }
   .nav li,
   .nav p{
   padding:5px 10px
   }
   <!-- after using :where() -->
   .main :where(h1, h2, h3){
    line-height:1.2;
   }
   .nav :where(li, p){
    padding:5px 10px;
   }
   ```

Now, you may think both are the same, and what's the difference between these two pseudo-class functions?

The difference is specificity. : is() takes the specificity of its most specific selector. : where() has a specificity of zero.

So, it's important to keep this small but very important detail in mind while using : is() and : where() in our code to avoid blocking yourself from applying the CSS changes in other places.

Thank You for reading the article. Do like, save and share this article if you found this helpful.