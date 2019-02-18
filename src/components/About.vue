<template lang="pug">
  .about
    b-modal(id='profile-picture' :hide-header='true' :hide-footer='true')
      img.img-fluid(src='../assets/profile.jpg' alt='Profile picture')

    .page-header
      h2 About me

    .thumbnail
      img.img-thumbnail(src='../assets/profile.jpg' :alt='`${$store.name} - ${$store.title}`'
                        @click="$root.$emit('show::modal', 'profile-picture')")

    p.
      I am a developer with over {{yearsAgo('2006-01-01')}} years of experience creating web applications.
      From 2006 to 2014, I worked as a consultant for Ciber Netherlands B.V. within the ECM & Portals service line.
      I have about {{yearsAgo('2008-10-01')}} years of experience writing Ruby on Rails web applications.
      Having begun my career as a Java developer, once I discovered Ruby, I never looked back. I gain a lot of
      satisfaction from programming in Ruby. In january 2014 I started as a freelancer. I enjoy using the latest
      techniques and adhering to best practices, such as Test Driven Development. I take pride in creating elegant and
      minimal code.

    p.
      I was born in Utrecht, the Netherlands on may 17th, 1974. I graduated in Cognitive Artificial Intelligence
      at the Faculty of Philosophy, Utrecht University.
      After I received my Master's degree I went to Japan several times, over a period of three years,
      to practice Zen training at Tofukuji, a Kyoto based Rinzai Zen Monastery.
      In february 2006 my daughter Nola was born.

    .page-header
      h2 What can I do for you?

    p.
      If you are looking for a developer for your organization's web application or hybrid mobile app, contact me.
      I can develop the back-end (Ruby on Rails / GraphQL), the front-end (e.g. Vue.js), or both. I'm also versed in
      DevOps and (setting up) continuous integration and continuous deployment environments. I have extensive experience
      working as part of SCRUM teams.
</template>

<script>
export default {
  methods: {
    yearsAgo (dateString) {
      let time = new Date(dateString).getTime()
      let diff = new Date(Date.now() - time)
      return Math.abs(diff.getUTCFullYear() - 1970)
    }
  }
}
</script>

<style lang="scss" scoped>
.thumbnail {
  cursor: pointer;
  float: right;
  margin-bottom: 5px;
  margin-left: 5px;

  img {
    height: 200px;
    width: 200px;
  }
}
</style>
