const {app, BrowserWindow, ipcMain} = require('electron')
const server = require('./server');
var exec = require('child_process').exec;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 1900, height: 1080})

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    console.log("closing1")

    win = null
  })

  win.webContents.on('dom-ready', () => {
    console.log("done loading");
    console.log("wooop");
  })

  win.webContents.on('did-navigate-in-page', () => {
    console.log("navigate!");
  })
}

  ipcMain.on('child:open', function(event) {
    console.log('main.js :: ipc msg child:open received');
   openChildWindow();
  });
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //console.log("closing2")
  //exec("pm2 stop all");
  console.log("closing!")
  var newProcess = exec("cmd pm2 stop all");
  newProcess.on("exit", function () {
    console.log("we ran this");
  });
  console.log("should have exec")
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('before-quit', () => {
})
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
