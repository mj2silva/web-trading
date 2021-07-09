import { useEffect, useState } from 'react';
import { auth } from 'lib/firebase';
import { User } from 'lib/types';
import { getUser } from 'lib/repository/usersRepository';

type UseUserReturn = {
  user: User,
  error?: string,
  isLoading: boolean,
  signIn: (email: string, password: string) => Promise<void>,
  signOut: () => Promise<void>,
};

const useUser = (): UseUserReturn => {
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const signIn = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const signOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await auth.signOut();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      let cancelSub;
      if (newUser) {
        cancelSub = getUser(newUser, setUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
      return cancelSub;
    });
  }, []);

  return {
    signIn,
    signOut,
    isLoading,
    user,
    error,
  };
};

export default useUser;
