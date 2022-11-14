const { app, BrowserWindow, ipcMain } = require('electron');
// include the Node.js 'path' module at the top of your file
const path = require('path');
const ipc = ipcMain;

// modify your existing createWindow() function
// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//     },
//   });
//   win.loadFile('index.html');
// }
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  ipc.on('minimizeApp', () => {
    mainWindow.minimize();
  });

  ipc.on('maximizeApp', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });

  ipc.on('closeApp', () => {
    mainWindow.close();
  });
};
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
