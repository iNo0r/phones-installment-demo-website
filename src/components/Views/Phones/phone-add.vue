<template>
  <div class="phone-add">
    <div class="partA">
      <div class="part1">TOP-SELLING</div>
      <div class="part2">Refurbished</div>
      <div class="part3">iPhone 12</div>
      <div class="part4">SIM-free, 5G</div>
    </div>
    <div class="partB">
      <div class="part1">
        <ul>
          <li>Free next day delivery</li>
          <li>12 or 24 month lease</li>
          <li>Lifetime warranty</li>
        </ul>
      </div>
      <div class="part2">FROM £14.99/MO</div>
    </div>
    <div class="partC">
      <img
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        src="https://raylo.imgix.net/iphone-12-black.png?trim=color&fm=webp"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.phone-add {
  margin-top: 24px;
  background-color: rgb(45, 45, 45);
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(6, auto);

  color: white;

  .partA {
    grid-column: 1 /-1;
    grid-row: 1 / span 2;
    padding: 1rem 1rem 0 1rem;
    // height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    div {
      width: fit-content;
    }
    .part1 {
      background-color: rgb(66, 82, 255);
      font-size: 0.9rem;
      padding: 6px 16px;
      border-radius: 1.2rem;
      margin-bottom: 1rem;
    }
    .part2,
    .part3 {
      font-size: 1.5rem;
    }
    .part4 {
      font-size: 1.2rem;
      color: rgb(255, 209, 200);
    }

    // background: red;
  }
  .partB {
    grid-column: 1 /-1;
    grid-row: 5 / span 2;
    padding: 0rem 1rem;
    background: rgb(69, 69, 69);
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .part1 {
      ul {
        list-style-position: inside;
        line-height: 2rem;
      }
    }
    .part2 {
      margin: 1rem;
      padding: 22px 30px;
      background: rgb(255, 209, 200);
      color: rgb(45, 45, 45);
      text-align: center;
    }
    // background: green;
  }
  .partC {
    grid-column: 1 /-1;
    grid-row: 3 / span 2;
    // background: blue;
    width: 90%;
    justify-self: center;
    // align-self: end;
    height: 50vmin;
    overflow: hidden;

    img {
      width: 100%;

      object-position: 50% 50%;
    }
  }

  @media (min-width: 600px) {
    padding: 3rem 3rem 0 3rem;
    .partA {
      grid-column: 1 / 3;
      grid-row: 1 / span 3;
      padding: 0;
    }
    .partB {
      grid-column: 1 /3;
      grid-row: 4 / span 3;
      padding: 0;
      background: inherit;
      padding: 0;
    }
    .partC {
      grid-column: 3 /-1;
      grid-row: 1 / -1;
      justify-self: end;
      align-self: end;
    }
  }
}
</style>
