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
  slug?: string,
};

export type Module = {
  id?: string,
  name: string,
  classes?: ModuleClass[],
  slug?: string,
};

export type CourseBenefits = {
  id?: string,
  name: string,
  description?:string,
};

export type Faq = {
  id?: string,
  question: string,
  answer?:string,
}

export type PreRegisteredUser = {
  id?: string,
  fullName: string,
  email: string,
  country: string,
}
