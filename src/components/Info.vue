<template lang="pug">
  .info
    .page-header
      h2 Address
        small.text-muted Haïtidreef 3E, 3563 HC, Utrecht, The Netherlands

    .map-canvas

    .page-header
      h2 Info

    .row
      .col-md-4
        .card
          .card-header
            strong.card-title KvK
          .card-block 59563710
      .col-md-4
        .card
          .card-header
            strong.card-title BTW
          .card-block NL177182672B01
      .col-md-4
        .card
          .card-header
            strong.card-title Bank
          .card-block NL30 TRIO 0197 8234 32

    .page-header
      h2 Social

    .row
      .col-md-4
        .card
          .card-header
            strong.card-title linkedin
          .card-block
            a(href='https://www.linkedin.com/in/alexbuijs' target='_blank') linkedin.com/in/alexbuijs
      .col-md-4
        .card
          .card-header
            strong.card-title github
          .card-block
            a(href='https://github.com/alexbuijs' target='_blank') github.com/alexbuijs
      .col-md-4
        .card
          .card-header
            strong.card-title facebook
          .card-block
            a(href='https://www.facebook.com/alexbuijs' target='_blank') facebook.com/alexbuijs
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eeeeee;
  }

  small {
    margin-left: 10px;
  }

  .map-canvas {
    height: 300px;
  }
</style>
