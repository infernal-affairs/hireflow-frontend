<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>HireFlow 职位列表</h1>
      </template>
      <p>职位搜索、分页和前端联调将在 M4 实现。</p>
      <el-space>
        <el-button type="primary" @click="$router.push('/login')">登录</el-button>
        <el-button @click="$router.push('/register')">注册</el-button>
      </el-space>
    </el-card>
  </main>
</template>

<style scoped>
.placeholder-page {
  display: grid;
  min-height: 100vh;
  padding: 24px;
  place-items: center;
}

.placeholder-card {
  width: min(720px, 100%);
}
</style>
