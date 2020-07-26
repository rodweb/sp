import { Rule } from '../rule'
import { Comparison, dateMatcher, Unit } from './matchers/date.matcher'

type Config = { comparison: Comparison; amount: number; unit: Unit }
type Now = () => Date

export const lastPlayedRule: Rule<Config, Now> = (c, now) =>
  dateMatcher(c.comparison, c.amount, c.unit, (track) => track.lastPlayed, now)
