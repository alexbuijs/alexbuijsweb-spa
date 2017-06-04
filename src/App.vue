<template lang="pug">
  #app.container
    .row
      .content.col-md-8.offset-md-2
        tabs
        router-view
      .col
        logo
</template>

<script>
  import Tabs from '@/components/tabs'
  import Logo from '@/components/Logo'
  import About from '@/components/About'

  export default {
    components: {
      Logo,
      About,
      Tabs
    }
  }
</script>

<style lang="scss">
  body {
    background: linear-gradient(#f0f0f0, darken(#f0f0f0, 10%));
    background-attachment: fixed;
  }

  #app {
    margin-top: 20px;
  }

  .content {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .08);
    padding-top: 10px;
  }

  .nav-link .active {

  }
</style>
