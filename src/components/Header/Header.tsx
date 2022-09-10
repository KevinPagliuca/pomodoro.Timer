import { NavLink } from 'react-router-dom';

import { Timer, Scroll } from 'phosphor-react';

import Logo from '../../assets/logo.svg';
import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />

      <S.Navigation>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </S.Navigation>
    </S.HeaderContainer>
  );
};
