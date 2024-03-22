<template>
  <div class="treeItem">
    <template v-if="itemTit?.children?.length">
      <img src="https://so.360tres.com/t01442a8866d503ea97.webp" 
        v-show="!isOpen" class="right" @click="isOpen = !isOpen"/>
      <img src="https://so.360tres.com/t01442a8866d503ea97.webp" 
        v-show="isOpen" class="down" @click="isOpen = !isOpen"/>
    </template>
    <div class="itemTitItem" @click="contentItem(itemTit)">{{ itemTit.name }}</div>
    <template v-if="itemTit?.children?.length">
      <treeItem
        v-for="(childItem, childIndex) in itemTit.children"
        :itemTit="childItem"
        :key="childIndex"
        v-show="isOpen"
        >{{ childItem.name }}</treeItem
      >
    </template>
  </div>
</template>
<script>
import {EventBus} from '../event-bus';
export default {
  name: "TreeItem",
  props: {
    itemTit: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    contentItem(value) {
      if (!value.children) {
        EventBus.$emit('addition', {
          value: value.title
        })
      }
    }         
  }
};
</script>

<style scoped>
.treeItem {
  padding: 0 0 0 15px;
  margin: 0;
  cursor: pointer;
}
.itemTitItem {
  display: inline-block;
  font-size: 14px;
  margin: 5px 0;
}
.right{
  transform: rotate(90deg);
}
.down{
  transform: rotate(180deg);
}
</style>
