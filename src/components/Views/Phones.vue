<template>
  <div class="phones-main-c">
    <section class="mini-nav">
      <MiniNav></MiniNav>
    </section>
    <section>
      <PhoneAdd></PhoneAdd>
    </section>
    <section>
      <PhonesList></PhonesList>
    </section>
  </div>
</template>

<script>
import MiniNav from "./Phones/mini-nav.vue";
import PhoneAdd from "./Phones/phone-add.vue";
import PhonesList from "./Phones/phones-list.vue";

export default {
  components: { MiniNav, PhoneAdd, PhonesList },
};
</script>

<style lang="scss" scoped>
.phones-main-c {
  background-color: #f4f4f4;
  padding: 24px;
  display: flex;
  flex-direction: column;

  width: 100%;

  > section {
    width: 100%;
    max-width: 75rem;
    align-self: center;
  }
}
</style>
