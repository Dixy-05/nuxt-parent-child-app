<template lang="pug">
article.message(:class='color')
  .message-header
    p {{title}}
  .message-body
    | {{text}}.
</template>
<script>
export default {
  name: 'ArticleComponent',
  props: {
    title: String,
    text: String,
    color: String,
  },
}
</script>
