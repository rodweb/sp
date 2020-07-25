import { Rule } from '../rule'

export const or = (...rules: Rule[]): Rule => ({
  match: (track) => rules.some((rule) => rule.match(track)),
})
