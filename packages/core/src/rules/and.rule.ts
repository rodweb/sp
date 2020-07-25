import { Matcher, Rule } from '../rule'

export const and: Rule = (...matchers: Matcher[]) => ({
  match: (track) => matchers.every((matcher) => matcher.match(track)),
})
