// Method 1

// const {app, BrowserWindow} = require('electron')

// let mainWindow

// function pink() {
//     mainWindow = new BrowserWindow({
//         title:'pink',
//         width:200,
//         height:400,
//         icon:'D:/235-2350646_login-user-name-user-avatar-svg-hd-png.png'
//     })
//     // mainWindow.loadURL('https://www.youtube.com')
//     // mainWindow.loadURL(`file://${__dirname}/index.html`)
//     // mainWindow.loadFile('index.html')
// }

// app.on('ready',pink)


// Method 2

// const electron = require('electron')
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
// const path = require('path')
// const url = require('url')

// let win;

// function Window() {
//     win = new BrowserWindow();
//     win.loadURL(url.format({
//         pathname:path.join(__dirname, 'index.html'),
//         protocol:'file',
//         slashes:true
//     }))
//     win.webContents.openDevTools();
//     win.on('closed', ()=>{
//         win = null;
//     })
// }

// app.on('ready', Window)

// for mac additional

// app.on('window-all-closed', ()=> {
//     if(process.platform !== 'darwin'){
//         app.quit();
//     }
// })

// app.on('activate', ()=>{
//     if(win === null){
//         Window;
//     }
// })

// end of additional

// Method 3

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let win;

function Window() {
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes:true
    }))
    win.webContents.openDevTools();
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', Window)
