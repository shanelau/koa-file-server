# 平台单元测试框架
## Client 前端
位于 `test/client/` 目录，结构如下：
```
client/
├── helper.js         #辅助函数
├── index.js          #单元测试入口
├── karma.conf.js     #karam配置
├── spec/             #单元测试用例
├── coverage/         #单元测试覆盖率报告，包含html及cobertura格式
└── webpack.config.js #测试打包webpack配置
```
### 运行测试
开始测试前，先要安装node包：
```
 npm i --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
```
然后运行
```
npm run test:client
```
自动化测试环境，需要设置环境变量 `NODE_ENV = 'test'`，可以通过运行
```
NODE_ENV=test npm run test:client
```

### 开发
在spec目录按照模块划分文件夹，开发 spec 测试用例。
目前，测试目标有以下几种：
1. 通用组件 如Modal这种通用的弹窗组件
2. redux的reducer，所有的reducer应该都是纯函数，都可单独测试
3. utils，service等

> **后续新加入的 通用组件，reducer，utils等，都需要相应开发补充测试用例并跑通全部用例才可以提交分支。**

### 使用的库及框架
* [Karma] test runner， 测试运行控制器，用于提供测试运行环境，例如启动浏览器，调用相关框架、库代码等
* [mocha] test framework，测试框架，提供全局 descript, it 等声明用例的方法，详见[mocha]
* [expect.js] assertion lib, BDD风格的断言库

## 后端接口
位于 `test/client/` 目录。
1. 目前只做 controller 测试
2. 项目启动、初始化在 `test/bootstrap.js`，以这个用户进行登录 `email=admin@admin.com`
3. 然后会执行 `test/server` 里的所有测试

### 相关文档
1. https://github.com/Automattic/expect.js
2. https://mochajs.org
3. https://github.com/visionmedia/superagent
4. http://visionmedia.github.io/superagent/docs/test.html

[Karma]: https://karma-runner.github.io
[mocha]: https://mochajs.org/
[expect.js]: https://github.com/Automattic/expect.js
[SuperAgent]: https://github.com/visionmedia/superagent
