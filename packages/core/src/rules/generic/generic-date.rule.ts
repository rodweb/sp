import { sub } from 'date-fns'
import { Maybe } from '../../maybe'
import { Track } from '../../track'
import { Rule } from '../../rule'

export const genericDateRule = (
  comparison: Comparison,
  amount: number,
  reference: Reference,
  getValue: (track: Track) => Maybe<Date>,
  getCurrentDate: () => Date = () => new Date(),
): Rule => ({
  match: (track) => comparators[comparison](getCurrentDate(), reference, amount, getValue(track)),
})

export enum Comparison {
  Last = 'last',
}

export enum Reference {
  Days = 'days',
  Months = 'months',
  Weeks = 'weeks',
  Years = 'years',
}

interface Comparator {
  (currentDate: Date, reference: Reference, amount: number, value?: Maybe<Date>): boolean
}

const comparators: Record<Comparison, Comparator> = {
  [Comparison.Last]: (currentDate, reference, amount, value) => {
    if (!value) return false
    const minimum = sub(currentDate, { [reference]: amount })
    return value >= minimum
  },
}
