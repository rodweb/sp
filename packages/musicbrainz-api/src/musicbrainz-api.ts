import { httpClient } from '@sp/http-client'
import { UserInfo } from './responses/user-info.response'

interface Config {
  accessKey: string
  appName: string
  appVersion: string
  appContactInfo: string
}
export const musicbrainzApi = ({ accessKey, appName, appVersion, appContactInfo }: Config) => {
  const userAgent = `${appName}-${appVersion} ${appContactInfo}`
  const oauth = httpClient({ baseUrl: 'https://musicbrainz.org/oauth2/', accessKey, userAgent })

  return {
    async getUserInfo() {
      return oauth.get<UserInfo>('userinfo')
    },
  }
}
