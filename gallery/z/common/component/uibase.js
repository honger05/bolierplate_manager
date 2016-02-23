/**
 * @fileOverview uibase的入口文件
 * @ignore
 */
 var BUI = require('../util')
var BASE = './uibase/';

var UIBase = require(BASE + 'base');

BUI.mix(UIBase,{
  Align : require(BASE + 'align'),
  AutoShow : require(BASE + 'autoshow'),
  AutoHide : require(BASE + 'autohide'),
  Close : require(BASE + 'close'),
  Collapsable : require(BASE + 'collapsable'),
  Drag : require(BASE + 'drag'),
  KeyNav : require(BASE + 'keynav'),
  List : require(BASE + 'list'),
  ListItem : require(BASE + 'listitem'),
  Mask : require(BASE + 'mask'),
  Position : require(BASE + 'position'),
  Selection : require(BASE + 'selection'),
  StdMod : require(BASE + 'stdmod'),
  Decorate : require(BASE + 'decorate'),
  Tpl : require(BASE + 'tpl'),
  ChildCfg : require(BASE + 'childcfg'),
  Bindable : require(BASE + 'bindable'),
  Depends : require(BASE + 'depends')
});

BUI.mix(UIBase,{
  CloseView : UIBase.Close.View,
  CollapsableView : UIBase.Collapsable.View,
  ChildList : UIBase.List.ChildList,
  /*DomList : UIBase.List.DomList,
  DomListView : UIBase.List.DomList.View,*/
  ListItemView : UIBase.ListItem.View,
  MaskView : UIBase.Mask.View,
  PositionView : UIBase.Position.View,
  StdModView : UIBase.StdMod.View,
  TplView : UIBase.Tpl.View
});

module.exports = UIBase;
