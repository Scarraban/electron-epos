const electron = require('electron');
const { app, BrowserWindow } = electron;

let MainWindow;

console.log(__dirname);

app.on('ready', () => {
  MainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });
  MainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
