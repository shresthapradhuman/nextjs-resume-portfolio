---
title: "What is BEM?"
date: "12 May, 2022"
excerpt: "BEM is a popular naming convention for classes in HTML and CSS."
cover_image: "/images/posts/whatisbem.webp"
category: ["Html", "CSS"]
---

# Introduction

BEM (Block Element Modifier) is a very popular CSS naming convention among web developers. It helps us to create reusable code.


# BEM Structure

BEM always takes the following structure.

```
 block__element--modifier
```

Here, the block is the parent container, the element is a child of the parent container block, and the modifier can add styles to either a block or a block's element. For example,

### Block
Standalone Meaningful entity.
(card, header, footer, section, container, menu, input)

### Element
semantically tied to parent block.
(title, item, list, checkbox, caption)

### Modifier
user to change the behavior or performance of block or element.
(disabled, highlighted, checked, size, color, background-color)

```css
    /** ==== Block Component ====== */

    .card{

        /** css styling */
    }

    /** ===== Element the depend on block ===== */

    .card__image{

        /** css styling */

    }

    .card__description{

        /** css styling */

    }

    /** =====modifier that changes the style or block === */

    .card__button--success{

        /** css styling */

    }
    .card__button--open{

        /** css styling */

    }
```

# Features of BEM

- Reusability:
  We can create independent blocks and reuse them smartly to reduce the line of CSS code.

- Structure:
  BEM helps you to create solid CSS code Structure that remains simple and understandable.

- Modularity:
  Never experience cascading problems cause block styles are independent of their own.

# Pros of using BEM

    1  Avoid confilicts in CSS class names.
    2  Creates a relationship between HTML and CSS
    3  Easy to Maintain.

# Cons of Using BEM

    1   HTML code looks ugly with BEM class names. Small Cons but not a big issue.
    2   BEM can bloat file sizes with the longer CSS class names. But this can be solved by minifying and gzipping production code.

So, this much is for today. Thanks for reading till the end. Share this post with your friends and family if you find this helpful.