import { Track } from './track'

export interface Matcher {
  match(track: Track): boolean
}

export interface Rule<TConfig = any, TInjectable = any> {
  (config: TConfig, injectable?: TInjectable): Matcher
}
