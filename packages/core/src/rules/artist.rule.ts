import { Rule } from '../rule'
import { Comparison, stringMatcher } from './generic/string.matcher'

type Config = { comparison: Comparison; text: string }
export const artistRule: Rule<Config> = (config) =>
  stringMatcher(config.comparison, config.text, (track) => track.artist)
