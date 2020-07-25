import { mock } from '../mock'
import { Track } from '../track'
import { playCountRule } from './play-count.rule'
import { Comparison } from './matchers/number.matcher'

test('LowerThan: should match lower values', () => {
  const track = mock<Track>({ playCount: 0 })
  const rule = playCountRule({ comparison: Comparison.LowerThan, amount: 3 })
  expect(rule.match(track)).toBeTruthy()
})

test('LowerThan: should not match higher values', () => {
  const track = mock<Track>({ playCount: 3 })
  const rule = playCountRule({ comparison: Comparison.LowerThan, amount: 0 })
  expect(rule.match(track)).toBeFalsy()
})

test('GreaterThan: should match higher values', () => {
  const track = mock<Track>({ playCount: 3 })
  const rule = playCountRule({ comparison: Comparison.GreaterThan, amount: 0 })
  expect(rule.match(track)).toBeTruthy()
})

test('GreaterThan: should not match lower values', () => {
  const track = mock<Track>({ playCount: 0 })
  const rule = playCountRule({ comparison: Comparison.GreaterThan, amount: 3 })
  expect(rule.match(track)).toBeFalsy()
})

test('EqualTo: should match when equal', () => {
  const track = mock<Track>({ playCount: 0 })
  const rule = playCountRule({ comparison: Comparison.EqualTo, amount: 0 })
  expect(rule.match(track)).toBeTruthy()
})

test('EqualTo: should not match when different', () => {
  const track = mock<Track>({ playCount: 0 })
  const rule = playCountRule({ comparison: Comparison.EqualTo, amount: 1 })
  expect(rule.match(track)).toBeFalsy()
})
