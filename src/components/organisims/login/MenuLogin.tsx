import { IconMenu } from '@/components/molecules/IconMenu';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useMessage } from '@/hooks/useMessage';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';
import { memo } from 'react';

export const MenuLogin = memo(() => {
  // 重たいデータ
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  //外部からデータを取得
  const fetchData = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        console.log(res);
      });
  };

  type TodoType = {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
  };

  fetchData();

  const { showMessage } = useMessage();
  const onClickButton = () => {
    showMessage({title: 'ログイン', description: 'ログインに成功しました', type: 'success'})
  };

  return (
    <>
      {/* <Toaster /> */}
      <Flex
        alignItems='center'
        justifyContent='center'
        height='100vh'
      >
        <Box
          bg='white'
          w='sm'
          p={4}
          borderRadius='md'
          shadow='md'
        >
          <Heading>
            <Center>
              <HStack gap={4}>
                <IconMenu imgPath='/vite.svg' />
              </HStack>
            </Center>
            <Center fontSize='12px'>
              Not a member yet?
              <Link
                pl={2}
                href='#'
              >
                Sign Up here
              </Link>
            </Center>
            <Stack
              gap={6}
              py={4}
              px={10}
            >
              <Input placeholder='ユーザーID' />
              <Input placeholder='パスワード' />
              <Checkbox>Save Password</Checkbox>
              <Button
                bg='teal.400'
                color='white'
                _hover={{ opacity: 0.8 }}
                onClick={onClickButton}
              >
                ログイン
              </Button>
              <Center fontSize='12px'>
                <Link href='#'>Forget Password?</Link>
              </Center>
            </Stack>
          </Heading>
        </Box>
      </Flex>
    </>
  );
});
