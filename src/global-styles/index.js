import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    src: url('./fonts/OpenSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'OpenSans-Light';
    src: url('./fonts/OpenSans-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'OpenSans-Semibold';
    src: url('./fonts/OpenSans-SemiBold.ttf') format('truetype');
  }
`;
