import { firestore } from 'lib/firebase';
import { User, UserGroup } from 'lib/types';

const usersCollection = 'users';

export const getUser = (user: User, setUserFn: (user: User) => Promise<void>): () => void => {
  const usersCollectionRef = firestore.collection(usersCollection).doc(user?.uid);
  const cancelSuscription = usersCollectionRef.onSnapshot(async (doc) => {
    const userData = doc.data();
    if (user) {
      await setUserFn({
        ...user,
        vimeoToken: userData?.vimeoToken,
        username: userData?.username,
        names: userData?.names,
        lastNames: userData?.lastNames,
        groupId: userData?.groupId,
      });
    }
  });
  return cancelSuscription;
};

export const getUserGroup = async (user: User): Promise<UserGroup> => {
  const userGroupRef = firestore.collection('userGroups').doc(user?.groupId);
  const userGroupDoc = await userGroupRef.get();
  const userGroup: UserGroup = {
    id: userGroupDoc.id,
    ...userGroupDoc.data() as UserGroup,
  };
  return userGroup;
};

export const checkUsername = async (username: string): Promise<boolean> => {
  const usernameRef = firestore.collection('usernames').doc(username);
  const { exists } = await usernameRef.get();
  return !exists;
};

export const checkUserHasAccess = async (user: User): Promise<boolean> => {
  const groupRef = firestore.collection('userGroups').doc(user?.groupId);
  const userGroupDoc = await groupRef.get();
  const userGroup: UserGroup = userGroupDoc?.data() as UserGroup;
  if (userGroup) {
    const hasAccess = (userGroup.accessBegin.toDate() <= new Date())
      && (userGroup.accessEnd.toDate() >= new Date());
    return hasAccess;
  }
  return false;
};

export const changeUsername = async (user: User, username: string): Promise<void> => {
  const batch = firestore.batch();
  const usernamesCollectionRef = firestore.collection('usernames');
  const userDocRef = firestore.collection('users').doc(user?.uid);

  if (user?.username) {
    const oldUsernameRef = usernamesCollectionRef.doc(user?.username);
    batch.delete(oldUsernameRef);
  }
  const newUsernameRef = usernamesCollectionRef.doc(username);
  batch.set(newUsernameRef, {
    uid: user?.uid,
  });
  batch.set(userDocRef, { username }, { merge: true });
  await batch.commit();
};

export const changeNames = async (user: User, names: string): Promise<void> => {
  const usersCollectionRef = firestore.collection('users');
  const userDocRef = usersCollectionRef.doc(user?.uid);
  await userDocRef.set({ names }, { merge: true });
};

export const changeLastNames = async (user: User, lastNames: string): Promise<void> => {
  const usersCollectionRef = firestore.collection('users');
  const userDocRef = usersCollectionRef.doc(user?.uid);
  await userDocRef.set({ lastNames }, { merge: true });
};
