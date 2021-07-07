import { useEffect, useState } from 'react';
import { auth } from 'lib/firebase';
import { User } from 'lib/types';

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
      setUser(newUser);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log({ isLoading });
  }, [isLoading]);
  return {
    signIn,
    signOut,
    isLoading,
    user,
    error,
  };
};

export default useUser;
