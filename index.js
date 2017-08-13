const electron = require('electron');
const { app, BrowserWindow } = electron;

let MainWindow;

console.log(__dirname);

app.on('ready', () => {
  MainWindow = new BrowserWindow({
    fullscreen: true
  });
  MainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
