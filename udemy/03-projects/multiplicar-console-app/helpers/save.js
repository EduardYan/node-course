const { multiplyFor, makeWithColors } = require("./multiply")
const showMessage = require('./messages')
const fs = require('fs')

const saveTable = async (base = 5, list = false, height = 10) => {

  let tableToShow = ''
  const toSave = ''

  for (let i = 1; i <= height; i++) {
    tableToShow += makeWithColors(base, i)
    toSave += multiplyFor(base, i)
  }

  if (list) {
    showMessage(base);
    console.log(tableToShow)
  }

  try {
    fs.writeFileSync(`./out/table-${base}.txt`, toSave)
    return `table-${base}.txt`
  } catch (err) {
    throw err
  }

}

module.exports = saveTable;