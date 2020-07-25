import { Maybe } from '../../maybe'
import { Track } from '../../track'
import { Rule } from '../../rule'

export const genericStringRule = (
  comparison: Comparison,
  reference: string,
  getValue: (track: Track) => Maybe<string>,
): Rule => ({
  match: (track) => comparators[comparison](reference, getValue(track)),
})

export enum Comparison {
  EqualTo = 'equal_to',
  NotEqualTo = 'not_equal_to',
  Contain = 'contain',
  NotContain = 'not_contain',
}

interface Comparator {
  (reference: string, value?: Maybe<string>): boolean
}

const comparators: Record<Comparison, Comparator> = {
  [Comparison.EqualTo]: (reference, value) => value === reference,
  [Comparison.NotEqualTo]: (reference, value) => value !== reference,
  [Comparison.Contain]: (reference, value) => !!value?.includes(reference),
  [Comparison.NotContain]: (reference, value) => !value?.includes(reference),
}
