import React from 'react';
import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side />
        <MobileActions>
          <ShoppingButton>
            <Icon id='shopping-bag' size='24' />
            <VisuallyHidden>shopping cart</VisuallyHidden>
          </ShoppingButton>
          <UnstyledButton>
            <Icon id='search' size='24' />
            <VisuallyHidden>shopping cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={()=>setShowMobileMenu(true)}>
            <Icon id='menu' size='24' />
            <VisuallyHidden>shopping cart</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
        />
      </MainHeader>


    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: 4px solid ${COLORS.gray[900]};
  @media(${QUERIES.laptopAndSmaller}) {
    align-itmes: center;
  }
  @media(${QUERIES.tabletAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const MobileActions = styled.div`
display: none;
gap: 36px;
@media(${QUERIES.laptopAndSmaller}) {
  display: flex;
};
@media(${QUERIES.tabletAndSmaller}) {
  gap: 20px;
};

`
const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
@media(${ QUERIES.laptopAndSmaller }) {
  display: none;
}
`;

const ShoppingButton = styled(UnstyledButton)`
transform: translateX(-2px);
`



const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
