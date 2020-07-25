import { mock } from '../mock'
import { artistRule } from './artist.rule'
import { Comparison } from './matchers/string.matcher'
import { Track } from '../track'

const config = (comparison: Comparison, text: string) => ({ comparison, text })

test('EqualTo: should match when equal', () => {
  const track = mock<Track>({ artist: 'Linkin Park' })
  const rule = artistRule(config(Comparison.EqualTo, 'Linkin Park'))
  expect(rule.match(track)).toBeTruthy()
})

test('EqualTo: should not match when different', () => {
  const track = mock<Track>({ artist: 'Britney Spears' })
  const rule = artistRule(config(Comparison.EqualTo, 'Avril Lavigne'))
  expect(rule.match(track)).toBeFalsy()
})

test('NotEqualTo: should match when different', () => {
  const track = mock<Track>({ artist: 'Abba' })
  const rule = artistRule(config(Comparison.NotEqualTo, 'Eminem'))
  expect(rule.match(track)).toBeTruthy()
})

test('NotEqualTo: should not match equal', () => {
  const track = mock<Track>({ artist: 'Lady Gaga' })
  const rule = artistRule(config(Comparison.NotEqualTo, 'Lady Gaga'))
  expect(rule.match(track)).toBeFalsy()
})

test('Contain: should match when contained', () => {
  const track = mock<Track>({ artist: 'Metallica' })
  const rule = artistRule(config(Comparison.Contain, 'Metal'))
  expect(rule.match(track)).toBeTruthy()
})

test('Contain: should not match when not contained', () => {
  const track = mock<Track>({ artist: 'Three Days Grace' })
  const rule = artistRule(config(Comparison.Contain, '3 Doors Down'))
  expect(rule.match(track)).toBeFalsy()
})

test('NotContain: should match when not contained ', () => {
  const track = mock<Track>({ artist: 'Rise Against' })
  const rule = artistRule(config(Comparison.NotContain, 'Maroon 5'))
  expect(rule.match(track)).toBeTruthy()
})

test('NotContain: should not match when contained', () => {
  const track = mock<Track>({ artist: 'Papa Roach' })
  const rule = artistRule(config(Comparison.NotContain, 'Roach'))
  expect(rule.match(track)).toBeFalsy()
})
