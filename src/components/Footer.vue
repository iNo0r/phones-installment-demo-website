<template>
  <div class="footer">
    <div class="partA">
      <div class="part1">
        Some Company Group Limited is authorised and regulated by the Financial
        Conduct Authority (000000).
        <br />
        <br />

        Some Company is a trading name of Some Company Group Limited. Some
        Company Group Limited is registered in Some District and Some District
        company number 00000000.
        <br />
        <br />
        <b> Head office:</b> 0 Some Street, Some City, AAAA 999
      </div>
      <div class="part2">
        <div style="margin-bottom: 0.5rem; color: white; cursor: default">
          <b>Some Company</b>
        </div>
        <div>My account</div>
        <div>Get started</div>
        <div>Sustainability</div>
        <div>How it works</div>
        <div>Pricing</div>
        <div>Blog</div>
        <div>New phones</div>
        <div>Refurbished phones</div>
        <div>About</div>
      </div>
      <div class="part3">
        <div style="margin-bottom: 0.5rem; color: white; cursor: default">
          <b>Customer service</b>
        </div>
        <div>Help</div>
        <div>Contact us</div>
        <div>Careers</div>
        <div>Guides</div>
        <div>Legal</div>
        <div>Students</div>
      </div>
    </div>

    <div class="partB">
      <div class="part1">
        © Copyright of Some Company 2025 All rights reserved.
      </div>
      <div class="part2">
        <FacebookLogo></FacebookLogo>
        <TwitterLogo></TwitterLogo>
        <InstagramLogo></InstagramLogo>
      </div>
    </div>
  </div>
</template>
<script>
import TwitterLogo from "./Icons/TwitterLogo.vue";
import FacebookLogo from "./Icons/FacebookLogo.vue";
import InstagramLogo from "./Icons/InstagramLogo.vue";
export default { components: { TwitterLogo, FacebookLogo, InstagramLogo } };
</script>

<style lang="scss" scoped>
.footer {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background: #2d2d2d;
  color: white;
  gap: 2rem;
  .partA {
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;

    line-height: 1.1rem;
    color: #ababab;

    .part1 {
      width: 35%;
      font-size: 0.8rem;
    }
    .part2,
    .part3 {
      width: 20%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #ffd1c8;
      font-size: 0.8rem;
      div {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 2rem;
    .partA {
      .part1 {
        margin-top: 2rem;
        width: 100%;
      }
      .part2,
      .part3 {
        width: 50%;
      }
    }
  }

  .partB {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    gap: 2rem;
    .part1 {
      font-size: 0.65rem;
    }
    .part2 {
      display: flex;
      gap: 1rem;
      align-items: center;
      svg {
        width: 1.5rem;
        cursor: pointer;
      }
    }
  }
}
</style>
