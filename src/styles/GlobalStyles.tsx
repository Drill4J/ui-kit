import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import '../index.css';

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

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus
  input:-webkit-autofill, 
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #e3e6e8;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: -webkit-linear-gradient(transparent);  
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
