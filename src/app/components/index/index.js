var items = [
          {text:'选项1',value:'a'},
          {text:'选项2',value:'b'},
          {text:'选项3',value:'c'}
        ],
        select = new Z.Select.Select({
          render:'#s1',
          valueField:'#hide',
          items:items
        });
    select.render();
    select.on('change', function(ev){
      alert(ev.item);
    });
