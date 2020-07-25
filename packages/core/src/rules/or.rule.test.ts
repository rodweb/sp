import { Comparison } from './generic/generic-string.rule'
import { artistRule } from './artist.rule'
import { or } from './or.rule'

test('Or: should match any of the rules', () => {
  const firstTrack = { artist: 'Michael Jackson' }
  const secondTrack = { artist: 'Madonna' }
  const firstRule = artistRule(Comparison.EqualTo, 'Michael Jackson')
  const secondRule = artistRule(Comparison.EqualTo, 'Madonna')
  const rule = or(firstRule, secondRule)
  expect(rule.match(firstTrack)).toBeTruthy()
  expect(rule.match(secondTrack)).toBeTruthy()
})

test('Or: should not match when none of the rules match', () => {
  const track = { artist: 'The Beatles' }
  const firstRule = artistRule(Comparison.EqualTo, 'Queen')
  const secondRule = artistRule(Comparison.EqualTo, 'AC/DC')
  const rule = or(firstRule, secondRule)
  expect(rule.match(track)).toBeFalsy()
})
