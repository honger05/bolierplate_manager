/**
 * @fileOverview 切换标签入口
 * @ignore
 */

  var BUI = require('../common/common'),
    Tab = BUI.namespace('Tab');

  BUI.mix(Tab,{
    Tab : require('./tab'),
    TabItem : require('./tabitem'),
    NavTabItem : require('./navtabitem'),
    NavTab : require('./navtab'),
    TabPanel : require('./tabpanel'),
    TabPanelItem : require('./tabpanelitem')
  });

  module.exports = Tab;
