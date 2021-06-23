import {
  createContext, FC, ReactNode, useState,
} from 'react';

type User = {
  email: string,
  name?: string,
  pictureUrl?: string,
} | null;

type ContextProps = {
  user?: User,
  signIn?: (email: string, password: string) => Promise<void> | void,
  signOut?: () => Promise<void> | void,
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
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const signIn = (email: string, password: string): void => {
    setIsLoading(true);
    if (password === '123456') {
      setUser({ email, name: email.split('@')[0], pictureUrl: '/img/profesor.png' });
      setError(undefined);
    } else {
      setUser(null);
      setError('Usuario y/o contraseña inválidos');
    }
    setIsLoading(false);
  };
  const signOut = (): void => {
    setUser(null);
  };
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
