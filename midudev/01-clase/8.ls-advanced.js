const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// por defecto que utilize '.'
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  // ✅ siempre debemos utilizar try-catch en aquella parte donde sepamos
  // que pueda fallar
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`❌ No se ha podido leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se puedo leer el archivo ${filePath}`)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
