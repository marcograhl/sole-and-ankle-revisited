/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  const isCurrent = true;

  // if (!isOpen) {
  //   return null
  // }

  /*
    He builds on top of the Dialogdivs maybe this is it
    aria-label="Menu" on the Content, for Screenreader
    The Close button make it bigger via padding
  */

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton style={{ alignSelf: 'flex-end' }} onClick={onDismiss}>
          <Icon id="close" size='24' />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </CloseButton>
        <nav>
          <Link aria-current='page'
            href="/sale" >Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  padding: 16px;
`

const Overlay = styled(DialogOverlay)`
position: fixed;
inset: 0;
background: hsla(0deg 0% 20% / .8);
`

const Content = styled(DialogContent)`
display: flex;
flex-direction: column;
position: absolute;
justify-content: space-between;
top: 0;
right: 0;
bottom: 0;
z-index: 1;
width: 300px;
background-color: white;
padding: 32px;
padding-top: 10px;
 @media (${QUERIES.tabletAndSmaller}){
 padding-right: 6px;
}
`

const Link = styled.a`
  --currentColor: ${COLORS.gray[900]};
  display: block;
  line-height: 2;
  text-decoration: none;
  color: var(--currentColor);
  font-size: ${16 / 16}rem;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium}
    &[aria-current='page']{
      --currentColor: ${COLORS.primary};
  }
`
const Footer = styled.footer`
  ${Link} {
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.regular};
  
}
`

export default MobileMenu;
