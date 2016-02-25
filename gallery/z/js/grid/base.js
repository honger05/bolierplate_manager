/**
* @fileOverview 表格命名空间入口
* @ignore
*/


var BUI = require('../common/common'),
  Grid = BUI.namespace('Grid');

BUI.mix(Grid,{
  SimpleGrid : require('./simplegrid'),
  Grid : require('./grid'),
  Column : require('./column'),
  Header : require('./header'),
  Format : require('./format')
  // Plugins : require('./plugins')
});

module.exports = Grid;
