const MESSAGES = {
  error: '❌ The name not is valid. Must have more 2 elements'
}

function getCompleteName (parts) {
  if (parts.length < 2) {
    throw new Error(MESSAGES.error)
  }

  const completedName = []
  parts.forEach(part => completedName.push(part))

  return completedName.join(' ')
}

function getLastName (parts) {
  const lastElements = []

  if (parts.length < 2) {
    throw new Error(MESSAGES.error)
  } else if (parts.length === 3) {
    lastElements.push(parts[parts.length - 1])
  } else {
    lastElements.push(parts[parts.length - 2])
    lastElements.push(parts[parts.length - 1])
  }

  return lastElements.join(' ')
}

module.exports = {
  getCompleteName,
  getLastName
}
