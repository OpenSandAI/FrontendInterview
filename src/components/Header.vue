<template>
  <div class="header">
    <div class="header">
      <img alt="Vue" src="../assets/logo.png">
      <span>{{name}}</span>
    </div>
    <div class="header">
      <input type="text">
      <button>{{search}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderName',
  data() {
    return {
      name: 'MUI CORE',
      search: '登录',
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
input{
  margin-right: 5px;
}
</style>
