import { dateMatcher, Comparison, Unit } from './generic/date.matcher'
import { Rule } from '../rule'

type Config = { comparison: Comparison; amount: number; unit: Unit }
type Now = () => Date

export const lastPlayedRule: Rule<Config, Now> = (c, now) =>
  dateMatcher(c.comparison, c.amount, c.unit, (track) => track.lastPlayed, now)
