import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#333366",
        secondary: "#2f6fa9",
        accent: "#e71921",
        error: "#ec5564",
        warning: "#ff9800",
        info: "#607d8b",
        success: "#5cc092",
      },
    },
  },
});
