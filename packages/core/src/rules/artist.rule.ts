import { Rule } from '../rule'
import { Comparison, genericStringRule } from './generic/generic-string.rule'

export const artistRule = (comparison: Comparison, reference: string): Rule =>
  genericStringRule(comparison, reference, (track) => track.artist)
