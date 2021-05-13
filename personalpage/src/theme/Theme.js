const Themes = {
  colors: {
    main: 'rgba(173, 127, 175, 0.637)',
    dark: 'rgb(0, 0, 0)',
    light: 'rgb(128, 128, 128)',
    highlighted: 'rgb(186, 180, 191)',
  },
  fontSizes: {
    small: '1.5rem', //24
    normal: '2.25rem', //36
    large: '4.5rem', //72
  },
  fontFamilies: {
    primary: {
      fontSource:
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap',
      fontFamily: 'Rubik, sans-serif',
    },
    secondary: {
      fontSource:
        'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap',
      fontFamily: 'Roboto Mono, monospace',
    },
  },
  mediaQueries: {
    small: `only screen and (max-width: 768px)`,
    medium: `only screen and (min-width: 769px)`,
    large: `only screen and (min-width: 1024px)`,
    wide: `only screen and (min-width: 1440px)`,
    ultra: `only screen and (min-width: 1600px)`,
  },
};

export default Themes;
