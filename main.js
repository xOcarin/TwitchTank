const { app, BrowserWindow } = require('electron');
const path = require('path');
const staticServer = require('./server');
const apiServer = require('./TMI');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1260,
    height: 720,
    title: 'Twitch Tank',
    icon: path.join(__dirname, '/assets/icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.maximize();

  // Remove default menus on macOS and Windows
  if (process.platform === 'darwin' || process.platform === 'win32') {
    const { Menu } = require('electron');
    Menu.setApplicationMenu(null);
  }

  staticServer.listen(3000, () => {
    console.log('Static server running on port 3000');
    mainWindow.loadURL('http://localhost:3000');
  });

  apiServer.listen(8000, () => {
    console.log('API server running on port 8000');
  });
}


app.whenReady().then(() => {
  createWindow();
});
