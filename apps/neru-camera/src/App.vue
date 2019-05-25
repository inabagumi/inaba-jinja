<template>
  <div id="app">
    <RouterView />

    <link
      href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400"
      rel="stylesheet"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    this.$store.dispatch('asset/fetch')
  },

  name: 'App'
})
</script>

<style scoped>
#app {
  background-color: #1b1b1b;
  bottom: 0;
  font-family: Noto Sans JP, Roboto, sans-serif;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
