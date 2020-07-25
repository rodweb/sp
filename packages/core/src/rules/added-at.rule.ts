import { Comparison, genericDateRule, Reference } from './generic/generic-date.rule'

export const addedAtRule = (
  comparison: Comparison,
  amount: number,
  reference: Reference,
  getDate?: () => Date,
) => genericDateRule(comparison, amount, reference, (track) => track.addedAt, getDate)
