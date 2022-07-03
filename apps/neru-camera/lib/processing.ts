export default function processing(
  pixiView: HTMLCanvasElement,
  type = 'image/png',
  quality = 1.0
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) {
      reject(new TypeError('Canvas context does not exist.'))
      return
    }

    canvas.width = pixiView.width
    canvas.height = pixiView.height

    try {
      context.drawImage(pixiView, 0, 0)
      canvas.toBlob(
        (blob) =>
          blob ? resolve(blob) : reject(new TypeError('Blob does not exists.')),
        type,
        quality
      )
    } catch (error) {
      reject(error)
    }
  })
}
