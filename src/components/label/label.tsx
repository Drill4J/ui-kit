import React from 'react';
import 'twin.macro';
import { Icons } from '../icon';

interface Props {
  children: React.ReactNode,
  deleteHandler?: () => void,
  [key: string]: any;
}

export const Label = ({ children, deleteHandler, ...rest }: Props) => (
  <div tw="flex gap-1 items-center w-min px-2 bg-monochrome-medium-tint rounded-sm" {...rest}>
    <span tw="truncate leading-24 text-14 text-monochrome-default">{children}</span>
    {deleteHandler && (
      <div tw="flex items-center justify-center h-4 w-4 rounded-full hover:bg-monochrome-dark-tint" onClick={deleteHandler}>
        <Icons.Close width={8} height={8} />
      </div>
    )}
  </div>
);
