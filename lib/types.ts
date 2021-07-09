import firebase from 'firebase';

export type User = ({
  vimeoToken?: string,
  username?: string,
  names?: string,
  lastNames?: string,
} & firebase.User) | null;
