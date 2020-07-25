import { LastfmApi } from './lastfm-api'

test('it should return an instance', () => {
  const api = new LastfmApi()
  expect(api).toBeInstanceOf(LastfmApi)
})
