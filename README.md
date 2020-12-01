# Mirage Starter Kit

![Docker Image](https://github.com/huang825172/mirage-test/workflows/Docker%20Image/badge.svg)

`Mirage` 是 AI 驱动、基于词库的文本阅读平台。

此仓库主要用于熟悉开发工具和工作流程，方便推进平台搭建。

## 运行

### 后端

```bash
cd server
npm install
npm run start
```

### 前端

``` bash
cd web
npm install
npm run serve
```

### 联调

```bash
cd web
npm install
npm run build
cd ../server
mv public public_bk
mv ../web/dist public
npm install
npm run start
```