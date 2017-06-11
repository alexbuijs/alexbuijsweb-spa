<template lang="pug">
  .home
    word-cloud(v-once)
</template>

<script>
  import WordCloud from '@/components/WordCloud'

  export default {
    components: {
      WordCloud
    }
  }
</script>
