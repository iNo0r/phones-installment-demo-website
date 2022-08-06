<template>
  <div class="layout-container">
    <section id="navbar">
      <slot name="navbar"></slot>
    </section>

    <section class="body">
      <slot name="body"></slot>
    </section>

    <section class="footer">
      <slot name="footer"></slot>
    </section>
  </div>
</template>

<script setup>
// they hide while scroll was done by https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll
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
    height: $nav-height;
    width: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    transition: top 0.3s;
    z-index: 99;
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
