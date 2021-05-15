const sizes = {
  '2': 'h-3 w-3',
  '4': 'h-4 w-4',
};

export interface SpinnerProps {
  className?: string;
  tooltip?: string;
}

export const Spinner = ({ className, ...props }: any) => {
  return (
    <span {...props} className='p-2'>
      <svg
        className={`animate-spin text-primary-300 ${sizes['2']} ${className}`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        {...props}
      >
        <path
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </span>
  );
};
