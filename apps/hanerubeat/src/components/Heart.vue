<template>
  <div class="container">
    <svg @click="play" class="heart" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>

    <audio crossorigin="anonymous" loop preload="none" ref="audio">
      <source src="@/assets/audio/heartbeat.ogg" type="audio/ogg" />
      <source src="@/assets/audio/heartbeat.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  play() {
    const audio = this.$refs.audio as HTMLAudioElement

    if (audio.paused) {
      return audio.play()
    } else {
      audio.pause()
    }
  }
}
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

@keyframes beat {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.8);
  }
}

.heart {
  animation: beat 0.8s ease-in-out infinite;
  color: #fff59d;
  display: block;
  fill: currentColor;
  height: 100%;
  max-height: 100vh;
  width: 100%;
}
</style>
