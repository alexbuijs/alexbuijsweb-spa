<template lang="pug">
  #word-cloud
</template>

<script>
  import $ from 'jquery'
  import 'jqcloud2'

  export default {
    mounted () {
      $('#word-cloud').jQCloud(this.wordList(), {
        delay: 10,
        autoResize: true,
        fontSize: {
          from: 0.065,
          to: 0.015
        }
      })
    },
    beforeDestroy () {
      $('#word-cloud').jQCloud('destroy')
    },
    methods: {
      wordList () {
        return Object.keys(this.$store.skills).reduce((previous, skill) => {
          return [...previous, ...this.$store.skills[skill]]
        }, [])
      }
    }
  }
</script>

<style lang="scss">
  #word-cloud {
    font-family: 'Monaco';
    height: 350px;

    .jqcloud-word {
      text-shadow: 1px 1px 1px #585858;
    }

    @for $i from 1 through 10 {
      .w#{$i} {
        color: lighten(#505c51, 67.5% - ($i - 1) * 7.5);
      }
    }
  }
</style>
