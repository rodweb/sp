import dotenv from 'dotenv'
dotenv.config()

const asString = (key: string): string => process.env[key] || ''
const asNumber = (key: string): number => parseInt(asString(key), 10) || 0

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const environmentVariables = {
  api: {
    port: asNumber('API_PORT'),
  },
  db: {
    conn: asString('DB_CONN'),
  },
  mq: {
    port: asNumber('MQ_PORT'),
    queues: {
      recentTrackFetcher: asString('MQ_RECENT_TRACK_FETCHER'),
    },
  },
  lastfm: {
    apiUrl: asString('LASTFM_API_URL'),
    apiKey: asString('LASTFM_API_KEY'),
    user: asString('LASTFM_USER'),
  },
  spotify: {
    apiUrl: asString('SPOTIFY_API_URL'),
    clientId: asString('SPOTIFY_CLIENT_ID'),
    clientSecret: asString('SPOTIFY_CLIENT_SECRET'),
    accessTokenUri: asString('SPOTIFY_ACCESS_TOKEN_URI'),
    authorizationUri: asString('SPOTIFY_AUTHORIZATION_URI'),
    redirectUri: asString('SPOTIFY_REDIRECT_URI'),
  },
  musicbrainz: {
    clientId: asString('MUSICBRAINZ_CLIENT_ID'),
    clientSecret: asString('MUSICBRAINZ_CLIENT_SECRET'),
    accessTokenUri: asString('MUSICBRAINZ_ACCESS_TOKEN_URI'),
    authorizationUri: asString('MUSICBRAINZ_AUTHORIZATION_URI'),
    redirectUrl: asString('MUSICBRAINZ_REDIRECT_URL'),
  },
}
export type EnvironmentVariables = typeof environmentVariables
export default environmentVariables
