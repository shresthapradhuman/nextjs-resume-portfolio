---
title: "How to Build a Dark Mode and Light Mode Switch in JavaScript in Under 10 Minutes"
date: "7 Apr, 2023"
excerpt: "Axios is powerful and easy-to-use tool for managing HTTP requests in your web app."
cover_image: "/images/posts/dark-mode-light-mode.webp"
category: ["Html", "CSS", "JavaScript"]
---

Dark mode and light mode have become a popular feature in web design. It's a great way to enhance user experience and reduce eye strain. In this tutorial, we'll learn how to build a dark mode and light mode switch in JavaScript in under 10 minutes.

## Prerequisites

Before we get started, make sure you have the following:

* Basic knowledge of HTML, CSS, and JavaScript
* A code editor like Visual Studio Code or Sublime Text

## Getting Started

Step 1: HTML Markup

First, we need to create the HTML markup for our dark mode and light mode switch. We'll use a simple switch button that toggles between the two modes.

```html
<div class="switch">
  <input type="checkbox" id="toggle" class="toggle">
  <label for="toggle"></label>
</div>
```

We have created a div element with a class of switch that will contain our switch button. We have also added an input element with a type of checkbox and an ID of toggle. Finally, we have added a label element with a for attribute that matches the ID of our input element.

Step 2: CSS Styling

Next, we need to style our switch button. We'll use CSS to make it look like a switch.

```css
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.2s ease-in-out;
}

.switch label::before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  top: 4px;
  left: 4px;
  transition: transform 0.2s ease-in-out;
}

.switch input:checked + label {
  background-color: #2196F3;
}

.switch input:checked + label::before {
  transform: translateX(26px);
}
```

We have created a class called switch that sets the position, display, width, and height of our switch button. We have also added some styles to the input element to make it invisible.

We have then added styles to our label element to make it look like a switch button. We have set its position to absolute and given it a background color and border radius. We have also added a transition effect to change the background color when the button is toggled.

We have also added a ::before pseudo-element to create a white circle that represents the switch button. We have set its position to absolute and given it a background color and border radius. We have also added a transition effect to move the switch button when the button is toggled.

Finally, we have added some styles to our input:checked + label and input:checked + label::before selectors to change the background color and position of our switch button when it is toggled.

Step 3: JavaScript Logic

Finally, we need to add some JavaScript to our HTML markup to toggle between dark mode and light mode.

```javascript

const toggleSwitch = document.querySelector('.toggle');
const body = document.querySelector('body');

function switchTheme(e) {
    if (e.target.checked) {
        body.classList.replace('light', 'dark');
    } else {
        body.classList.replace('dark', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

```

We have created a variable called toggleSwitch that stores the input element with the class of .toggle. We have also created a variable called body that stores the body element of our HTML markup.

We have then created a function called switchTheme that takes an event object as an argument. Inside the function, we use an if statement to check if the toggle switch is checked. If it is checked, we replace the light class of the body element with the dark class. If it is not checked, we replace the dark class of the body element with the light class.

Finally, we have added an event listener to our toggleSwitch element that listens for the change event and calls our switchTheme function when the toggle switch is toggled.

Step 4: Testing

We have now completed our dark mode and light mode switch in JavaScript. To test it, simply open your HTML file in a web browser and toggle the switch button. You should see the background color of your web page change between light and dark mode.

Conclusion

In this tutorial, we learned how to build a dark mode and light mode switch in JavaScript in under 10 minutes. We used HTML to create the markup, CSS to style the switch button, and JavaScript to toggle between dark mode and light mode. This is a great feature to enhance user experience and reduce eye strain.
