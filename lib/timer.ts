export function delay(seconds = 1): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1_000)
  })
}
