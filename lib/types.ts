import firebase from 'firebase';

export type User = ({
  vimeoToken?: string,
  username?: string,
  names?: string,
  lastNames?: string,
} & firebase.User) | null;

export type ModuleClass = {
  id?: string,
  name: string,
  order: number,
  type?: string,
  videoUrl?: string,
};

export type Module = {
  id?: string,
  name: string,
  classes?: ModuleClass[],
};
