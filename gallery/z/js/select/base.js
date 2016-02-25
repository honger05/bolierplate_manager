/**
 * @fileOverview 选择框命名空间入口文件
 * @ignore
 */

  var BUI = require('../common/common'),
    Select = BUI.namespace('Select');

  BUI.mix(Select,{
    Select : require('./select'),
    Combox : require('./combox'),
    Suggest: require('./suggest')
  });
  module.exports = Select;
