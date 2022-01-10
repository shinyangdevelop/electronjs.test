const electron = require('electron')

const {app, BrowserWindow} = electron

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 640,
        height: 480
    })

    mainWindow.loadURL(`file://${__dirname}/windows/mainWindow.html`)
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

app.on('ready', () => {
    createMainWindow()
})