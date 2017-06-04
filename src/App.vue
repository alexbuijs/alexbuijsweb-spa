<template lang="pug">
  #app.container
    .row
      .content.offset-md-2.col-md-8
        ul.nav.nav-tabs.nav-justified.flex-column.flex-sm-row
          li.nav-item(v-for='tab in tabs')
            router-link.nav-link(:to="{name: tab}", exact) {{tab}}
        router-view
        .row
          .phone.col-md-6
            a(href='tel:+31640485702') +316 4048 5702
          .mail.col
            a(href='mailto:contact@alexbuijsweb.nl') contact@alexbuijsweb.nl
      .col-md-2.hidden-sm-down
        logo
</template>

<script>
  import Logo from '@/components/Logo'

  export default {
    components: {
      Logo
    },
    data () {
      return {
        tabs: ['home', 'about', 'info', 'projects', 'experience']
      }
    }
  }
</script>

<style lang="scss">
  body {
    background: linear-gradient(#f0f0f0, darken(#f0f0f0, 10%));
    background-attachment: fixed;
  }

  @media (min-width: 576px) {
    body {
      margin: 20px 0;
    }
  }

  .content {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .08);
    padding: 15px;
  }

  .nav-link .active {

  }

  .phone, .mail {
    padding-top: 15px;
    text-align: center;
  }
</style>
