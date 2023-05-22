# AngularEventLoadComponent

此项目是 `Angular v16` 事件级懒加载 demo。

[点这里查看示例](https://shanheyingxin.github.io/angular-event-load-component) https://shanheyingxin.github.io/angular-event-load-component

```shell
# 查看demo
npm i
npm start
# http://localhost:4200/
```

## 什么是事件级懒加载？解决了什么问题？

1. 将功能性组件分离出路由模块
1. 基于事件，惰性加载组件
1. 提高网页加载速度
1. 细化模块
1. 减轻心智负担

## 文中说的功能性组件是什么？有哪些特点？

1. 不需要第一时间渲染
1. 在多个路由模块中需要使用
1. 如：会话组件、消息组件、弹出式组件

## 为什么要将功能性组件分离出路由模块？有什么好处？

假设两个路由模块 `A_RouterModule 5kb` , `A_RouterModule 6kb`，  
它们需要使用一个消息组件 `C_MessageModule 3kb`,  
那么实际上路由模块的实际大小是 `A_RouterModule 5+3kb` , `A_RouterModule 6+3kb`。  
但是消息组件 `C_MessageModule 3kb` 不需要第一时间呈现页面中。

## 与路由懒加载有什么区别？

|          | 路由懒加载           | 事件懒加载               |
| -------- | -------------------- | ------------------------ |
| 唤醒锚点 | url                  | 任何事件(包括 url)       |
| 分割特点 | 内容分割             | 功能分割                 |
| 相互关系 | 路由模块管理事件模块 | 事件模块服务多个路由模块 |

![图示](./graphici.png 'graphic')

# END

我是 `山河映心` , 欢迎来信。

115033672@qq.com

![我的微信](./i.jpg '我的微信')
