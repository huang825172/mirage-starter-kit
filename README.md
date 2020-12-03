# Mirage Starter Kit

![Docker Image](https://github.com/huang825172/mirage-starter-kit/workflows/Docker%20Image/badge.svg)

基于 `Vue.js` ，`Bootstrap` ，`Express` ，`Sequelize` 构建网络应用的项目模板。

![Mirage](mirage.png)

## 一些指引

[网络应用协作开发指南](tutorial/网络应用协作开发指南.md)

[创建一个页面](tutorial/创建一个页面.md)

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
