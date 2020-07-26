import { Rule } from '../rule'
import { Comparison, dateMatcher, Unit } from './matchers/date.matcher'

type Config = { comparison: Comparison; amount: number; unit: Unit }
type Now = () => Date

export const addedAtRule: Rule<Config, Now> = (config, now) =>
  dateMatcher(config.comparison, config.amount, config.unit, (track) => track.addedAt, now)
