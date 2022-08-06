<template>
  <div class="progress-bar-c">
    <div class="back-btn" @click="$store.commit('updatePhase', -1)">
      <BackbuttonIcon></BackbuttonIcon>
    </div>
    <div class="progress-bar">
      <div class="progress-bar-line"></div>
      <div class="stage">
        <CompleteIvon v-if="stageNumber === 1"></CompleteIvon>
        <CompleteIvon class="passed" v-if="stageNumber > 1"></CompleteIvon>
      </div>
      <div class="stage">
        <CompleteIvon v-if="stageNumber === 2"></CompleteIvon>
        <CompleteIvon class="passed" v-if="stageNumber > 2"></CompleteIvon>
      </div>
      <div class="stage">
        <CompleteIvon v-if="stageNumber === 3"></CompleteIvon>
        <CompleteIvon class="passed" v-if="stageNumber > 3"></CompleteIvon>
      </div>
      <div class="stage">
        <CompleteIvon v-if="stageNumber === 4"></CompleteIvon>
        <CompleteIvon class="passed" v-if="stageNumber > 4"></CompleteIvon>
      </div>
    </div>
  </div>
</template>

<script>
import CompleteIvon from "../../Icons/completeIvon.vue";
import BackbuttonIcon from "../../Icons/backbuttonIcon.vue";
export default {
  components: { CompleteIvon, BackbuttonIcon },
  computed: {
    stageNumber() {
      return this.$store.state.currentPhase;
    },
  },
};
</script>

<style scoped lang="scss">
.progress-bar-c {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .back-btn {
    // width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    // height: fit-content;
  }
  .progress-bar {
    align-items: center;
    width: 90%;

    display: flex;
    height: 50px;
    justify-content: space-between;
    //   padding: 5px 50px;
    position: relative;

    .progress-bar-line {
      background: rgb(224, 224, 224);
      height: 3px;
      border-radius: 99px;
      position: absolute;
      width: 100%;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .stage {
      background: rgb(224, 224, 224);
      color: blue;
      width: fit-content;
      z-index: 2;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      // cursor: pointer;

      .passed {
        background: white;
        color: rgb(224, 224, 224);
      }
    }
  }
}
</style>
