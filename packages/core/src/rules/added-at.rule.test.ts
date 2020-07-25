import { mock } from '../mock'
import { Track } from '../track'
import { addedAtRule } from './added-at.rule'
import { Comparison, Unit } from './generic/date.matcher'

const d = {
  januaryFirst: new Date(2020, 0, 1),
  januaryThird: new Date(2020, 0, 3),
}

const config = (comparison: Comparison, amount: number, unit: Unit) => ({
  comparison,
  amount,
  unit,
})

test('Last: should match if played in last x days', () => {
  const track = mock<Track>({ addedAt: d.januaryFirst })
  const now = () => d.januaryThird
  const rule = addedAtRule(config(Comparison.Last, 2, Unit.Days), now)
  expect(rule.match(track)).toBeTruthy()
})

test('Last: should not match if played in last x days', () => {
  const track = mock<Track>({ addedAt: d.januaryFirst })
  const now = () => d.januaryThird
  const rule = addedAtRule(config(Comparison.Last, 1, Unit.Days), now)
  expect(rule.match(track)).toBeFalsy()
})
