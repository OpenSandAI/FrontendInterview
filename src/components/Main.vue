<template>
  <div class="main">
    <div class="left">
      <h3>{{name}}</h3>
      <tree></tree>
    </div>
    <div class="right">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Tree from './Tree.vue';
import Content from './Content.vue';
export default {
  name: 'MainName',
  data() {
    return {
      name: '目录',
    }
  },
  components: {
    Tree,
    Content
  },
  methods:{
  }
};
</script>

<style scoped>
.main {
  display: flex;
  padding: 30px 0 10px 0;
}
h3 {
  padding: 0 0 0 15px;
}
.left {
  width: 200px;
  height: 500px;
  overflow-y: auto;
  background-color: #fef2f2;
}
.right {
  flex: 1;
  padding: 0 0 0 15px;
}
</style>
