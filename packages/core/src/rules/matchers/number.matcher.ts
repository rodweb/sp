import { Maybe } from '../../maybe'
import { Matcher } from '../../rule'
import { Track } from '../../track'

export const numberMatcher = (
  comparison: Comparison,
  reference: number,
  getValue: (track: Track) => Maybe<number>,
): Matcher => ({
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
