import { SpotifyApi } from './spotify-api'

test('it should return an instance', () => {
  const api = new SpotifyApi()
  expect(api).toBeInstanceOf(SpotifyApi)
})
