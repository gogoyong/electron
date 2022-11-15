// include the Node.js 'path' module at the top of your file
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const ipc = ipcMain;
// modify your existing createWindow() function
function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadURL('http://localhost:3000');
  ipc.on('minimizeApp', () => {
    win.minimize();
  });

  ipc.on('maximizeApp', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  ipc.on('closeApp', () => {
    win.close();
  });
}
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
