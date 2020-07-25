import { Track } from './track'

export interface Rule {
  match(track: Track): boolean
}
