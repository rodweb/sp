import { artistRule } from './artist.rule'
import { Comparison } from './generic/generic-string.rule'

test('EqualTo: should match when equal', () => {
  const track = { artist: 'Linkin Park' }
  const rule = artistRule(Comparison.EqualTo, 'Linkin Park')
  expect(rule.match(track)).toBeTruthy()
})

test('EqualTo: should not match when different', () => {
  const track = { artist: 'Britney Spears' }
  const rule = artistRule(Comparison.EqualTo, 'Avril Lavigne')
  expect(rule.match(track)).toBeFalsy()
})

test('NotEqualTo: should match when different', () => {
  const track = { artist: 'Abba' }
  const rule = artistRule(Comparison.NotEqualTo, 'Eminem')
  expect(rule.match(track)).toBeTruthy()
})

test('NotEqualTo: should not match equal', () => {
  const track = { artist: 'Lady Gaga' }
  const rule = artistRule(Comparison.NotEqualTo, 'Lady Gaga')
  expect(rule.match(track)).toBeFalsy()
})

test('Contain: should match when contained', () => {
  const track = { artist: 'Metallica' }
  const rule = artistRule(Comparison.Contain, 'Metal')
  expect(rule.match(track)).toBeTruthy()
})

test('Contain: should not match when not contained', () => {
  const track = { artist: 'Three Days Grace' }
  const rule = artistRule(Comparison.Contain, '3 Doors Down')
  expect(rule.match(track)).toBeFalsy()
})

test('NotContain: should match when not contained ', () => {
  const track = { artist: 'Rise Against' }
  const rule = artistRule(Comparison.NotContain, 'Maroon 5')
  expect(rule.match(track)).toBeTruthy()
})

test('NotContain: should not match when contained', () => {
  const track = { artist: 'Papa Roach' }
  const rule = artistRule(Comparison.NotContain, 'Roach')
  expect(rule.match(track)).toBeFalsy()
})
