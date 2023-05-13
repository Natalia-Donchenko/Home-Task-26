export interface IUser {
  id: number
  name: string
};

export interface IAlbum {
  userId: number
  id: number
  title: string
};

export interface IPhoto {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
};

export interface IParams {
  [key: string]: string | undefined;
};