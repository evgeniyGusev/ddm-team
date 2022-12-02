<template>
  <div class="cases-block">
    <h1 class="title">
      MEMBERS
    </h1>
    <h2 class="description">
      ТУТ ВАШИ ФЭЙСЫ
    </h2>
  </div>
</template>

<style scoped lang="scss">
.cases-block {
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
    @include glitch-text(25px, 300);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.46em;
  }
}
</style>
