export interface Song {
    id: string;
    title: string;
    album?: string;
    artist: string;
    videoLink: string;
    isDKM: boolean;
}

export interface SongCompleted {
    id: string;
    totalPoints: number;
}
  