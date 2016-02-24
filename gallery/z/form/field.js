/**
* @fileOverview 表单域的入口文件
* @ignore
*/
var BASE = './';
var BUI = require('../common/common'),
  Field = require(BASE + 'basefield');

BUI.mix(Field,{
  Text : require(BASE + 'textfield'),
  Date : require(BASE + 'datefield'),
  Select : require(BASE + 'selectfield'),
  Hidden : require(BASE + 'hiddenfield'),
  Number : require(BASE + 'numberfield'),
  Check : require(BASE + 'checkfield'),
  Radio : require(BASE + 'radiofield'),
  Checkbox : require(BASE + 'checkboxfield'),
  Plain : require(BASE + 'plainfield'),
  List : require(BASE + 'listfield'),
  TextArea : require(BASE + 'textareafield'),
  Uploader : require(BASE + 'uploaderfield'),
  CheckList : require(BASE + 'checklistfield'),
  RadioList : require(BASE + 'radiolistfield')
});

module.exports = Field;
