import React from 'react';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightest};
  height: 3px;
  position: fixed;
  top: 4.5rem;
  left: 0;
  width: 100%;
  z-index: 3;
`;

const IndicatorBar = styled.div`
  width: ${({ barWidth }) => barWidth};
  height: 3px;
  background-color: ${({ theme }) => theme.colors.main};
`;

const ScrollIndicator = ({ scrolled }) => {
  return (
    <IndicatorContainer>
      <IndicatorBar barWidth={scrolled}></IndicatorBar>
    </IndicatorContainer>
  );
};

export default ScrollIndicator;
