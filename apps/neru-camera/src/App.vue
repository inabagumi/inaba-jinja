<template>
  <div id="app">
    <Camera
      src="https://video.twimg.com/ext_tw_video/1054770262854389760/pu/vid/592x1280/Iqv1cl0KCIdFJL5p.mp4"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400"
      rel="stylesheet"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Camera from '@/components/Camera.vue'

export default Vue.extend({
  components: { Camera }
})
</script>

<style scoped>
#app {
  background-color: #000;
  bottom: 0;
  font-family: Roboto, sans-serif;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
