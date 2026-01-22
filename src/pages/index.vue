<template>
  <div class="page">
    <h1>IT Party</h1>
    <p>Welcome to Nuxt 3 with FSD architecture</p>
  </div>
</template>

<style scoped lang="scss">
.page {
  @include flex(column, center, center);
  min-height: 100vh;
  padding: spacing(4);
}
</style>
