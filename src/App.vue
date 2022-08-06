<template>
  <PnLayout>
    <template v-slot:navbar>
      <Navbar></Navbar>
    </template>

    <template v-slot:body>
      <router-view></router-view>
    </template>
    <template v-slot:footer>
      <Footer></Footer>
    </template>
  </PnLayout>
</template>

<script setup>
import PnLayout from "./components/layout.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AOS from "aos";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  AOS.init();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Poppins:wght@100;300;400;500;700&family=Qahiri&family=Quantico:wght@400;700&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
</style>
