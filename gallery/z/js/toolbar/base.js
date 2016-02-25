/**
 * @fileOverview 工具栏命名空间入口
 * @ignore
 */

  var BUI = require('../common/common'),
    Toolbar = BUI.namespace('Toolbar');

  BUI.mix(Toolbar,{
    BarItem : require('./baritem'),
    Bar : require('./bar'),
    PagingBar : require('./pagingbar'),
    NumberPagingBar : require('./numberpagingbar')
  });
  module.exports = Toolbar;
