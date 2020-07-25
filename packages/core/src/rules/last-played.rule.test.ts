import { mock } from '../mock'
import { Track } from '../track'
import { lastPlayedRule } from './last-played.rule'
import { Comparison, Reference } from './generic/generic-date.rule'

const d = {
  januaryFirst: new Date(2020, 0, 1),
  januaryThird: new Date(2020, 0, 3),
  januaryFourteenth: new Date(2020, 0, 14),
  februaryFirst: new Date(2020, 1, 1),
  aprilFirst: new Date(2020, 3, 1),
}

test('Last: should match if played in last x days', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const getCurrentDate = () => d.januaryThird
  const rule = lastPlayedRule(Comparison.Last, 2, Reference.Days, getCurrentDate)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should match if played in last x weeks', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const getCurrentDate = () => d.januaryFourteenth
  const rule = lastPlayedRule(Comparison.Last, 2, Reference.Weeks, getCurrentDate)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should match if played in last x months', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const getCurrentDate = () => d.februaryFirst
  const rule = lastPlayedRule(Comparison.Last, 1, Reference.Months, getCurrentDate)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should match if played in last x years', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const getCurrentDate = () => new Date(2023, 0, 1)
  const rule = lastPlayedRule(Comparison.Last, 3, Reference.Years, getCurrentDate)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should not match if not played in last x years', () => {
  const track = mock<Track>({ lastPlayed: d.januaryFirst })
  const getCurrentDate = () => new Date(2023, 0, 2)
  const rule = lastPlayedRule(Comparison.Last, 3, Reference.Years, getCurrentDate)
  expect(rule.match(track)).toBeFalsy()
})
