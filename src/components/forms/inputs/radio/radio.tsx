import 'twin.macro';

export const Radio = ({ field, ...props }: any) => (
  <input
    type="radio"
    tw="relative
      appearance-none
      min-w-[16px]
      max-w-[16px]
      min-h-[16px]
      max-h-[16px]
      bg-transparent
      border
      rounded-full
      border-current-color
      cursor-pointer
      checked:after:(content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-current-color)
     "
    {...field}
    {...props}
  />
);
