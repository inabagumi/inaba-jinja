<template>
  <div class="camera-renderer">
    <canvas class="camera-renderer__preview" ref="preview" />

    <pinch-zoom class="dummy" @change="change">
      <div class="dummy__item"></div>
    </pinch-zoom>

    <div class="camera-renderer__preloaded">
      <video
        @loadeddata="setup"
        crossorigin="anonymous"
        muted
        playsinline
        ref="camera"
        :src-object.prop="cameraStream"
      />
      <video
        crossorigin="anonymous"
        preload="none"
        loop
        muted
        playsinline
        ref="overlay"
        :src="asset.src"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PinchZoom from 'pinch-zoom-element'
import { Application, Sprite } from 'pixi.js'
import Vue from 'vue'
import { ChromaKeyFilter } from '@/filters/ChromaKeyFilter'
import { Asset } from '@/store/asset/state'

type Data = {
  overlay?: Sprite
}

type Methods = {
  change: (event: Event) => void
  setup: () => void
  toBlob: () => Promise<Blob | null>
}

type Computed = {
  preview: HTMLCanvasElement
}

type Props = {
  asset: Asset
  cameraStream: MediaStream
}

export default Vue.extend<Data, Methods, Computed, Props>({
  computed: {
    preview() {
      return this.$refs.preview as HTMLCanvasElement
    }
  },

  data() {
    return {
      overlay: undefined
    }
  },

  methods: {
    change(event) {
      if (!this.overlay) return

      const { scale, x, y } = event.target as PinchZoom
      const { clientHeight, clientWidth, height, width } = this.preview

      this.overlay.position.set(
        x * (width / clientWidth) + width / 2,
        y * (height / clientHeight) + height / 2
      )
      this.overlay.scale.set(scale)
    },

    setup() {
      const background = Sprite.from(this.$refs.camera as HTMLVideoElement)

      const app = new Application({
        height: background.height,
        preserveDrawingBuffer: true,
        view: this.preview,
        width: background.width
      })

      app.stage.addChild(background)

      const overlayElement = this.$refs.overlay as HTMLVideoElement
      const onLoadedData = () => {
        overlayElement.removeEventListener('loadeddata', onLoadedData)

        const overlay = Sprite.from(overlayElement)

        overlay.filters = [new ChromaKeyFilter(this.asset.keyColor)]

        overlay.anchor.set(0.5)
        overlay.position.set(app.screen.width * 0.5, app.screen.height * 0.5)

        app.stage.addChild(overlay)

        this.overlay = overlay
      }

      overlayElement.addEventListener('loadeddata', onLoadedData)

      overlayElement.load()
    },

    toBlob(type = 'image/png') {
      return new Promise<Blob | null>((resolve, reject) => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        if (!context) return resolve(null)

        canvas.height = this.preview.height
        canvas.width = this.preview.width

        try {
          context.drawImage(this.preview, 0, 0)

          canvas.toBlob(resolve, type)
        } catch (error) {
          reject(error)
        }
      })
    }
  },

  props: {
    asset: {
      required: true,
      type: Object
    },
    cameraStream: {
      required: true,
      type: MediaStream
    }
  }
})
</script>

<style scoped>
.camera-renderer {
  position: relative;
  width: 100%;
}

.camera-renderer__preview {
  display: block;
  height: auto;
  width: 100%;
}

.camera-renderer__preloaded {
  display: none;
}

.dummy {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.dummy__item {
  background-color: transparent;
  height: 1px;
  width: 1px;
}
</style>
