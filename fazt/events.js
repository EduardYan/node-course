// ✅ EVENTS

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// customEmitter.emit()
// escucha un evento primero debemos crear la escucha del evento primero
customEmitter.on('response', (data, secondData) => {
  console.log('received')
  console.log(data)
  console.log(secondData)
})

// emitiendo el evento
customEmitter.emit('response', 'Hello world', [1, 2, 3])
customEmitter.emit('response', 'dan')
customEmitter.emit('response', 6000)
customEmitter.emit('response', 45.1)
customEmitter.emit('response', {
  name: 'Ryan',
  age: 12
})
