import { mock } from '../mock'
import { Track } from '../track'
import { trackRule } from './track.rule'
import { Comparison } from './generic/string.matcher'

const config = (comparison: Comparison, text: string) => ({ comparison, text })

test('EqualTo: should match when equal', () => {
  const track = mock<Track>({ name: 'In the End' })
  const rule = trackRule(config(Comparison.EqualTo, 'In the End'))
  expect(rule.match(track)).toBeTruthy()
})

test('EqualTo: should not match when different', () => {
  const track = mock<Track>({ name: 'Toxic' })
  const rule = trackRule(config(Comparison.EqualTo, 'Overprotected'))
  expect(rule.match(track)).toBeFalsy()
})
