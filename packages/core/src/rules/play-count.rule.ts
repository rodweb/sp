import { Comparison, genericNumberRule } from './generic/generic-number.rule'
import { Rule } from '../rule'

export const playCountRule = (comparison: Comparison, reference: number): Rule => genericNumberRule(comparison, reference, track => track.playCount)
