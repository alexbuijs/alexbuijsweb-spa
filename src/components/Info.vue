<template lang="pug">
  .info
    .page-header
      h2 Address
        small.text-muted {{$store.address}}

    gmap-map(:center='$store.home_position' :zoom='13')
      gmap-marker(:position='$store.home_position' :animation='2' title='home')

    .page-header
      h2 Info

    .row
      .col-md-4(v-for='provider in $store.info')
        .card
          .card-header
            strong.card-title {{provider.name}}
          .card-block {{provider.number}}

    .page-header
      h2 Social

    .row
      .col-md-4(v-for='site in $store.social')
        .card
          .card-header
            strong.card-title {{site.name}}
          .card-block
            a(:href='`https://${site.url}`' target='_blank') {{site.url}}
</template>

<script>
  export default { }
</script>

<style lang="scss" scoped>
  small {
    margin-left: 10px;
  }

  .vue-map-container {
    height: 300px;
  }
</style>
