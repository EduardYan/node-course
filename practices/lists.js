const request = require("request");
const chalk = require("chalk");

const list = [
  1,
  2,
  "Ryan",
  "Oscar",
  {
    name: "John",
    age: 12,
  },
  44.1,
];

// showing the list
list.forEach((e) => {
  console.log(e);
});

request(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    // console.log(body.url);
    // console.log(body.explanation);
    console.log();
    console.log(`EXPLANATION NASA - ${body.explanation}`);
  }
);

request(
  "https://97mm2.sse.codesandbox.io/teachers/",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }

    // getting the teacher and showing
    const teachers = body.data;

    teachers.forEach((t) => {
      console.log(chalk.bold.green(`ID - ${t.id}`));
      console.log(chalk.bold.red(`FIRST NAME - ${t.firstName}`));
      console.log(chalk.bold.magenta(`LAST NAME - ${t.lastName}`));
      console.log(chalk.bold.yellow(`AGE - ${t.age}`));
      console.log(chalk.bold.white(`EMAIL - ${t.email}`));
      console.log(chalk.bold.bgBlue(`CLASS - ${t.class}`));
      console.log();
    });
  }
);
