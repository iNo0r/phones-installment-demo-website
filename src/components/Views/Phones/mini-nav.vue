<template>
  <div class="mini-nav-c">
    <div class="item" @click="setActive('All')" :class="activeClass('All')">
      All
    </div>
    <div
      class="item"
      @click="setActive('Refurbished')"
      :class="activeClass('Refurbished')"
    >
      Refurb
    </div>
    <div
      class="item"
      @click="setActive('Brand New')"
      :class="activeClass('Brand New')"
    >
      New
    </div>
  </div>
</template>

<script>
export default {
  emits: ["chooseList"],
  data() {
    return {
      isActive: "All",
    };
  },
  methods: {
    setActive(activeList) {
      this.isActive = activeList;
      this.$emit("chooseList", activeList);
    },
    activeClass(arg) {
      return {
        activeClass: this.isActive === arg,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-nav-c {
  width: 100%;
  height: 2rem;
  //   padding-bottom: 2rem;
  border-bottom: 0.1px rgb(224, 224, 224) solid;
  display: flex;
  gap: 2rem;
  font-weight: 300;
  color: rgb(177, 177, 177);
  //   background: green;

  .activeClass {
    color: blue;
    border-bottom: 0.2px blue solid;
  }
}
</style>
