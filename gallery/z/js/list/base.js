/**
* @fileOverview 列表模块入口文件
* @ignore
*/
var BASE = './';

var BUI = require('../common/common'),
  List = BUI.namespace('List');

BUI.mix(List,{
  List : require(BASE + 'list'),
  ListItem : require(BASE + 'listitem'),
  SimpleList : require(BASE + 'simplelist'),
  Listbox : require(BASE + 'listbox')
});

BUI.mix(List,{
  ListItemView : List.ListItem.View,
  SimpleListView : List.SimpleList.View
});

module.exports = List;
