import { Matcher, Rule } from '../rule'

export const or: Rule = (...matchers: Matcher[]) => ({
  match: (track) => matchers.some((matcher) => matcher.match(track)),
})
