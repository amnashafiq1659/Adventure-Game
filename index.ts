#! usr/bin/env node

import { input, select } from "@inquirer/prompts";

import chalk from "chalk";

console.log(chalk.bold.italic.bgCyan("\n\t\tWelcome to the text based adventure game!\n"));

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await input({
  message: "Enter your name.",
});

console.log(player);

let opponent = await select({
  message: "Select your opponent.",
  choices: [
    {
      name: "Skeleton",
      value: "skeleton",
    },
    {
      name: "Alien",
      value: "alien",
    },
    {
      name: "Zombie",
      value: "zombie",
    },
  ],
});

console.log(opponent);

let p1 = new Player(player);
let o1 = new Opponent(opponent);

do {
  //skeleton
  if (opponent === "skeleton") {
    let ask = await select({
      message: "Select your move.",
      choices: [
        {
          name: "Attack",
          value: "attack",
        },
        {
          name: "Drink Portion",
          value: "drink portion",
        },
        {
          name: "Run For Life",
          value: "run for life",
        },
      ],
    });

    if (ask === "attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is now ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is now ${o1.fuel}`));

        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.yellow("You lose, Better luck for next time!")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is now ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is now ${o1.fuel}`));

        if (o1.fuel <= 0) {
          console.log(chalk.italic.magenta("You win, Congratulations!"));
          process.exit();
        }
      }
    }

    if (ask === "drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.italic.blue(`You drink Health Portion, Your fuel is ${p1.fuel}`)
      );
    }

    if (ask === "run for life") {
      console.log(chalk.italic.yellow("You lose, Better luck for next time!"));
      process.exit();
    }
  }

  //alien
  if (opponent === "alien") {
    let ask = await select({
      message: "Select your move.",
      choices: [
        {
          name: "Attack",
          value: "attack",
        },
        {
          name: "Drink Portion",
          value: "drink portion",
        },
        {
          name: "Run For Life",
          value: "run for life",
        },
      ],
    });

    if (ask === "attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is now ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is now ${o1.fuel}`));

        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.yellow("You lose, Better luck for next time!")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is now ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is now ${o1.fuel}`));

        if (o1.fuel <= 0) {
          console.log(chalk.italic.magenta("You win, Congratulations!"));
          process.exit();
        }
      }
    }

    if (ask === "drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.italic.blue(`You drink Health Portion, Your fuel is ${p1.fuel}`)
      );
    }

    if (ask === "run for life") {
      console.log(chalk.italic.yellow("You lose, Better luck for next time!"));
      process.exit();
    }
  }

  //zombie
  if (opponent === "zombie") {
    let ask = await select({
      message: "Select your move.",
      choices: [
        {
          name: "Attack",
          value: "attack",
        },
        {
          name: "Drink Portion",
          value: "drink portion",
        },
        {
          name: "Run For Life",
          value: "run for life",
        },
      ],
    });

    if (ask === "attack") {
      let num = Math.floor(Math.random() * 2);

      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is now ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is now ${o1.fuel}`));

        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.yellow("You lose, Better luck for next time!")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is now ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is now ${o1.fuel}`));

        if (o1.fuel <= 0) {
          console.log(chalk.italic.magenta("You win, Congratulations!"));
          process.exit();
        }
      }
    }

    if (ask === "drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.italic.blue(`You drink Health Portion, Your fuel is ${p1.fuel}`)
      );
    }

    if (ask === "run for life") {
      console.log(chalk.italic.yellow("You lose, Better luck for next time!"));
      process.exit();
    }
  }
} while (true);
