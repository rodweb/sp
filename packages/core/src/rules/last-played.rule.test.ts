import { mock } from '../mock'
import { Track } from '../track'
import { lastPlayedRule } from './last-played.rule'
import { Comparison, Unit } from './matchers/date.matcher'

const d = {
  januaryFirst: new Date(2020, 0, 1),
  januaryThird: new Date(2020, 0, 3),
  januaryFourteenth: new Date(2020, 0, 14),
  februaryFirst: new Date(2020, 1, 1),
  aprilFirst: new Date(2020, 3, 1),
}

const config = (comparison: Comparison, amount: number, unit: Unit) => ({
  comparison,
  amount,
  unit,
})

test('Last: should match if played in last x days', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const now = () => d.januaryThird
  const rule = lastPlayedRule(config(Comparison.Last, 2, Unit.Days), now)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should match if played in last x weeks', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const now = () => d.januaryFourteenth
  const rule = lastPlayedRule(config(Comparison.Last, 2, Unit.Weeks), now)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should match if played in last x months', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const now = () => d.februaryFirst
  const rule = lastPlayedRule(config(Comparison.Last, 1, Unit.Months), now)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should match if played in last x years', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const now = () => new Date(2023, 0, 1)
  const rule = lastPlayedRule(config(Comparison.Last, 3, Unit.Years), now)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should not match if not played in last x years', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const now = () => new Date(2023, 0, 2)
  const rule = lastPlayedRule(config(Comparison.Last, 3, Unit.Years), now)
  expect(rule.match(track)).toBeFalsy()
})
