import { forwardRef } from 'react';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  textarea?: boolean;
  rows?: number;
  error?: string;
  transparent?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-primary-800`;
    const ring = error ? `ring-1 ring-secondary` : 'border-0';
    const cn = `w-full py-2 px-4 rounded-8 placeholder-muted text-white text-primary-300 focus:shadow-accent select-none ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea
        ref={ref as any}
        className={cn}
        {...(props as any)}
        data-testid='textarea'
      />
    ) : (
      <input ref={ref} className={cn} {...props} data-testid='input ' />
    );
  }
);

Input.displayName = 'Input';
