// ✅ PATH

const path = require("path");

// console.log(path.sep)

// podemos utilizar el moetodo join para que nos de una ruta valida
console.log(path.join("/public", "dist", "/styles", "main.css"));
const filePath = path.join("/public", "dist", "/styles", "main.css");

// nos da el nombre del archivo
console.log(path.basename(filePath));
// las carpetas
console.log(path.dirname(filePath));
// la informacion en objeto
console.log(path.parse(filePath));

console.log(path.resolve("dist"));
