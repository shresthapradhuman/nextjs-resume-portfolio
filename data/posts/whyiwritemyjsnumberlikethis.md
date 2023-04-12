---
title: "Why I Write My JS Numbers Like This - 1_000_000"
date: "12 Apr, 2023"
excerpt: " For example, 1_000_000 is far more readable than 1000000. Using underscores to separate groups of three digits helps us quickly determine that the number is in the millions, and how many digits are in the number without the need for a calculator."
cover_image: "/images/posts/whyiwritemynumberlikethis.png"
category: ["JavaScript"]
---

As a programmer, one of the important skills to master is writing clean, readable and maintainable code. One area where this is particularly important is when it comes to writing numbers in our code.

While there are different conventions for formatting numbers in code, one approach that has gained popularity in recent years is using underscores to separate groups of digits in large numbers. For example, instead of writing 1000000 as a plain number, we can write it as 1_000_000. This may seem like a small change, but it can have a big impact on the readability of our code.

So why do I write my JS numbers like this? Here are a few reasons:

## Readability

One of the main reasons for using underscores to format large numbers is that it makes them easier to read. When we look at a number like 1000000, it can be hard to quickly tell how many digits it has or what order they are in. By adding underscores, we can break the number down into groups of three digits, which makes it much easier to read and understand.

For example, 1_000_000 is much easier to read than 1000000. It's immediately clear that it's a million, and we can quickly count the number of digits without having to use our fingers or a calculator.

## Consistency

Consistency is another important factor in writing clean, maintainable code. By using a consistent formatting style for numbers, we can make our code more predictable and easier to understand.

If we were to write some numbers with underscores and others without, it would create unnecessary confusion and make it harder for other developers to read and maintain our code. By using underscores consistently throughout our code, we can avoid this problem and make our code more cohesive.

## Compatibility

Using underscores to format numbers is also compatible with different programming languages, making it easier to transfer knowledge and skills across different projects and teams.

For example, Python has been using underscores in numbers for a long time, and now many other programming languages, including JavaScript, have adopted the convention. This means that if you're familiar with one language, you can quickly adapt to using underscores in another language without having to learn a new convention.

## Avoiding Errors

Finally, using underscores to format numbers can also help us avoid errors. It's easy to accidentally misread a long string of digits, or to accidentally add or remove a digit when working with large numbers. By using underscores, we can break the number down into smaller, more manageable chunks, which can reduce the likelihood of errors creeping into our code.

For example, if we accidentally write 100_0000 instead of 1_000_000, we're much more likely to notice the error because the number no longer has three digits between the underscores.

In conclusion, formatting large numbers with underscores is a simple but effective technique that can make our code more readable, consistent, and error-free. While there are different conventions for formatting numbers in code, this approach has become increasingly popular in recent years, and for good reason. By adopting this convention in our own code, we can make our code more maintainable and easier to work with for ourselves and for other developers.
