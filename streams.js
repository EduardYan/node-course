// const { writeFile } = require("fs/promises");
// async function createBigFile() {
//   await writeFile("./data/bigFile.txt", "Hello world".repeat(100000));
// }

// createBigFile();

const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigFile2.txt", {
  encoding: "utf-8",
  // higWaterMark: "" // <-- aumentar o disminuir los chunks
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Ya termine de leer el archivo");
});

stream.on("error", (error) => {
  console.log(error);
});
