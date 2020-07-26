import nock = require('nock')
import { musicbrainzApi } from './musicbrainz-api'
import { UserInfo } from './responses/user-info.response'

const BASE_URL = 'https://musicbrainz.org/ws/2/'
const BASE_OAUTH_URL = 'https://musicbrainz.org/oauth2/'

test('getUserInfo: should return user info', async () => {
  const accessKey = 'any'
  const api = musicbrainzApi({
    accessKey,
    appName: 'app',
    appVersion: '1.0',
    appContactInfo: 'My Name <my@email.com>',
  })
  const mockedResponse: UserInfo = {
    profile: '',
    email: 'some@email.com',
    email_verified: true,
    metabrainz_user_id: 1,
    sub: '',
    zoneinfo: '',
  }
  nock(BASE_OAUTH_URL).get('/userinfo').reply(200, mockedResponse)
  const response = await api.getUserInfo()
  await expect(response).toEqual(mockedResponse)
})
