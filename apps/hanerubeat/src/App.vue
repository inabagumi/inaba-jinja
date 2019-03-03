<template>
  <div id="app">
    <Heart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Heart from '@/components/Heart.vue'

@Component({
  components: { Heart }
})
export default class App extends Vue {}
</script>

<style>
body {
  background-color: #222;
  bottom: 0;
  left: 0;
  margin: 0;
  position: fixed;
  right: 0;
  top: 0;
}

#app {
  height: 100%;
}
</style>
