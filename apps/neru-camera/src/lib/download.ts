export default (blob: Blob): void => {
  const anchor = document.createElement('a')

  anchor.href = URL.createObjectURL(blob)
  anchor.download = `NeruCamera-${Date.now()}.jpg`
  anchor.target = '_blank'
  anchor.click()
}
