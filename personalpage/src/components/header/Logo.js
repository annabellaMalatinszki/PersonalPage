import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.colors.mainFuller};
  font-family: ${({ theme }) => theme.fontFamilies.secondary.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-weight: 200;
`;

const Logo = () => {
  return <StyledLogo>Bella</StyledLogo>;
};

export default Logo;
