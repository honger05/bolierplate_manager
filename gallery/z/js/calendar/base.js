/**
 * @fileOverview 日历命名空间入口
 * @ignore
 */

  var BUI = require('../common/common'),
    Calendar = BUI.namespace('Calendar');
  BUI.mix(Calendar,{
    Calendar : require('./calendar'),
    MonthPicker : require('./monthpicker'),
    DatePicker : require('./datepicker')
  });

  module.exports = Calendar;
