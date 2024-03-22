<template>
  <div class="footer">
    <ul class="footer">
      <li class="footer" v-for="(value, index) in list" :key="index">
        <span>{{ value.name }}</span>
      </li>
    </ul>
    <ul class="footer">
      <li class="footer" v-for="(value, index) in list" :key="index">
        <img alt="Vue" :src="value.icon">
        <span>{{ value.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterName',
  data() {
    return {
      name: 'MUI CORE',
      list:[
        {name: '帮助中心', icon: require('../assets/logo.png')},
        {name: '联系我们', icon: require('../assets/logo.png')},
        {name: '加入我们', icon: require('../assets/logo.png')}
      ]
    }
  }
}
</script>

<style scoped>
li, ul {
  list-style: none;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
}
img{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
