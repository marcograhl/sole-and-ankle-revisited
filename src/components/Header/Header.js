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


  /*
    To fix the fluid nav, so that big nav items force a overflow
      - First I did the overflow on the Mainheader but the scrollbar has no breathing
      room if you do it that way.
      - I put it on the header Element now we have the scollbar below the border and it feels good
        Problem is that the Superheader scrolls as well
          - to fix it I set the SuperHeader to sticky,0left 0right, because we want the default Element
          flow. One more problem was the border top of the Main Header was not filling the whole 
          scroll container. I did a width: min-content to fix the border, now the whole width + the scrollwidth is
          accounted for
          - we need to make min-width to 100%, cause if the nav disapears for mobile nav
          the header will shrink to the min-content size of the icons
  */
  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">MenThatisAwesome</NavLink>
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


    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  overflow: auto;
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  width: min-content; 
  min-width: 100%;
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
