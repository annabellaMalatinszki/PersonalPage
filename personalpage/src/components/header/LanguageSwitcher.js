import React from 'react';
import styled from 'styled-components';

const LanguageDiv = styled.div`
  display: flex;
`;

const LanguageOption = styled.button`
  padding: 0.2rem;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const LanguageSwitcher = () => {
  return (
    <LanguageDiv>
      <LanguageOption>hu.</LanguageOption>
      <LanguageOption>en.</LanguageOption>
    </LanguageDiv>
  );
};

export default LanguageSwitcher;
