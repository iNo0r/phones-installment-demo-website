<template>
  <div class="upper-part">
    <div class="nav-title">Some Company</div>
    <NavBtn @click="showNavItems"></NavBtn>
  </div>
  <div class="nav-items" :class="navItemsStatus">
    <router-link to="/"><div>WHY US</div></router-link>
    <router-link to="/phones"><div>PHONES</div></router-link>
    <router-link to="/about"><div>ABOUT</div></router-link>
    <router-link to="/buy-a-phone"><div>BUY A PHONE</div></router-link>
  </div>
</template>

<script>
import NavBtn from "./NavBtn.vue";
export default {
  components: { NavBtn },

  data() {
    return {
      // to determine weather or not the button is clicked
      isNavItems: false,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  methods: {
    showNavItems() {
      this.isNavItems = !this.isNavItems;
    },
  },
  computed: {
    navItemsStatus() {
      return {
        "nav-items-closed": !this.isNavItems,
        "nav-items-opened": this.isNavItems,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.upper-part {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
}

.nav-items {
  width: 100%;
  height: 20rem;
  position: absolute;
  background: #4252ff;
  top: 100%;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
  z-index: -1;

  a {
    text-decoration: none;
    color: white;
  }

  a:nth-child(4) {
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    background-color: #ffcec7;
    color: black;
  }
}
// in Mobile view -nav-items - closed
.nav-items-closed {
  height: 0;
  visibility: hidden;
  opacity: 0;
}
// in Mobile view -nav-items - opened
.nav-items-opened {
  height: 20rem;
  visibility: visible;
  opacity: 1;
}
</style>
