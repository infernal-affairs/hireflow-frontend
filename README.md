# HireFlow Frontend

HireFlow 的 Vue 3 + TypeScript 全栈练习项目前端仓库。当前为 M0 基线：完成 Vite、路由、Pinia、Axios 和 Element Plus 初始化，业务页面在后续里程碑实现。

## 技术栈

- Vue 3 + TypeScript
- Vite
- Vue Router
- Pinia
- Axios
- Element Plus

## 本地启动

```bash
npm install
cp .env.example .env.local
npm run dev
```

开发服务器默认运行在 `http://localhost:5173`，`/api` 请求代理到后端 `http://localhost:8080`。

## 构建与类型检查

```bash
npm run type-check
npm run build
```

## IDEA 使用方式

用 IntelliJ IDEA Ultimate 单独打开 `HireFlow/frontend` 目录；如果使用 WebStorm，同样直接打开该目录。不要打开外层 `HireFlow`，否则 Git 面板会混淆三个独立仓库。

前端运行配置选择 npm，脚本为 `dev`。

## 页面规划

- `/login` 登录
- `/register` 注册
- `/jobs` 职位列表
- `/jobs/:id` 职位详情
- `/recruiter/workspace` 招聘方工作台
- `/recruiter/jobs/:jobId/applications` 投递处理
- `/my/applications` 我的投递
