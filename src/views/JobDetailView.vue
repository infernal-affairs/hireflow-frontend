<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>职位详情</h1>
      </template>
      <p>职位详情和投递入口将在 M4-M5 实现。</p>
      <el-button @click="$router.push('/jobs')">返回职位列表</el-button>
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
