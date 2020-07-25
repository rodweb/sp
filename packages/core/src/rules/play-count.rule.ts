import { Comparison, numberMatcher } from './matchers/number.matcher'
import { Rule } from '../rule'

type Config = { comparison: Comparison; amount: number }

export const playCountRule: Rule<Config> = (config) =>
  numberMatcher(config.comparison, config.amount, (track) => track.playCount)
