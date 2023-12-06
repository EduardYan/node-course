const fs = require("fs");

// ✅ SYNC
// raw
// const first = fs.readFileSync("./data/first.txt", "utf-8")
// const first = fs.readFileSync("./data/first.txt", {
//   encoding: "utf-8"
// });
// const second = fs.readFileSync("./data/second.txt");

// console.log(first);
// console.log(second.toString());

// si el archivo ya existe lo sobrescribira
// const info = "asadasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf\nfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf\nafasdfasdfasdfasdfasdfasdfasdfasdf\n";
// fs.writeFileSync("./data/third.txt", info, {
//   flag: "a", // <-- el flag a es para agregar al archivo
// });

// ✅ ASYNC
// fs.readFile("./data/first.txt", "utf-8", function (error, data) {
//   if (error) { // <-- controlando si hay un error
//     console.log(error);
//   }
//   // console.log(data.toString());
//   console.log(data);
// });

// ❌ calback hell
fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  // validating the error
  if (error) {
    console.log(error);
  }

  console.log(data.toString());

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    // validating the error
    if (error) {
      console.log(error);
    }

    console.log(data.toString());

    fs.writeFile("./data/newFile.txt", "nuevo archivo XD", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);

      fs.writeFile("./data/newFile2.txt", "nuevo archivo XD", (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      });
    });
  });
});
