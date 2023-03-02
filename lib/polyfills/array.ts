export async function fromAsync<T>(
  iteratable: AsyncGenerator<T>
): Promise<T[]> {
  const result: T[] = []

  for await (const value of iteratable) {
    result.push(value)
  }

  return result
}
