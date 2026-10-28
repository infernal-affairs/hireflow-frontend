<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>招聘方工作台</h1>
      </template>
      <p>职位管理、公司成员和投递处理将在 M3-M5 实现。</p>
      <el-button @click="$router.push('/jobs')">返回职位列表</el-button>
    </el-card>
  </main>
</template>

<style scoped>
.placeholder-page {
  min-height: 100vh;
  padding: 24px;
}

.placeholder-card {
  max-width: 960px;
  margin: 0 auto;
}
</style>
