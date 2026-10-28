<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>登录 HireFlow</h1>
      </template>
      <p>登录表单将在 M2 登录鉴权纵向切片中实现。</p>
      <el-button type="primary" @click="$router.push('/jobs')">
        查看职位页面占位
      </el-button>
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
  width: min(480px, 100%);
}
</style>
