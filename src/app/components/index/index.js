require('./main.css')
var MainPage = require('./main.js')

var config = [
  {
    id:'profile',
    menu:[{
      text:'个人信息',
      items:[
        {id:'main-menu',text:'个人信息',href:'a.html'},
        {id:'second-menu',text:'修改密码',href:'a.html'}
      ]
    }]
  },
  {
    id:'setting',
    menu: [
      {
        text:'机构用户',
        items:[
          {id:'introduce1',text:'用户管理',href:'a.html'},
          {id:'introduce2',text:'机构管理',href:'a.html'}
        ]
      },
      {
        text:'系统设置',
        items:[
          {id:'introduce3',text:'菜单管理',href:'a.html'},
          {id:'introduce4',text:'角色管理',href:'a.html'},
          {id:'introduce5',text:'字典管理',href:'a.html'}
        ]
      },
      {
        text:'日志查询',
        items:[
          {id:'introduce6',text:'日志查询',href:'a.html'}
        ]
      }
    ]
  }
];


new MainPage({
  modulesConfig : config
});
