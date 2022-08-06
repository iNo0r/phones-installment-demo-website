<template>
  <div class="phone-options">
    <div class="phase1">
      <div class="option-row make-row">
        <div class="option-title">Make</div>
        <div class="make-options">
          <!-- <div
            class="option"
            :class="selectedMakeOption('Apple')"
            @click="selectMake('Apple')"
          >
            Apple
          </div>
          <div
            class="option"
            :class="selectedMakeOption('Samsung')"
            @click="selectMake('Samsung')"
          >
            Samsung
          </div> -->
          <div
            class="option"
            v-for="(item, index) in $store.getters.phoneOptions.makes"
            :key="index"
            :class="selectedMakeOption(item.make)"
            @click="selectMake(item.make, index)"
          >
            {{ item.make }}
          </div>
        </div>
      </div>
      <div class="my-hl"></div>
      <div class="option-row model-row">
        <div class="option-title">Model</div>
        <div class="model-options">
          <div
            class="chosen-option"
            :class="modelOptionsIsActive"
            @click="toggleModelOptions"
          >
            <div>
              {{ $store.getters.selectedPhoneInfo.model }}
            </div>
            <div class="arrow">{{ "<" }}</div>
          </div>
          <div class="other-options" v-if="showModelOptions">
            <!-- <div
              class="model-option"
              @click="chooseModelOption('iPhone 12 Pro')"
            >
              iPhone 12 Pro
            </div>
            <div class="my-hl"></div>
            <div
              class="model-option"
              @click="chooseModelOption('iPhone 12 Pro Max')"
            >
              iPhone 12 Pro Max
            </div>
            <div class="my-hl"></div>
            <div class="model-option" @click="chooseModelOption('iPhone 13')">
              iPhone 13
            </div>
            <div class="my-hl"></div> -->
            <div
              class="model-option"
              v-for="(model, index) in $store.getters.phoneOptions.models"
              :key="index"
              @click="chooseModelOption(model, index)"
            >
              {{ model }}
            </div>
            <div class="my-hl"></div>
          </div>
        </div>
      </div>
      <div class="my-hl"></div>
      <div class="option-row colors-row">
        <div class="option-title">Color</div>
        <div class="color-options">
          <!-- <div
            class="color-option"
            :class="selectedColor('black')"
            @click="selectColor('black')"
          >
            <div class="color-c">
              <div class="color" style="background-color: black"></div>
            </div>
            <div class="color-title">black</div>
          </div>
          <div
            class="color-option"
            :class="selectedColor('blue')"
            @click="selectColor('blue')"
          >
            <div class="color-c">
              <div class="color" style="background-color: blue"></div>
            </div>
            <div class="color-title">blue</div>
          </div>
          <div
            class="color-option"
            :class="selectedColor('green')"
            @click="selectColor('green')"
          >
            <div class="color-c">
              <div class="color" style="background-color: green"></div>
            </div>
            <div class="color-title">green</div>
          </div> -->
          <div
            class="color-option"
            v-for="(colorItem, index) in $store.getters.phoneOptions.colors"
            :key="index"
            :class="selectedColor(index)"
            @click="selectColor(index)"
          >
            <div class="color-c">
              <div
                class="color"
                :style="{ 'background-color': colorItem.colorCode }"
              ></div>
            </div>
            <div class="color-title">{{ colorItem.color }}</div>
          </div>
        </div>
      </div>
      <div class="my-hl"></div>
      <div class="option-row storage-row">
        <div class="option-title">Storage</div>
        <div class="storage-options">
          <!-- <div
            class="storage-option"
            :class="selectedStorage(128)"
            @click="selectStorage(128)"
          >
            128GB
          </div>

          <div
            class="storage-option"
            :class="selectedStorage(256)"
            @click="selectStorage(256)"
          >
            256GB
          </div>

          <div
            class="storage-option"
            :class="selectedStorage(512)"
            @click="selectStorage(512)"
          >
            512GB
          </div> -->
          <div
            v-for="(storage, index) in $store.getters.phoneOptions.storages"
            :key="index"
            class="storage-option"
            :class="selectedStorage(index)"
            @click="selectStorage(index)"
          >
            {{ storage }}
          </div>
        </div>
      </div>
      <div class="next-btn" @click="nextPhase">NEXT</div>
    </div>

    <div class="phase2" v-if="phase >= 2">
      <div class="phase-title">Add insurance</div>
      <div class="partA">
        <div class="partA1">
          You can benefit from our company's very own insurance policy which
          includes:
        </div>
        <div class="partA2">
          <div class="feature">
            <div class="feature-icon">
              <WarrantyIcon2></WarrantyIcon2>
            </div>
            <div class="feature-description">
              Cover against loss, theft & accidental damage
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <GlobalInsuranceIcon></GlobalInsuranceIcon>
            </div>
            <div class="feature-description">Worldwide protection</div>
          </div>
        </div>
        <div class="partA3">
          <div
            class="include-insurance"
            :class="{ hasInsurance }"
            @click="includeInsurance(true)"
          >
            include
          </div>
          <div
            class="include-not-insurance"
            :class="{ hasInsurance: !hasInsurance }"
            @click="includeInsurance(false)"
          >
            do not include
          </div>
        </div>
      </div>

      <div class="partB">
        Since it's tied to your subscription, you won't be able to add it later.
        <br />
        Read our
        <span style="color: blue; cursor: pointer"> <u>policy summary</u></span>
        for more information
      </div>

      <div class="next-btn" @click="nextPhase">NEXT</div>
    </div>
    <div class="phase3" v-if="phase >= 3">
      <div class="phase-title">Choose Lease Term</div>
      <div class="partA">
        <div class="partA1">
          You can benefit from our company's very own insurance policy which
          includes:
        </div>
        <div class="partA2">
          <div class="feature">
            <div class="feature-icon">
              <WarrantyIcon2></WarrantyIcon2>
            </div>
            <div class="feature-description">
              Cover against loss, theft & accidental damage
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <GlobalInsuranceIcon></GlobalInsuranceIcon>
            </div>
            <div class="feature-description">Worldwide protection</div>
          </div>
        </div>
        <div class="partA3">
          <div
            class="include-insurance"
            :class="{ is12Months }"
            @click="setIt12Month(true)"
          >
            12 Months
          </div>
          <div
            class="include-not-insurance"
            :class="{ is12Months: !is12Months }"
            @click="setIt12Month(false)"
          >
            24 Months
          </div>
        </div>
      </div>

      <div class="partB">
        Since it's tied to your subscription, you won't be able to change it
        later.
        <br />
        Read our
        <span style="color: blue; cursor: pointer"> <u>policy summary</u></span>
        for more information
      </div>

      <div class="next-btn" @click="nextPhase">NEXT</div>
    </div>

    <div class="phase4" v-if="phase >= 4">
      <div class="phase-title">Your Details</div>
      <form class="user-info-form" action="submit" @submit.prevent>
        <div class="partA">
          <div class="client-input">
            <label for="client-firstName">First Name</label>
            <input type="text" id="client-firstName" required />
          </div>
          <div class="client-input">
            <label for="client-lastName"> Last Name</label>
            <input type="text" id="client-lastName" required />
          </div>
          <div class="client-input">
            <label for="client-Email">Email Address</label>
            <input type="email" id="client-Email" size="30" required />
          </div>
        </div>

        <div class="partB">
          Since it's tied to your subscription, you won't be able to add it
          later.
          <br />
          Read our
          <span style="color: blue; cursor: pointer">
            <u>policy summary</u></span
          >
          for more information
        </div>

        <button class="next-btn" @submit="nextPhase">NEXT</button>
      </form>
    </div>
  </div>
</template>

<script>
import WarrantyIcon from "../../Icons/WarrantyIcon.vue";
import GlobalInsuranceIcon from "../../Icons/GlobalInsuranceIcon.vue";
import WarrantyIcon2 from "../../Icons/WarrantyIcon2.vue";
export default {
  components: { WarrantyIcon, GlobalInsuranceIcon, WarrantyIcon2 },
  data() {
    return {
      selectedMake: "Apple",
      // model
      showModelOptions: false,
      selectedModel: "",

      //color
      selectedColorOption: "",

      //storage
      selectedStorageOption: "",

      //inusrance
      hasInsurance: true,

      //inusrance
      is12Months: true,
    };
  },

  methods: {
    selectMake(selectedMakeOption, index) {
      this.selectedMake = selectedMakeOption;
      this.$store.commit("selectMake", index);
    },
    selectedMakeOption(selectedMakeOption) {
      return {
        selectedMakeOption: this.selectedMake === selectedMakeOption,
      };
    },
    //model
    toggleModelOptions() {
      this.showModelOptions = !this.showModelOptions;
    },
    chooseModelOption(value, index) {
      this.selectedModel = value;
      this.$store.commit("selectModel", index);
      this.showModelOptions = false;
    },

    //color
    selectColor(colorIndex) {
      this.selectedColorOption = colorIndex;
      this.$store.commit("selectColor", colorIndex);
    },
    selectedColor(colorIndex) {
      return {
        selectedColorOption: this.selectedColorOption === colorIndex,
      };
    },

    //storage
    selectStorage(StorageIndex) {
      this.selectedStorageOption = StorageIndex;
      this.$store.commit("selectStorage", StorageIndex);
    },
    selectedStorage(storage) {
      return {
        selectedStroageOption: this.selectedStorageOption === storage,
      };
    },

    //insurance
    includeInsurance(value) {
      this.$store.commit("includeInsurace", value);
      this.hasInsurance = value;
    },

    //lease Term
    setIt12Month(value) {
      this.$store.commit("setIt12Month", value);
      this.is12Months = value;
    },

    //nextPhase
    nextPhase() {
      this.$store.commit("updatePhase", 1);
    },
  },
  computed: {
    //model
    modelOptionsIsActive() {
      return {
        modelOptionsIsActive: this.showModelOptions,
      };
    },

    phase() {
      return this.$store.state.currentPhase;
    },
  },
};
</script>

<style lang="scss" scoped>
.phone-options {
  //   height: 20rem;
  position: relative;
  overflow: hidden;
  width: 80%;
  margin: auto;

  @media (max-width: 480px) {
    width: 100%;
  }
  .option-row {
    .option-title {
      color: rgb(175, 149, 2);
      margin-bottom: 0.5rem;
    }
  }

  .next-btn {
    align-self: flex-end;
    padding: 0.5rem 1rem;
    background: #404eff;
    color: white;
    // width: fit-content;
    width: 100%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #535de5;
    }
  }
  .phase1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    // margin: auto;
    // position: absolute;

    .make-row {
      display: flex;
      flex-direction: column;
      .make-options {
        display: flex;
        gap: 1rem;
        .option {
          padding: 0.5rem 1rem;
          border: solid 1px black;
          cursor: pointer;
          user-select: none;
        }
        .option:hover {
          color: #404eff;
          border: solid 1px #404eff;
        }
        // conditonal class
        .selectedMakeOption {
          color: #404eff;
          border: solid 1px #404eff;
        }
      }
    }

    .model-row {
      width: 50%;
      .model-options {
        position: relative;
        .chosen-option {
          border: solid 1px black;
          cursor: pointer;
          padding: 0.5rem 1rem;
          user-select: none;
          display: flex;
          justify-content: space-between;
          .arrow {
            transform: rotate(-90deg);
          }
        }

        //conditional
        .modelOptionsIsActive {
          border: 1px solid #404eff;
          color: #404eff;
        }

        .other-options {
          position: absolute;
          background: white;
          top: 100%;
          display: flex;
          flex-direction: column;
          width: 100%;

          -webkit-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.19);
          -moz-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.19);
          box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.19);
          .model-option {
            padding: 0.5rem 1rem;
            cursor: pointer;
          }
          // gap: 0.2rem;
        }
      }
    }

    .colors-row {
      .color-options {
        display: flex;
        flex-wrap: wrap;

        .color-option {
          width: 49%;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          cursor: pointer;
          &:hover {
            .color-c {
              border: 0.4px solid rgba(0, 0, 0, 0.777);
            }
          }
          .color-c {
            padding: 0.5rem;
            border: 0.1px solid rgba(0, 0, 0, 0.119);
            border-radius: 50%;
            width: fit-content;
            transition: all 0.5s;
            cursor: pointer;

            .color {
              height: 1rem;
              width: 1rem;
              border-radius: 50%;
            }
          }
        }

        // conditional
        .selectedColorOption {
          .color-c {
            border: 0.4px solid rgba(0, 0, 0, 0.777);
          }
        }
      }
    }

    .storage-row {
      .storage-options {
        display: flex;
        gap: 1rem;
        .storage-option {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3rem;
          width: 3rem;
          font-size: 0.6rem;
          border: 0.1px solid rgba(0, 0, 0, 0.4);
          color: rgba(0, 0, 0, 0.4);
          border-radius: 50%;
          transition: 0.5s all;
          cursor: pointer;
          &:hover {
            border: 0.1px solid black;
            color: black;
          }
          //   width: min-content;
        }

        .selectedStroageOption {
          border: 0.1px solid black;
          color: black;
        }
      }
    }
  }
  .my-hl {
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.261);
  }

  .phase2 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0;
    background: white;
    animation: enterPhase 0.5s ease-in-out forwards;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 1.4rem;
    .phase-title {
      font-size: 1.2rem;
      //   margin-bottom: 1.2rem;
    }
    .partA {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .partA2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        // background: green;

        padding: 0 10%;
        gap: 1rem;
        .feature {
          width: 70%;
          display: flex;
          // justify-content: center;
          align-items: center;
          gap: 1rem;
          .feature-icon {
            display: flex;
            align-items: center;
            max-width: 2.2rem;
            max-height: 2.2rem;
            // height: 2rem;
            // background: red;
          }
        }
      }
      .partA3 {
        display: flex;
        justify-content: center;
        gap: 1rem;
        .include-insurance,
        .include-not-insurance {
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0, 0, 0, 0.376);
          cursor: pointer;
          &:hover {
            background-color: rgb(237, 125, 123);
            color: white;
            border: 1px solid rgb(237, 125, 123);
          }
        }

        .hasInsurance {
          background-color: rgb(237, 125, 123);
          color: white;
          border: 1px solid rgb(237, 125, 123);
        }
      }
    }

    .partB {
      //   display: flex;
      font-size: 0.7rem;
      width: 100%;
      align-self: center;
      padding: 16px;
      background-color: rgb(244, 244, 244);
      color: rgb(108, 108, 108);
    }
  }
  .phase3 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0;
    background: white;
    animation: enterPhase 0.5s ease-in-out forwards;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 1.4rem;
    .phase-title {
      font-size: 1.2rem;
      //   margin-bottom: 1.2rem;
    }
    .partA {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .partA2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        // background: green;

        padding: 0 10%;
        gap: 1rem;
        .feature {
          width: 70%;
          display: flex;
          // justify-content: center;
          align-items: center;
          gap: 1rem;
          .feature-icon {
            display: flex;
            align-items: center;
            max-width: 2.2rem;
            max-height: 2.2rem;
            // height: 2rem;
            // background: red;
          }
        }
      }
      .partA3 {
        display: flex;
        justify-content: center;
        gap: 1rem;
        .include-insurance,
        .include-not-insurance {
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0, 0, 0, 0.376);
          cursor: pointer;
          &:hover {
            background-color: rgb(237, 125, 123);
            color: white;
            border: 1px solid rgb(237, 125, 123);
          }
        }
        // condtitional
        .is12Months {
          background-color: rgb(237, 125, 123);
          color: white;
          border: 1px solid rgb(237, 125, 123);
        }
      }
    }

    .partB {
      //   display: flex;
      font-size: 0.7rem;
      width: 100%;
      align-self: center;
      padding: 16px;
      background-color: rgb(244, 244, 244);
      color: rgb(108, 108, 108);
    }
  }

  .phase4 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: white;
    animation: enterPhase 0.5s ease-in-out forwards;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 1.4rem;
    .phase-title {
      font-size: 1.2rem;
      //   margin-bottom: 1.2rem;
    }
    .user-info-form {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .partA {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .client-input {
          display: flex;
          flex-direction: column;

          input {
            outline: none;
            border: 1px black solid;
            padding: 0.6rem;
            &:focus {
              outline: none;
              border: 1px blue solid;
            }
            &:invalid:focus {
              background: rgb(249, 234, 234);
            }
          }
        }
      }

      .partB {
        //   display: flex;
        font-size: 0.7rem;
        //   width: 90%;
        align-self: center;
        padding: 16px;
        background-color: rgb(244, 244, 244);
        color: rgb(108, 108, 108);
      }
    }
  }
}

@keyframes enterPhase {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
