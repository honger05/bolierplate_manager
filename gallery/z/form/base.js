/**
* @fileOverview form 命名空间入口
* @ignore
*/
var BASE = './';

var BUI = require('../common/common'),
  Form = BUI.namespace('Form'),
  Tips = require(BASE + 'tips');

BUI.mix(Form,{
  Tips : Tips,
  TipItem : Tips.Item,
  FieldContainer : require(BASE + 'fieldcontainer'),
  Form : require(BASE + 'form'),
  Row : require(BASE + 'row'),
  Group : require(BASE + 'fieldgroup'),
  HForm : require(BASE + 'horizontal'),
  Rules : require(BASE + 'rules'),
  Field : require(BASE + 'field'),
  FieldGroup : require(BASE + 'fieldgroup')
});
module.exports = Form;
