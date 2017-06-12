<template lang="pug">
  .experience
    .page-header
      h2 Work experience

    .resume
      a(:href="`${require('../assets/resume.pdf')}`" target='_blank')
        i.fa.fa-file
        | Download resume

    .card(v-for='job in $store.jobs')
      h6.card-header {{job.employer}}
      .table-responsive
        table.table
          thead
            tr
              th.info
              th(v-for='prop in props') {{prop | capitalize}}
          tbody
            tr(v-for='project in job.projects')
              b-popover(v-if='project.description' :content='project.description' triggers='hover' placement='right' class='info')
                td
                  i.fa.fa-info
              td(v-else)
              td(v-for='prop in props' :class='prop') {{project[prop]}}
</template>

<script>
  export default {
    data () {
      return {
        props: ['started', 'ended', 'company', 'branch', 'platform']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resume {
    padding-bottom: 9px;
    margin: 20px 0;
    border-bottom: 1px solid #eeeeee;

    i {
      margin-right: 5px;
    }
  }

  .card:not(:last-child) {
    margin-bottom: 20px;
  }

  .table {
    margin-bottom: 0;
  }

  .info {
    width: 5px;
  }

  .started, .ended {
    min-width: 82px;
  }
</style>
