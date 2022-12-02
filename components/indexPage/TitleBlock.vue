<template>
  <div class="title-block">
    <h1 class="title">
      disco dancers
    </h1>
    <h2 class="description">
      media
    </h2>
  </div>
</template>

<style scoped lang="scss">
.title-block {
  @include flex-centered(column);
  width: 100%;
  height: 100%;

  .title {
    @include glitch-text(80px, 600);
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .description {
    @include glitch-text(25px, 400);
    padding: 5px 5px 5px 35px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.46em;
    box-shadow: inset 0 0 12px -3px #fff;
  }
}
</style>
