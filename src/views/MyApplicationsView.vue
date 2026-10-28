<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>我的投递</h1>
      </template>
      <p>投递进度和资料抽屉将在 M5 实现。</p>
      <el-button @click="$router.push('/jobs')">浏览职位</el-button>
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
