

## 简介

React Antd Admin 是一个免费开源的中后台模版。使用了最新的`react 17.x`,`react-router 6.x`,`@reduxjs/toolkit`,`antd4.x`等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。
模板集成了基础权限、国际化以及各种常用组件。

## 特性

- **最新技术栈**：使用 React Hooks/Redux/toolkit 等前端前沿技术开发
- **Mock 数据** 内置 Mock 数据方案
- **权限** 内置完善的动态路由权限生成方案
- **组件** 二次封装了多个常用的组件

## 预览

- [github](https://github.com/mvpyb/react-ant-admin.git) - 完整版github站点
- [预览](https://mvpyb.github.io/react-ant-admin/dist/)- 完整版预览 ( github )
- [预览](http://simmon_page.gitee.io/react-antd-admin/)- 完整版预览 ( 码云 )


## Vite Element Admin - （vite + Element Plus 开箱即用的中后台模板）

- [没有梯子的可移步码云](https://simmon_page.gitee.io/vite-element-plus-admin/dist/) - 完整版预览 （ gitee ）
- [vite-element-admin](https://mvpyb.github.io/vite-element-plus-admin/dist/) - 完整版预览 ( github )
- [github](https://github.com/mvpyb/vite-element-plus-admin) - 完整版github站点
- [码云](https://gitee.com/simmon_page/vite-element-plus-admin) - 完整版码云站点

## Vite Vant Template - （vite + vant H5 开箱即用的简易模板）

- [没有梯子的可移步码云]( https://simmon_page.gitee.io/vite-vant-template/dist/ ) - 完整版预览 （ gitee ）
- [vite-element-admin](https://mvpyb.github.io/vite-vant-template/dist/) - 完整版预览 ( github )
- [github](https://github.com/mvpyb/vite-vant-template) - 完整版github站点
- [码云](https://gitee.com/simmon_page/vite-vant-template) - 完整版码云站点

测试账号: 随便填
测试密码: 随便填

## 效果预览



## 准备

- [React](https://reactjs.org/) - React 最新特性
- [Redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started) - redux-toolkit基础
- [React-Router-Next](https://reactrouter.com/docs/en/v6) - react-router 6x 文档
- [Ant Design](https://ant.design/components/overview-cn/) - Ant Design 4x文档
- [Mock.js](https://github.com/nuysoft/Mock) - mockjs 基本语法

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 静态资源
│   ├─ components             # 全局公用组件
│   ├─ config                 # 全局配置
│   │   ├─ constant.js        # 基础常量
│   ├─ icons                  # svg资源
│   ├─ layouts                # layout
│   ├─ vendor                 # 第三方库按需加载
│   ├─ mock                   # mock数据
│   ├─ router                 # 路由
│   ├─ store                  # 全局store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 工具函数类
│   ├─ views                  # 页面集合
│   ├─ App.js                 # 入口页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.js                # 入口文件
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
├── package.json              # package.json
└── .eslintrc.js              # eslint配置
```


## 开发

```bash
# 克隆项目
git clone https://github.com/mvpyb/react-ant-admin.git

# 进入项目目录
cd vite-element-plus-admin

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

## 发布

```bash
# 构建生产环境
npm run build:pro
```
