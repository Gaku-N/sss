import { FC, ReactNode } from 'react';
import { Header } from '../organisims/layout/header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
