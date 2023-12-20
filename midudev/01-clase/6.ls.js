const fs = require('node:fs/promises')

// callback
// fs.readdir('.', (err, files) => {
//   if (err) { console.log(err) }
//   files.forEach(f => {
//     console.log(f)
//   })
// })

// using promises
fs.readdir('.')
  .then(files => {
    files.forEach(f => console.log(f))
  })
  .catch(err => console.log(err))
