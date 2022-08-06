import { createStore } from "vuex";

import phonesData from "./dulldata.js";

let store = createStore({
  state() {
    return {
      phonesData,

      selectedMake: 0,
      selectedModel: 0,
      selectedStorage: 0,
      selectedColor: 0,
      insurance: false,
      leaseTerm: false,

      currentPhase: 1,
    };
  },
  getters: {
    // this getter is for phone-options
    phoneOptions(state) {
      let makes = state.phonesData.map((item) => {
        return { make: item.make };
      });

      let models = state.phonesData[state.selectedMake].models.map(
        (item) => item.model
      );
      let colors =
        state.phonesData[state.selectedMake].models[state.selectedModel].colors;
      // console.log(colors);
      let storages =
        state.phonesData[state.selectedMake].models[state.selectedModel]
          .storages;
      // console.log(storages);
      return { makes, models, colors, storages };
      // return "makes";
    },

    // this getter is for phone-view
    selectedPhoneInfo(state) {
      let make = state.phonesData[state.selectedMake].make;
      let model =
        state.phonesData[state.selectedMake].models[state.selectedModel].model;
      // console.log(model);
      let color = {
        name: state.phonesData[state.selectedMake].models[state.selectedModel]
          .colors[state.selectedColor].color,
        colorCode:
          state.phonesData[state.selectedMake].models[state.selectedModel]
            .colors[state.selectedColor].colorCode,
      };

      let phoneImg =
        state.phonesData[state.selectedMake].models[state.selectedModel].colors[
          state.selectedColor
        ].url;
      let storage =
        state.phonesData[state.selectedMake].models[state.selectedModel]
          .storages[state.selectedStorage];
      let insurance = state.insurance;
      // if true = 24 else 12
      let leaseTerm = state.leaseTerm;
      return {
        make,
        model,
        color,
        phoneImg,
        storage,
        insurance,
        leaseTerm,
      };
    },
  },
  mutations: {
    defaultSetup() {},
    selectMake(state, value) {
      state.selectedMake = value;
    },
    selectModel(state, value) {
      state.selectedModel = value;
    },
    selectColor(state, value) {
      state.selectedColor = value;
    },
    selectStorage(state, value) {
      state.selectedStorage = value;
    },
    includeInsurace(state, value) {
      if (value) {
        state.insurance = true;
        return;
      }
      state.insurance = false;
      return;
    },
    setIt12Month(state, value) {
      if (value) {
        state.leaseTerm = true;
        return;
      }
      state.leaseTerm = false;

      return;
    },

    updatePhase(state, value) {
      state.currentPhase += value;
      if (state.currentPhase < 1) {
        state.currentPhase = 1;
      }
      if (state.currentPhase > 5) {
        state.currentPhase = 5;
      }
    },
  },
});

export default store;
