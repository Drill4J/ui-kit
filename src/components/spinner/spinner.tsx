import React from 'react';
import tw, { styled, css } from 'twin.macro';

export const Spinner = styled.div<{color?: 'blue' | 'white'}>(({ color }) => [
  tw`animate-spin w-4 h-4 rounded-full`,
  css`
    border: solid rgba(255, 255, 255, 0.15) 4px;
    border-top:solid rgb(255, 255, 255) 4px;`,
  color === 'blue' && css`
    border: solid rgba(0, 127, 255, 0.15) 4px;
    border-top:solid rgb(0, 127, 255) 4px;`,
]);
