<template>
  <div class="phones-list">
    <div
      class="item"
      v-for="({ condition, model, specs, price, imgUrl }, i) in refinedList"
      :key="i"
    >
      <div class="partA">
        <div class="part1">{{ condition }}</div>
        <div class="part2">{{ model }}</div>
        <div class="part3">{{ specs }}</div>
      </div>
      <div class="partB">
        <div class="part1">From</div>
        <div class="part2">{{ price }}</div>
      </div>
      <div class="partC">
        <img :src="imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phonesList: [
        {
          condition: "Refurbished",
          model: "iPhone 12",
          specs: "SIM-free, 5G",
          price: "£14.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-12-black.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone XS Max",
          specs: "SIM-free, 4G",
          price: "£12.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-xs-max-gold.png?trim=color&fm=webp",
        },
        {
          condition: "Brand New",
          model: "iPhone 13 Pro",
          specs: "SIM-free, 5G",
          price: "£32.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-13-pro-graphite.png?trim=color&fm=webp",
        },
        {
          condition: "Brand New",
          model: "iPhone 13 Pro Max",
          specs: "SIM-free, 5G",
          price: "£36.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-13-pro-graphite.png?trim=color&fm=webp",
        },
        {
          condition: "Brand New",
          model: "iPhone 13",
          specs: "SIM-free, 5G",
          price: "£24.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-13-midnight.png?trim=color&fm=webp",
        },
        {
          condition: "Brand New",
          model: "iPhone 13 mini",
          specs: "SIM-free, 5G",
          price: "£21.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-13-midnight.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone 12 Pro Max",
          specs: "SIM-free, 5G",
          price: "£23.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-11-pro-max-space-grey.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone 12 Pro",
          specs: "SIM-free, 5G",
          price: "£21.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-11-pro-max-space-grey.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone 11 Pro Max",
          specs: "SIM-free, 4G",
          price: "£18.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-11-pro-max-space-grey.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone 11 Pro",
          specs: "SIM-free, 4G",
          price: "£16.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-11-pro-max-space-grey.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "Galaxy S21",
          specs: "SIM-free, 5G",
          price: "£17.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/galaxy-s21-phantom-violet.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone 11",
          specs: "SIM-free, 4G",
          price: "£12.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-11-black.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "Galaxy S21+",
          specs: "SIM-free, 5G",
          price: "£21.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/galaxy-s21-phantom-violet.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone XS",
          specs: "SIM-free, 4G",
          price: "£10.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-xs-gold.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "Galaxy S21 Ultra",
          specs: "SIM-free, 5G",
          price: "£25.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/galaxy-s21-ultra-phantom-black.png?trim=color&fm=webp",
        },
        {
          condition: "Refurbished",
          model: "iPhone XR",
          specs: "SIM-free, 4G",
          price: "£9.99/Mo",
          imgUrl:
            "https://raylo.imgix.net/iphone-xr-black.png?trim=color&fm=webp",
        },
      ],
    };
  },
  props: {
    whichList: {
      default: "All",
    },
  },
  computed: {
    refinedList() {
      if (this.whichList === "Refurbished")
        return this.phonesList.filter(
          (item) => item.condition === "Refurbished"
        );
      if (this.whichList === "Brand New")
        return this.phonesList.filter((item) => item.condition === "Brand New");

      return this.phonesList;
    },
  },
};
</script>
<style lang="scss" scoped>
.phones-list {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  .item {
    width: 100%;
    display: grid;
    // margin: 24px 0;
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 12%) 0px 2px 1px,
      rgb(0 0 0 / 20%) 0px 1px 3px;
    grid-template-columns: 30% 75%;
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    font-size: 0.875rem;
    row-gap: 0.5rem;

    background-color: rgb(255, 255, 255);
  }
  .partA {
    padding-top: 2rem;
    .part1 {
      color: rgb(66, 82, 255);
    }
    .part2 {
      font-size: 1rem;
      font-weight: 500;
    }
    .part3 {
    }
  }
  .partB {
    padding-bottom: 2rem;
    .part2 {
      font-weight: 500;
    }
  }
  .partC {
    grid-column: 1 / 2;
    grid-row: 1/ 3;
    // background: rebeccapurple;
    order: -1;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  @media (min-width: 600px) {
    gap: 1rem;
    .item {
      width: 48%;
    }
  }
  @media (min-width: 900px) {
    gap: 1%;
    justify-content: center;

    .item {
      margin-bottom: 1%;
      width: calc(98% / 3);
      min-width: 350px;
      grid-template-columns: 100%;
      grid-template-rows: auto 300px 50px;
      grid-auto-flow: dense;

      .partA {
        grid-column: 1 /-1;
        grid-row: 1 / span 1;
        text-align: center;
        // order: 1;
      }
      .partB {
        grid-column: 1 /-1;
        grid-row: 3 / span 1;
        height: 100%;
        order: 2;
        text-align: center;
      }
      .partC {
        grid-column: 1 /-1;
        grid-row: 2 / span 1;
        padding: 0;
        // background: red;
        img {
        }
      }
    }
  }
}
</style>
