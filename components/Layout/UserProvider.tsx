import {
  createContext, FC, ReactNode,
} from 'react';
import { Module, User, UserGroup } from 'lib/types';
import useUser from 'lib/hooks/useUser';

type ContextProps = {
  user?: User,
  signIn?: (email: string, password: string) => Promise<void>,
  signOut?: () => Promise<void>,
  error?: string,
  isLoading: boolean,
  userGroup?: UserGroup,
  userModules?: Module[],
}

export const UserContext = createContext<ContextProps>({
  user: null,
  signIn: undefined,
  signOut: undefined,
  isLoading: false,
  error: undefined,
  userGroup: undefined,
  userModules: undefined,
});

type Props = {
  children: ReactNode,
}

const UserProvider: FC<Props> = (props: Props) => {
  const { children } = props;
  const {
    user,
    signIn,
    signOut,
    isLoading,
    error,
    userGroup,
    userModules,
  } = useUser();
  return (
    <UserContext.Provider
      value={{
        user, signIn, signOut, isLoading, error, userGroup, userModules,
      }}
    >
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
