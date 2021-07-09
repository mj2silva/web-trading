import { firestore } from 'lib/firebase';
import { User } from 'lib/types';

const usersCollection = 'users';

export const getUser = (user: User, setUserFn: (user: User) => void): () => void => {
  const usersCollectionRef = firestore.collection(usersCollection).doc(user?.uid);
  const cancelSuscription = usersCollectionRef.onSnapshot((doc) => {
    const userData = doc.data();
    if (user) {
      setUserFn({
        ...user,
        vimeoToken: userData?.vimeoToken,
        username: userData?.username,
        names: userData?.names,
        lastNames: userData?.lastNames,
      });
    }
  });
  return cancelSuscription;
};

export const checkUsername = async (username: string): Promise<boolean> => {
  const usernameRef = firestore.collection('usernames').doc(username);
  const { exists } = await usernameRef.get();
  return exists;
};
