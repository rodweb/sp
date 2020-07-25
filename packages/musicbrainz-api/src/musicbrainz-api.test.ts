import { MusicbrainzApi } from './musicbrainz-api'

test('it should return an instance', () => {
  const api = new MusicbrainzApi()
  expect(api).toBeInstanceOf(MusicbrainzApi)
})
