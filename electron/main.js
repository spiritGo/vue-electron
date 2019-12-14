const electron = require("electron");
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;
const isMac = process.platform === "darwin";

// const template = [
//   {
//     label: "File"
//     submenu: [{ label: "退出", role: isMac ? "close" : "quit" }]
//     submenu:[{label:""}]
//   }
// ];

// const menu = Menu.buildFromTemplate(template);
// Menu.setApplicationMenu(menu);

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    title: "spirit",
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("./dist/index.html");

  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

//登录窗口最小化
ipcMain.on("window-min", function() {
  win.minimize();
});

//登录窗口最大化
ipcMain.on("window-max", function() {
  if (win.isMaximized()) {
    win.restore();
  } else {
    win.maximize();
  }
});

// 关闭窗口
ipcMain.on("window-close", function() {
  win.close();
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform != "darwin") app.quit();
});

app.on("activate", () => {
  if (win == null) createWindow();
});
