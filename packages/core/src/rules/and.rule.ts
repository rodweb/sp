import { Rule } from '../rule'

export const and = (...rules: Rule[]): Rule => ({
  match: (track) => rules.every((rule) => rule.match(track)),
})
