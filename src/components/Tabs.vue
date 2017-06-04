<template lang="pug">
  .navigation
    b-nav.nav-fill(:tabs='true')
      li.nav-item
        router-link.nav-link(:to="{name: 'home'}", active) home
      li.nav-item
        router-link.nav-link(:to="{name: 'about'}") about
      li.nav-item
        router-link.nav-link(:to="{name: 'info'}") info
      li.nav-item
        router-link.nav-link(:to="{name: 'projects'}") projects
      li.nav-item
        router-link.nav-link(:to="{name: 'experience'}") experience
</template>
