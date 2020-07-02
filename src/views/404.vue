<template>
  <div class="d-flex justify-content-center mt-5">
    <p>页面未找到，点<span @click="$router.push('/')" class="pointer">这里</span>返回首页。</p>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>

</style>
