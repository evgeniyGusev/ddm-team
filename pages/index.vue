<template>
  <main class="main">
    <Swiper v-bind="swiperOptions">
      <SwiperSlide v-for="(view,, i) in views" :key="i">
        <component :is="view" />
      </SwiperSlide>
    </Swiper>

<!--    <transition name="fade">-->
<!--      <ScrollArrows class="scroll-arrows" />-->
<!--    </transition>-->
  </main>
</template>

<script setup>
import { ref } from 'vue';

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-cube';
//END

//pages
import TitleBlock from "~/components/indexPage/TitleBlock.vue";
import CasesBlock from "~/components/indexPage/CasesBlock.vue";
import MembersBlock from "~/components/indexPage/MembersBlock.vue";
//END
import ScrollArrows from "~/components/general/ScrollArrows.vue";

const views = { TitleBlock, CasesBlock, MembersBlock };

const swiperOptions = ref({
  slidesPerView: 1,
  modules: [EffectCube, Mousewheel],
  effect: 'cube',
  direction: 'vertical',
  mousewheel: true,
  allowTouchMove: false,
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
    bottom: -5vh;
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
