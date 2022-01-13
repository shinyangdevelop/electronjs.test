const electron = require('electron')

const {app, BrowserWindow} = electron

let mainWindow

// const greets = require('./data/greet.json')
// const messages = greets.message

// console.log(messages[0])

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 640,
        height: 480
    })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(!mainWindow) {
        createMainWindow()
    }
})

function onClosed() {
    mainWindow = null
}

app.on('ready', () => {
    createMainWindow()

    mainWindow.loadURL(`file://${__dirname}/windows/mainWindow.html`)
    mainWindow.on('closed', onClosed)
})