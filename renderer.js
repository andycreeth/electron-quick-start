// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron  = require('electron');
const { remote } = electron;
const { Menu, MenuItem } = remote;

const menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }));

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow(), { async: false });
  alert('menu.popup() has returned');
}, false)
