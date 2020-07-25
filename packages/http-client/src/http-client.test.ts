import { HttpClient } from './http-client'

test('it should return an instance', () => {
  const api = new HttpClient()
  expect(api).toBeInstanceOf(HttpClient)
})
