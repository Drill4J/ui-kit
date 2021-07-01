import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html,
  body,
  #root {
    ${tw`w-full h-full m-0 p-0 box-border text-monochrome-black`}
  }

  body {
    ${tw`font-regular`};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h2 {
    ${tw`font-light text-monochrome-default text-18 leading-24`};
  }

  b {
    ${tw`font-bold`};
  }

  button:focus {
    outline: none !important;
  }

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

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
