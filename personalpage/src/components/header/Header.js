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
  return (
    <StyledHeader>
      <HeaderInner>
        <Logo />
        <LanguageSwitcher />
      </HeaderInner>
      <ScrollIndicator />
    </StyledHeader>
  );
};

export default Header;
