import { mock } from '../mock'
import { albumRule } from './album.rule'
import { Comparison } from './generic/generic-string.rule'
import { Track } from '../track'

test('EqualTo: should match when equal', () => {
  const track = mock<Track>({ album: 'Thriller' })
  const rule = albumRule(Comparison.EqualTo, 'Thriller')
  expect(rule.match(track)).toBeTruthy()
})

test('EqualTo: should not match when different', () => {
  const track = mock<Track>({ album: 'Hotel California' })
  const rule = albumRule(Comparison.EqualTo, 'Back In Black')
  expect(rule.match(track)).toBeFalsy()
})

test('NotEqualTo: should match when different', () => {
  const track = mock<Track>({ album: 'Greatest Hits' })
  const rule = albumRule(Comparison.NotEqualTo, 'Dark Side of the Moon')
  expect(rule.match(track)).toBeTruthy()
})

test('NotEqualTo: should not match equal', () => {
  const track = mock<Track>({ album: '21' })
  const rule = albumRule(Comparison.NotEqualTo, '21')
  expect(rule.match(track)).toBeFalsy()
})

test('Contain: should match when contained', () => {
  const track = mock<Track>({ album: 'Metallica' })
  const rule = albumRule(Comparison.Contain, 'Metal')
  expect(rule.match(track)).toBeTruthy()
})

test('Contain: should not match when not contained', () => {
  const track = mock<Track>({ album: 'Backstreet Boys' })
  const rule = albumRule(Comparison.Contain, '...Baby One More Time')
  expect(rule.match(track)).toBeFalsy()
})

test('NotContain: should match when not contained ', () => {
  const track = mock<Track>({ album: 'Hybrid Theory' })
  const rule = albumRule(Comparison.NotContain, 'Minutes to Midnight')
  expect(rule.match(track)).toBeTruthy()
})

test('NotContain: should not match when contained', () => {
  const track = mock<Track>({ album: 'The End Is Where We Begin' })
  const rule = albumRule(Comparison.NotContain, 'The End')
  expect(rule.match(track)).toBeFalsy()
})
