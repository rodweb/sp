import { mock } from '../mock'
import { Track } from '../track'
import { albumRule } from './album.rule'
import { and } from './and.rule'
import { artistRule } from './artist.rule'
import { Comparison } from './matchers/string.matcher'

const config = (comparison: Comparison, text: string) => ({ comparison, text })

test('and: should match all rules', () => {
  const track = mock<Track>({ artist: 'Michael Jackson', album: 'Thriller' })
  const firstRule = artistRule(config(Comparison.EqualTo, 'Michael Jackson'))
  const secondRule = albumRule(config(Comparison.EqualTo, 'Thriller'))
  const rule = and(firstRule, secondRule)
  expect(rule.match(track)).toBeTruthy()
})

test('and: should not match when any of the rules do not match', () => {
  const track = mock<Track>({ artist: 'The Beatles', album: 'Let It Be' })
  const firstRule = artistRule(config(Comparison.EqualTo, 'The Beatles'))
  const secondRule = albumRule(config(Comparison.EqualTo, 'Abbey Road'))
  const rule = and(firstRule, secondRule)
  expect(rule.match(track)).toBeFalsy()
})
