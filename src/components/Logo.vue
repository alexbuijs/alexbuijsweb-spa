<template lang="pug">
  .logo
    pre.
      ALEX
      BUIJS
      WEB
      DEVELOP
      MENT
    .x X
</template>

<style lang="scss" scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .logo {
    margin: 10px auto;
    width: 140px;

    pre {
      background-color: transparent;
      border: 0;
      color: #41ad49;
      font-family: 'OCR A Std';
      font-size: 24px;
      line-height: 1.22;
      opacity: 0;
      animation: fadeIn ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: 2s;
    }

    .x {
      color: #41ad49;
      font-family: Verdana, sans-serif;
      font-size: 76px;
      line-height: 1.22;
      margin-left: 69px;
      margin-top: -64px;
      opacity: 0;
      animation: fadeIn ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: .01s;
      animation-delay: 3s;
    }
  }
</style>
