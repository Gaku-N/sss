import { User } from '@/types/user';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

type Props = {
  children: ReactNode;
};
export const UserContext = createContext({} as {userInfo: User | undefined; setUserInfo: Dispatch<SetStateAction<User | undefined>>});

export const UserProvider: FC<Props> = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState<User>();

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
