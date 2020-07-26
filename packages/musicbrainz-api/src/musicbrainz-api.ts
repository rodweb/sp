import { httpClient } from '@sp/http-client'
import { UserInfo } from './responses/user-info.response'

export const musicbrainzApi = (accessKey: string) => {
  const oauth = httpClient({ baseUrl: 'https://musicbrainz.org/oauth2/', accessKey })

  return {
    async getUserInfo() {
      return oauth.get<UserInfo>('userinfo')
    },
  }
}
