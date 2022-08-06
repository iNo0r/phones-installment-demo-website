<template>
  <div class="phone-view">
    <div class="partA">
      <!-- img -->
      <!-- <img
        src="https://raylo.imgix.net/iphone-13-pro-silver.png?bg=404EFF&fm=jpg&fit=max&w=1024&h=1024&dpr=1&trim=auto&trim-md=0"
        alt=""
      /> -->
      <img :src="$store.getters.selectedPhoneInfo.phoneImg" alt="" />
    </div>

    <div class="partB">
      <div class="first-row">
        <div class="row-title title">Model</div>
        <div class="row-content">
          {{ $store.getters.selectedPhoneInfo.model }}
        </div>
      </div>

      <div class="second-row">
        <div class="left-column">
          <div class="column-title title">Storage</div>

          <div class="column-content">
            {{ $store.getters.selectedPhoneInfo.storage }}
          </div>
        </div>
        <div class="right-column">
          <div class="column-title title">Color</div>

          <div class="column-content">
            <div
              class="phone-color"
              :style="{
                'background-color':
                  $store.getters.selectedPhoneInfo.color.colorCode,
              }"
            ></div>
            <div class="phone-color-title">
              {{ $store.getters.selectedPhoneInfo.color.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="my-hl"></div>
      <div class="third-row">
        <div class="row-title title">Lease Term</div>
        <div class="row-content">
          {{
            $store.getters.selectedPhoneInfo.leaseTerm
              ? "12 Months"
              : "24 Months"
          }}
        </div>
      </div>
      <div class="my-hl"></div>
      <div class="third-row">
        <div class="row-title title">Insurance</div>
        <div class="row-content">
          {{ $store.getters.selectedPhoneInfo.insurance ? "" : "Not" }} Added
        </div>
      </div>
      <div class="my-hl"></div>
      <div class="forth-row">
        <div class="row-icon">
          <DeliveryIcon></DeliveryIcon>
        </div>
        <div class="row-content">Delivered 10 – 24 Aug 2022</div>
      </div>
    </div>
  </div>
</template>

<script>
import HandHoldingPhoneIcon from "../../Icons/HandHoldingPhoneIcon.vue";
import DeliveryIcon from "../../Icons/Delivery-Icon.vue";
export default {
  components: { HandHoldingPhoneIcon, DeliveryIcon },
};
</script>

<style lang="scss" scoped>
.phone-view {
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-around;
  font-weight: 300;
  font-size: 0.9rem;
  padding: 90px 50px;
  gap: 2vw;
  line-height: 1.5rem;
  height: 100%;

  .partA {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .partB {
    width: 80%;
  }

  .partA {
    > img {
      width: 100%;
    }
  }

  .partB {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    .column-title,
    .row-title {
      color: rgb(255, 206, 199);
    }
    .my-hl {
      border-bottom: 1px solid rgba(255, 255, 255, 0.394);
    }
    .second-row {
      display: flex;
      justify-content: space-between;
      .left-column,
      .right-column {
        width: 50%;
      }
      .right-column {
        .column-content {
          display: flex;
          gap: 0.5rem;

          .phone-color {
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }

    .third-row {
      display: flex;
      justify-content: space-between;
    }
    .forth-row {
      display: flex;
      gap: 0.5rem;
      .row-icon {
        width: 1rem;
      }
    }
  }

  @media (max-width: 1150px) {
    padding: 90px 20px;
  }
  @media (max-width: 850px) {
    gap: 0.5rem;
  }
  @media (max-width: 650px) {
    flex-wrap: wrap;

    .partA {
      width: 60%;
    }
    .partB {
      width: 100%;
      order: -1;
      margin-bottom: 2rem;
    }
    padding: 30px 10px;
  }
}
</style>
