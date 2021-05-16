import { forwardRef } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

export interface CloseProps extends React.ComponentPropsWithoutRef<'span'> {
  transparent?: boolean;
  tooltip?: string;
  flow?: string;
}

export const CloseBtn = forwardRef<HTMLInputElement, CloseProps>(
  ({ className, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-primary-700`;
    const ring = `ring-1 ring-primary-400`;
    const cn = `w-full rounded-round focus:shadow-1 select-none ${bg} ${ring} ${className} `;

    return (
      <span
        ref={ref}
        className={`${
          bg + ring + cn
        } flex justify-center items-center h-d7 w-d7 cursor-pointer`}
        {...props}
      >
        <IoCloseOutline className='h-5 w-5 text-primary-300 pointer-events-none' />
      </span>
    );
  }
);
