import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('${(props) => props.theme.fontFamilies.primary.fontSource}');
  @import url('${(props) => props.theme.fontFamilies.secondary.fontSource}');

html {
    height: 100%;
}

body {
    font-family: ${(props) => props.theme.fontFamilies.primary.fontFamily};
}

* {
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;
