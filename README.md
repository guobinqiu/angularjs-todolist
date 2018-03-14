随便玩玩
===

# todolist

## 安装

1. 安装nodejs https://nodejs.org/en/ 以获得npm

2. 通过npm安装bower `npm install -g bower`

3. 通过npm安装grunt `npm install -g grunt-cli`

4. 通过npm安装Yeoman `npm install -g yo`

5. 检查版本 `yo --version && bower --version && grunt --version`

6. bower install

### 运行http服务

`grunt serve`

### 访问

http://localhost:9000/#!/home

## 其他

+ 调用了nodejs的服务，also see https://github.com/guobinqiu/nodejs_api

+ 生成脚手架

```
mkdir mytodo 
cd mytodo
yo
```
+ bower init, 生成bower.json配置文件

+ bower install PACKAGE --save, 安装依赖包，同时保存依赖信息到bower.json

+ bower install, 从bower.json安装依赖包
