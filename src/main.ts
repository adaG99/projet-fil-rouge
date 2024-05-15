import { app, BrowserWindow } from 'electron';
 function createWindow() {
 let win = new BrowserWindow({
 width: 800,
 height: 600,
 webPreferences: {
 nodeIntegration: true
 }
 });
 win.loadFile('./dist/index.html');
 }
 app.on('ready', createWindow);