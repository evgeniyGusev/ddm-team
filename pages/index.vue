<template>
  <main class="main">
    <transition name="page">
      <component :is="views[currentStep]" class="main-content" />
    </transition>

    <transition name="fade">
      <ScrollArrows v-show="isFirstBlock" class="scroll-arrows" />
    </transition>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TitleBlock from "~/components/indexPage/TitleBlock.vue";
import CasesBlock from "~/components/indexPage/CasesBlock.vue";
import MembersBlock from "~/components/indexPage/MembersBlock.vue";
import ScrollArrows from "~/components/general/ScrollArrows.vue";

const views = { TitleBlock, CasesBlock, MembersBlock };

const currentStep = ref('TitleBlock');
const isCanBeScrolled = ref(true);

const arrayOfBlocks = computed(() => Object.keys(views))
const isFirstBlock = computed(() => currentStep.value === 'TitleBlock')
const isLastBlock = computed(() => currentStep.value === arrayOfBlocks.value[arrayOfBlocks.value.length - 1])

const setScrollStatus = () => {
  isCanBeScrolled.value = false;

  setTimeout(() => { isCanBeScrolled.value = true }, 500);
}

onMounted(() => {
  const blocksArray = Object.keys(views);

  document.addEventListener('wheel', e => {
    if(isCanBeScrolled.value) {
      const delta = Math.sign(e.deltaY);

      if (delta === 1 && !isLastBlock.value) {
        currentStep.value = arrayOfBlocks.value[arrayOfBlocks.value.indexOf(currentStep.value) + 1];
      }

      if (delta === -1 && !isFirstBlock.value) {

        currentStep.value = arrayOfBlocks.value[arrayOfBlocks.value.indexOf(currentStep.value) - 1];
      }

      setScrollStatus()
    }
  })
})
</script>

<style lang="scss" scoped>
.main {
  .main-content {
    z-index: 2;
    position: relative;
  }

  .scroll-arrows {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
