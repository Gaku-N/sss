import { FC, memo, useContext, useEffect } from 'react';
import {
  Center,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { UserCard } from './UserCard';
import { useAllUsers } from '../../../hooks/useAllUsers';
import { Dialog } from '@/components/molecules/Dialog';
import { UserContext} from '../../../providers/UserProvider';

export const UserList: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  users.map((user) => console.log(user));
  useEffect(() => getUsers, []);

  const { userInfo, setUserInfo } = useContext(UserContext)
  console.log('ユーザーリスト', userInfo);
  // setUserInfo({id:998, name: 'aaaa'})
  return (
    <>
    <Dialog />
      {loading ? (
        <Center h='100vh '>
          <Spinner />
        </Center>
      ) : (
        <Flex
          gap={2}
          wrap='wrap'
          p={{ base: 4, md: 10 }}
          justifyContent='center'
        >
          {users.map((user) => (
            <UserCard
              key={user.id}
              imageUrl='https://pbs.twimg.com/card_img/1852598215310544896/4apmetPc?format=jpg&name=medium'
              userName={user.username}
              fullName={user.name}
            />
          ))}
        </Flex>
      )}
    </>
  );
});
