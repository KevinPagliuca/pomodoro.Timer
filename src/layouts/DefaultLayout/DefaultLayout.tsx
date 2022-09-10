import { Outlet } from 'react-router-dom';

import { Header } from '../../components';
import * as S from './DefaultLayout.styles';

export const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
};
