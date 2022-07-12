<template>
  <div class="pn-navbar">
    <MobileView v-if="true"></MobileView>
    <DesktopView v-else></DesktopView>
  </div>
</template>

<script>
import MobileView from "./Navbar/mobile-view.vue";
import DesktopView from "./Navbar/desktop-view.vue";
export default {
  components: { MobileView, DesktopView },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  computed: {
    isMobileView() {
      return this.window.width < 950;
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.pn-navbar {
  height: 100%;
  width: 100%;
  background-color: #4252ff;
  //   background-color: purple;
  color: white;
}
</style>
