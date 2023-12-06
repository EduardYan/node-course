const chalk = require("chalk");

let names = [
  {
    value: "John",
  },
  {
    value: "Oscar",
  },
  {
    value: "Marisol",
  },
  {
    value: "Pablo",
  },
  {
    value: "Ramiro",
  },
  {
    value: "Joshua",
  },
];

const new_names = names.map((e) => {
  return `Name ${e.value}`;
});

// new_names.forEach((e) => {
//   setInterval(() => {
//     console.log(chalk.bold.bgWhite.green(e));
//     console.log();
//   }, 2000);
// });

// showing each name
let counter = 0;

setInterval(() => {
  if (!chalk.bold.bgWhite.green(new_names[counter] === "undefined")) {
    console.log(chalk.bold.bgWhite.green(new_names[counter]));
    console.log();
    counter++;
  } else {
    console.log("Finish");
  }
}, 1000);
