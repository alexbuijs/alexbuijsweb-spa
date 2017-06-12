<template lang="pug">
  #app.container
    micro-data
    .row
      .content.offset-md-2.col-md-8
        ul.nav.nav-tabs.nav-justified.flex-column.flex-sm-row
          li.nav-item(v-for='tab in tabs')
            router-link.nav-link(:to="{name: tab}" exact) {{tab}}
        router-view
        .row.contact
          .col-md-6
            a(:href='`tel:${$store.phone}`')
              i.fa.fa-phone
              | {{$store.phone | spaces(4)}}
          .col
            a(:href='`mailto:${$store.email}`')
              i.fa.fa-envelope
              | {{$store.email}}
      .col-md-2.hidden-sm-down
        logo
</template>

<script>
  import Logo from '@/components/Logo'
  import MicroData from '@/components/MicroData'

  export default {
    components: {
      Logo,
      MicroData
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
      margin: 20px 0 !important;
    }
  }

  .content {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .08);
    padding: 15px;
  }

  .page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eeeeee;
  }

  .contact {
    padding-top: 15px;
    text-align: center;

    i {
      margin-right: 5px;
    }
  }
</style>
