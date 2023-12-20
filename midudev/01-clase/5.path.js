const path = require('node:path')

// unir rutas con path.join
// unix -> /
// windows -> \
// console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/file.txt')
console.log(base)

const filename = path.basename('/tmp/file.txt', '.txt')
console.log(filename)

const extension = path.extname('/img/image.jpg')
// const extension = path.extname('/img/test.image.jpg')
console.log(extension)
