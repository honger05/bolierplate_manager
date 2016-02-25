var Grid = Z.Grid,
         Store = Z.Data.Store,
         enumObj = {"1" : "选项一","2" : "选项二","3" : "选项三"},
         columns = [
           {title : '文本',dataIndex :'a'}, //editor中的定义等用于 BUI.Form.Field.Text的定义
           {title : '数字', dataIndex :'b'},
           {title : '日期',dataIndex :'c'},
           {title : '单选',dataIndex : 'd',renderer : Grid.Format.enumRenderer(enumObj)},
           {title : '多选',dataIndex : 'e',renderer : Grid.Format.multipleItemsRenderer(enumObj)},
           {title : '操作',renderer : function(){
             return '<span class="grid-command btn-edit">编辑</span>'
           }}
         ],
         data = [{a:'123'},{a:'cdd',c:'2013-03-13'},{a:'1333',b:2222,d:2,e:'1,2'}];

       var isAddRemote = false,
         editing = new Grid.Plugins.DialogEditing({
           contentId : 'content', //设置隐藏的Dialog内容
           triggerCls : 'btn-edit', //触发显示Dialog的样式
           editor : {
             title : '自定义',
             width : 600,
             listeners : {
               show : function(){
                 var form = this.get('form');
                 if(!isAddRemote){
                   var bField = form.getField('b');
                   bField.set('remote',{
                      url : '../form/data/remote.php',
                      dataType:'json',//默认为字符串
                      callback : function(data){
                        if(data.success){
                         return '';
                        }else{
                         return data.msg;
                        }
                      }
                   });
                   isAddRemote = true;
                 }
                 //TO DO
               }
             }
           }
         }),
         store = new Store({
           data : data,
           autoLoad:true
         }),
         grid = new Grid.Grid({
           render:'#grid',
           columns : columns,
           width : 700,
           forceFit : true,
           tbar:{ //添加、删除
               items : [{
                 btnCls : 'button button-small',
                 text : '<i class="icon-plus"></i>添加',
                 listeners : {
                   'click' : addFunction
                 }
               },
               {
                 btnCls : 'button button-small',
                 text : '<i class="icon-remove"></i>删除',
                 listeners : {
                   'click' : delFunction
                 }
               }]
           },
           plugins : [editing,Grid.Plugins.CheckSelection],
           store : store
         });

       grid.render();

       //添加记录
       function addFunction(){
         var newData = {b : 0};
         editing.add(newData,'a'); //添加记录后，直接编辑
       }
       //删除选中的记录
       function delFunction(){
         var selections = grid.getSelection();
         store.remove(selections);
       }
