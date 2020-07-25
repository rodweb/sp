import { mock } from '../mock'
import { Comparison } from './generic/generic-string.rule'
import { artistRule } from './artist.rule'
import { albumRule } from './album.rule'
import { and } from './and.rule'
import { Track } from '../track'

test('and: should match all rules', () => {
  const track = mock<Track>({ artist: 'Michael Jackson', album: 'Thriller' })
  const firstRule = artistRule(Comparison.EqualTo, 'Michael Jackson')
  const secondRule = albumRule(Comparison.EqualTo, 'Thriller')
  const rule = and(firstRule, secondRule)
  expect(rule.match(track)).toBeTruthy()
})

test('and: should not match when any of the rules do not match', () => {
  const track = mock<Track>({ artist: 'The Beatles', album: 'Let It Be' })
  const firstRule = artistRule(Comparison.EqualTo, 'The Beatles')
  const secondRule = albumRule(Comparison.EqualTo, 'Abbey Road')
  const rule = and(firstRule, secondRule)
  expect(rule.match(track)).toBeFalsy()
})
