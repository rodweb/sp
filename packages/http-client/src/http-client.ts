import fetch from 'node-fetch'
import querystring from 'querystring'

type Opts = { baseUrl: string; accessKey?: string; userAgent?: string }
export interface HttpClient {
  (opts: Opts): {
    get<T>(path: string, opts?: Partial<{ qs: any }>): Promise<T>
  }
}

export const httpClient: HttpClient = ({ baseUrl, accessKey }) => ({
  async get(path, { qs } = {}) {
    const url = buildUrl({ baseUrl, path, qs })
    const headers = buildHeaders({ accessKey })
    const response = await fetch(url, { headers })
    return await response.json()
  },
})

type Url = { baseUrl: string; path: string; qs: any }
const buildUrl = ({ baseUrl, path, qs }: Url) => {
  let url = baseUrl.concat(path)
  if (qs) url += querystring.stringify(qs)
  return url
}

const buildHeaders = ({ accessKey, userAgent }: Partial<Opts>) => ({
  ...(accessKey && { Authorization: `Bearer ${accessKey}` }),
  ...(userAgent && { 'User-Agent': userAgent }),
})
