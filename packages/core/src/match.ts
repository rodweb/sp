import { Track } from './track'
import { Rule } from './rule'
import { trackRule } from './rules/track.rule'
import { artistRule } from './rules/artist.rule'
import { albumRule } from './rules/album.rule'
import { addedAtRule } from './rules/added-at.rule'
import { lastPlayedRule } from './rules/last-played.rule'
import { playCountRule } from './rules/play-count.rule'
import { or } from './rules/or.rule'
import { and } from './rules/and.rule'

enum Rules {
  AddedAt = 'added_at',
  Album = 'album',
  Artist = 'artist',
  LastPlayed = 'last_played',
  PlayCount = 'play_count',
  Track = 'track',

  Or = 'or',
  And = 'and',
}

const rules: Record<Rules, Rule> = {
  [Rules.AddedAt]: addedAtRule,
  [Rules.Album]: albumRule,
  [Rules.Artist]: artistRule,
  [Rules.LastPlayed]: lastPlayedRule,
  [Rules.PlayCount]: playCountRule,
  [Rules.Track]: trackRule,

  [Rules.Or]: or,
  [Rules.And]: and,
}

export const match = (rule: Rules, config: any, track: Track) => rules[rule](config).match(track)
