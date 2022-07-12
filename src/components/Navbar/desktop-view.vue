<template>
  <div class="navbar">
    <div class="nav-title">SOME COMPANY</div>

    <div class="nav-items">
      <div>WHY US</div>
      <div>PHONES</div>
      <div>ABOUT</div>
      <div>BUY A PHONE</div>
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

    background: #4252ff;
    div:nth-child(4) {
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
