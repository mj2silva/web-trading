import {
  createContext, FC, ReactNode,
} from 'react';
import { User } from 'lib/types';
import useUser from 'lib/hooks/useUser';

type ContextProps = {
  user?: User,
  signIn?: (email: string, password: string) => Promise<void>,
  signOut?: () => Promise<void>,
  error?: string,
  isLoading: boolean,
}

export const UserContext = createContext<ContextProps>({
  user: null,
  signIn: undefined,
  signOut: undefined,
  isLoading: false,
  error: undefined,
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
  } = useUser();
  return (
    <UserContext.Provider
      value={{
        user, signIn, signOut, isLoading, error,
      }}
    >
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
