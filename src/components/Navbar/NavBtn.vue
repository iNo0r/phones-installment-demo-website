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
    <div class="title">MANU</div>
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
  //   background: yellow;
  display: flex;
  flex-direction: column;
  height: fit-content;
  // background-color: red;
  gap: 0.2rem;
  overflow: hidden;
  cursor: pointer;
  .btn-line {
    justify-content: space-between;
    display: flex;
    .left-part,
    .right-part {
      transition: all 0.3s;
      width: 50%;
      height: 0.2rem;
      background-color: white;
      transition: all 0.5s;
    }
  }
  .btn-line-middle {
    width: 100%;
    height: 0.2rem;
    background-color: white;
  }

  .title {
    opacity: 1;
    transition: all 0.5s;
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

  .title {
    position: relative;
    opacity: 0;
    transform: translateY(-100%);

    // height: 0;
  }
}
</style>
