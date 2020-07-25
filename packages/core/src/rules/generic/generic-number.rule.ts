import { Maybe } from '../../maybe'
import { Track } from '../../track'
import { Rule } from '../../rule'

export const genericNumberRule = (
  comparison: Comparison,
  reference: number,
  getValue: (track: Track) => Maybe<number>,
): Rule => ({
  match: (track) => comparators[comparison](reference, getValue(track)),
})

export enum Comparison {
  LowerThan = 'lower_than',
  GreaterThan = 'greater_than',
  EqualTo = 'equal_to',
}

interface Comparator {
  (reference: number, value?: Maybe<number>): boolean
}

const comparators: Record<Comparison, Comparator> = {
  [Comparison.LowerThan]: (reference, value) => (value ?? 0) < reference,
  [Comparison.GreaterThan]: (reference, value) => (value ?? 0) > reference,
  [Comparison.EqualTo]: (reference, value) => value == reference,
}
