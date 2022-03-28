/**
 * test
 */

import axios from 'axios';

interface Artist {
  id: number;
  name: string;
  picUrl: string | null;
  alias: Array<string>;
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  trans: string | null;
}

interface Album {
  id: number;
  name: string;
  artist: Artist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
}

interface SearchResult {
  id: number;
  name: string;
  artists: Array<Artist>;
  album: Album;
  duration: number;
  copyrightId: number;
  status: number;
  alias: Array<string>;
  rtype: number;
  ftype: number;
  transNames: Array<string> | null;
  mvid: number;
  fee: number;
  rUrl: string | null;
  mark: number;
}

interface NetEaseReturn {
  result: { songs: Array<SearchResult>; hasMore: boolean; songCount: number };
  code: number;
}

async function main() {
  const kw = 'kiraramagic';
  try {
    const ret = await axios.post(
      'https://neteasemusicapi-delta.vercel.app/search',
      {
        keywords: kw,
      }
    );
    const data: NetEaseReturn = ret.data;

    const songs = data.result.songs;
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      let name = song.name;
      if (song.alias.length > 0) {
        name += `（${song.alias.join(' / ')}）`;
      }

      console.log(
        `${i + 1}: ${song.name} - ${song.artists.map((v) => v.name).join('、')}`
      );
    }
    if (data.result.hasMore) {
      console.log(`还有更多结果，共计${data.result.songCount}个`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();
