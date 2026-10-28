<template>
  <main class="placeholder-page">
    <el-card class="placeholder-card">
      <template #header>
        <h1>注册 HireFlow</h1>
      </template>
      <p>求职者与招聘方注册将在 M2 实现。</p>
      <el-button @click="$router.push('/login')">返回登录</el-button>
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
  width: min(520px, 100%);
}
</style>
