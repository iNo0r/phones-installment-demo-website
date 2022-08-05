<template>
  <div class="buyAPhone">
    <!-- left part of the viewport -->
    <section class="section1">
      <div class="partA">
        <ProgressBar></ProgressBar>
      </div>
      <div class="partB">
        <PhoneOptions></PhoneOptions>
      </div>
    </section>
    <!-- right part of the viewport -->
    <section class="section2">
      <PhoneView></PhoneView>
    </section>
  </div>
</template>

<script>
import ProgressBar from "./BuyAPhone/progress-bar.vue";
import PhoneView from "./BuyAPhone/phone-view.vue";
import PhoneOptions from "./BuyAPhone/phone-options.vue";
export default {
  components: { ProgressBar, PhoneView, PhoneOptions },
};
</script>

<style lang="scss" scoped>
.buyAPhone {
  display: flex;

  .section1,
  .section2 {
    width: 100%;
  }

  .section1 {
    .partA {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .partB {
      padding: 50px;
    }
  }

  .section2 {
    background: #404eff;
    width: 100%;
  }
  @media (max-width: 650px) {
    flex-wrap: wrap;
    .section1 {
      .partB {
        padding: 20px;
      }
    }
  }
}
</style>
