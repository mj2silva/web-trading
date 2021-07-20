import { useEffect, useState } from 'react';
import { auth } from 'lib/firebase';
import { Module, User, UserGroup } from 'lib/types';
import { getUser, getUserGroup } from 'lib/repository/usersRepository';
import { getUserModules } from 'lib/repository/modulesRepository';

type UseUserReturn = {
  user: User,
  userModules?: Module[],
  userGroup?: UserGroup,
  error?: string,
  isLoading: boolean,
  signIn: (email: string, password: string) => Promise<void>,
  signOut: () => Promise<void>,
};

const useUser = (): UseUserReturn => {
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [userModules, setUserModules] = useState<Module[]>();
  const [userGroup, setUserGroup] = useState<UserGroup>();

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
    auth.onAuthStateChanged(async (newUser) => {
      let cancelSub;
      setIsLoading(true);
      if (newUser) {
        const setUserFn = async (nuser: User): Promise<void> => {
          const ugroup = await getUserGroup(nuser);
          const modules = await getUserModules(nuser, ugroup);
          setUser(nuser);
          setUserModules(modules);
          setUserGroup(ugroup);
          setIsLoading(false);
        };
        cancelSub = getUser(newUser, setUserFn);
      } else {
        setUser(null);
        setIsLoading(false);
      }
      return cancelSub;
    });
  }, []);

  return {
    signIn,
    signOut,
    isLoading,
    user,
    error,
    userModules,
    userGroup,
  };
};

export default useUser;
