<template>
  <div class="layout-container">
    <section id="navbar">
      <slot name="navbar"></slot>
    </section>

    <section class="body"></section>

    <section class="footer">
      <slot name="footer"></slot>
    </section>
  </div>
</template>

<script setup>
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};
</script>

<style lang="scss" scoped>
$nav-height: 5rem;
.layout-container {
  #navbar {
    min-height: $nav-height;
    width: 100%;
    background: red;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    transition: top 0.3s;
  }
  .body {
    width: 100vw;
    margin-top: $nav-height;
  }

  .footer {
    width: 100vw;
  }
}
</style>
