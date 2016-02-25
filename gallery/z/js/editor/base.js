/**
 * @fileOverview 编辑器命名空间入口
 * @ignore
 */

  var BUI = require('../common/common'),
    Form = require('../form/base'),
    Editor = BUI.namespace('Editor');

  BUI.mix(Editor,{
    Editor : require('./editor'),
    RecordEditor : require('./record'),
    DialogEditor : require('./dialog')
  });
  module.exports = Editor;
