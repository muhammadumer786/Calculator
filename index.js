#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(`  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
do {
    let calc = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "enter you first number here:",
            validate: (ans) => {
                if (!ans) {
                    return "please enter first number here:";
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "number",
            name: "num2",
            message: "enter you second number here:",
            validate: (ans) => {
                if (!ans) {
                    return "please enter second number here:";
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "list",
            name: "operator",
            message: "Select Operator: ",
            choices: ["Addition", "Subtract", "Multiply", "Divide", "exit"]
        }
    ]);
    if (calc.operator === "Addition") {
        console.log(chalk.yellow(`${calc.num1} + ${calc.num2} = `) + chalk.blue(`${calc.num1 + calc.num2}`));
    }
    else if (calc.operator === "Subtract") {
        console.log(chalk.yellow(`${calc.num1} - ${calc.num2} = `) + chalk.blue(`${calc.num1 - calc.num2}`));
    }
    else if (calc.operator === "Multiply") {
        console.log(chalk.yellow(`${calc.num1} * ${calc.num2} = `) + chalk.blue(`${calc.num1 * calc.num2}`));
    }
    else if (calc.operator === "Divide") {
        console.log(chalk.yellow(`${calc.num1} / ${calc.num2} = `) + chalk.blue(`${calc.num1 / calc.num2}`));
    }
    else if (calc.operator === "exit") {
        console.log(chalk.yellow(`Thanks for using calculator.`));
        break;
    }
} while (true);
