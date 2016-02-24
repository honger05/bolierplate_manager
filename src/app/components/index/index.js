
var dialog = new Z.Overlay.Dialog({
  title:'模态窗口',
  width:500,
  height:250,
  bodyContent:'<p>这是一个模态窗口,默认带有确认取消按钮</p>',
  success:function () {
    alert('确认');
    this.close();
  }
});
dialog.show();
$('#btnShow').on('click',function () {
  dialog.show();
});

new Z.Overlay.Dialog({
  title:'配置html',
  width:500,
  height:250,
  //配置文本
  bodyContent:'<p>这里是配置的html:<a href="http://taobao.com">任意的链接</a></p><p>下一段文本</p>',
  success:function () {
    alert('确认');
    this.close();
  }
}).show();
