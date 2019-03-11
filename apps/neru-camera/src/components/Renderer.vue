<template>
  <div class="camera-renderer">
    <canvas class="camera-renderer__preview" ref="preview" />

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
import { Application, Sprite, interaction, utils } from 'pixi.js'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { ChromaKeyFilter } from '@/filters/ChromaKeyFilter'

@Component
export default class extends Vue {
  private dragging = false
  private overlay?: Sprite

  @Prop({ required: true, type: MediaStream }) cameraStream!: MediaStream
  @Prop({ required: true, type: Blob }) overlayBlob!: Blob

  private get overlayURI(): string {
    return URL.createObjectURL(this.overlayBlob)
  }

  private get preview(): HTMLCanvasElement {
    return this.$refs.preview as HTMLCanvasElement
  }

  private setup(): void {
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

    overlay
      .on('pointerdown', this.onDragStart)
      .on('pointerup', this.onDragEnd)
      .on('pointerupoutside', this.onDragEnd)
      .on('pointermove', this.onDragMove)

    app.stage.addChild(background)
    app.stage.addChild(overlay)

    this.overlay = overlay
  }

  private onDragEnd(): void {
    this.dragging = false
  }

  private onDragMove(event: interaction.InteractionEvent): void {
    if (!this.dragging || !this.overlay) return

    const { x, y } = event.data.getLocalPosition(this.overlay.parent)

    this.overlay.x = x
    this.overlay.y = y
  }

  private onDragStart(): void {
    this.dragging = true
  }

  public toBlob(type = 'image/png'): Promise<Blob | null> {
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
}
</script>

<style scoped>
.camera-renderer {
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
</style>
