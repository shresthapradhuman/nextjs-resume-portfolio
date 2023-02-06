---
title: "Create Simple Javascript Game Rock, Paper, Scissors."
date: "06 Feb, 2023"
excerpt: "Rock, Paper, Scissors is a classic game that's easy to create with JavaScript. In this tutorial, we'll walk you through the steps to build your very own Rock, Paper, Scissors game."
cover_image: "/images/posts/rockpaperscissor.webp"
category: ["JavaScript"]
---

The classic game of Rock, Paper, Scissors has been enjoyed by people of all ages for many generations. This game is simple but entertaining, and it is easy to create with JavaScript. In this article, we'll go over how to make a Rock, Paper, Scissors game in JavaScript.

Step 1: Set Up the HTML

We'll start by creating the HTML structure for our game. Create an HTML file and add the following code:

```
<html>
  <head>
    <title>Rock, Paper, Scissors</title>
  </head>
  <body>
    <h1>Rock, Paper, Scissors</h1>
    <p>Choose your option:</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <p id="result"></p>
  </body>
</html>
```

In the above code, we have created three buttons for rock, paper, and scissors and a paragraph to display the result of the game.

Step 2: Add the JavaScript

Next, we'll add the JavaScript code to make our game functional. Add the following code inside the <head> tag:

```
<script>
  const choices = ['rock', 'paper', 'scissors'];

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const playerChoice = this.id;
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(playerChoice, computerChoice, result);
    });
  });

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }

  function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.querySelector('#result');
    resultElement.innerHTML = `You chose ${playerChoice}, the computer chose ${computerChoice}. `;
    if (result === 'tie') {
      resultElement.innerHTML += 'It\'s a tie!';
    } else if (result === 'player') {
      resultElement.innerHTML += 'You win!';
    } else {
      resultElement.innerHTML += 'You lose!';
    }
  }
</script>
```

In the preceding code, we first define an array of choices, which contains the three game options. Then, we use querySelectorAll to select all buttons and attach a click event listener to each one. When a button is clicked, the playerChoice is set to the button's id, and the computerChoice is generated at random from the choices array.

The determine winner function accepts the player choice and computer choice as arguments and determines the winner using an if-else statement. If both the player choice and the computer choice are the same, the result is a tie. If not, it employs a series of if statements to determine who wins using the Rock, Paper, Scissors rules.

After the winner is determined, the display result function is called with the arguments player choice, computer choice, and result. By updating the inner HTML of a result element, the function displays the game's outcome.

It's as simple as that! You've created a fully functional Rock, Paper, Scissors game with just a few lines of JavaScript code. You can now modify and expand on this game to make it your own.
