const { app, BrowserWindow, ipcMain } = require('electron');
// const ipc = ipcMain;

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 630,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  // win.webContents.openDevTools();

  // ipc.on('minimizeApp', () => {
  //   win.minimize();
  // });

  // ipc.on('maximizeApp', () => {
  //   if (win.isMaximized()) {
  //     win.restore();
  //   } else {
  //     win.maximize();
  //   }
  // });

  // ipc.on('closeApp', () => {
  //   win.close();
  // });
}
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});
