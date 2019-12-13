const electron = require("electron");
const { app, BrowserWindow, Menu } = require("electron");

let win;
const isMac = process.platform === "darwin";

const template = [
  {
    label: "菜单",
    submenu: [{ label: "退出", role: isMac ? "close" : "quit" }]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    title: "spirit"
  });

  win.loadFile("./dist/index.html");

  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform != "darwin") app.quit();
});

app.on("activate", () => {
  if (win == null) createWindow();
});
