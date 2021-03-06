/**
 * @fileOverview 可勾选的列表，模拟多个radio
 * @ignore
 */

  var BUI = require('../../common/common'),
    ListField = require('./listfield');

  /**
   * @class BUI.Form.Field.RadioList
   * 可勾选的列表，模拟多个radio
   * @extends BUI.Form.Field.List
   */
  var RadioList = ListField.extend({

  },{
    ATTRS : {
      /**
       * @protected
       * 默认的列表配置
       * @type {Object}
       */
      defaultListCfg : {
        value : {
          itemTpl : '<li><span class="x-radio"></span>{text}</li>',
          allowTextSelection : false
        }
      }
    }
  },{
    xclass : 'form-field-radiolist'
  });

  module.exports = RadioList;
