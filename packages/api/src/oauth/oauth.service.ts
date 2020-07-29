import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import ClientOAuth2 from 'client-oauth2'
import { EnvironmentVariables } from '../env'

@Injectable()
export class OauthService {
  private client: ClientOAuth2
  constructor(private configService: ConfigService<EnvironmentVariables>) {
    const env = configService.get<EnvironmentVariables['musicbrainz']>('musicbrainz')
    if (!env) throw new Error('missing_musicbrainz_env')
    this.client = new ClientOAuth2({
      clientId: env.clientId,
      clientSecret: env.clientSecret,
      accessTokenUri: env.accessTokenUri,
      authorizationUri: env.authorizationUri,
      redirectUri: env.redirectUrl,
      scopes: ['profile', 'email', 'rating', 'tag', 'collection'],
    })
  }
}
