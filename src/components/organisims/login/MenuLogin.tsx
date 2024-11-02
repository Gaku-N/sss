import { IconMenu } from "@/components/molecules/iconMenu";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import { Box, Center, Flex, Heading, HStack, Input, Link, Stack, Text } from "@chakra-ui/react"
import axios from "axios";
import { memo, useState } from "react";

export const MenuLogin = memo(() => {

  const [count, incCount] = useState(0);
  // 重たいデータ
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  //外部からデータを取得
  const fetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      console.log(res);
    })
  }

  type TodoType = {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
  }
 
  fetchData();


  const onClickButton = () => {
    console.log('ボタンが押された')
    incCount(count + 1);
  }

  return (
    <Flex alignItems='center' justifyContent='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading>
            <Center>
          <HStack gap={4}>
              <IconMenu imgPath='/vite.svg' />
          </HStack>
            </Center>
          <Center fontSize='12px'>Not a member yet?
            <Link pl={2} href="#">Sign Up here</Link>
          </Center>
          <Stack gap={6} py={4} px={10}>
            <Input placeholder="ユーザーID" />
            <Input placeholder="パスワード" />
            <Checkbox>Save Password</Checkbox>
            <Button 
              bg='teal.400'
              color='white'
              _hover={ {opacity: 0.8}}
              onClick={onClickButton}
            >ログイン</Button>
            <Center fontSize='12px'>
              <Link href="#">Forget Password?</Link>
            </Center>
            カウント値：{count}
          </Stack>
        </Heading>
      </Box>
    </Flex>

  )
})