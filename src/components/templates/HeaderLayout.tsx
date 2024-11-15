import { FC, ReactNode } from 'react';
import { Header } from '../organisims/layout/header';
import { MenuDrawer } from '../organisims/layout/MenuDrawer';

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
