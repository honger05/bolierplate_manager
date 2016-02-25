/**
 * @fileOverview 选择框命名空间入口文件
 * @ignore
 */

  var BUI = require('../common/common'),
    Tree = BUI.namespace('Tree');

  BUI.mix(Tree,{
    TreeList : require('./treelist'),
    Mixin : require('./treemixin'),
    TreeMenu : require('./treemenu')
  });
  module.exports = Tree;
