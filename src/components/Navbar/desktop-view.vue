<template>
  <div class="navbar">
    <div class="nav-title">SOME COMPANY</div>

    <div class="nav-items">
      <router-link to="/"><div>WHY US</div></router-link>
      <router-link to="/phones"><div>PHONES</div></router-link>
      <router-link to="/about"><div>ABOUT</div></router-link>
      <router-link to="/buy-a-phone"><div>BUY A PHONE</div></router-link>
      <!-- <div>ABOUT</div> -->
      <!-- <div>BUY A PHONE</div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  //   padding: 0rem 2rem;

  .nav-title {
    padding: 0 2rem;
    font-size: x-large;
  }
  .nav-items {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
    }

    background: #4252ff;
    a:nth-child(4) {
      height: 100%;
      background-color: #ffcec7;
      color: black;
      display: flex;
      align-items: center;
      padding: 0 2rem;
    }
  }
}
</style>
