import { mock } from '../mock'
import { Track } from '../track'
import { addedAtRule } from './added-at.rule'
import { Comparison, Reference } from './generic/generic-date.rule'

const d = {
  januaryFirst: new Date(2020, 0, 1),
  januaryThird: new Date(2020, 0, 3),
}

test('Last: should match if played in last x days', () => {
  const track = mock<Track>({ addedAt: d.januaryFirst })
  const getCurrentDate = () => d.januaryThird
  const rule = addedAtRule(Comparison.Last, 2, Reference.Days, getCurrentDate)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should not match if played in last x days', () => {
  const track = mock<Track>({ addedAt: d.januaryFirst })
  const getCurrentDate = () => d.januaryThird
  const rule = addedAtRule(Comparison.Last, 1, Reference.Days, getCurrentDate)
  expect(rule.match(track)).toBeFalsy()
})
