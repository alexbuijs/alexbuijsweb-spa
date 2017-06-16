<template lang="pug">
  .projects
    .page-header
      h2 Recent projects

    b-carousel(controls indicators :interval='0')
      template(v-for='project in $store.portfolio')
        b-carousel-slide
          a(:href='project.link' target='_blank')
            img.d-block.img-fluid(:src="`${require(`../assets/projects/${assetName(project)}.png`)}`")
            .carousel-caption.d-none.d-md-block
              h3 {{project.title}}
              p {{project.description}}
</template>

<script>
  export default {
    methods: {
      assetName (project) {
        return project.title.replace(' ', '-').toLowerCase()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-item {
    height: 522px;
    justify-content: center;
  }

  img {
    height: 522px;
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
    padding: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);

    h3 {
      margin-top: 10px;
    }

    a {
      color: #fff;
    }
  }
</style>
