/**
 * @fileOverview 菜单命名空间入口文件
 * @ignore
 */


  var BUI = require('../common/common'),
    Menu = BUI.namespace('Menu');
  BUI.mix(Menu,{
    Menu : require('./menu'),
    MenuItem : require('./menuitem'),
    ContextMenu : require('./contextmenu'),
    PopMenu : require('./popmenu'),
    SideMenu : require('./sidemenu')
  });

  Menu.ContextMenuItem = Menu.ContextMenu.Item;
  module.exports = Menu;
