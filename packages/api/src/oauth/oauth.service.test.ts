import { OauthService } from './oauth.service'

describe('OauthService', () => {
  let service: OauthService

  beforeEach(async () => {
    service = new OauthService({ get: () => ({}) } as any)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
