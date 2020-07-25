import { mock } from '../mock'
import { Comparison } from './generic/generic-string.rule'
import { artistRule } from './artist.rule'
import { or } from './or.rule'
import { Track } from '../track'

test('Or: should match any of the rules', () => {
  const firstTrack = mock<Track>({ artist: 'Michael Jackson' })
  const secondTrack = mock<Track>({ artist: 'Madonna' })
  const firstRule = artistRule(Comparison.EqualTo, 'Michael Jackson')
  const secondRule = artistRule(Comparison.EqualTo, 'Madonna')
  const rule = or(firstRule, secondRule)
  expect(rule.match(firstTrack)).toBeTruthy()
  expect(rule.match(secondTrack)).toBeTruthy()
})

test('Or: should not match when none of the rules match', () => {
  const track = mock<Track>({ artist: 'The Beatles' })
  const firstRule = artistRule(Comparison.EqualTo, 'Queen')
  const secondRule = artistRule(Comparison.EqualTo, 'AC/DC')
  const rule = or(firstRule, secondRule)
  expect(rule.match(track)).toBeFalsy()
})
