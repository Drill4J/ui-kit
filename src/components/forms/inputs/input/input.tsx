import tw, { styled, css } from 'twin.macro';

export const Input = styled.input<{disabled?: boolean; error?: boolean; touched?: boolean}>`
  ${tw`font-regular`};
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  line-height: 22px;
  border: 1px solid #a4acb3;
  border-radius: 4px;
  background-color: #ffffff;
  color: #1b191b;
  font-size: 14px;
  outline: none;

  &:focus {
    border: 1px solid #1b191b;
  }

  &::placeholder {
    color: #687481;
  }

  ${({
    disabled, error, touched,
  }) => [
    disabled && css`
      border: 1px solid #e3e6e8;
      background-color: #f8f9fb;
      color: #687481;
    `,
    touched && error && css`border: 1px solid #ee0000`,
  ]}
`;
