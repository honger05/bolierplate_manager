/**
 * @fileOverview Data 命名空间的入口文件
 * @ignore
 */
var BASE = './';

var BUI = require('../common/common'),
  Data = BUI.namespace('Data');

BUI.mix(Data,{
  Sortable : require(BASE + 'sortable'),
  Proxy : require(BASE + 'proxy'),
  AbstractStore : require(BASE + 'abstractstore'),
  Store : require(BASE + 'store'),
  Node : require(BASE + 'node'),
  TreeStore : require(BASE + 'treestore')
});

module.exports = Data;
