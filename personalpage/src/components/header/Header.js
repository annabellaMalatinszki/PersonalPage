import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import ScrollIndicator from './ScrollIndicator';

const StyledHeader = styled.header`
  position: sticky;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.lightest};
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries.small} {
    padding: 1rem 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 1rem 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 1rem 4rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(0);

  const progressScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const winHeightPx = scrollHeight - clientHeight;

    const scrollPercent = `${(scrollPx / winHeightPx) * 100}%`;

    setScrolled(scrollPercent);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', progressScroll);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', watchScroll);
    };
  });

  return (
    <StyledHeader>
      <HeaderInner>
        <Logo />
        <LanguageSwitcher />
      </HeaderInner>
      <ScrollIndicator scrolled={scrolled} />
    </StyledHeader>
  );
};

export default Header;
