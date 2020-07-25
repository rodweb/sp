import { genericDateRule, Comparison, Reference } from './generic/generic-date.rule'

export const lastPlayedRule = (
  comparison: Comparison,
  amount: number,
  reference: Reference,
  getCurrentDate?: () => Date,
) => genericDateRule(comparison, amount, reference, (track) => track.lastPlayed, getCurrentDate)
