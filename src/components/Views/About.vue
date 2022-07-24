<template>
  <div class="about-main-c">
    <section class="jumbotron">
      <div class="icon">
        <OurMession></OurMession>
      </div>
      <div class="title">Our Mession</div>
    </section>

    <section class="section2">
      <div class="partA">The new way to get your tech</div>

      <div class="partB">
        <div class="part1">
          Having new tech is great. Getting it isn’t. A complicated, expensive
          and wasteful process. And often just plain rude. We’re here to change
          all that.
          <br />
          <br />
          We let people get the tech they want – without having to own it.
          Better value, better experience, and better for the environment too.
        </div>

        <div class="partC">
          <div class="part-icon">
            <HandStartsIcon></HandStartsIcon>
          </div>
          <div class="part-title">Way lower prices</div>
          <div class="part-body">
            Some Company is the better way to get better tech. We can offer way
            better value thanks to our secret sauce – we do leasing,
            brilliantly. That means you get the tech you want without having to
            own it.
          </div>
        </div>

        <div class="partC">
          <div class="part-icon">
            <MessageIcon></MessageIcon>
          </div>
          <div class="part-title">Wow service</div>
          <div class="part-body">
            Unlike the dinosaur phone companies and huge, impersonal retailers,
            we’re nimble enough to do a great job for you.
            <br />
            <br />
            We’ve built our systems from the ground up to be fast, modern and
            easy. Some Company is here to give you an amazing experience.
          </div>
        </div>
        <div class="partC">
          <div class="part-icon">
            <EcoFriendlyIcon></EcoFriendlyIcon>
          </div>
          <div class="part-title">Greener</div>
          <div class="part-body">
            When you upgrade to a newer device, your old one gets a happy new
            life with a refurb customer. So you can say goodbye to drawers full
            of old tech you’re not sure what to do with.
            <br />
            <br />
            Better for you, better for the environment.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OurMession from "../Icons/OurMession.vue";
import EcoFriendlyIcon from "../Icons/EcoFriendlyIcon.vue";
import MessageIcon from "../Icons/MessageIcon.vue";
import WarrantyIcon from "../Icons/WarrantyIcon.vue";
import HandHoldingPhoneIcon from "../Icons/HandHoldingPhoneIcon.vue";
import HandStartsIcon from "../Icons/Hand-starts-icon.vue";
export default {
  components: {
    OurMession,
    EcoFriendlyIcon,
    MessageIcon,
    WarrantyIcon,
    HandHoldingPhoneIcon,
    HandStartsIcon,
  },
};
</script>

<style lang="scss" scoped>
.about-main-c {
  width: 100%;

  .jumbotron {
    background-color: #eff1fe;
    padding: 105px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .icon {
      height: 9rem;
    }
    .title {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }

  .section2 {
    display: flex;
    font-size: 0.9rem;
    flex-direction: column;
    padding: 50px 30px;
    .partA {
      line-height: 34px;
      font-size: 1.4rem;
      font-weight: 300;
    }
    .partB {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .part1 {
        color: #2d2d2d;
        line-height: 1.5;
        opacity: 0.4;
      }
    }
    .partC {
      .part-icon {
        margin-top: 1rem;
        width: 2rem;
      }
      .part-title {
        font-weight: 500;
        line-height: 1.5;
        margin-top: 0;
        margin-bottom: 10px;
      }
      .part-body {
        font-weight: 300;
      }
    }
  }

  @media (min-width: 750px) {
    .jumbotron {
      padding: 180px 0;
    }

    .section2 {
      padding: 50px;
      flex-direction: row;
      .partA,
      .partB {
        width: 50%;
      }
    }
  }
}
</style>
