import { app, globalShortcut, BrowserWindow, screen, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
const fs = require('fs');

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    title: 'RYY-project',           // 设置标题（无效）
    darkTheme: true,              // 黑色背景（无效）
    resizable: false,             // 可调整代销（默认为trues）
    // x: 0,
    // y: 0,
    width: size.width / 5 * 4,
    height: size.height / 5 * 4,
    show: false,
    backgroundColor: '#2e2c29',
    frame: false,             // 设置无框窗口
    transparent: true           // 设置窗口透明
  });

  win.once('ready-to-show', () => {
    win.show();
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

}

ipcMain.on('file', (e, pathObj) => {          // 进程之间的通信
  const appPath = app.getAppPath();
  console.log('appPath', appPath);
  app.getFileIcon(pathObj, {size: 'large'}, function (err, icon) {

    console.log('pathObj', pathObj);

    // if (!err) callback && callback(icon.toPNG());
    const imgData = icon.toJPEG(1); // Buffer编码

    // // 将编码的buffer对象生成二进制保存成图片
    // tslint:disable-next-line:no-shadowed-variable
    fs.writeFile(path.resolve('E:/' + 'img23333' + '.jpg'), imgData, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
});

ipcMain.on('master-close', (e, msg) => {          // 进程之间的通信
  // 关闭master进程
  app.quit();
});
ipcMain.on('master-minimize', (e, msg) => {
  // 最小化  master进程
  win.minimize();
  // 主进程向 渲染进程发送消息
  e.sender.send('index-minimize', 'master');
});
ipcMain.on('master-maximize', (e, msg) => {
  // 最大化  master进程
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});
ipcMain.on('window-reload', (e, msg) => {
  win.reload();
});




try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.

  app.on('ready', () => {
    createWindow();
    // Register a 'CommandOrControl+Y' shortcut listener.
    globalShortcut.register('CommandOrControl+Q', () => {              // 注册快捷键
      // Do stuff when Y and either Command/Control is pressed.
      app.quit();
    });
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
