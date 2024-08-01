import chalk from "chalk";
import inquirer from "inquirer";
// Creating a class for protagonist:
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

// Creating a class for Opponent of this game:
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

// Let player to declare player characterstics it is equal to await and prase inqui prompt because we
// we are going to get the name form the user that is why type is also set as input !
let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Please Enter Your Name:",
});

// Letting Opponet to declare opponents the type is declared as list because later on as you can see in code down
// we have Multiple opponents declared in choices property down  below !
let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select Your Opponent",
  choices: ["Assasian", "Nemesis", "KmodoDragon"],
});

// gather data
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do {
  //assasian
  if (opponent.select == "Assasian") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent:",
      choices: ["Attack", "Drink Portion", "Run For Your Life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life") {
      console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
      process.exit();
    }
  }
  //   Nemesis
  if (opponent.select == "Nemesis") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent:",
      choices: ["Attack", "Drink Portion", "Run For Your Life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life") {
      console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
      process.exit();
    }
  }
  //   kmodo Dragon
  if (opponent.select == "kmodoDragon") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life") {
      console.log(chalk.red.bold.italic("You loose,Better Luck Next Time"));
      process.exit();
    }
  }
} while (true);
