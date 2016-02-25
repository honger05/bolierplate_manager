/**
 * @fileOverview Picker的入口
 * @author dxq613@gmail.com
 * @ignore
 */

  var BUI = require('../common/common'),
    Picker = BUI.namespace('Picker');

  BUI.mix(Picker,{
    Mixin : require('./mixin'),
    Picker : require('./picker'),
    ListPicker : require('./listpicker')
  });

  module.exports = Picker;
