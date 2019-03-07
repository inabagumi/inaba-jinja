<template>
  <div class="heartbeat">
    <Heart />

    <div class="heartbeat__controls">
      <button @click="toggle" class="button" :disabled="isLoading">
        <svg class="button__icon" height="24" width="24">
          <use v-if="muted" xlink:href="#volume_off" />
          <use v-else xlink:href="#volume_up" />
        </svg>
      </button>
    </div>

    <audio crossorigin="anonymous" loop preload="none" ref="audio">
      <source src="@/assets/audio/heartbeat.ogg" type="audio/ogg" />
      <source src="@/assets/audio/heartbeat.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Heart from '@/components/Heart.vue'

@Component({
  components: { Heart }
})
export default class extends Vue {
  isLoading = true
  muted = false

  get audio(): HTMLAudioElement {
    return this.$refs.audio as HTMLAudioElement
  }

  @Watch('muted')
  onMutedChanged(muted: boolean) {
    if (!this.audio.paused) {
      this.audio.muted = muted
    } else {
      this.isLoading = true
      this.audio
        .play()
        .then(() => {
          this.muted = muted
        })
        .catch(() => {
          this.muted = true
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }

  mounted() {
    const playPromise = this.audio.play()

    if (typeof playPromise !== 'undefined') {
      playPromise
        .catch(() => {
          this.muted = true
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }

  toggle() {
    if (this.isLoading) return

    this.muted = !this.muted
  }
}
</script>

<style scoped>
.heartbeat {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
}

.heartbeat__controls {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
}

.button {
  background-color: transparent;
  border: 0;
  color: #eee;
  display: block;
  font-size: 64px;
  margin: 0;
  padding: 0;
}

.button:focus {
  outline: 0;
}

.button[disabled] {
  color: #aaa;
}

.button__icon {
  height: auto;
  width: 1em;
}
</style>
