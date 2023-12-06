// ✅ USING STREAMS IN HTTP SERVER

const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigFile.txt", {
    encoding: "utf-8",
  });

  fileStream.on("data", chunk => {
    fileStream.pipe(res);
  });

  fileStream.on("error", error => {
    console.log(error);
  });

});

const port = 3000
server.listen(port)
console.log(`Server in port ${port}`)