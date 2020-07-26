import { sub } from 'date-fns'
import { Maybe } from '../../maybe'
import { Matcher } from '../../rule'
import { Track } from '../../track'

export const dateMatcher = (
  comparison: Comparison,
  reference: number,
  unit: Unit,
  getValue: (track: Track) => Maybe<Date>,
  getCurrentDate: () => Date = () => new Date(),
): Matcher => ({
  match: (track) => comparators[comparison](getCurrentDate(), unit, reference, getValue(track)),
})

export enum Comparison {
  Last = 'last',
}

export enum Unit {
  Days = 'days',
  Months = 'months',
  Weeks = 'weeks',
  Years = 'years',
}

interface Comparator {
  (currentDate: Date, unit: Unit, amount: number, value?: Maybe<Date>): boolean
}

const comparators: Record<Comparison, Comparator> = {
  [Comparison.Last]: (currentDate, reference, amount, value) => {
    if (!value) return false
    const minimum = sub(currentDate, { [reference]: amount })
    return value >= minimum
  },
}
