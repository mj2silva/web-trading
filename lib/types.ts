import firebase from 'firebase';

export type User = ({
  vimeoToken?: string,
  username?: string,
  names?: string,
  lastNames?: string,
  groupName?: string,
  groupId?: string,
} & firebase.User) | null;

export type UserGroup = ({
  id?: string,
  accessBegin: firebase.firestore.Timestamp,
  accessEnd: firebase.firestore.Timestamp,
  higherModuleOrder: number,
  name: string,
});

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
  order: number,
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
