#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

const welcomeMessage = chalk.hex('#1E90FF').bold("\n\t Welcome to the Number Guessing Game!\n\n");
console.log(welcomeMessage);

const randomNum = Math.floor(Math.random()* 6 + 1);

const userGuessed = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.hex('#FF69B4')("Guess a number between 1-6: ")
    }
]);

if(userGuessed.userGuessedNumber === randomNum){
    console.log(chalk.bold.hex('#32CD32')("\nCongratulations! you guessed correct number!"));
} else {
    console.log(chalk.bold.hex('#ff1a1a')("\nOops! That's not the correct number."));
    console.log(chalk.bold.hex('#dddd3c')(`\nThe correct number was: ${randomNum}. Better luck next time!`));
}

const endingMessage = chalk.hex('#00CED1').bold("\n\n\t Thank you for playing! Hope to see you again soon!");
console.log(endingMessage);