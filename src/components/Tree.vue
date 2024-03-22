<template>
  <div class="tree">
    <TreeItem
      v-for="(item, index) in list"
      :key="index"
      :itemTit="item"
    ></TreeItem>
  </div>
</template>

<script>
import TreeItem from "./TreeItem.vue";
export default {
  name: 'TreeName',
  data() {
    return {
      list: [
        {
          name: "目录1",
          children: [{ name: "目录1-1", title: "内容1-1" }, { name: "目录1-2", title: "内容1-2" }],
        },
        {
          name: "目录2",
          children: [
            {
              name: "目录2-1",
              children: [
                {
                  name: "目录2-1-1",
                  children: [{ name: "目录2-1-1-1", title: "内容2-1-1-1" }],
                },
                {
                  name: "目录2-1-2",
                  children: [
                    { name: "目录2-1-2-1", title: "内容2-1-1-1" }, 
                    { name: "目录2-1-2-2", title: "内容2-1-1-2" }
                  ],
                },
              ],
            },
            {
              name: "目录2-2",
              children: [
                {
                  name: "目录2-2-1",
                  children: [
                    { name: "目录2-2-1-1", title: "内容2-1-1-1" }, 
                    { name: "目录2-2-1-1", title: "内容2-1-1-2" }, 
                    { name: "目录2-2-1-1", title: "内容2-1-1-3" },
                  ],
                },
              ],
            },
            {
              name: "目录2-2-1",
              children: [
                { name: "目录2-2-1-1", title: "内容2-1-1-1" }, 
                { name: "目录2-2-1-1", title: "内容2-1-1-2" }, 
                { name: "目录2-2-1-1", title: "内容2-1-1-3" },
                { name: "目录2-2-1-1", title: "内容2-1-1-4" }, 
                { name: "目录2-2-1-1", title: "内容2-1-1-5" }, 
                { name: "目录2-2-1-1", title: "内容2-1-1-6" },
              ],
            },
          ],
        },
      ],
    };
  },
  components: { 
    TreeItem 
  },
};
</script>
