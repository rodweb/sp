import { Rule } from '../rule'
import { Comparison, stringMatcher } from './matchers/string.matcher'

type Config = { comparison: Comparison; text: string }
export const trackRule: Rule<Config> = (config) =>
  stringMatcher(config.comparison, config.text, (track) => track.name)
