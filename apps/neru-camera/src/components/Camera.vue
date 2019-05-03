<template>
  <div class="camera">
    <div v-if="hasSupportedMediaDevices" class="camera__content">
      <Renderer
        v-if="cameraStream && overlayBlob"
        :camera-stream="cameraStream"
        :overlay-blob="overlayBlob"
        ref="renderer"
      />
    </div>
    <div v-else class="camera__error">
      <h1 class="camera__error__title">カメラの取得に失敗しました</h1>

      <div class="camera__error__body">
        <p class="camera__error__paragraph">
          あなたの使っているアプリはカメラの取得に対応していません。PC
          の場合、Google Chrome と Firefox
          最新版以外での動作は保証できません。Android の場合は Play Store
          からダウンロードできる Chrome を使ってください。
        </p>
        <p class="camera__error__paragraph">
          また iOS では Safari 以外のアプリからカメラの取得ができません。iPhone
          や iPad などの iOS 端末を使っている場合は Safari
          で開き直してください。
        </p>
      </div>
    </div>

    <div class="camera__action-buttons">
      <button
        @click="takePhoto"
        @touchstart="takePhoto"
        class="camera__action-buttons__button"
        :class="{ 'camera__action-buttons__button--active': isShooting }"
        tabindex="-1"
        title="Take a photo!"
      >
        Take a photo!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

const Renderer = () => import('@/components/Renderer.vue')

const mediaStreamConstraints: MediaStreamConstraints = {
  audio: false,
  video: {
    facingMode: 'environment'
  }
}

type Data = {
  cameraStream?: MediaStream
  isShooting: boolean
  overlayBlob?: Blob
}

type Methods = {
  download: (uri: string) => Promise<Blob>
  takePhoto: () => void
}

type Computed = {
  hasSupportedMediaDevices: boolean
}

type Props = {
  src: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: { Renderer },

  computed: {
    hasSupportedMediaDevices: () => !!navigator.mediaDevices
  },

  data() {
    return {
      cameraStream: undefined,
      isShooting: false,
      overlayBlob: undefined
    }
  },

  methods: {
    async download(uri: string) {
      const response = await fetch(uri)

      return response.blob()
    },

    takePhoto() {
      const renderer = this.$refs.renderer as any

      if (this.isShooting || !renderer) return

      this.isShooting = true

      const anchor = document.createElement('a')

      let otherTab: Window | null
      if (typeof anchor.download !== 'string') {
        otherTab = window.open('about:blank', '_blank')
      }

      renderer
        .toBlob('image')
        .then((blob: Blob | null) => {
          if (!blob) {
            if (otherTab) otherTab.close()

            return
          }

          anchor.href = URL.createObjectURL(blob)

          if (!otherTab) {
            anchor.download = `NeruCamera-${Date.now()}.png`
            anchor.target = '_blank'
            anchor.click()
          } else {
            otherTab.location.href = anchor.href
          }
        })
        .finally(() => {
          this.isShooting = false
        })
    }
  },

  mounted() {
    if (!this.hasSupportedMediaDevices) return

    Promise.all([
      navigator.mediaDevices.getUserMedia(mediaStreamConstraints),
      this.download(this.src)
    ]).then(([cameraStream, overlayBlob]) => {
      this.cameraStream = cameraStream
      this.overlayBlob = overlayBlob
    })
  },

  name: 'Camera',

  props: {
    src: {
      required: true,
      type: String
    }
  }
})
</script>

<style scoped>
.camera {
  align-items: stretch;
  background-color: #000;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
}

.camera__content {
  align-items: center;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.camera__action-buttons {
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 5px 12px 24px;
  width: 100%;
}

.camera__action-buttons__button {
  align-items: center;
  background-color: transparent;
  border: 3px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  color: #fff;
  display: block;
  height: 56px;
  overflow: hidden;
  padding: 0;
  width: 56px;
}

.camera__action-buttons__button:focus {
  outline: 0;
}

.camera__action-buttons__button::before {
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  box-sizing: border-box;
  content: '';
  display: block;
  height: 100%;
  transition: border-width 0.2s linear;
  width: 100%;
}

.camera__action-buttons__button--active::before {
  border-width: 4px;
}

.camera__error {
  padding: 0.5rem;
}

.camera__error__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.camera__error__paragraph {
  line-height: 1.75;
  margin: 0;
}

.camera__error__paragraph:not(:first-child) {
  margin-top: 1rem;
}
</style>
