/**
 * A practice with node
 */

const { names, ages } = require("./data/data");
const chalk = require("chalk");

names.forEach((name) => {
  console.log(chalk.green(name));
});

ages.forEach((age) => {
  console.log(chalk.yellow(age));
});
