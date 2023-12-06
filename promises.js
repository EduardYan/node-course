const { readFile } = require("fs");


// espera un resultado bueno y uno malo

// sync
// readFile("./data/first.txt", "utf-8", (e, data) => {
//   if (e) {
//     console.log(e);
//   }
//   console.log(data);
// });

// function getText(pathFile) {
//   return new Promise(function (resolve, reject) {
//     readFile(pathFile, "utf-8", (e, data) => {
//       if (e) {
//         // pasando el error
//         reject(e);
//       }
//       // pasando los datos
//       resolve(data);
//     });
//   });
// }

// getText('./data/first.txt')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// getText("./data/four.txt")
//   .then(result => console.log(result)) // then cuando todo baya bien
//   .then(() => getText("./data/second.txt")) // haciendo otra tarea
//   .then(result => console.log(result))
//   .catch((e) => console.log(e)); // exepciones capturadas por un solo catch

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (e, data) => {
      if (e) {
        // pasando el error
        reject(e);
      }
      // pasando los datos
      resolve(data);
    });
  });
};


// convertir callback en una promesa
const { promisify } = require("util");
// convirtiendo de callback a promesa
const readFilePromise = promisify(readFile);

// la funcion que contenga await debe tener async
async function read() {
  // try catch para manejar los errores
  try {
    // todo esto es asyncrono pero con await se maneja como sincrono
    // throw new Error("Esto es un error q no esperabas");
    // const result = await getText("./data/first.txt");
    // const result2 = await getText("./data/second.txt");
    // const result3 = await getText("./data/third.txt");
    // const result4 = await getText("./data/four.txt");
    // console.log(result);
    // console.log(result2);
    // console.log(result3);
    // console.log(result4);

    const result = await readFilePromise("./data/first.txt", "utf-8");
    const result2 = await readFilePromise("./data/second.txt", "utf-8");
    const result3 = await readFilePromise("./data/third.txt", "utf-8");
    const result4 = await readFilePromise("./data/four.txt", "utf-8");
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read();
