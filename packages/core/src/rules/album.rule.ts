import { Rule } from '../rule'
import { Comparison, genericStringRule } from './generic/generic-string.rule'

export const albumRule = (comparison: Comparison, reference: string): Rule =>
  genericStringRule(comparison, reference, (track) => track.album)
