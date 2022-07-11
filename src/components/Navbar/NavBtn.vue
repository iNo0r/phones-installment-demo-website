<template>
  <div @click="toggleNavBtn" class="nav-btn" :class="navBtnStatus">
    <div class="btn-line">
      <div class="left-part"></div>
      <div class="right-part"></div>
    </div>
    <div class="btn-line-middle"></div>
    <div class="btn-line">
      <div class="left-part"></div>
      <div class="right-part"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnOpened: false,
    };
  },
  computed: {
    navBtnStatus() {
      return {
        btnOpen: this.btnOpened,
      };
    },
  },
  methods: {
    toggleNavBtn() {
      this.btnOpened = !this.btnOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-btn {
  display: flex;
  flex-direction: column;
  height: fit-content;
  // background-color: red;
  gap: 0.2rem;
  cursor: pointer;
  .btn-line {
    justify-content: space-between;
    display: flex;
    .left-part,
    .right-part {
      transition: all 0.3s;
      width: 1.5rem;
      height: 0.2rem;
      background-color: white;
      // transition: all 0.5s;
    }
  }
  .btn-line-middle {
    width: 3rem;
    height: 0.2rem;
    background-color: white;
  }
}

// applies when btn is clicked
.btnOpen {
  .btn-line {
    .left-part,
    .right-part {
      width: 1.2rem;
    }
  }
}
</style>
