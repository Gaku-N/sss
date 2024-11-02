import { FC, memo } from 'react';
import { Box, Flex, HStack, Image } from '@chakra-ui/react';

type Path = {
  imgPath: string;
  round?: number;
  backgroundColor?: string;
};
export const IconMenu: FC<Path> = memo((props) => {
  const { imgPath, round, backgroundColor } = props;
  return (
    <HStack gap={2}>
      <Box
        bg={backgroundColor}
        w={10}
        h={10}
        borderRadius={round}
      >
        <Flex
          alignItems='center'
          justifyContent='center'
          height={10}
        >
          <Image src={imgPath} />
        </Flex>
      </Box>
      ユーザー管理アプリ
    </HStack>
  );
});
