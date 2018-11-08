"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
function createWindow() {
    var electronScreen = electron_1.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        title: 'RYY-project',
        darkTheme: true,
        resizable: false,
        // x: 0,
        // y: 0,
        width: size.width / 5 * 4,
        height: size.height / 5 * 4,
        show: false,
        backgroundColor: '#2e2c29',
    });
    win.once('ready-to-show', function () {
        win.show();
    });
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        win.loadURL('http://localhost:4200');
    }
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    win.webContents.openDevTools();
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
electron_1.ipcMain.on('master-close', function (e, msg) {
    // 关闭master进程
    electron_1.app.quit();
});
electron_1.ipcMain.on('master-minimize', function (e, msg) {
    // 最小化  master进程
    win.minimize();
    // 主进程向 渲染进程发送消息
    e.sender.send('index-minimize', 'master');
});
electron_1.ipcMain.on('master-maximize', function (e, msg) {
    // 最大化  master进程
    if (win.isMaximized()) {
        win.unmaximize();
    }
    else {
        win.maximize();
    }
});
electron_1.ipcMain.on('window-reload', function (e, msg) {
    win.reload();
});
electron_1.ipcMain.on('set-menu', function (e, tmp) {
    console.log(tmp);
    win.setProgressBar(null);
});
try {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    electron_1.app.on('ready', function () {
        createWindow();
        // Register a 'CommandOrControl+Y' shortcut listener.
        electron_1.globalShortcut.register('CommandOrControl+Y', function () {
            // Do stuff when Y and either Command/Control is pressed.
            electron_1.app.quit();
        });
    });
    // Quit when all windows are closed.
    electron_1.app.on('window-all-closed', function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow();
        }
    });
}
catch (e) {
    // Catch Error
    // throw e;
}
//# sourceMappingURL=main.js.map