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
        loop
        muted
        playsinline
        ref="overlay"
        :src="overlayURI"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PinchZoom from 'pinch-zoom-element'
import { Application, Sprite, interaction, utils } from 'pixi.js'
import Vue from 'vue'
import { ChromaKeyFilter } from '@/filters/ChromaKeyFilter'

type Data = {
  overlay?: Sprite
}

type Methods = {
  change: (event: Event) => void
  setup: () => void
  toBlob: () => Promise<Blob | null>
}

type Computed = {
  overlayURI: string | null
  preview: HTMLCanvasElement
}

type Props = {
  cameraStream: MediaStream
  overlayBlob: Blob
}

export default Vue.extend<Data, Methods, Computed, Props>({
  computed: {
    overlayURI() {
      return URL.createObjectURL(this.overlayBlob)
    },
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
      const { height, width } = this.preview

      this.overlay.position.x = width * 0.5 + x * 2
      this.overlay.position.y = height * 0.5 + y * 2
      this.overlay.scale.x = this.overlay.scale.y = scale * 0.5
    },
    setup() {
      utils.skipHello()

      const background = Sprite.from(this.$refs.camera as HTMLVideoElement)
      const overlay = Sprite.from(this.$refs.overlay as HTMLVideoElement)

      const app = new Application({
        height: background.height,
        preserveDrawingBuffer: true,
        view: this.preview,
        width: background.width
      })

      overlay.filters = [new ChromaKeyFilter()]
      overlay.interactive = true
      overlay.buttonMode = true
      overlay.anchor.set(0.5)
      overlay.scale.set(0.5)
      overlay.x = app.screen.width / 2
      overlay.y = app.screen.height / 2

      app.stage.addChild(background)
      app.stage.addChild(overlay)

      this.overlay = overlay
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
    cameraStream: {
      required: true,
      type: MediaStream
    },
    overlayBlob: {
      required: true,
      type: Blob
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
