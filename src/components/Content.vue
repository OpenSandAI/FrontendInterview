<template>
  <div class="content">
    <h1>{{title}}</h1>
    <vue-markdown :source="markdown"></vue-markdown>
  </div>
</template>

<script>
import {EventBus} from '../event-bus';
import VueMarkdown from 'vue-markdown';
export default {
  name: 'ContentName',
  data() {
    return {
      title: '内容1-1',
      markdown: '# Hello, Vue Markdown!'
    }
  },
  mounted() {
    EventBus.$on('addition', param => {
      this.title = param.value;
    })
  },
  components: {
    VueMarkdown
  }
}
</script>

<style scoped>
</style>
