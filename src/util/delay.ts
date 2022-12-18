/** Simple function to add a delay; useful to slow down messages for effect */
export async function delay(ms: number): Promise<void> {
  await new Promise((res) => setTimeout(res, ms))
}
