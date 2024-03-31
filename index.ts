#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt ([
{
  name:"userGuessNumber",
  type:"number",
  message:"please guess a number",
}, 
]);

if(answer.userGuessNumber ===randomNumber ){
    console.log("congratulations! you guessedright number.");
} else {
    console.log("you guessed wrong number.");
}