import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

export const Header: FC = () => {
  let navigate = useNavigate();
  const onClickLogin = () => {
    navigate('/');
  };
  const onClickList = () => {
    navigate('/userlist');
  };
  return (
    <Flex
      as='nav'
      bg='teal.500'
      color='gray.50'
      align='center'
      justify='space-between'
      padding={{ base: 3, md: 5 }}
    >
      <Heading
        as='h1'
        fontSize={{ base: 'md', md: 'lg' }}
      >
        <Button onClick={onClickLogin}>ログイン</Button>
      </Heading>
      {/* <Box>
        <Button onClick={onClickLogin}>ログイン</Button>
      </Box> */}
      <Box>
        <Button onClick={onClickList}>一覧</Button>
      </Box>
    </Flex>
  );
};
