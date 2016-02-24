/**
* @fileOverview Overlay 模块的入口
* @ignore
*/

var BUI = require('../common/common'),
  Overlay = BUI.namespace('Overlay');

BUI.mix(Overlay,{
  Overlay : require('./overlay'),
  Dialog : require('./dialog'),
  Message : require('./message')
});

BUI.mix(Overlay,{
  OverlayView : Overlay.Overlay.View,
  DialogView : Overlay.Dialog.View
});

BUI.Message = BUI.Overlay.Message;
module.exports = Overlay;
