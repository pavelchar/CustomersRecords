<template>
  <div class="app">
    <MainWrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainWrapper from "./views/MainWrapper.vue";

@Component({
  components: {
    MainWrapper,
  },
})
export default class App extends Vue {}
</script>
