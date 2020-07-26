import { Rule } from '../rule'
import { Comparison, numberMatcher } from './matchers/number.matcher'

type Config = { comparison: Comparison; amount: number }

export const playCountRule: Rule<Config> = (config) =>
  numberMatcher(config.comparison, config.amount, (track) => track.playCount)
