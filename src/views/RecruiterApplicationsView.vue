<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>投递处理</h1>
      </template>
      <p>按职位查看和推进投递状态将在 M5 实现。</p>
      <el-button @click="$router.push('/recruiter/workspace')">返回工作台</el-button>
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
