<template>
  <div class="why-us-c">
    <section class="section1">
      <div class="partA">
        <div class="part1">Get the tech you <i>reeeally</i> want</div>
        <div class="part2">
          With an amazing Some Company lease you can get better tech than
          expected. New or refurb, you’ll pay way less every month and get free
          upgrades too.
        </div>
        <div class="part3">CHOOSE YOUR TECH</div>
      </div>
      <div class="partB">
        <img
          src="https://raylo.imgix.net/webflow-assets/homepage-hero-tablet-phone-min.png?auto=format&fm=webp&h=0.25"
          alt=""
        />
      </div>
    </section>
    <div class="prices-banner">
      <div class="part1">
        Phones from <br />
        £9.99/mo
      </div>
      <div class="part2">
        Tablets from <br />
        £8.99/mo
      </div>
    </div>
    <section class="section2">
      <div class="partA">News just in. We've lowered prices.</div>
      <div class="partB">
        <img
          src="https://raylo.imgix.net/webflow-assets/bf-2021-tech.png?auto=format&fm=webp"
          alt=""
        />
      </div>
    </section>

    <section class="section3">
      <div class="title">How it works</div>
      <div class="parts-container">
        <div
          class="partA"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-duration="700"
          data-aos-easing="ease-in"
        >
          <div class="part1">
            <div class="cardNumber">1</div>
            <div class="icon">
              <HandHoldingPhoneIcon></HandHoldingPhoneIcon>
            </div>
          </div>
          <div class="part2">
            <div class="card-title">Choose the tech and term you want</div>

            <div class="card-body">
              We only do the best tech -- and all phones are SIM-free.
            </div>
          </div>
        </div>
        <div
          class="partB"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="250"
          data-aos-offset="0"
          data-aos-duration="700"
          data-aos-easing="ease-in"
        >
          <div class="part1">
            <div class="cardNumber">2</div>
            <div class="icon">
              <WalletIcon></WalletIcon>
            </div>
          </div>
          <div class="part2">
            <div class="card-title">Pay way less every month</div>

            <div class="card-body">
              Get the latest tech the smarter way. <br />
              Don't own it. Some Company it.
            </div>
          </div>
        </div>
        <div
          class="partC"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="700"
          data-aos-easing="ease-in"
        >
          <div class="part1">
            <div class="cardNumber">3</div>
            <div class="icon">
              <CalendarIcon></CalendarIcon>
            </div>
          </div>
          <div class="part2">
            <div class="card-title">Upgrade time</div>
            <div class="card-body">
              At the end of your term, the choice is yours. <br />
              Apply for a free upgrade, keep your device or leave us by
              returning your device.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section4">
      <div class="item">
        <div class="icon"><WarrantyIcon></WarrantyIcon></div>
        <div class="description">Lifetime warranty included</div>
      </div>
      <div class="item">
        <div class="icon"><DeliveryIcon></DeliveryIcon></div>
        <div class="description">Free next day delivery</div>
      </div>
      <div class="item">
        <div class="icon"><SIMIcon></SIMIcon></div>
        <div class="description">SIM-free phones</div>
      </div>
      <div class="item">
        <div class="icon"><RedCalendarIcon></RedCalendarIcon></div>
        <div class="description">30 day cancellations</div>
      </div>
      <div class="item">
        <div class="icon"><EcoFriendlyIcon></EcoFriendlyIcon></div>
        <div class="description">Eco-friendly choice</div>
      </div>
    </section>

    <section class="section5">
      <div class="item">
        <div class="icon"></div>
        <div class="description"></div>
      </div>
      <div class="item">
        <div class="icon"></div>
        <div class="description"></div>
      </div>
      <div class="item">
        <div class="icon"></div>
        <div class="description"></div>
      </div>
      <div class="item">
        <div class="icon"></div>
        <div class="description"></div>
      </div>
    </section>
  </div>
</template>

<script>
import HandHoldingPhoneIcon from "../Icons/HandHoldingPhoneIcon.vue";
import WalletIcon from "../Icons/WalletIcon.vue";
import CalendarIcon from "../Icons/CalendarIcon.vue";
import WarrantyIcon from "../Icons/WarrantyIcon.vue";
import DeliveryIcon from "../Icons/DeliveryIcon.vue";
import SIMIcon from "../Icons/SIMIcon.vue";
import RedCalendarIcon from "../Icons/RedCalendarIcon.vue";
import EcoFriendlyIcon from "../Icons/EcoFriendlyIcon.vue";
export default {
  components: {
    HandHoldingPhoneIcon,
    WalletIcon,
    CalendarIcon,
    WarrantyIcon,
    DeliveryIcon,
    SIMIcon,
    RedCalendarIcon,
    EcoFriendlyIcon,
  },
};
</script>

<style lang="scss" scoped>
.why-us-c {
  width: 100%;
  overflow: hidden;
  //   display: flex;
  //   flex-direction: column;
  .section1 {
    width: 100%;
    background-color: #424fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    color: #fff;
    overflow: hidden;

    .partA {
      width: 35%;
      .part1 {
        font-size: 1.8rem;
        line-height: 3rem;
        margin-bottom: 1rem;
      }
      .part2 {
        line-height: 2rem;
        margin-bottom: 2.5rem;
      }
      .part3 {
        width: fit-content;
        padding: 20px 30px;
        background-color: #ffcec7;
        color: black;
        cursor: pointer;
      }
    }
    .partB {
      width: 40%;
      position: relative;
      height: fit-content;
      align-self: flex-end;
      transform: translateY(57px);

      img {
        position: relative;
        width: 100%;
        bottom: 0;
        // transform: translateY(50px);
        float: bottom;
        // left: 0;
        // right: 0;
      }
    }
  }
  @media (max-width: 980px) {
    .section1 {
      .partA {
        width: 100%;
      }
      .partB {
        width: 100%;
        img {
          position: static;
          transform: translateY(60px);
        }
      }
    }
  }
  .prices-banner {
    z-index: 3;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 3rem;
    padding: 1rem 0;
    background-color: #ffd1c8;
    div {
      width: 18%;
    }
    @media (max-width: 980px) {
      justify-content: space-around;
    }
  }

  .section2 {
    width: calc(100% - 60px);
    display: flex;
    flex-wrap: wrap;
    margin: 35px 30px 0px 30px;
    padding: 35px 30px 0px 30px;
    background-color: #2d2d2d;
    gap: 2rem;
    .partA {
      font-size: 29px;
      width: 40%;
      font-weight: 700;
      color: white;
    }
    .partB {
      width: 50%;
      display: flex;

      img {
        width: 100%;
        align-self: flex-end;
      }
    }

    @media (max-width: 980px) {
      width: calc(100%);
      margin: 25px 0px 0px 0px;
      .partA {
        width: 100%;
      }
      .partB {
        width: 100%;
      }
    }
  }

  .section3 {
    width: 100%;
    padding: 50px 50px 70px 50px;
    .title {
      margin: 20px 0 10px 0;
      font-size: 1.8rem;
      font-weight: 700;
      color: #333;
    }
    .parts-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      .partA,
      .partB,
      .partC {
        width: 100%;
        padding: 1rem 1rem 1.5rem 1rem;
      }
      .partA {
        background-color: #2d2d2d;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .part1 {
          display: flex;
          justify-content: space-between;
          .cardNumber {
            border-radius: 50%;
            background-color: #fff;
            color: #6c6c6c;
            width: fit-content;
            height: 1.6rem;
            width: 1.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon {
            height: 3rem;
          }
        }
        .part2 {
          .card-title {
            color: #fff;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .card-body {
            color: #ababab;
          }
        }
      }
      .partB {
        background-color: #ffeae5;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .part1 {
          display: flex;
          justify-content: space-between;
          .cardNumber {
            border-radius: 50%;
            background-color: #fff;
            color: #6c6c6c;
            width: fit-content;
            height: 1.6rem;
            width: 1.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon {
            height: 3rem;
          }
        }
        .part2 {
          .card-title {
            color: #333;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .card-body {
            color: #6c6c6c;
          }
        }
      }
      .partC {
        background-color: #eff1fe;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .part1 {
          display: flex;
          justify-content: space-between;
          .cardNumber {
            border-radius: 50%;
            background-color: #fff;
            color: #6c6c6c;
            width: fit-content;
            height: 1.6rem;
            width: 1.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon {
            height: 3rem;
          }
        }
        .part2 {
          .card-title {
            color: #333;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .card-body {
            color: #6c6c6c;
          }
        }
      }
    }

    @media (min-width: 750px) {
      padding: 50px 30px 80px 30px;
      .parts-container {
        display: flex;
        flex-wrap: nowrap;
        // gap: 1rem;
      }
    }
  }

  .section4 {
    width: 100%;
    padding: 80px 20px 80px 20px;
    background-color: #f7f7f7;
    font-weight: 500;
    color: #2d2d2d;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;

    .item {
      width: 100%;
      display: flex;
      gap: 2rem;
      //   justify-content: center;
      align-items: center;
      .icon {
        width: 2.2rem;
      }
      .description {
        text-align: center;
      }
    }

    @media (min-width: 500px) {
      .item {
        width: 40%;
      }
    }
    @media (min-width: 750px) {
      padding: 80px 50px 80px 50px;
      flex-wrap: nowrap;
      .item {
        width: 40%;
        flex-direction: column;
        .icon {
          height: 2rem;
          width: auto;
        }
      }
    }
  }
}
</style>
