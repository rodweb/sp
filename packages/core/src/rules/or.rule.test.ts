import { mock } from '../mock'
import { Comparison } from './generic/string.matcher'
import { artistRule } from './artist.rule'
import { or } from './or.rule'
import { Track } from '../track'

const config = (comparison: Comparison, text: string) => ({ comparison, text })

test('or: should match any of the rules', () => {
  const firstTrack = mock<Track>({ artist: 'Michael Jackson' })
  const secondTrack = mock<Track>({ artist: 'Madonna' })
  const firstRule = artistRule(config(Comparison.EqualTo, 'Michael Jackson'))
  const secondRule = artistRule(config(Comparison.EqualTo, 'Madonna'))
  const rule = or(firstRule, secondRule)
  expect(rule.match(firstTrack)).toBeTruthy()
  expect(rule.match(secondTrack)).toBeTruthy()
})

test('or: should not match when none of the rules match', () => {
  const track = mock<Track>({ artist: 'The Beatles' })
  const firstRule = artistRule(config(Comparison.EqualTo, 'Queen'))
  const secondRule = artistRule(config(Comparison.EqualTo, 'AC/DC'))
  const rule = or(firstRule, secondRule)
  expect(rule.match(track)).toBeFalsy()
})
