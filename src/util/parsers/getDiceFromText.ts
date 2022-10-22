import type { Dice } from '~/types'

/** Converts dice formatted text (i.e. "1d6" or "12d20") into a Dice object */
export function getDiceFromText(rawText?: string): Dice | null {
  // Extract the dice text from the given string
  const diceText = /\d+d\d+/.exec(rawText || '')?.[0]
  if (!diceText) return null

  const [count, sides] = diceText.split('d')

  return {
    count: parseInt(count),
    sides: parseInt(sides)
  }
}
