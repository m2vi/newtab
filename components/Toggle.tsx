export interface toggleProps extends React.HTMLAttributes<HTMLInputElement> {
  // is: 'brave' | 'discord';
  disabled?: boolean;
  checked?: boolean;
  size?: 'large' | 'small';
}

export const Toggle = ({
  disabled,
  checked,
  onChange,
  size,
  ...props
}: toggleProps) => {
  return (
    <label className='brave__switch'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <div>
        <span></span>
      </div>
    </label>
  );
};

export const BraveToggle = ({
  disabled,
  checked,
  onChange,
  size,
  ...props
}: toggleProps) => {
  return (
    <label className='brave__switch'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <div>
        <span></span>
      </div>
    </label>
  );
};

export const DiscordToggle = ({
  disabled,
  checked,
  size,
  ...props
}: toggleProps) => {
  return null;
};
